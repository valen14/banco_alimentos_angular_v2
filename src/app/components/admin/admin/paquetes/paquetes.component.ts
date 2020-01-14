import { Component, OnInit } from '@angular/core';
import { PaqueteApi, Paquete } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  filter: String
  paquetes = []

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private paqueteService: PaqueteApi) { 

    }

  ngOnInit() {
    this.filter = this.ar.snapshot.params['filter']
    console.log(this.filter)
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
      this.cargarTabla()
    })
  }

  private cargarTabla(){
    switch(this.filter){
    case 'todos': 
      this.paqueteService.find().subscribe((paquetes)=>{
        console.log(paquetes)
        this.paquetes=paquetes
      })
      break
    case 'sin-asignar':
      this.paqueteService.find().subscribe((paquetes)=>{
        console.log(paquetes)
        this.paquetes=paquetes
      })
      break
    case 'asignados':
      this.paqueteService.find().subscribe((paquetes)=>{
        console.log(paquetes)
        this.paquetes=paquetes
      })
      break
    }
  }
  
  asignadoAEnvio(paquete:Paquete){
    if(paquete.envioId==null)
      return "No"
    return "Si"
  }

}
