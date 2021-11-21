import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadesComponent } from './core/layout/propiedades/propiedades.component';

const routes: Routes = [
  {path: 'propiedades', component: PropiedadesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
