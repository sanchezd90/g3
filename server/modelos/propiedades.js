const mongoose = require('mongoose');

const propiedadesSchema = mongoose.Schema({
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    tipo: {
        type: String,
        require: true,
        trim: true
    },
    ubicacion: {
        type: String,
        require: true,
        trim: true
    },
    habitaciones: {
        type: Number,
        require: true,
        trim: true
    },
    estacionamiento: {
        type: String,
        require: true,
        trim: true
    },
    ubicacion: {
        type: String,
        require: true,
        trim: true
    },
    
    imagenes: {
        type: String,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('propiedades', propiedadesSchema);
