import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../service/usuarios.service';
import { Usuario } from './usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UsuariosService) { }

  ngOnInit(): void {
  }
  model = new Usuario('','');
  submitted = false;
  hidden = true;
  passwordAlert=false;
  userAlert=false;


  onSubmit() { this.submitted = true; }

  async login(form:any) {
    const {user_id, password} = form.controls
    if(user_id.value==="" || password.value===""){
      this.hidden=false                
    }else{
      this.hidden=true
      try{      
        const [response]:any = await this.service.traerPorUserId(
          user_id.value,          
        );
        console.log(response)
        if(!response){
          this.userAlert=true;
        }else{
          if(response.password===password.value){
            this.userAlert=false;
            this.passwordAlert=false;
          }else{
            this.userAlert=false;
            this.passwordAlert=true;
          }
        }        
      }catch (error:any) {
        console.log(error)    
      }      
    }
  }

}
