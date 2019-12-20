import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonanteComponent } from './donante/donante.component';
import { DonacionesComponent } from './donante/donaciones/donaciones.component';
import { DonacionComponent } from './donante/donaciones/donacion/donacion.component';
import { NewDonacionComponent } from './donante/donaciones/new-donacion/new-donacion.component';
import { InsignasComponent } from './donante/insignas/insignas.component';



const routes: Routes = [
  {
    path: '', component: DonanteComponent,
    children: [
      {
        path: 'donaciones', component: DonacionesComponent,
        children: [
          { path: 'new-donacion', component: NewDonacionComponent },
          { path: 'insignas', component: InsignasComponent }
        ]
      },
      { path: 'donaciones/:id', component: DonacionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonanteRoutingModule { }
