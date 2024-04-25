const express = require('express');
const validarHora = require('./validarHora');
const middleware = require('./middleware');

const app = express();

app.get('/', (req, res) => {
    const horaActual = new Date().getHours();
    res.send(`Bienvenido! La hora actual es: ${horaActual}:00`);
});

app.get('/endroute', middleware.validarHora, (req, res) => {
    res.send('¡Acceso concedido a /endroute!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
