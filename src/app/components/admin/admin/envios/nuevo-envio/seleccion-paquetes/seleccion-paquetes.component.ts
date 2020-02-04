import { Component, OnInit } from '@angular/core';
import { Paquete, PaqueteApi, EnvioApi, Envio } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NuevoEnvioService } from '../../../nuevo-envio.service';


@Component({
  selector: 'app-seleccion-paquetes',
  templateUrl: './seleccion-paquetes.component.html',
  styleUrls: ['./seleccion-paquetes.component.css']
})
export class SeleccionPaquetesComponent implements OnInit {

  paquetes = []
  paquetesSeleccionados = []
  id
  

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private paqueteService: PaqueteApi,
    private envioService: EnvioApi,
    private nuevoEnvioService: NuevoEnvioService) { 
      this.ar.paramMap.subscribe((params) => {
        this.id = params.get('id')
      })
      this.cargarTabla()
    }

  ngOnInit() {
        
  }

  confirmarSeleccionPaquetes(){

    this.nuevoEnvioService.createEnvio(this.paquetesSeleccionados)
    //console.log(this.nuevoEnvioService.getEnvio())
    this.router.navigateByUrl('admin/envios/todos')

    //this.envioService.create(this.nuevoEnvio.getEnvio()).subscribe(() => {
      
    //})
    //this.envioService.find().subscribe((envios)=>{
     // envios[this.id]['paquetes']=this.paquetesSeleccionados
      
      /*this.paquetesSeleccionados.forEach(p => {
        p.envioId=envios[this.id]['id']
      })
      console.log(envios[this.id])
      console.log(this.paquetesSeleccionados)
      //this.envioService.createManyPaquetes(envios[this.id],this.paquetesSeleccionados).subscribe()
      //this.paqueteService.up
      this.envioService.replaceById(envios[this.id]['id'],envios[this.id]).subscribe(()=>{
        //this.router.navigateByUrl('admin/envios/todos')
      })*/
    //})

    
  }

  private cargarTabla(){  
    this.paqueteService.find().subscribe((paquetes)=>{
      console.log(paquetes)
      paquetes.forEach(paquete => {
        if(paquete['envioId'] == null)
          this.paquetes.push(paquete)
      });
    })
  }

  seleccionarPaqueteButtonClick(paquete: Paquete,id: any){
    this.paquetesSeleccionados.push(paquete)
    this.paquetes=this.paquetes.filter(p=>p.id!==paquete.id)
    console.log(this.paquetes)
  }
  

 atras(){
   this.router.navigateByUrl("admin/envios/todos/nuevo-envio")
 }

 cancelar(){
   this.router.navigateByUrl('admin/envios/todos')
 }

}
