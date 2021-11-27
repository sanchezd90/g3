import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadesComponent } from './core/layout/propiedades/propiedades.component';
import { UsuariosComponent } from './core/layout/usuarios/usuarios.component';
import { AuthComponent } from './core/layout/auth/auth.component';
import { RegistroUsuarioComponent } from './core/layout/registro-usuario/registro-usuario.component';
import { HomeComponent } from './core/layout/home/home.component';
import { LoginComponent } from './core/layout/login/login.component';
import { RegistroComponent } from './core/layout/registro/registro.component';
import { AcercaComponent } from './core/layout/acerca/acerca.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'propiedades/ver', component: PropiedadesComponent},
  {path: 'propiedades/registro', component: RegistroUsuarioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'acerca', component: AcercaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
