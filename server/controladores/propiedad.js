const Propiedad = require('../modelos/propiedad')

const traerTodos = async (req,res) => {
    try{
      const all = await Propiedad.find({});
      console.log(all)
      res.status(200).json(all);
    }catch(error){
      res.status(500).json({'error':error});
    }
  }

const crear = async (req,res) => {
  try{
    const datos = req.body;              
    propiedad = new Propiedad(datos);
    await propiedad.save()
    res.status(200).json(propiedad)
      
  }catch(error){
    console.log(error);
    res.status(400).send("Error en el registro de propiedad")  
  }    
} 

//TRAER POR ID
// const getAll = async (req,res) => {
//     try{
//       const all = await Propiedad.find({});
//       console.log(all)
//       res.status(200).json(all);
//     }catch(error){
//       res.status(500).json({'error':error});
//     }
//   }

//ACTUALIZAR
// const getAll = async (req,res) => {
//     try{
//       const all = await Propiedad.find({});
//       console.log(all)
//       res.status(200).json(all);
//     }catch(error){
//       res.status(500).json({'error':error});
//     }
//   }

//ELIMINAR
// const getAll = async (req,res) => {
//     try{
//       const all = await Propiedad.find({});
//       console.log(all)
//       res.status(200).json(all);
//     }catch(error){
//       res.status(500).json({'error':error});
//     }
//   }

  module.exports = {traerTodos, crear}