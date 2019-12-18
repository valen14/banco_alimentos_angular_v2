import { Component, OnInit } from '@angular/core';
import { Beneficiario } from 'src/model/beneficiario';


@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.css']
})
export class BeneficiariosComponent implements OnInit {

  beneficiarios: Beneficiario[]; 
  constructor() { 
   
  }

  ngOnInit() {
    this.beneficiarios=[new Beneficiario("Beneficiario A","2222","1 y 47",100),new Beneficiario("Beneficiario B","5555555","plaza italia",50)]
  }



}
