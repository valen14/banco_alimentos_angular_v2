import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/service/lbservice/models/Envio';
import { OrganizacionBeneficiariaApi } from 'src/app/service/lbservice/services/custom/OrganizacionBeneficiaria';
import { OrganizacionBeneficiaria, EnvioApi } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiario } from 'src/app/model/beneficiario';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  beneficiario: OrganizacionBeneficiaria
  filter: String
  envios = []
  //enviosVisualizados=[]
  beneficiarios = []

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private envioService: EnvioApi,
    private beneficiarioService: OrganizacionBeneficiariaApi) {
    const emailUserLog = sessionStorage.getItem('email')
    this.beneficiarioService.findOne<OrganizacionBeneficiaria>({ where: { email: emailUserLog } }).subscribe((beneficiario) => {
      console.log(beneficiario)
      this.beneficiario = beneficiario
    })
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
      if (this.filter == "pendiente-de-carga") {
        this.filter = "pendiente de carga"
      }
      this.cargarTabla()
    })
  }

  private cargarTabla() {

    console.log(this.filter)
    this.envioService.find<Envio>({
      where: {
        estado: this.filter,
        beneficiarioId: this.beneficiario.id
      }
    }).subscribe((envios) => {
      console.log(envios)
      this.envios = envios
    })


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

  confirmarTrasladoButtonClick(envio) {
    this.envioService.updateAttributes(envio.id, {...envio, estado:"realizado"}).subscribe(() => {
      console.log("Se conformo el trasaldo")
      this.envios = []
      this.cargarTabla()
    })
  }


}
