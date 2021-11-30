import { Output, EventEmitter } from '@angular/core';
import { Component} from '@angular/core';
import { PropiedadesComponent } from '../propiedades/propiedades.component';
import { PropiedadesService } from '../../../service/propiedades.service';
import { Busqueda } from './busqueda'
import { Propiedad } from '../../../interfaces/propiedad'

@Component({
  selector: 'app-filtro-propiedades',
  templateUrl: './filtro-propiedades.component.html',
  styleUrls: ['./filtro-propiedades.component.css']
})
export class FiltroPropiedadesComponent{

  constructor(private service:PropiedadesService) { }

  tipos = ['apartamento',"casa","apartaestudio"];

  model = new Busqueda('','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }


  async filter(form:any) {
    const {tipo, precioMin, precioMax, habitacionesMin, habitacionesMax, estacionamiento} = form.controls        
    if (precioMin.value=='') precioMin.value='0';
    if (precioMax.value=='') precioMax.value='99999999999999';
    if (habitacionesMin.value=='') habitacionesMin.value='0';
    if (habitacionesMax.value=='') habitacionesMax.value='100';
    if (estacionamiento.value=='') estacionamiento.value='false';
    const results = await this.service.filtrar(
        tipo.value,
        precioMin.value,
        precioMax.value,
        habitacionesMin.value,
        habitacionesMax.value,
        estacionamiento.value
        );
      console.log(results)
      this.nuevaBusqueda.emit(results);
    }

  @Output() nuevaBusqueda = new EventEmitter();

}
