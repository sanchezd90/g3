import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../../service/propiedades.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {

  propiedades: any = [];

  constructor(private service:PropiedadesService) { }
  
  async ngOnInit(){
    const propiedades : any = await this.service.traerTodos();
    this.propiedades = propiedades;
    console.log(this.propiedades)
  }

}
