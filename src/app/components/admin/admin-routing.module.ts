import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { BeneficiariosComponent } from './admin/users/beneficiarios/beneficiarios.component';
import { DonantesComponent } from './admin/users/donantes/donantes.component';
import { VoluntariosComponent } from './admin/users/voluntarios/voluntarios.component';
import { BeneficiarioComponent } from './admin/users/beneficiarios/beneficiario/beneficiario.component';
import { DonanteComponent } from './admin/users/donantes/donante/donante.component';
import { VoluntarioComponent } from './admin/users/voluntarios/voluntario/voluntario.component';
import { BultosComponent } from './admin/bultos/bultos.component';
import { BultoComponent } from './admin/bultos/bulto/bulto.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { EnvioComponent } from './admin/envios/envio/envio.component';
import { CarsComponent } from './admin/cars/cars.component';
import { CarComponent } from './admin/cars/car/car.component';
import { SinAsignarComponent } from './admin/envios/sin-asignar/sin-asignar.component';
import { AsignadosComponent } from './admin/envios/asignados/asignados.component';
import { NuevoEnvioComponent } from './admin/envios/nuevo-envio/nuevo-envio.component';
import { SeleccionPaquetesComponent } from './admin/envios/nuevo-envio/seleccion-paquetes/seleccion-paquetes.component';
import { SeleccionVoluntarioComponent } from './admin/envios/sin-asignar/seleccion-voluntario/seleccion-voluntario.component';


const routes: Routes = [
  {
  path: '', component: AdminComponent,
  children: [
    {path: 'users', component: UsersComponent,
      children:[
        {path: 'beneficiarios', component: BeneficiariosComponent},
        {path: 'donantes', component: DonantesComponent},
        {path: 'voluntarios', component: VoluntariosComponent},
        {path: 'beneficiarios/:id', component: BeneficiarioComponent},
        {path: 'donantes/:id', component: DonanteComponent},
        {path: 'voluntarios/:id', component: VoluntarioComponent}
      ]
    },
    {path: 'cars', component: CarsComponent},
    {path: 'cars/:id', component: CarComponent},
    {path: 'bultos', component: BultosComponent},
    {path: 'bultos/:id', component: BultoComponent},
    {path: 'envios', component: EnviosComponent,
    children: [
      {path: 'sin-asignar',component: SinAsignarComponent},
      {path: 'asignados',component: AsignadosComponent},
      {path: 'envios/:id', component: EnvioComponent},
      {path: 'nuevo-envio', component: NuevoEnvioComponent},
      {path: 'seleccion-paquetes',component: SeleccionPaquetesComponent},
      {path: 'seleccion-voluntarios', component: SeleccionVoluntarioComponent}
    ]
  },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
