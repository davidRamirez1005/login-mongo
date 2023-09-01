import {limitget} from '../config/configLimit.js'
import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';

const appUser = Routes();
const version = routesVersioning();
// appUser.use(passport.initialize());
//Headers 'Authorization: Bearer ....'
appUser.use(limitget());
//Headers 'Accept-Version: 1.0.0' 


appUser.post('/', version({

}))


export default appUser;