import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BultoApi, OrganizacionDonanteApi, Bulto, OrganizacionDonante, LoopBackFilter } from 'src/app/service/lbservice';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-bultos',
  templateUrl: './bultos.component.html',
  styleUrls: ['./bultos.component.css']
})
export class BultosComponent implements OnInit {

  filter: String
  bultos = []
  donantes = []

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private bultosService: BultoApi,
    private donantesService: OrganizacionDonanteApi) {

  }

  ngOnInit() {
    this.filter = this.ar.snapshot.params['filter']
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
      this.cargarTabla()
      console.log(this.filter)
    })
  }

  cargarTabla() {
    this.donantesService.find().subscribe((donantes) => {
      this.donantes = donantes;
    })
    switch (this.filter) {
      case 'sin-traslado': // estado = pend_retiro ; estado_traslado = sin_asignar
        this.bultosService.find({
          where: {
            and: [
              {estado: "pendiente de retiro"},
              {estado_traslado: "sin_asignar"}
            ]
          }
        }).subscribe((bultos) => { this.bultos = bultos })
        break;
      case 'con-traslado-voluntario': // estado = pend_retiro ; estado_traslado = asignado_vol
        this.bultosService.find({
          where: {
            and: [
              {estado: "pendiente de retiro"},
              {estado_traslado: "asignado_vol"}
            ]
          }
        }).subscribe((bultos) => { this.bultos = bultos })
        break;
      case 'con-traslado-propio': // estado = pend_retiro ; estado_traslado = asignado_propio
        this.bultosService.find({
          where: {
            and: [
              {estado: "pendiente de retiro"},
              {estado_traslado: "asignado_propio"}
            ]
          }
        }).subscribe((bultos) => { this.bultos = bultos })
        break;
      case 'pendientes-carga': // estado = pend_carga
        this.bultosService.find({
          where: {
            estado: "pendiente de carga"
          }
        }).subscribe((bultos) => { this.bultos = bultos })
        break;
      default:
        this.bultosService.find().subscribe((bultos) => {
          this.bultos = bultos;
        })
        
    }
  }

  obtenerDonante(bulto: Bulto) {
    var razon_social
    this.donantes.forEach((donante) => {
      if (donante.id == bulto.organizacionDonanteId)
        razon_social = donante.razon_social
    })
    return razon_social
  }

  confirmarTrasladoButtonClick() {
    alert("A desarrollar")
  }

  cargarContenidoButtonClick(id) {
    this.router.navigateByUrl('/admin/bultos/' + id + '/carga-paquetes')
  }

  asignarTrasladoButtonClick(id){
    console.log("A")
    this.router.navigateByUrl('/admin/envios/asignar/bulto/' + id)
  }

}
