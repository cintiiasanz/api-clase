const express = require("express");

const servidor = express();

servidor.use((peticion,respuesta,siguiente) => {
    respuesta.header("Access-Control-Allow-Origin","*"); //* el asterisco dice que cualquiera se puede conectar
    siguiente();
});

servidor.get("/", (peticion,respuesta) => {
    let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random()*256));
    respuesta.json({r,g,b});
});

servidor.use((peticion,respuesta) => {
    respuesta.status(400);
    respuesta.json({error : "No tengo respuesta para esta petición"});
});

servidor.listen(4000);


