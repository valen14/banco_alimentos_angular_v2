import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  envioId: ''
  constructor(activatedRouter: ActivatedRoute) {
    this.envioId=activatedRouter.snapshot.params['id']
   }

  ngOnInit() {
  }

}
