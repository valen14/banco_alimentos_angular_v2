import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { DonacionesComponent } from './beneficiario/donaciones/donaciones.component';
import { DonacionComponent } from './beneficiario/donaciones/donacion/donacion.component';


@NgModule({
  declarations: [BeneficiarioComponent, DonacionesComponent, DonacionComponent],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule
  ]
})
export class BeneficiarioModule { }
