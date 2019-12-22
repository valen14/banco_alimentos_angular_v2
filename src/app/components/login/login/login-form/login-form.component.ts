import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { VoluntarioApi, OrganizacionDonanteApi, OrganizacionBeneficiariaApi, Voluntario } from 'src/app/service/lbservice';
import { ILogin } from 'src/app/interfaces/login';
import { AuthService } from '../../../../services/auth.service'
import { Beneficiario } from 'src/app/model/beneficiario';

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
    private authService: AuthService,
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
      this.message = "Falta completar algunos campos"
      return;
    } else {
      const query = {
        "where": {
          "email": this.formControls.email.value,
          "password": this.formControls.password.value
        }
      }
      switch (this.type) {
        case 'voluntario':
          this.voluntarioService.find(query).subscribe((voluntarios) => {
            console.log(voluntarios)
            if (voluntarios.length > 0) {
              this.authService.login(this.type, this.formControls.email.value)
              this.router.navigateByUrl('/' + this.type)
            } else {
              this.message = "El email o password ingresado no coincide con ningun usuario"
            }
          })
          break;
        case 'beneficiario':
          this.beneficiarioService.find(query).subscribe((beneficiario) => {
            if (beneficiario.length > 0) {
              this.authService.login(this.type, this.formControls.email.value)
              this.router.navigateByUrl('/' + this.type)
            } else {
              this.message = "El email o password ingresado no coincide con ningun usuario"
            }
          })
          break;
        case 'donante':
          this.donanteService.find(query).subscribe((donante) => {
            if (donante.length > 0) {
              this.authService.login(this.type, this.formControls.email.value)
              this.router.navigateByUrl('/' + this.type)
            } else {
              this.message = "El email o password ingresado no coincide con ningun usuario"
            }
          })
          break;
        case 'admin':
          if (this.formControls.email.value == "admin@gmail.com" && this.formControls.password.value == "123456") {
            this.authService.login(this.type, this.formControls.email.value)
            this.router.navigateByUrl('/' + this.type)
          } else {
            this.message = "El email o password ingresado no coincide con ningun usuario"
          }
      }
    }
  }
}