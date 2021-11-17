var mongoose = require('mongoose');

const usuarioSchema=new mongoose.Schema(
{
      user_id: {
         type: String
      },
     
      password: {
          type: String
      }
}

)
module.exports= mongoose.model('usuarios', usuarioSchema)




