var mongoose = require('mongoose');

const propiedadesSchema = new mongoose.Schema({
    zona1: {
        type: String,
        require: true,
        trim: true
    },
    zona2: {
        type: String,
        require: true,
        trim: true
    },
    zona3: {
        type: String,
        require: true,
        trim: true
    },
    zona4: {
        type: String,
        require: true,
        trim: true
    },
    
});

module.exports = mongoose.model('zonas', zonasSchema);
