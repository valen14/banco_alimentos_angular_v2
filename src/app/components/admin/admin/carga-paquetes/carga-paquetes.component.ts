import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoApi, PaqueteApi, BultoProductoPaqueteApi, Producto, Paquete, TipoDeAlimentoApi, TipoDeAlimento } from 'src/app/service/lbservice';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carga-paquetes',
  templateUrl: './carga-paquetes.component.html',
  styleUrls: ['./carga-paquetes.component.css']
})
export class CargaPaquetesComponent implements OnInit {

  idBulto: Number
  productos : Producto[]
  tiposAlimentos: TipoDeAlimento[]
  paquetes : Paquete[]
  createPaqueteForm: FormGroup

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private productoService: ProductoApi,
    private paqueteService: PaqueteApi,
    private bppService: BultoProductoPaqueteApi,
    private tipoAlimentoService: TipoDeAlimentoApi) { 
      this.createPaqueteForm = new FormGroup({
        producto: new FormControl(),
        cantidad: new FormControl(),
        codigo: new FormControl(),
        peso: new FormControl(),
        ubicacion: new FormControl(),
        tipo : new FormControl()
      })
    }

  ngOnInit() {
    this.idBulto = this.ar.snapshot.params['id']
    this.productoService.find<Producto>().subscribe((productos) => this.productos = productos)
    this.tipoAlimentoService.find<TipoDeAlimento>().subscribe((tipos) => this.tiposAlimentos = tipos)
  }

  createPaqueteButtonClick() {

  }

}
