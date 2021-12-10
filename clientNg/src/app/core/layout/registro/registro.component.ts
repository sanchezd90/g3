import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../service/usuarios.service';
import { Usuario } from './usuario'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private service:UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  model = new Usuario('','','');

  submitted = false;
  hidden = true;


  onSubmit() { this.submitted = true; }

  async register(form:any) {
    const {user_id, password, email} = form.controls
    if(user_id.value==="" || password.value==="" || email.value===""){
      this.hidden=false                
    }else{
      this.hidden=true
      try{      
        const response = await this.service.crear({
          user_id:user_id.value,
          password:password.value,
          email:email.value  
        });
        console.log(response)
        this.router.navigate(['/'])    
      }catch (error:any) {
        console.log(error)    
      }      
    }
  }  

}
