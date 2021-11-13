var mongoose = require('mongoose');

const userscheme=new mongoose.Schema(
{
      cedula: {
         type: String
      },
      nombre: {
          type: String
      },
      password: {
          type: String
      }
}

)
module.exports= mongoose.model('usuario', userscheme)




