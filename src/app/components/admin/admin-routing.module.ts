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
    {path: 'bultos', component: BultosComponent},
    {path: 'bultos/:id', component: BultoComponent},
    {path: 'envios', component: EnviosComponent},
    {path: 'envios/:id', component: EnvioComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
