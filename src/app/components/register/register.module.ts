import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterDonanteComponent } from './register/register-donante/register-donante.component';
import { RegisterBeneficiarioComponent } from './register/register-beneficiario/register-beneficiario.component';
import { RegisterVoluntarioComponent } from './register/register-voluntario/register-voluntario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent, RegisterDonanteComponent, RegisterBeneficiarioComponent, RegisterVoluntarioComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
