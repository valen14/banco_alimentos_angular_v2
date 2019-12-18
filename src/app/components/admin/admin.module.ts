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
import { BultosComponent } from './admin/bultos/bultos.component';
import { BultoComponent } from './admin/bultos/bulto/bulto.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { EnvioComponent } from './admin/envios/envio/envio.component';


@NgModule({
  declarations: [AdminComponent,  UsersComponent, BeneficiariosComponent, DonantesComponent, VoluntariosComponent, VoluntarioComponent, DonanteComponent, BeneficiarioComponent, BultosComponent, BultoComponent, EnviosComponent, EnvioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
