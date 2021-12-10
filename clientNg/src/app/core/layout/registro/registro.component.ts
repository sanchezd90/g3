import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../service/usuarios.service';
import { Usuario } from './usuario'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private service:UsuariosService) { }

  ngOnInit(): void {
  }

  model = new Usuario('','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  register(form:any): void {
    const {user_id, password, email} = form.controls                
  }

  

}
