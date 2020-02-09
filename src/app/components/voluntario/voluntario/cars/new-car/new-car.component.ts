import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Vehiculo, VehiculoApi, VoluntarioApi } from 'src/app/service/lbservice';

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
    private vehiculoService: VehiculoApi,
    private voluntarioService: VoluntarioApi  ) {
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
      volumen : this.getForm().tipo.value,
      distancia_maxima : this.getForm().distancia_maxima.value,
    }
    this.vehiculoService.create(veh).subscribe((auto)=>{
      console.log(auto)
        this.vehiculoService.updateAttributes(auto['id'], { ...auto, envioId: this.idVoluntario}).subscribe(()=>{
          this.router.navigateByUrl("voluntario/cars")
        }) 
      })
    
  }

}
