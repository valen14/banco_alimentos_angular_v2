import { Component, OnInit } from '@angular/core';
import { PaqueteApi } from 'src/app/service/lbservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  paquetes = []

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private paqueteService: PaqueteApi) { }

  ngOnInit() {
  }

}
