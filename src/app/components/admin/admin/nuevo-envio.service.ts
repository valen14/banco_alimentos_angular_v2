import { Injectable } from '@angular/core';
import { EnvioApi, Envio, Paquete, PaqueteApi } from 'src/app/service/lbservice';

@Injectable({
  providedIn: 'root'
})
export class NuevoEnvioService {

  envio
  id
  constructor(private envioService: EnvioApi, private paqueteService: PaqueteApi) { }

  setEnvio(envio: any){
    this.envio=envio
  }

  createEnvio(paquetes: any[]){
    this.envioService.create(this.envio).subscribe((envio)=>{
        paquetes.forEach((paq) => {
          this.paqueteService.updateAttributes(paq.id, { ...paq, envioId: this.id} ).subscribe((paq) => {
          })
        })
    })
  }

  getEnvio(){
    this.envioService.findById(this.id).subscribe((envio)=>{
      return envio
    })
  }
}
