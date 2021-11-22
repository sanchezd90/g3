import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropiedadesComponent } from './core/layout/propiedades/propiedades.component';
import { UsuariosComponent } from './core/layout/usuarios/usuarios.component';
import { AuthComponent } from './core/layout/auth/auth.component';
import { RegistroUsuarioComponent } from './core/layout/registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PropiedadesComponent,
    UsuariosComponent,
    AuthComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
