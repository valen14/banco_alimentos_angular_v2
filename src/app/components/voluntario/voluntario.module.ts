import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntarioRoutingModule } from './voluntario-routing.module';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { EnviosComponent } from './voluntario/envios/envios.component';
import { EnvioComponent } from './voluntario/envios/envio/envio.component';
import { CarsComponent } from './voluntario/cars/cars.component';
import { CarComponent } from './voluntario/cars/car/car.component';
import { InsignasComponent } from './voluntario/insignas/insignas.component';
import { RechazadosComponent } from './voluntario/envios/rechazados/rechazados.component';
import { AceptadosComponent } from './voluntario/envios/aceptados/aceptados.component';
import { PendientesComponent } from './voluntario/envios/aceptados/pendientes/pendientes.component';
import { CanceladosComponent } from './voluntario/envios/aceptados/cancelados/cancelados.component';
import { RealizadosComponent } from './voluntario/envios/aceptados/realizados/realizados.component';
import { SolicitudesComponent } from './voluntario/envios/solicitudes/solicitudes.component';



@NgModule({
  declarations: [VoluntarioComponent, EnviosComponent, EnvioComponent, CarsComponent, CarComponent, InsignasComponent, RechazadosComponent, AceptadosComponent, PendientesComponent, CanceladosComponent, RealizadosComponent, SolicitudesComponent],
  imports: [
    CommonModule,
    VoluntarioRoutingModule
  ]
})
export class VoluntarioModule { }
