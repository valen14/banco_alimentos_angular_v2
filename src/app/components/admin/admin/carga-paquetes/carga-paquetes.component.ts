import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoApi, PaqueteApi, BultoProductoPaqueteApi, Producto, Paquete, TipoDeAlimentoApi, TipoDeAlimento, BultoProductoPaquete, BultoApi, Bulto } from 'src/app/service/lbservice';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carga-paquetes',
  templateUrl: './carga-paquetes.component.html',
  styleUrls: ['./carga-paquetes.component.css']
})
export class CargaPaquetesComponent implements OnInit {

  idBulto: Number
  productos: Producto[]
  tiposAlimentos: TipoDeAlimento[]
  contenidoPaquete: any[]
  paquetes: any[]
  crearBPPForm: FormGroup
  crearPaqueteForm: FormGroup
  crearProductoForm: FormGroup

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private productoService: ProductoApi,
    private paqueteService: PaqueteApi,
    private bppService: BultoProductoPaqueteApi,
    private tipoAlimentoService: TipoDeAlimentoApi,
    private bultoService: BultoApi) {
    this.crearBPPForm = new FormGroup({
      producto: new FormControl(),
      cantidad: new FormControl(),
      fechaVencimiento: new FormControl(),
    })
    this.crearPaqueteForm = new FormGroup({
      codigo: new FormControl(),
      peso: new FormControl(),
      tipoAlimento: new FormControl(),
      ubicacion: new FormControl()
    })
    this.crearProductoForm = new FormGroup({
      nombre: new FormControl(),
      peso: new FormControl(),
      codigoBarra: new FormControl(),
    })
  }

  ngOnInit() {
    this.idBulto = this.ar.snapshot.params['id']
    this.paquetes = []
    this.productoService.find<Producto>().subscribe((productos) => {
      this.productos = productos
    })
    this.tipoAlimentoService.find<TipoDeAlimento>().subscribe((tipos) => this.tiposAlimentos = tipos)
    this.contenidoPaquete = []
    this.paqueteService.find<Paquete>({
      include: {
        relation: 'bultoProductoPaquetes',
        scope: {
          where: {
            bultoId: this.idBulto
          }
        }
      }
    }).subscribe((paquetes) => {
      paquetes.forEach((paq) => {
        if (paq.bultoProductoPaquetes.length !== 0) {
          this.paquetes.push(paq)
        }
      })
    })
  }

  getFormCrearBPPControls() {
    return this.crearBPPForm.controls
  }

  getFormCrearPaqueteControls() {
    return this.crearPaqueteForm.controls
  }

  getFormCrearProductoControls() {
    return this.crearProductoForm.controls
  }

  onSubmitCrearBPP() {
    const bpp = {
      productoId: this.getFormCrearBPPControls().producto.value,
      productoNombre: this.productos.find((p) => { return p.id == this.getFormCrearBPPControls().producto.value }).nombre,
      fecha_vencimiento_minima: this.getFormCrearBPPControls().fechaVencimiento.value,
      cantidad: this.getFormCrearBPPControls().cantidad.value,
      bultoId: this.idBulto
    }
    this.contenidoPaquete.push(bpp)
    this.crearBPPForm.reset()
  }

  onSubmitCrearPaquete() {
    var fechas = this.contenidoPaquete.filter((p) => p.fecha_vencimiento_minima)
    var minDate = new Date(Math.min.apply(null, fechas))
    const paquete = {
      codigo: this.getFormCrearPaqueteControls().codigo.value,
      fecha_vencimiento: Date.now().toString(),
      ubicacion: this.getFormCrearPaqueteControls().ubicacion.value,
      peso: this.getFormCrearPaqueteControls().peso.value,
      tipoDeAlimentoId: this.getFormCrearPaqueteControls().tipoAlimento.value
    }
    console.log(paquete)
    console.log(this.contenidoPaquete)
    this.paqueteService.create(paquete).subscribe((paq) => {
      this.paquetes.push(paq)
      this.contenidoPaquete.forEach((bpp) => {
        this.bppService.create({ ...bpp, paqueteId: paq["id"], productoNombre: undefined }).subscribe((a) => console.log(a))
      })
      this.contenidoPaquete = []
    })
    this.crearPaqueteForm.reset()
  }

  terminarCarga() {
    this.bultoService.findById<Bulto>(this.idBulto).subscribe((b) => {
      this.bultoService.updateAttributes(this.idBulto, {
        ...b,
        estado: 'cargado',
        revisado: true
      }).subscribe((b) => this.router.navigateByUrl('/admin'))
    })
  }

  onSubmitCrearProducto() {
    const productoNuevo = {
      nombre: this.getFormCrearProductoControls().nombre.value,
      peso: this.getFormCrearProductoControls().peso.value,
      codigo_barra: this.getFormCrearProductoControls().codigoBarra.value
    }
    this.productoService.create(productoNuevo).subscribe((prod) => {
      console.log(prod)
      //this.productos.push(prod)
    })
    this.crearProductoForm.reset()
  }

  eliminarPaquete(paquete) {
    const idPaquete = paquete.id
    this.bppService.find<BultoProductoPaquete>( {
      where: {
        paqueteId: idPaquete
      }
    }).subscribe((bppsBorrar) => {
      bppsBorrar.forEach((bpp) => {
        this.bppService.deleteById(bpp.id).subscribe((a) => {})
      })
    })
    this.paqueteService.deleteById(paquete.id).subscribe(() => {
      this.paquetes.splice(this.paquetes.indexOf(paquete))
    })
  }

}
