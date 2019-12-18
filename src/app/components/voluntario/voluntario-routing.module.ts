import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { EnviosComponent } from './voluntario/envios/envios.component';
import { EnvioComponent } from './voluntario/envios/envio/envio.component';
import { CarComponent } from './voluntario/cars/car/car.component';
import { CarsComponent } from './voluntario/cars/cars.component';
import { InsignasComponent } from './voluntario/insignas/insignas.component';
import { AceptadosComponent } from './voluntario/envios/aceptados/aceptados.component';
import { RechazadosComponent } from './voluntario/envios/rechazados/rechazados.component';
import { PendientesComponent } from './voluntario/envios/aceptados/pendientes/pendientes.component';
import { CanceladosComponent } from './voluntario/envios/aceptados/cancelados/cancelados.component';
import { RealizadosComponent } from './voluntario/envios/aceptados/realizados/realizados.component';
import { SolicitudesComponent } from './voluntario/envios/solicitudes/solicitudes.component';


const routes: Routes = [
  {path: '', component: VoluntarioComponent,
  children:[
    {path: 'envios', component: EnviosComponent,
      children:[
        {path: 'aceptados', component: AceptadosComponent,
          children:[
            {path: 'pendientes', component: PendientesComponent},
            {path: 'pendientes/:id', component: EnvioComponent},
            {path: 'cancelados', component: CanceladosComponent},
            {path: 'cancelados/:id', component: EnvioComponent},
            {path: 'realizados', component: RealizadosComponent},
            {path: 'realizados/:id', component: EnvioComponent}
          ]
      },
        {path: 'rechazados', component: RechazadosComponent},
        {path: 'rechazados/:id', component: EnvioComponent},
        {path: 'solicitudes', component: SolicitudesComponent},
        {path: 'solicitudes/:id', component: EnvioComponent},
        
      ]
      
      },
        
        {path: 'cars', component: CarsComponent},
        {path: 'cars/:id', component: CarComponent},
        {path: 'insignas', component: InsignasComponent}
      ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntarioRoutingModule { }
