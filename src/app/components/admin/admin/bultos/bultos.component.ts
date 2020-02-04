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

    switch (this.filter) {
      case 'sin-asignar':
        this.bultosService.find({
          where: { 
            
              voluntarioId:  {exists: false}
          
          }
        }).subscribe((bultos) => { this.bultos = bultos })
        break;
        case 'asignados':
          this.bultosService.find({
            where: { 
              
                voluntarioId:  {exists: true}
            
            }
          }).subscribe((bultos) => { this.bultos = bultos })
          break;
      default:{
        this.bultosService.find().subscribe((bultos) => {
          this.bultos = bultos;
          console.log(bultos)
          
        })
      }
        this.donantesService.find().subscribe((donantes) => {
          this.donantes=donantes;
          console.log(donantes)
        })
        
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



  cargarContenidoButtonClick(id) {
    this.router.navigateByUrl('/admin/bultos/' + id + '/carga-paquetes')
  }

  asignarTrasladoButtonClick() {
    alert("A desarrollar") 
  }

  verDetallesButtonClick(id: number){
    alert("a desarrollar")
  }

}
