import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BultoApi, EnvioApi, Bulto, Envio, VoluntarioApi, Voluntario, VehiculoApi, Vehiculo, AsignacionTrasladoBulto, AsignacionTrasladoBultoApi, AsignacionEnvioApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-asignar-un-envio',
  templateUrl: './asignar-un-envio.component.html',
  styleUrls: ['./asignar-un-envio.component.css']
})
export class AsignarUnEnvioComponent implements OnInit {

  id: String
  type: String
  obTraslado
  voluntarios:any[]

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private bultoService: BultoApi,
    private envioService: EnvioApi,
    private voluntarioService: VoluntarioApi,
    private asignacionBultoService: AsignacionTrasladoBultoApi,
    private asignacionEnvioService: AsignacionEnvioApi) {

    this.id = this.ar.snapshot.params['id']
    this.type = this.ar.snapshot.params['type']
    if(this.type == 'bulto') {
      this.bultoService.findById<Bulto>(this.id).subscribe((bulto) => { this.obTraslado = bulto })
    } else if (this.type == "envio"){
      this.envioService.findById<Envio>(this.id).subscribe((envio) => { this.obTraslado = envio })
    } else {
      this.router.navigateByUrl("/home")
    }
    this.voluntarioService.find<Voluntario>({
      include: {
        relation: "vehiculos"
      }
    }).subscribe((voluntarios) => {
      this.voluntarios = []
      const setVolumen = new Set(this.obTraslado.volumen)
      voluntarios.forEach((vol) => {
        if(vol.vehiculos.length > 0 ) {
          var puede = false
          var set = new Set()
          vol.vehiculos.forEach((veh) => {
            set.add(veh.volumen)
            if(setVolumen.has(veh.volumen)) {
              puede = true
            }
          })
          if(puede) {
            this.voluntarios.push({...vol, volumenVehiculos: Array.from(set)})
          }
        }
      })
      console.log(this.voluntarios)
    })
  }

  ngOnInit() {
  }

  asignarAVoluntario(vol){
    if(this.type == "bulto") {
      this.bultoService.updateAttributes(this.obTraslado.id, {...this.obTraslado, estado_traslado:"asignado_vol" }).subscribe(()=>{
        console.log("Se cambio estado traslado")
      })
      this.asignacionBultoService.create({
        bultoId: this.obTraslado.id,
        voluntarioId: vol.id,
        estado: "pendiente",
        fecha_traslado: Date.now()
      }).subscribe(()=>{
        console.log("Se creo asignacion")
        this.router.navigateByUrl('/admin/bultos/sin-traslado')
      })
    } else if (this.type == "envio") {
      this.envioService.updateAttributes(this.obTraslado.id, { ...this.obTraslado, estado_traslado:"asignado_vol"}).subscribe(() => {
        console.log("Se cambio estado traslado")
      })
      this.asignacionEnvioService.create({
        envioId: this.obTraslado.id,
        voluntarioId: vol.id,
        estado: "pendiente",
        fecha_traslado: Date.now()
      }).subscribe(()=>{
        console.log("Se creo asignacion")
        this.router.navigateByUrl('/admin/envios/sin-traslado')
      })
    }
    // ACA ENVIAR MAIL
    // EN vol.email ESTA LA DIRECCION DONDE ENVIAR
    // EN this.type ESTA SI ES UN BULTO O UN ENVIO
  }

  asignarPropio() {
    if(this.type == "bulto") {
      this.bultoService.updateAttributes(this.obTraslado.id, {...this.obTraslado, estado_traslado:"asignado_propio" }).subscribe(()=>{
        console.log("Se cambio estado traslado a asignado como propio")
        this.router.navigateByUrl('/admin/bultos/sin-traslado')
      })
    } else if (this.type == "envio") {
      this.envioService.updateAttributes(this.obTraslado.id, { ...this.obTraslado, estado_traslado: "asignado_propio"}).subscribe(() => {
        console.log("Se cambio estado traslado a asignado como propio")
        this.router.navigateByUrl('/admin/envios/sin-traslado')
      })
    }
  }

}
