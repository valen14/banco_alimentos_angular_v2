import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonanteRoutingModule } from './donante-routing.module';
import { DonanteComponent } from './donante/donante.component';
import { InsignasComponent } from './donante/insignas/insignas.component';
import { DonacionesComponent } from './donante/donaciones/donaciones.component';
import { DonacionComponent } from './donante/donaciones/donacion/donacion.component';
import { NewDonacionComponent } from './donante/donaciones/new-donacion/new-donacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DonanteComponent, InsignasComponent, DonacionesComponent, DonacionComponent, NewDonacionComponent,],
  imports: [
    CommonModule,
    DonanteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DonanteModule { }
