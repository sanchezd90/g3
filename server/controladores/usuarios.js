const Usuario = require('../modelos/usuario')

const traerTodos = async (req,res) => {
    try{      
      const all = await Usuario.find({});
      console.log(all)
      res.status(200).json(all);
    }catch(error){
      res.status(500).json({'error':error});
    }
  }

const crear = async (req,res) => {
  try{
    const datos = req.body;              
    propiedad = new Usuario(datos);
    await propiedad.save()
    res.status(200).json(propiedad)
      
  }catch(error){
    console.log(error);
    res.status(400).send("Error en el registro de propiedad")  
  }    
} 

  module.exports = {traerTodos, crear}