import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../../service/propiedades.service';
import { Propiedad } from '../../../interfaces/propiedad'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  propiedades: any = [];  
  ubicacion: string = '';
  tipo: string = '';  
  precioMin: number = 0;  
  precioMax: number = 100000000;      
  habitacionesMin: number = 0;  
  habitacionesMax: number = 10;      
  estacionamiento: boolean = false;
  
  hideNoResults = true;

  constructor(private service:PropiedadesService) { }

  async ngOnInit() {
    const propiedades : any = await this.service.traerTodos();
    this.propiedades = propiedades;
    console.log(this.propiedades)
  }

  updateProps(newArray:any) {    
    this.propiedades = newArray    
  }

}
