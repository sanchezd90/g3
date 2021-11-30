import { Component} from '@angular/core';

@Component({
  selector: 'app-filtro-propiedades',
  templateUrl: './filtro-propiedades.component.html',
  styleUrls: ['./filtro-propiedades.component.css']
})
export class FiltroPropiedadesComponent{

  tipos = ['apartamento',"casa","apartaestudio"];

  submitted = false;

  onSubmit() { this.submitted = true; }

}
