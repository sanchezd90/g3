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

  module.exports = {traerTodos, crear, traerPorId, editar, eliminar }