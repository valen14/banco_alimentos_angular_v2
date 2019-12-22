import { Component, OnInit } from '@angular/core';
import { OrganizacionDonanteApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  constructor(private donanteService: OrganizacionDonanteApi) { 
    const bultos=donanteService.getBultos({}) 
  }

  ngOnInit() {
  }

}
