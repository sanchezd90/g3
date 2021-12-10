const mongoose = require('mongoose');

const propiedadSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    ubicacion: {
        type: String,
        required: true,
        trim: true
    },
    habitaciones: {
        type: Number,
        required: true,
        trim: true
    },
    estacionamiento: {
        type: Boolean,
        required: true,
        trim: true
    },
    
    imagenes: {
        type: String,        
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('propiedades', propiedadSchema);
