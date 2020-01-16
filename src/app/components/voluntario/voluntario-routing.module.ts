import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { EnviosComponent } from './voluntario/envios/envios.component';
import { EnvioComponent } from './voluntario/envios/envio/envio.component';
import { CarComponent } from './voluntario/cars/car/car.component';
import { CarsComponent } from './voluntario/cars/cars.component';
import { InsignasComponent } from './voluntario/insignas/insignas.component';


const routes: Routes = [
  {
    path: '', component: VoluntarioComponent,
    children:[
      {path: 'envios/:filter', component: EnviosComponent},
      {path: 'envios/:id/ver', component: EnvioComponent},           
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
