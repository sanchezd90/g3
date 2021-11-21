import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService extends BaseService {
  crear(params:any) {
    this.setEndPoint(`propiedades/crear`);
    return this.post(params);
  }
  traerTodos() {
    this.setEndPoint(`propiedades/traer`);
    return this.get();
  }
  traerPorId(id: any) {
    this.setEndPoint(`propiedades/traer/id/${id}`);
    return this.get();
  }
  traerPorTipo(tipo: any) {
    this.setEndPoint(`propiedades/traer/tipo/${tipo}`);
    return this.get();
  }
  traerPorHabitaciones(min: any, max: any) {
    this.setEndPoint(`propiedades/traer/habitaciones/${min}/${max}`);
    return this.get();
  }
  traerPorPrecio(min: any, max: any) {
    this.setEndPoint(`propiedades/traer/precio/${min}/${max}`);
    return this.get();
  }
  traerPorEstacionamiento(estacionamiento: any) {
    this.setEndPoint(`propiedades/traer/estacionamiento/${estacionamiento}`);
    return this.get();
  }
  filtrar(
    tipo: any,
    precioMin: any,
    precioMax: any,
    habitacionesMin: any,
    habitacionesMax: any,
    estacionamiento: any
  ) {
    this.setEndPoint(
      `propiedades/filtrar/${tipo}/${precioMin}/${precioMax}/${habitacionesMin}/${habitacionesMax}/${estacionamiento}`
    );
    return this.get();
  }
}
