import { Component, OnInit } from '@angular/core';
import { Bulto, BultoApi, OrganizacionDonanteApi, VoluntarioApi, Voluntario, AsignacionTrasladoBultoApi, AsignacionTrasladoBulto } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bultos',
  templateUrl: './bultos.component.html',
  styleUrls: ['./bultos.component.css']
})
export class BultosComponent implements OnInit {

  filter: String
  asignaciones: any[]
  voluntario: Voluntario
  donantes: any[]

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private voluntarioService: VoluntarioApi,
    private asignacionesService: AsignacionTrasladoBultoApi,
    private donantesService: OrganizacionDonanteApi) {
    const emailUserLog = sessionStorage.getItem('email')
    this.filter = this.ar.snapshot.params['filter']
    this.donantesService.find().subscribe((donantes) => {
      this.donantes=donantes;
    })
    this.voluntarioService.findOne<Voluntario>({ where: { email: emailUserLog } }).subscribe((voluntario) => {
      this.voluntario = voluntario
      this.ar.paramMap.subscribe((params) => {
        this.filter = params.get('filter')
        this.obtenerBultos()
      })

    })
  }

  ngOnInit() {
  }

  obtenerBultos() {
    console.log("Obtiene bultos")
    this.asignacionesService.find<AsignacionTrasladoBulto>({
      where: {
        voluntarioId: this.voluntario.id,
        estado: this.filter
      },
      include:{
        relation: "bulto",
        scope: {
          include: {
            relation: "organizacionDonantes"
          }
        }
      }
    }).subscribe((asignaciones) => {
      console.log(asignaciones)
      this.asignaciones = asignaciones
    })
  }

  obtenerDonante(bulto: Bulto) {
    var razon_social
    this.donantes.forEach((donante) => {
      if (donante.id == bulto.organizacionDonanteId)
        razon_social = donante.razon_social
    })
    return razon_social
  }

  aceptarAsignacion(asig) {
    alert("A desarrollar")
  }

  rechazarAsignacion(asig) {
    alert("A desarrollar")
  }

}
