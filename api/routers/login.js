import {limitLogin} from '../config/configLimit.js'
import {generateToken} from '../helpers/token.js'
import Routes from 'express';
import { check, validationResult } from 'express-validator'
import routesVersioning  from 'express-routes-versioning';
import { loginV1 } from '../version/v1/loginV1.js'

const appLogin = Routes();
const version = routesVersioning();

appLogin.use(limitLogin(), generateToken);

appLogin.post('/', [
    check("nombre").notEmpty().isString().withMessage({status : 416, message : " el dato nombre es obligatorio y debe ser un string"}),
    check("password").notEmpty().isString().withMessage({status : 416, message : " la contraseña es obligatoria y debe ser un string"})
], version({
    "1.0.0" : loginV1
}))
export default appLogin