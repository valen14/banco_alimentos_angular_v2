import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonanteComponent } from './donante/donante.component';
import { DonacionesComponent } from './donante/donaciones/donaciones.component';
import { NewDonacionComponent } from './donante/new-donacion/new-donacion.component';
import { InsignasComponent } from './donante/insignas/insignas.component';
import { EditDonacionComponent } from './donante/edit-donacion/edit-donacion.component';



const routes: Routes = [
  {
    path: '', component: DonanteComponent},
   
      { path: 'donaciones', component: DonacionesComponent },
      { path: 'new-donacion', component: NewDonacionComponent },
      { path: 'edit-donacion/:idx', component: EditDonacionComponent},
      { path: 'insignas', component: InsignasComponent },
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonanteRoutingModule { }
