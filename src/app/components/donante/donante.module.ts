import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonanteRoutingModule } from './donante-routing.module';
import { DonanteComponent } from './donante/donante.component';
import { InsignasComponent } from './donante/insignas/insignas.component';
import { DonacionesComponent } from './donante/donaciones/donaciones.component';
import { NewDonacionComponent } from './donante/new-donacion/new-donacion.component';



@NgModule({
  declarations: [
    DonanteComponent, 
    InsignasComponent, 
    DonacionesComponent, 
    NewDonacionComponent,
  ],
  imports: [
    CommonModule,
    DonanteRoutingModule
  ]
})
export class DonanteModule { }
