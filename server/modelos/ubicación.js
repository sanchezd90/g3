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
        type: String,
        require: true,
        trim: true
    },
    zona: {
        type: Number,
        require: true,
        trim: true
    },
    ciudad: {
        type: String,
        require: true,
        trim: true
    },
    
    codigo_postal: {
        type: String,
        require: true,
        trim: true
    },
    
});

module.exports = mongoose.model('ubicacion', ubicacionSchema);
