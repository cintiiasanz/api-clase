const express = require("express");

const servidor = express();

servidor.get("/", (peticion,respuesta) => {
    respuesta.json({hola : "adios"});
});

servidor.use((peticion,respuesta) => {
    respuesta.status(400);
    respuesta.json({error : "No tengo respuesta para esta petición"});
});

servidor.listen(4000);