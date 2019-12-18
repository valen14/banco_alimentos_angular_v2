import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //dinámico
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  
  //estatico
  { path: '**', redirectTo: '/notFound', pathMatch: 'full'},
  { path: 'notFound', component: NotFoundComponent}, 
  //{ path: 'new-organizacion-donante', component: NewOrganizacionDonanteComponent },
  //{ path: 'modify-organizacion-donante/:idx', component: EditOrganizacionDonanteComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
