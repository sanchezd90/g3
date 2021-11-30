import { Component} from '@angular/core';
import { PropiedadesComponent } from '../propiedades/propiedades.component';
import { Busqueda } from './busqueda'

@Component({
  selector: 'app-filtro-propiedades',
  templateUrl: './filtro-propiedades.component.html',
  styleUrls: ['./filtro-propiedades.component.css']
})
export class FiltroPropiedadesComponent{

  tipos = ['apartamento',"casa","apartaestudio"];

  model = new Busqueda('','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
