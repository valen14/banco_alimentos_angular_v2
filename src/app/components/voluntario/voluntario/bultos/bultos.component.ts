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
    private donantesService: OrganizacionDonanteApi,
    private bultoService: BultoApi) {
    const emailUserLog = sessionStorage.getItem('email')
    this.filter = this.ar.snapshot.params['filter']
    this.donantesService.find().subscribe((donantes) => {
      this.donantes=donantes;
    })
    this.voluntarioService.findOne<Voluntario>({ where: { email: emailUserLog } }).subscribe((voluntario) => {
      this.voluntario = voluntario
      this.ar.paramMap.subscribe((params) => {
        this.filter = params.get('filter')
        this.obtenerAsignaciones()
      })

    })
  }

  ngOnInit() {
  }

  obtenerAsignaciones() {
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
    this.asignacionesService.updateAttributes(asig.id, {...asig, estado: "aceptado"}).subscribe(() => {
      console.log("Se acepto la solicitud")
    })
    this.asignaciones = []
    this.obtenerAsignaciones()
  }

  rechazarAsignacion(asig) {
    this.asignacionesService.updateAttributes(asig.id, {...asig, estado: "rechazado"}).subscribe(() => {
      console.log("Se rechazo la solicitud")
    })
    this.bultoService.updateAttributes(asig.bulto.id, {...asig.bulto, estado_traslado: "sin_asignar"}).subscribe(() => {
      console.log("El bulto esta de nuevo sin asignar")
    })
    this.asignaciones = []
    this.obtenerAsignaciones()
    // ENVIAR MAIL A ADMINISTRADOR??
  }

}
