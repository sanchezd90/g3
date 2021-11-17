const express = require ('express');
const app = express();
const connectDB = require('./service/bd');

const dotenv = require('dotenv');
dotenv.config();

connectDB();

app.use(express.json({ extended: true }));

const PORT = process.env.SERVER_PORT || 4000

app.use('/api/propiedades',require('./routes/propiedades'));
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/ubicacion',require('./routes/ubicacion'));

app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`)
})

