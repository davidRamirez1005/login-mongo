import genCollection from "../helpers/db.js";
import { SignJWT, jwtVerify } from "jose";
import { validationLogin } from "../validator/validaciones.js";
import { validationResult } from 'express-validator';
import {loadEnv} from 'vite'
const env = loadEnv('development', process.cwd(), "JWT");

const generateToken = async(req, res) => {
    //Validacion de las credenciales de login
    await Promise.all(validationLogin.map(rule => rule.run(req)));

    const errors =  validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => [error.path , error.msg]);
        
        return res.send(errorMessages);
    }
    
    const {ROL_EMAIL: email ,ROL_PASSWORD: psw, ROL: coleccion_name} = req.body;
    
    const coleccion = await genCollection(coleccion_name)
    console.log({"coleccion": coleccion_name});
    const result = await coleccion.findOne({"email":email, "password": psw })
    console.log({"result": result});
    if(!result){return res.send({"status": 404, "message":`Usuario no encontrado en la base de datos: ${coleccion_name}`})}
    const datauser = {
        "id":result.rol
    }
    console.log({"datauser": datauser});
    //crecion del token
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT(datauser)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(env.JWT_SECRET));
    res.send({"Token":jwtConstructor});
}
    
const validateToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env.JWT_SECRET)
        );
        const coleccion = await genCollection("rols")
        return await coleccion.findOne({"_id": jwtData.payload.id});
    } catch (error) {
        console.log(error);
        return false;
    }
}


export {
    generateToken,
    validateToken
}