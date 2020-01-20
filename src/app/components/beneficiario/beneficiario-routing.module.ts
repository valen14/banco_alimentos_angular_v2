import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { DonacionesComponent } from './beneficiario/donaciones/donaciones.component';
import { DonacionComponent } from './beneficiario/donaciones/donacion/donacion.component';


const routes: Routes = [
  {path: '', component: BeneficiarioComponent,
  children:[
    {path: 'donaciones/:filter', component: DonacionesComponent},
    {path: 'donaciones/:id/ver', component: DonacionComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiarioRoutingModule { }
