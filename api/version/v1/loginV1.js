import {Router} from 'express'
import { check, validationResult } from 'express-validator'
import { rateLimit } from 'express-rate-limit';

const loginV1 = Router();

loginV1.use(
    (req,res, next) => {
        if(!req.rateLimit) return;
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);
    }
)

export {loginV1}