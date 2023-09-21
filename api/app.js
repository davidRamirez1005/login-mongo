import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors'
import appLogin from './routers/login.js';
import appTask from './routers/taskRouter.js' 
import appReview from './routers/reviewRouter.js';
import appCategory from './routers/categoryRouter.js';
import appShopkeeper from './routers/shopkeeperRouter.js';
import appUser from './routers/userRouter.js';
import appPayment from './routers/paymentRouter.js';
import passport from './Auth/passport.js';
import { validatePermissions } from './Auth/permissions.js';
import {loadEnv} from 'vite'
const env = loadEnv('development', process.cwd(), "VITE");
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

appExpress.use('/task', passport.authenticate('bearer', { session: false }),validatePermissions, appTask);
appExpress.use('/review', passport.authenticate('bearer', { session: false }),validatePermissions, appReview);
appExpress.use('/category', passport.authenticate('bearer', { session: false }),validatePermissions, appCategory);
appExpress.use('/shopkeeper', passport.authenticate('bearer', { session: false }),validatePermissions, appShopkeeper);
appExpress.use('/user', passport.authenticate('bearer', { session: false }),validatePermissions, appUser);
appExpress.use('/payment', passport.authenticate('bearer', { session: false }),validatePermissions, appPayment);




const config = {
    port: env.VITE_PORT_BACKEND,
    hostname: env.VITE_HOSTNAME
}

appExpress.listen(config, () =>{
    console.log(`listening on http://${config.hostname}:${config.port}`);
})