import { check } from 'express-validator';


export const validationLogin = [
    check('ROL').isIn(["admin", "user", "shopkeeper"]).withMessage("Debe ser un estado valido es decir, 'admin', 'user', 'shopkeeper'"),
    check('ROL_EMAIL').isEmail().withMessage('el ROL_EMAIL es obligatorio y debe ser string ademas debe cumplir las caracteristicas de un e-mail'),
    check('ROL_PASSWORD').isString().withMessage('la ROL_PASSWORD es obligatoria y debe ser string'),
];