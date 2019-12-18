import { Component, OnInit } from '@angular/core';
import { Bulto } from 'src/app/model/bulto';

@Component({
  selector: 'app-bultos',
  templateUrl: './bultos.component.html',
  styleUrls: ['./bultos.component.css']
})
export class BultosComponent implements OnInit {

  bultos: Bulto[]
  constructor() { }

  ngOnInit() {
    this.bultos=[new Bulto("Bulto A","2222","1 y 47",100),new Bulto("Bulto B","5555555","plaza italia",50)]
  }

}
