import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { BultosComponent } from './admin/bultos/bultos.component';
import { BultoComponent } from './admin/bultos/bulto/bulto.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { EnvioComponent } from './admin/envios/envio/envio.component';
import { CarsComponent } from './admin/cars/cars.component';
import { CarComponent } from './admin/cars/car/car.component';
import { PaquetesComponent } from './admin/paquetes/paquetes.component';
import { SeleccionPaquetesComponent } from './admin/envios/nuevo-envio/seleccion-paquetes/seleccion-paquetes.component';
import { SeleccionVoluntarioComponent } from './admin/envios/sin-asignar/seleccion-voluntario/seleccion-voluntario.component';
import { SinAsignarComponent } from './admin/envios/sin-asignar/sin-asignar.component';
import { AsignadosComponent } from './admin/envios/asignados/asignados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoEnvioComponent } from './admin/envios/nuevo-envio/nuevo-envio.component';


@NgModule({
  declarations: [AdminComponent,  UsersComponent,  BultosComponent, BultoComponent, EnviosComponent, EnvioComponent, CarsComponent, CarComponent, PaquetesComponent, SeleccionPaquetesComponent, SeleccionVoluntarioComponent, SinAsignarComponent, AsignadosComponent,NuevoEnvioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
