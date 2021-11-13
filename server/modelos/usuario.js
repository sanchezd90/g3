var mongoose = require('mongoose');

const userscheme=new mongoose.Schema(
{
      user_id: {
         type: String
      },
     
      password: {
          type: String
      }
}

)
module.exports= mongoose.model('usuario', userscheme)




