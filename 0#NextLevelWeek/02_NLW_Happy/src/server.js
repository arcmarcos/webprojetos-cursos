//importar dependências
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//Iniciar o express
const server = express();

server
    .use(express.urlencoded ({extended: true }))

    .use(express.static('public')) //Arquivos estáticos

    //Configurar template engine HBS(handlebars)
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

// criar rotas 
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Ligar servidor
server.listen(5000)