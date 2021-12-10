export class Busqueda {
    constructor(        
        public ciudad: string,
        public tipo: string,
        public precioMin: string,   
        public precioMax: string,   
        public habitacionesMin: string,
        public habitacionesMax: string,
        public estacionamiento: string,               
    ) {}
  }