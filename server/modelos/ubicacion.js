const mongoose = require('mongoose');

const propiedadesSchema = new mongoose.Schema({
    barrio: {
        type: String,
        require: true,
        trim: true
    },
    direccion: {
        type: String,
        require: true,
        trim: true
    },
    estrato: {
        type: Number,
        require: true,
        trim: true
    },
    zona: {
        type: String,
        require: true,
        trim: true
    },
    ciudad: {
        type: String,
        require: true,
        trim: true
    },
    
    codigo_postal: {
        type: Number,
        require: true,
        trim: true
    },
    
});

module.exports = mongoose.model('ubicacion', ubicacionSchema);
