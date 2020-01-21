import { Component, OnInit } from '@angular/core';
import { EnvioApi, Envio, VoluntarioApi } from 'src/app/service/lbservice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  filter: String
  envios = []
  voluntarios=[]

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private envioService: EnvioApi, private voluntarioService: VoluntarioApi) { 

    }

  ngOnInit() {
    //this.filter = this.ar.snapshot.params['filter']
    //console.log(this.filter)
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
      this.cargarTabla()
    })
  }

  private cargarTabla(){
    switch(this.filter){
    case 'todos': 
      this.envioService.find().subscribe((envios)=>{
        console.log(envios)
        this.envios=envios
      })
      break
    case 'sin-asignar':
      this.envioService.find({where:{estado:'pendiente de asignacion'}}).subscribe((envios)=>{
        console.log(envios)
        this.envios=envios
      })
      break
    case 'asignados':
      this.envioService.find({where:{estado:'pendiente de traslado'}}).subscribe((envios)=>{
        console.log(envios)
        this.envios=envios
      })
      break
    case 'realizados':
      this.envioService.find({where:{estado:'realizado'}}).subscribe((envios)=>{
        console.log(envios)
        this.envios=envios
      })
      break
    }
    this.voluntarioService.find().subscribe((voluntarios)=>{
      console.log(voluntarios)
      this.voluntarios=voluntarios
    })
  }

  asignarTrasladoButtonClick(id) {
    alert("a desarrollar")
    //this.router.navigateByUrl('/admin/envios/' + id + '/asignar-voluntario') 
  }

  obtenerVoluntarioAsignado(envio: Envio) {
    var nombre
    this.voluntarios.forEach(element => {
      if(element.id==envio.voluntarioId)
        nombre=element.nombre
    });
    return nombre
  }
  
  nuevoEnvioButtonClick(){
    this.router.navigateByUrl('admin/envios/todos/nuevo-envio')
  }

}
