import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/service/lbservice/models/Envio';
import { OrganizacionBeneficiariaApi } from 'src/app/service/lbservice/services/custom/OrganizacionBeneficiaria';
import { OrganizacionBeneficiaria } from 'src/app/service/lbservice';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  
  
  constructor(private beneficiarioService: OrganizacionBeneficiariaApi) {
    const bultos=beneficiarioService.find({}) 
    
   }

  ngOnInit() {
  }


}
