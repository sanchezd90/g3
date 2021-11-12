const Propiedades = require('../modelos/propiedades')

const getAll = async (req,res) => {
    try{
      const all = await Propiedades.find({});
      console.log(all)
      res.status(200).json(all);
    }catch(error){
      res.status(500).json({'error':error});
    }
  }

  module.exports = {getAll}