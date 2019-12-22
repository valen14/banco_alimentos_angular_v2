import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonanteComponent } from './donante/donante.component';
import { DonacionesComponent } from './donante/donaciones/donaciones.component';
import { DonacionComponent } from './donante/donaciones/donacion/donacion.component';
import { NewDonacionComponent } from './donante/donaciones/new-donacion/new-donacion.component';
import { InsignasComponent } from './donante/insignas/insignas.component';



const routes: Routes = [
  {path: '', component: DonanteComponent,
  children:[
    {path: 'donaciones', component: DonacionesComponent},
  
    {path: 'donaciones/new-donacion', component: NewDonacionComponent},
  
    {path: 'donaciones/:id', component: DonacionComponent},
    
    {path: 'insignas', component: InsignasComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonanteRoutingModule { }
