import { Component, Input } from '@angular/core';
import { Propiedad } from '../../../interfaces/propiedad'

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {     
    @Input() prop!: Propiedad;     
}
