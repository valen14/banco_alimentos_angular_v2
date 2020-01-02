import { Component, OnInit } from '@angular/core';
import { Bulto } from 'src/app/model/bulto';
import { ActivatedRoute, Router } from '@angular/router';
import { BultoApi, OrganizacionDonanteApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-bultos',
  templateUrl: './bultos.component.html',
  styleUrls: ['./bultos.component.css']
})
export class BultosComponent implements OnInit {

  filter: String
  bultos = []

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private bultosService: BultoApi,
    private donantesService: OrganizacionDonanteApi) { }

  ngOnInit() {
    this.filter = this.ar.snapshot.params['filter']
    console.log(this.filter)
    this.ar.paramMap.subscribe((params) => {
      this.filter = params.get('filter')
      this.cargarTabla()
    })
  }

  cargarTabla() {
    switch (this.filter) {
      case 'pendientes':
        this.bultosService.find({
          where: {
            estado: "pendiente",
          }
        }).subscribe((bultos) => { this.bultos = bultos })
        break;
      default:
        this.bultosService.find().subscribe((bultos) => { this.bultos = bultos })
        break;
    }
  }

  nombreOrganizacionDonante(id) {
    this.donantesService.findById(id).subscribe((donante) => { return donante.razonSocial })
  }

}
