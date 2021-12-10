const mongoose = require('mongoose');

const ubicacionSchema = new mongoose.Schema({
    barrio: {
        type: String,        
        trim: true
    },
    estrato: {
        type: Number,        
        trim: true
    },
    zona: {
        type: String,        
        trim: true
    },
    ciudad: {
        type: String,
        require: true,
        trim: true
    },
    
    codigo_postal: {
        type: Number,        
        trim: true
    },
    
});

module.exports = mongoose.model('ubicaciones', ubicacionSchema);
