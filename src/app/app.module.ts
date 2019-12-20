import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrganizacionDonanteComponent } from './organizacion-donante/organizacion-donante.component';
import { NewOrganizacionDonanteComponent } from './new-organizacion-donante/new-organizacion-donante.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditOrganizacionDonanteComponent } from './edit-organizacion-donante/edit-organizacion-donante.component';
import { CoreModule } from './components/core/core.module';
import { SDKBrowserModule } from './service/lbservice';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard'; 

@NgModule({
  declarations: [
    AppComponent,
    OrganizacionDonanteComponent,
    NewOrganizacionDonanteComponent,
    EditOrganizacionDonanteComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
