import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntarioRoutingModule } from './voluntario-routing.module';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { EnviosComponent } from './voluntario/envios/envios.component';
import { EnvioComponent } from './voluntario/envios/envio/envio.component';
import { CarsComponent } from './voluntario/cars/cars.component';
import { CarComponent } from './voluntario/cars/car/car.component';
import { InsignasComponent } from './voluntario/insignas/insignas.component';
import { NewCarComponent } from './voluntario/cars/new-car/new-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BultosComponent } from './voluntario/bultos/bultos.component';
import { BultoComponent } from './voluntario/bultos/bulto/bulto.component';
import { EditCarComponent } from './voluntario/cars/edit-car/edit-car.component';



@NgModule({
  declarations: [VoluntarioComponent, EnviosComponent, EnvioComponent, CarsComponent, CarComponent, InsignasComponent, BultosComponent, BultoComponent, NewCarComponent, EditCarComponent],
  imports: [
    CommonModule,
    VoluntarioRoutingModule,
    ReactiveFormsModule,
  ]
})
export class VoluntarioModule { }
