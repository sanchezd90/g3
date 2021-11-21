import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService extends BaseService {
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
}
