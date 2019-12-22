import { Component, OnInit } from '@angular/core';
import { Donante } from 'src/app/model/donante';


@Component({
  selector: 'app-donantes',
  templateUrl: './donantes.component.html',
  styleUrls: ['./donantes.component.css']
})
export class DonantesComponent implements OnInit {

  donantes: Donante[]
  constructor() { 
   
  }

  ngOnInit() {
    this.donantes=[new Donante("Donante A","2222","1 y 47",100),new Donante("Donante B","5555555","plaza italia",50)]
  }

}
