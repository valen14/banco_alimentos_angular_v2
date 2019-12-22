import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterVoluntarioComponent } from './register/register-voluntario/register-voluntario.component';
import { RegisterBeneficiarioComponent } from './register/register-beneficiario/register-beneficiario.component';
import { RegisterDonanteComponent } from './register/register-donante/register-donante.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register-voluntario', component: RegisterVoluntarioComponent },
  { path: 'voluntario', loadChildren: () => import('../voluntario/voluntario.module').then(m => m.VoluntarioModule) },
  { path: 'register-donante', component: RegisterDonanteComponent },
  { path: 'donante', loadChildren: () => import('../donante/donante.module').then(m => m.DonanteModule) },
  { path: 'register-beneficiario', component: RegisterBeneficiarioComponent },
  { path: 'beneficiario', loadChildren: () => import('../beneficiario/beneficiario.module').then(m => m.BeneficiarioModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
