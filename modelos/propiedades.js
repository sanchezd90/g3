const mongoose = require('mongoose');

const propiedadesSchema = mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        trim: true,
        unique: true,       
    },
    tipo:{
        type: String,
        require: true,
        trim: true
    },    
    descripcion:{
        type: String,
        require: true,
        trim: true
    },    
    zona:{
        type: String,
        require: true,
        trim: true
    },    
    ciudad:{
        type: String,
        require: true,
        trim: true
    },    
    habitaciones:{
        type: Number,
        require: true,
        trim: true
    },    
    estacionamiento:{
        type: Boolean,
        require: true,
        trim: true
    },    
    imagenes:{
        type: string,
        require: true,
        trim: true
    },    
    precio:{
        type: Number,
        require: true,
        trim: true
    }   
});

module.exports = mongoose.model('propiedades', propiedadesSchema);