const mongoose = require('mongoose');

const propiedadSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('propiedades', propiedadSchema);
