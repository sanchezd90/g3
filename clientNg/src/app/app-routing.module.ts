import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadesComponent } from './core/layout/propiedades/propiedades.component';
import { UsuariosComponent } from './core/layout/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'propiedades', component: PropiedadesComponent},
  {path: 'usuarios', component: UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
