import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoApi, Vehiculo } from 'src/app/service/lbservice';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  editVehiculoForm: FormGroup
  vehiculo:Vehiculo

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private vehiculoService: VehiculoApi) {
    this.editVehiculoForm = new FormGroup({
      marca: new FormControl(),
      modelo: new FormControl(),
      patente: new FormControl(),
      distancia_maxima: new FormControl(),
      tipo: new FormControl(),
    })
    this.vehiculoService.findById<Vehiculo>(this.ar.snapshot.params["id"]).subscribe((veh) => {
      this.vehiculo = veh
      this.cargarForm(veh)
    })
  }

  ngOnInit() {
  }

  cargarForm(veh) {
    this.editVehiculoForm.controls.marca.setValue(veh.marca)
    this.editVehiculoForm.controls.modelo.setValue(veh.modelo)
    this.editVehiculoForm.controls.patente.setValue(veh.patente)
    this.editVehiculoForm.controls.distancia_maxima.setValue(veh.distancia_maxima)
    this.editVehiculoForm.controls.tipo.setValue(veh.tipo)
  }

  onSubmitEditarVehiculo(){
    this.vehiculoService.updateAttributes(this.vehiculo.id, {
      ...this.vehiculo,
      marca:this.editVehiculoForm.controls.marca.value,
      modelo:this.editVehiculoForm.controls.modelo.value,
      patente:this.editVehiculoForm.controls.patente.value,
      distancia_maxima:this.editVehiculoForm.controls.distancia_maxima.value,
      tipo:this.editVehiculoForm.controls.tipo.value,
    }).subscribe((veh) => {
      this.router.navigateByUrl("/voluntario/cars")
    })
  }

}
