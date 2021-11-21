import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService extends BaseService {
  crear(params:any) {
    this.setEndPoint(`usuarios/crear`);
    return this.post(params);
  }
  traerTodos() {
    this.setEndPoint(`usuarios/traer`);
    return this.get();
  }
  traerPorId(id: any) {
    this.setEndPoint(`usuarios/traer/id/${id}`);
    return this.get();
  }
  traerPorUserId(user_id: any) {
    this.setEndPoint(`usuarios/traer/user_id/${user_id}`);
    return this.get();
  }  
  editar(params:any) {
    this.setEndPoint(`usuarios/editar`);
    return this.post(params);
  }
  eliminar(params:any) {
    this.setEndPoint(`usuarios/eliminar`);
    return this.post(params);
  }
}
