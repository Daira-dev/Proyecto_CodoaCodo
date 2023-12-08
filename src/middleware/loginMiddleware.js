import { body } from 'express-validator'

export const loginMiddleware = [
    body('email').isEmail().withMessage('Mail invalido'),
    body('password').isLength({min:8}).withMessage('Debe tener al menos 8 caracteres')
]
