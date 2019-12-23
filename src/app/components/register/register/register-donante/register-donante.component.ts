import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizacionDonanteApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-register-donante',
  templateUrl: './register-donante.component.html',
  styleUrls: ['./register-donante.component.css']
})
export class RegisterDonanteComponent implements OnInit {

  donanteForm: FormGroup
  constructor(private router: Router, private donanteService: OrganizacionDonanteApi) {
    this.donanteForm = new FormGroup({
      razonSocial: new FormControl(),
      cuil: new FormControl(),
      email: new FormControl(),
      confirmarEmail: new FormControl(),
      password: new FormControl(),
      confirmarPassword: new FormControl(),
      direccion: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    const razonSocialForm = this.donanteForm.get('razonSocial').value
    const cuilForm = this.donanteForm.get('cuil').value
    const emailForm = this.donanteForm.get('email').value
    const passwordForm = this.donanteForm.get('password').value
    const direccionForm = this.donanteForm.get('direccion').value
    const donante = {
      razon_social: razonSocialForm,
      cuil: cuilForm,
      direccion: direccionForm,
      direccion_coordenadas: { lat: 0, lng: 0 },
      email: emailForm,
      puntaje: 0,
      password: passwordForm
    }
    console.log(donante)
    this.donanteService.create(donante).subscribe(() => {
      this.router.navigateByUrl('/home')
    })
  }
}
