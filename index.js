const express = require('express');
const routerAPI = require('./server/routers');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

//NUESTRA APLICACION - ORIGEN
const app = express();

//ESTA LINEA ME SIRVE PARA  QUITAR EL PROBLEMA DE CORS
app.use(cors());

//ESTA LINEA ME PERMITE ENTENDER LOS ARCHIVOS JSON ENVIADOS DESDE LA RESPUESTA
app.use(express.json())

//ESTA FUNCION ES NUESTRA API
routerAPI(app);

//REQUERIR TODA LA ESTRATEGIA DE INICIO DE SESION (PASSPORT)
require('./server/utils/auth')

// .use SIRVE PARA SERVIR YEN NUESTRO SERVIDOR Y RECIBE N CANTIDAD DE PARAMETROS, EL PRIMERO VA A SER NUESTRA RUTA EN LA WEB Y EL SEGUNDO EL MIDDLEWARE (LOGICA CUANDO VAYA O SIRVA ESA RUTA)
/* app.use('/', (req, res)=>{
    //REQ = SOLICITUD
    //RES = RESPUESTA
    res.send("<h1>It Works</h1>");
}); */

app.use('/login', express.static(path.resolve(__dirname, 'auth', 'login')))

//MongoDB ATLAS CONNECTION
mongoose
.connect(process.env.MONGOOSE_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error(err))


//LEVANTANDO NUESTRO SERVIDOR EN EL PUERTO X
// .listen ESCUCHA NUESTRO SERVIDOR Y COMO PRIMER PARAMETRO RECIBE EL PUERTO Y COMO SEGUNDO LA FUNCION A MOSTRAR CUANDO NUESTRO SERVIDOR FUNCIONA
const port = 3100;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})