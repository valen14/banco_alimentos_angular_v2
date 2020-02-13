import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { BultosComponent } from './admin/bultos/bultos.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { EnvioComponent } from './admin/envios/envio/envio.component';
import { CarsComponent } from './admin/cars/cars.component';
import { CarComponent } from './admin/cars/car/car.component';
import { NuevoEnvioComponent } from './admin/envios/nuevo-envio/nuevo-envio.component';
import { SeleccionPaquetesComponent } from './admin/envios/nuevo-envio/seleccion-paquetes/seleccion-paquetes.component';
import { CargaPaquetesComponent } from './admin/carga-paquetes/carga-paquetes.component';
import { PaquetesComponent } from './admin/paquetes/paquetes.component';
import { AsignarUnEnvioComponent } from './admin/envios/asignar-un-envio/asignar-un-envio.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'users/:userType', component: UsersComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'cars/:id', component: CarComponent },
      { path: 'bultos/:filter', component: BultosComponent },
      { path: 'bultos/:id/carga-paquetes', component: CargaPaquetesComponent },
      { path: 'envios/:filter', component: EnviosComponent, },
      { path: 'envios/asignar/:type/:id', component:  AsignarUnEnvioComponent},
      { path: 'envios/:parametro/nuevo-envio', component: NuevoEnvioComponent },
      { path: 'envios/nuevo-envio/seleccion-paquetes', component: SeleccionPaquetesComponent }
      { path: 'envios/:id/asignar-traslado', component: EnvioComponent },
    
      
      //{ path: 'seleccion-voluntarios', component: SeleccionVoluntarioComponent },
 //{path:'envios/:id/asignar-traslado',component: },
      { path: 'paquetes', component: PaquetesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
