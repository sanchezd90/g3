const mongoose = require('mongoose');

const propiedadesSchema = new mongoose.Schema({
    rut: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    ubicacion: {
        type: String,
        require: true,
        trim: true
    },
    razon_social: {
        type: Number,
        require: true,
        trim: true
    },
    
});

module.exports = mongoose.model('propiedades', propiedadesSchema);
