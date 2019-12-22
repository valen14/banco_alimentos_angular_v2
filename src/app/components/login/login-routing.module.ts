import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)},
  // {path: 'donante', loadChildren: () => import('../donante/donante.module').then(m => m.DonanteModule)},
  // {path: 'voluntario', loadChildren: () => import('../voluntario/voluntario.module').then(m => m.VoluntarioModule)},
  // {path: 'beneficiario', loadChildren: () => import('../beneficiario/beneficiario.module').then(m => m.BeneficiarioModule)},
  {path: 'login/:type', component: LoginFormComponent, children:[
    
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
