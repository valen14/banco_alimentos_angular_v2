import { Component, OnInit } from '@angular/core';
import { OrganizacionDonante } from 'src/model/organizacionDonante';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-organizacion-donante',
  templateUrl: './edit-organizacion-donante.component.html',
  styleUrls: ['./edit-organizacion-donante.component.css']
})
export class EditOrganizacionDonanteComponent implements OnInit {

  newOrganizacionForm: FormGroup
  org: OrganizacionDonante
  idx:string
  constructor(private route: ActivatedRoute, private router:Router, private service:DataService) { 
    this.idx = route.snapshot.paramMap.get("idx");
    this.org = this.service.getOrganizacionDonanteByIdx(parseInt(this.idx))
    this.newOrganizacionForm = new FormGroup({
      orgRazonSocial: new FormControl(this.org.razonSocial),
      orgCuil: new FormControl(this.org.cuil),
      orgDireccion: new FormControl(this.org.direccion)
    })
    
  }

  ngOnInit() {
  }

  onSubmit() {
    var orgD = new OrganizacionDonante(this.newOrganizacionForm.get("orgRazonSocial").value, this.newOrganizacionForm.get("orgCuil").value, this.newOrganizacionForm.get("orgDireccion").value)
    this.service.editOrganizacionDonante(orgD, parseInt(this.idx))
    this.router.navigateByUrl("/")
  }

}
