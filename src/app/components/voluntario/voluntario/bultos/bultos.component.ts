import { Component, OnInit } from '@angular/core';
import { Bulto, BultoApi, OrganizacionDonanteApi, VoluntarioApi } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bultos',
  templateUrl: './bultos.component.html',
  styleUrls: ['./bultos.component.css']
})
export class BultosComponent implements OnInit {

  filter: String
  bultos = []
  donantes = []
  idUserLog
  voluntarios=[]

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private bultosService: BultoApi,
    private donantesService: OrganizacionDonanteApi,
    private voluntarioService: VoluntarioApi) { 
      const emailUserLog= sessionStorage.getItem('email')
      this.voluntarioService.findOne({where:{email: emailUserLog}}).subscribe((voluntario) => {
        console.log(voluntario)
        this.idUserLog=voluntario['id']    
        this.obtenerBultos()
      })
    }

  ngOnInit() {

  }

  obtenerBultos() {
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
    })
    this.bultosService.find({
      where: { 
        
          voluntarioId: this.idUserLog
      
      }
    }).subscribe((bultos) => { this.bultos = bultos })
    switch (this.filter) {

      case 'solicitudes':

        break;
        case 'aceptados':
          
          break;
      default:{
       
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





  aceptarTrasladoButtonClick() {
    alert("A desarrollar") 
  }

  rechazarTrasladoButtonClick() {
    alert("A desarrollar") 
  }

  verDetallesButtonClick(id: number){
    alert("a desarrollar")
  }

}
