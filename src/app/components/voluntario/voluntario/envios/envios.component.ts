import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvioApi, VoluntarioApi, Envio } from 'src/app/service/lbservice';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  idUserLog
  filter: String
  envios = []
  //enviosVisualizados=[]
  voluntarios=[]

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private envioService: EnvioApi, private voluntarioService: VoluntarioApi) { 
      const emailUserLog= sessionStorage.getItem('email')
      this.voluntarioService.findOne({where:{email: emailUserLog}}).subscribe((voluntario) => {
        console.log(voluntario)
        this.idUserLog=voluntario['id']    
        this.obtenerEnvios()
      })
    }

    private obtenerEnvios(){
      this.filter = this.ar.snapshot.params['filter']
      console.log(this.filter)
      this.voluntarioService.getEnvios(this.idUserLog).subscribe((envios) => {
        console.log(envios),
        this.envios = envios
      })
      switch(this.filter){
        case 'todos': 
          //hacer
          break
        case 'solicitudes':
    
          break
        case 'aceptados':
    
          break
        case 'denegados':
    
          break
        }
    

    }

  ngOnInit() {
    /*this.filter = this.ar.snapshot.params['filter']
    console.log(this.filter)
    this.ar.paramMap.subscribe((params) => {
      //this.filter = params.get('filter')
      this.cargarTabla()
    }) */
  }


  verEnvioButtonClick(id: any) {
    alert("a desarrollar")
    //this.router.navigateByUrl('/admin/envios/' + id + '/asignar-voluntario') 
  }

  obtenerOrganizacionBeneficiaria(envio: Envio) {
    alert("a desarrollar")
  }

}
