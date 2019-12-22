import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { VoluntarioApi, OrganizacionDonanteApi, OrganizacionBeneficiariaApi, Voluntario } from 'src/app/service/lbservice';
import { ILogin } from 'src/app/interfaces/login';
import { AuthService } from '../../../../services/auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  type = ''
  loginForm: FormGroup
  message: string

  constructor(
    ar: ActivatedRoute,
    private router: Router,
    private voluntarioService: VoluntarioApi,
    private donanteService: OrganizacionDonanteApi,
    private beneficiarioService: OrganizacionBeneficiariaApi) {
    this.type = ar.snapshot.params['type']
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  get formControls() {
    return this.loginForm.controls
  }

  onSubmit() {
    return this.login()
  }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.voluntarioService.find({
        "where": {
          "email": this.formControls.email.value,
          "password": this.formControls.password.value
        }
      }).subscribe((voluntarios) => {
        console.log(voluntarios)
        if (voluntarios.length > 0) {
          sessionStorage.setItem('isLoggedIn', 'true')
          sessionStorage.setItem('type', this.type)
          sessionStorage.setItem('email', this.formControls.email.value)
          this.router.navigateByUrl('/login/' + this.type)
        } else {
          this.message = "El email o password ingresado no coincide con ningun usuario"
        }
      })
    }
  }
}