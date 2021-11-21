var mongoose = require('mongoose');

const usuarioSchema=new mongoose.Schema(
{
      user_id: {
         type: String,
         required: true,
         trim: true,
         unique: true
      },    
      password: {
          type: String,
          require: true,
          trim: true,          
      },
      email: {
          type: String,
          required: true,
          trim: true,
          unique: true
      },      
      nombre: {
          type: String,
          trim: true,                   
      },      
      apellido: {
          type: String,
          trim: true,                   
      },      
      ubicacion: {
        type: mongoose.Schema.Types.ObjectId,          
      },      
}

)
module.exports= mongoose.model('usuarios', usuarioSchema)




