const Usuario = require('../modelos/usuario')

const crear = async (req,res) => {
  try{
    const datos = req.body;              
    propiedad = new Usuario(datos);
    await propiedad.save()
    res.status(200).json(propiedad)
      
  }catch(error){
    console.log(error);
    res.status(500).json({'error':error});
  }    
} 

const traerTodos = async (req,res) => {
    try{      
      const all = await Usuario.find({});
      console.log(all)
      res.status(200).json(all);
    }catch(error){
      res.status(500).json({'error':error});
    }
  }

const traerPorId = async (req,res) => {
    try{  
      const id = req.params.id;    
      const usuario = await Usuario.findById(id);
      console.log(usuario)
      res.status(200).json(usuario);
    }catch(error){
      res.status(500).json({'error':error});
    }
  }

  const traerPorUserId = async (req,res) => {
    try{  
      const user_id = req.params.user_id;        
      const all = await Usuario.find({user_id: user_id});
      console.log(all)
      res.status(200).json(all);
    }catch(error){
      res.status(500).json({'error':error});
    }
  }


const editar = async (req,res) => {
  try{    
    const {_id} = req.body;            
    const usuario = req.body;
    delete usuario["_id"];       
    const response = await Usuario.replaceOne({_id:_id},usuario);    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).json({'error':error});
  }     
} 

const eliminar = async (req,res) => {
  try{    
    const {_id} = req.body;                
    const response = await Usuario.findByIdAndDelete({_id:_id});    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).json({'error':error});
  }     
} 


  module.exports = {traerTodos, traerPorId, traerPorUserId, crear, editar, eliminar}

