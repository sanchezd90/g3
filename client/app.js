const express = require ('express');
const path =require ('path')
const bodyParser =require('body-parse')
const app = express();
const bcrypt =require('bcrypt')
const connectDB = require('./service/bd');
const User =require('./user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


const dotenv = require('dotenv');
dotenv.config();



connectDB();

app.post('/registro',(req,res)=>{
    const { username,password}=req.body;
    const user=new user({username,password});
    user.save(err=>{
        if(err){
            res.status(500).send('ERROR  AL REGISTRAR LE USUARIO');
        }else{
            res.status(200).send('EL USUARIO SE REGISTRO CORRECTAMENTE');
        }
    });
});

app.post('/authenticate',(req,res)=>{
    const { username,password}=req.body;
    
    User.findOne({username},(err,user)=>{
        if(err){
            res.status(500).send('ERROR  AL AUTENTICAR EL USUARIO');
        }else if(!user){
            res.status(200).send('EL USUARIO NO EXISTE');
        }else{
            user.isCorrectPassword(password,(req,result)=>{
                if(err){
                    res.status(500).send('ERROR  AL AUTENTICAR');
                }else if (result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(200).send('USUARIO Y/O  CONTRASEÑA INCORRECTO');    
                }
            })
        }
    });
});
