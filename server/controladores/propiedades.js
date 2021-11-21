const Propiedad = require('../modelos/propiedad')

const crear = async (req,res) => {
  try{
    const datos = req.body;              
    propiedad = new Propiedad(datos);
    await propiedad.save()
    res.status(200).json(propiedad)
      
  }catch(error){
    console.log(error);
    res.status(500).send("Error en el registro de propiedad")  
  }    
}

const traerTodos = async (req,res) => {
    try{
      const all = await Propiedad.find({});
      console.log(all)
      res.status(200).json(all);
    }catch(error){
      res.status(500).json({'error':error});
    }
  } 

const traerPorId = async (req,res) => {
  try{  
    const id = req.params.id;    
    const propiedad = await Propiedad.findById(id);
    console.log(propiedad)
    res.status(200).json(propiedad);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const traerPorTipo = async (req,res) => {
  try{  
    const tipo = req.params.tipo;    
    const propiedad = await Propiedad.find({ tipo: `${tipo}`});
    console.log(propiedad)
    res.status(200).json(propiedad);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const traerPorEstacionamiento = async (req,res) => {
  try{  
    const estacionamiento = req.params.estacionamiento;    
    const propiedad = await Propiedad.find({ estacionamiento });
    console.log(propiedad)
    res.status(200).json(propiedad);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const traerPorHabitaciones = async (req,res) => {
  try{  
    const min = req.params.min;        
    const max = req.params.max;        
    const propiedad = await Propiedad.find({ habitaciones: {$gte: min, $lte: max}});
    console.log(propiedad)
    res.status(200).json(propiedad);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const traerPorPrecio = async (req,res) => {
  try{  
    const min = req.params.min;        
    const max = req.params.max;        
    const propiedad = await Propiedad.find({ precio: {$gte: min, $lte: max}});
    console.log(propiedad)
    res.status(200).json(propiedad);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const filtrar = async (req,res) => {
  try{  
    const tipo = req.params.tipo;  
    const precioMin = req.params.precioMin;        
    const precioMax = req.params.precioMax;        
    const habitacionesMin = req.params.habitacionesMin;        
    const habitacionesMax = req.params.habitacionesMax;
    const estacionamiento = req.params.estacionamiento;            
    const propiedad = await Propiedad.find({ tipo:tipo, precio: {$gte: precioMin, $lte: precioMax}, habitaciones: {$gte: habitacionesMin, $lte: habitacionesMax}, estacionamiento: estacionamiento,  });
    console.log(propiedad)
    res.status(200).json(propiedad);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const editar = async (req,res) => {
  try{    
    const {_id} = req.body;            
    const propiedad = req.body;
    delete propiedad["_id"];       
    const response = await Propiedad.replaceOne({_id:_id},propiedad);    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).json({'error':error});
  }     
} 

const eliminar = async (req,res) => {
  try{    
    const id = req.params.id;            
    const propiedad = req.body;
    delete propiedad["_id"];       
    const response = await Propiedad.findByIdAndDelete(id);    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).json({'error':error});
  }     
} 

  module.exports = {traerTodos, crear, traerPorId, traerPorTipo, traerPorHabitaciones, traerPorPrecio, traerPorEstacionamiento, filtrar, editar, eliminar }