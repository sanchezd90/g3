const Ubicacion = require('../modelos/ubicacion')

const crear = async (req,res) => {
  try{
    const datos = req.body;              
    ubicacion = new Ubicacion(datos);
    await ubicacion.save()
    res.status(200).json(ubicacion)
      
  }catch(error){
    console.log(error);
    res.status(500).send("Error en el registro de ubicacion")  
  }    
}

const traerTodos = async (req,res) => {
    try{
      const all = await Ubicacion.find({});
      console.log(all)
      res.status(200).json(all);
    }catch(error){
      res.status(500).json({'error':error});
    }
  } 

const traerPorId = async (req,res) => {
  try{  
    const id = req.params.id;    
    const ubicacion = await Ubicacion.findById(id);
    console.log(ubicacion)
    res.status(200).json(ubicacion);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const editar = async (req,res) => {
  try{    
    const {_id} = req.body;            
    const ubicacion = req.body;
    delete ubicacion["_id"];       
    const response = await Ubicacion.replaceOne({_id:_id},ubicacion);    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).json({'error':error});
  }     
} 

const eliminar = async (req,res) => {
  try{    
    const id = req.params.id;            
    const ubicacion = req.body;
    delete ubicacion["_id"];       
    const response = await Ubicacion.findByIdAndDelete(id);    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).json({'error':error});
  }     
} 

module.exports = {traerTodos, crear, traerPorId, editar, eliminar }