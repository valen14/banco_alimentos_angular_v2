import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/model/envio';

@Component({
  selector: 'app-sin-asignar',
  templateUrl: './sin-asignar.component.html',
  styleUrls: ['./sin-asignar.component.css']
})
export class SinAsignarComponent implements OnInit {

  envios: Envio[]
  constructor() { }

  ngOnInit() {
    this.envios=[new Envio("Donante A","2222","1 y 47",100),new Envio("Envio B","5555555","plaza italia",50)]
  }

}
