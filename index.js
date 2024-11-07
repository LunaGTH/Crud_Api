//importamos bibliotecas cargar el modulo-- en este archivo 
const express = require('express');
//importar el modulo de path
const path= require('path')
//creacion de la instancia
const app = express();
//definir el puerto escuchar las solicitudes 
const port = 3000

// creacion de las rutas 
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

//iniciar el servidor 
app.listen(port,()=>{
    console.log(`servidor ejecutandose en http://localhost:${port}`)
})