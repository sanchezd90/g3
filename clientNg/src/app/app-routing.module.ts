import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadesComponent } from './core/layout/propiedades/propiedades.component';
import { UsuariosComponent } from './core/layout/usuarios/usuarios.component';
import { AuthComponent } from './core/layout/auth/auth.component';
import { RegistroUsuarioComponent } from './core/layout/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path: 'propiedades/ver', component: PropiedadesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'login', component: AuthComponent},
  {path: 'propiedades/registro', component: RegistroUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
