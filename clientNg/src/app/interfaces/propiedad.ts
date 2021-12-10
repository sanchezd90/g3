export interface Propiedad {
    _id:string,
    ubicacion:{
      barrio: string,
      ciudad: string,
      codigo_postal: Number
      estrato: number
      zona: string,
      _id: string
    },
    imagenes: string;
    descripcion: string;
    tipo: string;
    precio: string;    
    habitaciones: number;
    estacionamiento: boolean;                
  }