import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoluntarioApi, OrganizacionDonanteApi, OrganizacionBeneficiariaApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userTypeToList: String
  users = []

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private voluntarioService: VoluntarioApi,
    private donanteService: OrganizacionDonanteApi,
    private beneficiarioService: OrganizacionBeneficiariaApi, ) {
  }

  ngOnInit() {
    this.userTypeToList = this.ar.snapshot.params['userType']
    this.ar.paramMap.subscribe((params) => {
      this.userTypeToList = params.get('userType')
      this.cargarTabla()
    })
  }

  cargarTabla() {
    switch (this.userTypeToList) {
      case 'donantes':
        this.obtener(this.donanteService)
        break;
      case 'beneficiarios':
        this.obtener(this.beneficiarioService)
        break;
      case 'voluntarios':
        this.obtener(this.voluntarioService)
        break;
    }
  }

  obtener(service): any {
    service.find().subscribe((res) => { this.users = res })
  }

}
