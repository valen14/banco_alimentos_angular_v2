import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Vehiculo, VehiculoApi } from 'src/app/service/lbservice';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  idVoluntario: String
  crearVehiculoForm: FormGroup

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private vehiculoService: VehiculoApi ) {
    this.idVoluntario = this.ar.snapshot.params['id']
      this.crearVehiculoForm = new FormGroup({
        marca: new FormControl(),
        modelo: new FormControl(),
        patente: new FormControl(),
        distancia_maxima: new FormControl(),
        tipo: new FormControl(),
      })
  }

  getForm() {
    return this.crearVehiculoForm.controls
  }

  ngOnInit() {
  }

  onSubmitCrearVehiculo() {
    const veh = {
      marca : this.getForm().marca.value,
      modelo : this.getForm().modelo.value,
      patente : this.getForm().patente.value,
      distancia_maxima : this.getForm().distancia_maxima.value,
      volumen : this.getForm().tipo.value,
      voluntarioId: this.idVoluntario,
    }
    this.vehiculoService.create(veh).subscribe((newV) => {
      this.router.navigateByUrl("voluntario/cars")
    })
  }

}
