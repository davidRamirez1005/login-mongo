import {generateToken} from '../helpers/token.js'
import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import { loginV1 } from '../version/v1/loginV1.js'

const appLogin = Routes();
const version = routesVersioning();


appLogin.post('/', version({
    "1.0.0" : loginV1
}))
export default appLogin