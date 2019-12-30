import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { VoluntarioApi, Voluntario } from 'src/app/service/lbservice';

@Component({
  selector: 'app-register-voluntario',
  templateUrl: './register-voluntario.component.html',
  styleUrls: ['./register-voluntario.component.css']
})
export class RegisterVoluntarioComponent implements OnInit {

  voluntarioForm: FormGroup
  constructor(private router: Router, private voluntarioService: VoluntarioApi) {
    this.voluntarioForm = new FormGroup({
      nombre: new FormControl(),
      dni: new FormControl(),
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
    const nombreForm = this.voluntarioForm.get('nombre').value
    const dniForm = this.voluntarioForm.get('dni').value
    const emailForm = this.voluntarioForm.get('email').value
    const passwordForm = this.voluntarioForm.get('password').value
    const direccionForm = this.voluntarioForm.get('direccion').value
    const voluntario = {
      nombre: nombreForm,
      dni: dniForm,
      puntaje: 0,
      nro_telefono_celular: "00000000000",
      email: emailForm,
      direccion: direccionForm,
      direccion_coordenadas: { lat: 0, lng: 0 },
      password: passwordForm
    }
    console.log(voluntario)
    this.voluntarioService.create(voluntario).subscribe(() => {
      this.router.navigateByUrl('')
    })
  }

}
