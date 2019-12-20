import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/model/envio';

@Component({
  selector: 'app-asignados',
  templateUrl: './asignados.component.html',
  styleUrls: ['./asignados.component.css']
})
export class AsignadosComponent implements OnInit {

  envios: Envio[]
  constructor() { }

  ngOnInit() {
    this.envios=[new Envio("Donante A","2222","1 y 47",100),new Envio("Envio B","5555555","plaza italia",50)]
  }

}
