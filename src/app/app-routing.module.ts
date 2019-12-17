import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacionDonanteComponent } from './organizacion-donante/organizacion-donante.component';
import { NewOrganizacionDonanteComponent } from './new-organizacion-donante/new-organizacion-donante.component';
import { EditOrganizacionDonanteComponent } from './edit-organizacion-donante/edit-organizacion-donante.component';
import { NotFoundComponent } from './core/not-found/not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home', component: OrganizacionDonanteComponent },
  //dinámico
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  //estatico
  { path: '**', redirectTo: '/notFound', pathMatch: 'full'},
  { path: 'notFound', component: NotFoundComponent}, 
  { path: 'new-organizacion-donante', component: NewOrganizacionDonanteComponent },
  { path: 'modify-organizacion-donante/:idx', component: EditOrganizacionDonanteComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
