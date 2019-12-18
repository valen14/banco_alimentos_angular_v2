import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/model/envio';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  envios: Envio[]
  constructor() { }

  ngOnInit() {
    this.envios=[new Envio("Donante A","2222","1 y 47",100),new Envio("Envio B","5555555","plaza italia",50)]
  }

}
