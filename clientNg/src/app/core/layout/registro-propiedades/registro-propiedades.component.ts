import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../../service/propiedades.service';
import {Propiedad} from './propiedad'
import { UbicacionesService } from '../../../service/ubicaciones.service';

@Component({
  selector: 'app-registro-propiedades',
  templateUrl: './registro-propiedades.component.html',
  styleUrls: ['./registro-propiedades.component.css']
})
export class RegistroPropiedadesComponent implements OnInit {

  ciudades: any = [];  

  constructor(private service:PropiedadesService, private ubicacionesService:UbicacionesService) { }

  async ngOnInit() {
    const ciudades : any = await this.ubicacionesService.traerCiudades();
    this.ciudades = ciudades;    
    console.log(this.ciudades)
  }

  tipos = ['apartamento',"casa","apartaestudio"];

  model = new Propiedad('','','','',false,'','');

  submitted = false;
  fieldAlert=false;

  onSubmit() { this.submitted = true; }

  async registrar(form:any) {
    const {descripcion, tipo, ubicacion, habitaciones, estacionamiento,precio} = form.controls
    console.log(descripcion, tipo, ubicacion, habitaciones, estacionamiento,precio)
    if(descripcion.value===''|| ubicacion.value===''|| tipo.value===''|| precio.value===''|| habitaciones.value===''){
      this.fieldAlert=true;
    }else{
      this.fieldAlert=false;
    }
  }

}
