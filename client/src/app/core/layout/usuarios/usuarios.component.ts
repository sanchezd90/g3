import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any = [];

  constructor(private service:UsuariosService) { }
  
  async ngOnInit(){
    const usuarios : any = await this.service.traerTodos();
    this.usuarios = usuarios;
    console.log(this.usuarios)
  }

}
