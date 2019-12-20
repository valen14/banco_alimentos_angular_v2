import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { VoluntarioApi, OrganizacionDonanteApi, OrganizacionBeneficiariaApi, Voluntario } from 'src/app/service/lbservice';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  type= ''
  loginForm:FormGroup

  constructor(ar: ActivatedRoute, private router: Router, private voluntarioService:VoluntarioApi, private donanteService:OrganizacionDonanteApi, private beneficiarioService:OrganizacionBeneficiariaApi) {
    this.type = ar.snapshot.params['type']
    this.loginForm = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    const emailForm = this.loginForm.get('email').value
    const passForm = this.loginForm.get('password').value
    switch(this.type) {
      case 'voluntario':
        this.voluntarioService.find({
          where: {
            email: emailForm,
            password: passForm,
          }
        }).subscribe((voluntario) => {
          if(voluntario.length > 0) {
            
          }
        })
        break;
      case 'donante':
        //
        break;
      case 'beneficiario':
        //
        break;
    }
  }

  ngOnInit() {
  }
}
