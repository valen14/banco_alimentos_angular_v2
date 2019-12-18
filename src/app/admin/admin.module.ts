import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { BeneficiariosComponent } from './admin/users/beneficiarios/beneficiarios.component';
import { DonantesComponent } from './admin/users/donantes/donantes.component';
import { VoluntariosComponent } from './admin/users/voluntarios/voluntarios.component';
import { VoluntarioComponent } from './admin/users/voluntarios/voluntario/voluntario.component';
import { DonanteComponent } from './admin/users/donantes/donante/donante.component';
import { BeneficiarioComponent } from './admin/users/beneficiarios/beneficiario/beneficiario.component';


@NgModule({
  declarations: [AdminComponent,  UsersComponent, BeneficiariosComponent, DonantesComponent, VoluntariosComponent, VoluntarioComponent, DonanteComponent, BeneficiarioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
