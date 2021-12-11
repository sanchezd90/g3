const express = require ('express');
const cors = require("cors");
const app = express();
const connectDB = require('./service/bd');

const dotenv = require('dotenv');
dotenv.config();

connectDB();

const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions))

app.use(express.json({ extended: true }));

const PORT = 4000

app.use('/api/propiedades',require('./routes/propiedades'));
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/ubicaciones',require('./routes/ubicaciones'));

app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`)
})

