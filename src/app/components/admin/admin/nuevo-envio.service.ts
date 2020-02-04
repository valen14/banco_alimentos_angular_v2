import { Injectable } from '@angular/core';
import { EnvioApi, Envio, Paquete } from 'src/app/service/lbservice';

@Injectable({
  providedIn: 'root'
})
export class NuevoEnvioService {

  envio
  id
  constructor(private envioService: EnvioApi) { }

  setEnvio(envio: any){
    this.envio=envio
    //console.log(this.envio)
  }
  createEnvio(paquetes: any){
    this.envioService.create(this.envio).subscribe((envio)=>{
        console.log(envio)
        this.id=envio.id
        this.envioService.createPaquetes(envio['id'],paquetes).subscribe(()=>{
        })      
    })
  }
  getEnvio(){
    this.envioService.findById(this.id).subscribe((envio)=>{
      return envio
    })
  }
}
