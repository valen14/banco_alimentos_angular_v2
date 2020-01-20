import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/service/lbservice/models/Envio';
import { OrganizacionBeneficiariaApi } from 'src/app/service/lbservice/services/custom/OrganizacionBeneficiaria';
import { OrganizacionBeneficiaria, EnvioApi } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  idUserLog
  filter: String
  envios = []
  //enviosVisualizados=[]
  beneficiarios=[]

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private envioService: EnvioApi, 
    private beneficiarioService: OrganizacionBeneficiariaApi) { 
      const emailUserLog= sessionStorage.getItem('email')
      this.beneficiarioService.findOne({where:{email: emailUserLog}}).subscribe((beneficiario) => {
        console.log(beneficiario)
        this.idUserLog=beneficiario['id']    
        this.obtenerEnvios()
      })
    }

    private obtenerEnvios(){
      this.filter = this.ar.snapshot.params['filter']
      console.log(this.filter)
  
      this.beneficiarioService.getEnvios(this.idUserLog).subscribe((envios) => {
        console.log(envios),
        this.envios = envios
      })
      switch(this.filter){
        case 'todos': 
          //hacer
          break
        case 'pendientes':
    
          break
        case 'concretados':
    
          break
        }
    

    }

  ngOnInit() {

    /*this.ar.paramMap.subscribe((params) => {
      //this.filter = params.get('filter')
      this.cargarTabla()
    })*/ 
  }


  verEnvioButtonClick(id: any) {
    alert("a desarrollar")
    //this.router.navigateByUrl('/admin/envios/' + id + '/asignar-voluntario') 
  }

  obtenerOrganizacionBeneficiaria(envio: Envio) {
    alert("a desarrollar")
  }


}
