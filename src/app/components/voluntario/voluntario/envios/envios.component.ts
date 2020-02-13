import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvioApi, VoluntarioApi, Envio, Voluntario, AsignacionEnvioApi, AsignacionEnvio } from 'src/app/service/lbservice';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  
  voluntario: Voluntario
  filter: String
  envios = []
  voluntarios=[]
  asignaciones : AsignacionEnvio[]

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private envioService: EnvioApi, 
    private voluntarioService: VoluntarioApi,
    private asignacionesService: AsignacionEnvioApi) { 
      const emailUserLog= sessionStorage.getItem('email')
      this.voluntarioService.findOne<Voluntario>({where:{email: emailUserLog}}).subscribe((voluntario) => {
        this.voluntario = voluntario 
        this.ar.paramMap.subscribe((params) => {
          this.filter = params.get('filter')
          this.obtenerAsignaciones()
        })
      })
    }

    private obtenerAsignaciones(){
      this.asignacionesService.find<AsignacionEnvio>({
        where: {
          estado: this.filter,
          voluntarioId: this.voluntario.id
        },
        include: {
          relation: "envio"
        }
      }).subscribe((asignaciones) => {
        console.log(asignaciones)
        this.asignaciones = asignaciones
      })
    

    }

  ngOnInit() {
  }


  aceptarAsignacion(asig) {
    this.asignacionesService.updateAttributes(asig.id, {...asig, estado:"aceptado"}).subscribe(() => {
      console.log("Se acepto el traslado")
      this.asignaciones = []
      this.obtenerAsignaciones()
    })
  }


  rechazarAsignacion(asig) {
    this.asignacionesService.updateAttributes(asig.id, {...asig, estado:"rechazado"}).subscribe(() => {
      console.log("Se rechazo el traslado")
      this.asignaciones = []
      this.obtenerAsignaciones()
    })
    this.envioService.updateAttributes(asig.envio.id, {...asig.envio, estado_traslado:"sin_asignar"}).subscribe(() => {
      console.log("El bulto esta de nuevo sin asignar")
    })
    //ENVIAR MAIL A ADMIN?
  }

}
