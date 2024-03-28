const express = require('express');

// EXPRESS TIENE UN METODO QUE FUNCIONA COMO ENRUTADOR PARA ENLAZAR TODAS NUESTRAS RUTAS DE NUESTRA APLICACION (LOCALHOST:3100/)
const router = express.Router();

const user = require('../components/users/index');

const auth = require('../../server/components/login/index')

const routerReserv = require('../../server/components/reservation/index');

const routerService = require('../../server/components/service/index');

//ESTA FUNCION DEFINE NUESTRAS RUTAS DE LA API QUE ME PERMITEN CONECTAR MI PARTE VISUAL (html) CON MI SERVIDOR (nodejs)
function routerAPI(app){
    app.use('/api/v1', router);
    router.use('/users', user);
    router.use('/auth', auth);
    router.use('/reservation', routerReserv);
    router.use('/service', routerService);
}

//VAMOS A EXPORTAR NUESTRA FUNCION PARA UTILIZARLA EN NUESTRO index.js PRINCIPAL DEL SERVER 
module.exports = routerAPI;