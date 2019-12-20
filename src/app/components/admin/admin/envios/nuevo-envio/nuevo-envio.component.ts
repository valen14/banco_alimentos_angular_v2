import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-envio',
  templateUrl: './nuevo-envio.component.html',
  styleUrls: ['./nuevo-envio.component.css']
})
export class NuevoEnvioComponent implements OnInit {

  envioForm: FormGroup
  constructor(private router: Router) {
    this.envioForm = new FormGroup ({
      descripcion: new FormControl(),
      fecha_maxima: new FormControl(),
      fecha_traslado: new FormControl(),
      comentario_traslado: new FormControl(),
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    const descripcionForm= this.envioForm.get('descripcion').value
    const fechaMaximaForm= this.envioForm.get('fecha_maxima').value
    const fechaTrasladoForm= this.envioForm.get('fecha_traslado').value
    const comentarioTrasladoForm= this.envioForm.get('comentario_traslado').value

    this.router.navigateByUrl('login/admin/envios/seleccion-paquetes')
  }


}
