import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/layout/home/home.component';
import { LoginComponent } from './core/layout/login/login.component';
import { RegistroComponent } from './core/layout/registro/registro.component';
import { RegistroPropiedadesComponent } from './core/layout/registro-propiedades/registro-propiedades.component';
import { AcercaComponent } from './core/layout/acerca/acerca.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: 'propiedades', component: RegistroPropiedadesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
