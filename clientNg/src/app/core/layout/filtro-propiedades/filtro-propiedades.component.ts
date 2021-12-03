import { Output, EventEmitter } from '@angular/core';
import { Component} from '@angular/core';
import { PropiedadesComponent } from '../propiedades/propiedades.component';
import { PropiedadesService } from '../../../service/propiedades.service';
import { Busqueda } from './busqueda'
import { Propiedad } from '../../../interfaces/propiedad'
import { UbicacionesService } from '../../../service/ubicaciones.service';

@Component({
  selector: 'app-filtro-propiedades',
  templateUrl: './filtro-propiedades.component.html',
  styleUrls: ['./filtro-propiedades.component.css']
})
export class FiltroPropiedadesComponent{

  ciudades: any = [];  

  constructor(private service:PropiedadesService, private ubicacionesService:UbicacionesService) { }

  async ngOnInit() {
    const ciudades : any = await this.ubicacionesService.traerCiudades();
    this.ciudades = ciudades;
    this.ciudades.push('Todas')
    console.log(this.ciudades)
  }

  tipos = ['apartamento',"casa","apartaestudio"];

  model = new Busqueda('','','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }


  async filter(form:any) {
    const {ciudad, tipo, precioMin, precioMax, habitacionesMin, habitacionesMax, estacionamiento} = form.controls            
    if (precioMin.value=='') precioMin.value='0';
    if (precioMax.value=='') precioMax.value='99999999999999';
    if (habitacionesMin.value=='') habitacionesMin.value='0';
    if (habitacionesMax.value=='') habitacionesMax.value='100';
    if (estacionamiento.value=='') estacionamiento.value='false';
    const propiedades:any = await this.service.filtrar(
        tipo.value,
        precioMin.value,
        precioMax.value,
        habitacionesMin.value,
        habitacionesMax.value,
        estacionamiento.value
        );
    propiedades.map(async(propiedad: { ubicacion: any; })=>{
          propiedad.ubicacion=await this.ubicacionesService.traerPorId(propiedad.ubicacion);
        })
    let propiedadesEnCiudad:any = []
    if (ciudad.value!=='Todas') {
      propiedadesEnCiudad = await this.ubicacionesService.traerPorCiudad(ciudad.value);
      propiedadesEnCiudad=propiedadesEnCiudad.map((p: { _id: any; })=>p._id)
    } else {
      propiedadesEnCiudad = await this.ubicacionesService.traerTodos();
      propiedadesEnCiudad=propiedadesEnCiudad.map((p: { _id: any; })=>p._id)
    }
    console.log(propiedadesEnCiudad)
    const results = propiedades.filter((propiedad: { ubicacion: any; }) => propiedadesEnCiudad.includes(propiedad.ubicacion._id))
    console.log(results)
    this.nuevaBusqueda.emit(results);
    }

    async reset() {
      const propiedades:any = await this.service.traerTodos();
      propiedades.map(async(propiedad: { ubicacion: any; })=>{
          propiedad.ubicacion=await this.ubicacionesService.traerPorId(propiedad.ubicacion);
        })
        this.nuevaBusqueda.emit(propiedades);
    }

  @Output() nuevaBusqueda = new EventEmitter();

}
