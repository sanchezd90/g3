import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropiedadesComponent } from './core/layout/propiedades/propiedades.component';
import { UsuariosComponent } from './core/layout/usuarios/usuarios.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HomeComponent } from './core/layout/home/home.component';
import { AcercaComponent } from './core/layout/acerca/acerca.component';
import { LoginComponent } from './core/layout/login/login.component';
import { RegistroComponent } from './core/layout/registro/registro.component';
import { RegistroPropiedadesComponent } from './core/layout/registro-propiedades/registro-propiedades.component';
import { FiltroPropiedadesComponent } from './core/layout/filtro-propiedades/filtro-propiedades.component';

@NgModule({
  declarations: [
    AppComponent,
    PropiedadesComponent,
    UsuariosComponent,    
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AcercaComponent,
    LoginComponent,
    RegistroComponent,
    RegistroPropiedadesComponent,
    FiltroPropiedadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
