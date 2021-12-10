import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UbicacionesService extends BaseService {
  crear(params:any) {
    this.setEndPoint(`ubicaciones/crear`);
    return this.post(params);
  }
  traerTodos() {
    this.setEndPoint(`ubicaciones/traer`);
    return this.get();
  }
  traerPorId(id: any) {
    this.setEndPoint(`ubicaciones/traer/id/${id}`);
    return this.get();
  }  
  traerPorCiudad(ciudad: any) {
    this.setEndPoint(`ubicaciones/traer/ciudad/${ciudad}`);
    return this.get();
  }  
  traerCiudades() {
    this.setEndPoint(`ubicaciones/ciudades`);
    return this.get();
  }  
  editar(params:any) {
    this.setEndPoint(`ubicaciones/editar`);
    return this.post(params);
  }
  eliminar(params:any) {
    this.setEndPoint(`ubicaciones/eliminar`);
    return this.post(params);
  }
}
