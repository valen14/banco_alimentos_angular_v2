import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { OrganizacionBeneficiariaApi, OrganizacionDonanteApi, VoluntarioApi, OrganizacionBeneficiaria, OrganizacionDonante, Voluntario } from 'src/app/service/lbservice';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  type= ''
  loginForm:FormGroup
  beneficiario: OrganizacionBeneficiaria
  donante: OrganizacionDonante
  voluntario: Voluntario
  constructor(ar: ActivatedRoute, private router: Router, private beneficiarioService: OrganizacionBeneficiariaApi,private donanteService: OrganizacionDonanteApi,private voluntarioService: VoluntarioApi) {
    this.type = ar.snapshot.params['type']
    this.loginForm = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    const emailForm = this.loginForm.get('email').value
    const passForm = this.loginForm.get('password').value
    switch(this.type){
      case 'beneficiario':
        //this.beneficiario=this.beneficiarioService.find({where: {email: emailForm, password: passForm}}).subscribe(this.voluntario)
    }
    this.router.navigateByUrl('login/' + this.type)
  }

  ngOnInit() {
  }
}
