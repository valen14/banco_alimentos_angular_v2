import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterVoluntarioComponent } from './register/register-voluntario/register-voluntario.component';
import { RegisterBeneficiarioComponent } from './register/register-beneficiario/register-beneficiario.component';
import { RegisterDonanteComponent } from './register/register-donante/register-donante.component';


const routes: Routes = [
  {
    path: '', component: RegisterComponent,
    children:[
      {path: 'voluntario',component: RegisterVoluntarioComponent},
      {path: 'beneficiario',component: RegisterBeneficiarioComponent},
      {path: 'donante',component: RegisterDonanteComponent}
    ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
