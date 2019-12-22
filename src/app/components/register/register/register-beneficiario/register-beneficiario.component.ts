import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizacionBeneficiariaApi, OrganizacionBeneficiaria } from 'src/app/service/lbservice';

@Component({
  selector: 'app-register-beneficiario',
  templateUrl: './register-beneficiario.component.html',
  styleUrls: ['./register-beneficiario.component.css']
})
export class RegisterBeneficiarioComponent implements OnInit {

  beneficiario: OrganizacionBeneficiaria
  beneForm: FormGroup
  constructor(private router: Router, private beneficiarioService: OrganizacionBeneficiariaApi) {
    this.beneForm = new FormGroup ({
      nombreOrg: new FormControl(),
      email: new FormControl(),
      confirmarEmail: new FormControl(),
      password: new FormControl(),
      confirmarPassword: new FormControl(),
      direccion: new FormControl(),
      numeroPersonas: new FormControl(),
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    const nombreForm= this.beneForm.get('nombreOrg').value
    const emailForm= this.beneForm.get('email').value
    const passwordForm= this.beneForm.get('password').value
    const direccionForm= this.beneForm.get('direccion').value
    const numeroPersonasForm= this.beneForm.get('numeroPersonas').value

    this.beneficiarioService.create({nombreForm, emailForm, passwordForm, direccionForm, numeroPersonasForm})

    this.router.navigateByUrl('')
  }

}
