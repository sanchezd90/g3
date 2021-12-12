import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../../service/propiedades.service';
import { Propiedad } from './propiedad';
import { UbicacionesService } from '../../../service/ubicaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-propiedades',
  templateUrl: './registro-propiedades.component.html',
  styleUrls: ['./registro-propiedades.component.css'],
})
export class RegistroPropiedadesComponent implements OnInit {
  ubicaciones: any = [];

  constructor(
    private service: PropiedadesService,
    private ubicacionesService: UbicacionesService,
    private router: Router
  ) {}

  async ngOnInit() {
    const ubicaciones: any = await this.ubicacionesService.traerTodos();
    this.ubicaciones = ubicaciones;
    console.log(this.ubicaciones);
  }

  tipos = ['apartamento', 'casa', 'apartaestudio'];

  model = new Propiedad('', '', '', '', false, '', '');

  submitted = false;
  fieldAlert = false;

  onSubmit() {
    this.submitted = true;
  }

  async registrar(form: any) {
    const {
      descripcion,
      tipo,
      ubicacion,
      habitaciones,
      estacionamiento,
      precio,
    } = form.controls;
    console.log(
      descripcion.value,
      ubicacion.value,
      tipo.value,
      precio.value,
      habitaciones.value,
      estacionamiento.value
    );
    if (
      descripcion.value === '' ||
      ubicacion.value === '' ||
      tipo.value === '' ||
      precio.value === '' ||
      habitaciones.value === ''
    ) {
      this.fieldAlert = true;
    } else {
      this.fieldAlert = false;
      try {
        const response = await this.service.crear({
          descripcion: descripcion.value,
          ubicacion: ubicacion.value,
          tipo: tipo.value,
          precio: precio.value,
          habitaciones: habitaciones.value,
          estacionamiento:estacionamiento.value,
          imagenes:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png'
        });
        console.log(response);
        this.router.navigate(['/'])
      } catch (error: any) {
        console.log(error);
      }
    }
  }
}
