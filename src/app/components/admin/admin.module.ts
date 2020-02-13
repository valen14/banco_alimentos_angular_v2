import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { BultosComponent } from './admin/bultos/bultos.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { EnvioComponent } from './admin/envios/envio/envio.component';
import { CarsComponent } from './admin/cars/cars.component';
import { CarComponent } from './admin/cars/car/car.component';
import { PaquetesComponent } from './admin/paquetes/paquetes.component';
import { SeleccionPaquetesComponent } from './admin/envios/nuevo-envio/seleccion-paquetes/seleccion-paquetes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoEnvioComponent } from './admin/envios/nuevo-envio/nuevo-envio.component';
import { CargaPaquetesComponent } from './admin/carga-paquetes/carga-paquetes.component';
import { AsignarUnEnvioComponent } from './admin/envios/asignar-un-envio/asignar-un-envio.component';
import { SeleccionBeneficiarioComponent } from './admin/envios/nuevo-envio/seleccion-beneficiario/seleccion-beneficiario.component';


@NgModule({
  declarations: [AdminComponent,  UsersComponent,  BultosComponent,  EnviosComponent, EnvioComponent, CarsComponent, CarComponent, PaquetesComponent, SeleccionPaquetesComponent,NuevoEnvioComponent, CargaPaquetesComponent, AsignarUnEnvioComponent, SeleccionBeneficiarioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
