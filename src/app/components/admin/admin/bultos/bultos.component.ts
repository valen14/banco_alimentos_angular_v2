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
    console.log(this.filter)
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
      this.cargarTabla()
    })
  }

  cargarTabla() {
    // var id
    // var donante = {
    //   razon_social: "razon social 1",
    //   password: '123456',
    //   cuil: "30-938593454-2",
    //   direccion: "oa",
    //   direccion_coordenadas: { lat: 0, lng: 0 },
    //   email: "rz1@gmail.com",
    //   puntaje: 0
    // }
    // this.donantesService.create(donante).subscribe((d) => {
    //   console.log(d.id)
    //   var bulto = {
    //     descripcion: "descripcion",
    //     volumen: [
    //       0
    //     ],
    //     fecha_disponibilidad: new Date("2020-01-03T15:10:56.097Z"),
    //     revisado: false,
    //     fecha_vencimiento: new Date("2020-01-03T15:10:56.097Z"),
    //     estado: "pendiente",
    //     organizacionDonanteId: d.id
    //   }
    //   this.bultosService.create(bulto).subscribe((b) => console.log(b))
    // })
    // this.bultosService.create({
    // })
    switch (this.filter) {
      case 'pendientes':
        this.bultosService.find({
          where: {
            or: [
              { estado: "pendiente de carga"},
              { estado: "pendiente de retiro"},
            ]
          }
        }).subscribe((bultos) => { this.bultos = bultos })
        break;
      default:
        this.bultosService.find().subscribe((bultos) => {
          this.bultos = bultos;
          console.log(bultos)
        })
        this.donantesService.find().subscribe((donantes) => {
          this.donantes=donantes;
          console.log(donantes)
        })
        break;
    }
  }

  obtenerDonante(bulto:Bulto){
    var razon_social
    this.donantes.forEach((donante) => {
      if(donante.id == bulto.organizacionDonanteId)
        razon_social= donante.razon_social
    })
     return razon_social 
  }

  confirmarTrasladoButtonClick() {
    alert("A desarrollar") 
  }

  cargarContenidoButtonClick(id) {
    this.router.navigateByUrl('/admin/bultos/' + id + '/carga-paquetes')
  }

}
