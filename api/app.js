import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import appLogin from './routers/login.js';
import appUser from './routers/user.js';


dotenv.config()

const appExpress = express();

appExpress.use(express.json());

// Configuración de CORS
/** ! es un mecanismo de seguridad implementado en los navegadores web para controlar las solicitudes que se hacen entre dominios diferentes. Sirve para prevenir que una página web en un dominio A pueda hacer solicitudes directas a recursos (como datos o servicios) en un dominio B sin el permiso explícito del dominio B
*/
const corsOptions = {
    origin: '*', // Reemplaza con el origen permitido
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 204 // Sin contenido
};
appExpress.use(cors(corsOptions));

appExpress.use('/login', appLogin);
appExpress.use('/user', appUser);




let config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, () =>{
    console.log(`listening on http://${config.hostname}:${config.port}`);
})