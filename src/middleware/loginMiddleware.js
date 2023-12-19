import { body } from 'express-validator'

export const loginMiddleware = [
    body('email').isEmail().withMessage('Mail inválido'),
    body('nombre').isLength({min:1}).withMessage('Campo inválido'),
    body('asunto').isLength({min:1}).withMessage('Campo inválido'),
    body('mensaje').isLength({min:1}).withMessage('Campo inválido'),
]