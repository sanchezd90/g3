var mongoose = require('mongoose');

const usuarioScheme=new mongoose.Schema(
{
      user_id: {
         type: String
      },
     
      password: {
          type: String
      }
}

)
module.exports= mongoose.model('usuario', usuarioScheme)




