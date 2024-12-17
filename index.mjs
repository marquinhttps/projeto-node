import express from 'express';
import rotas_clientes from './rotas/rotas_clientes.mjs';
import rotas_produtos from './rotas/rotas_produtos.mjs';

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.json());

app.use('/clientes', rotas_clientes);
app.use(express.static('views'));

app.use('/produtos', rotas_produtos);
app.use(express.static('views'));

app.listen(80, function () {
    console.log('Na escuta.');
});

/*const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas
app.use('/login', loginRoute);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
*/