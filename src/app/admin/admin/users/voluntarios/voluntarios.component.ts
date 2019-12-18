import { Component, OnInit } from '@angular/core';
import { Voluntario } from 'src/model/voluntario';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {

  voluntarios: Voluntario[]
  constructor() { }

  ngOnInit() {
    this.voluntarios=[new Voluntario("Voluntario A","2222","1 y 47",100),new Voluntario("Voluntario B","5555555","plaza italia",50)]
  }

}
