import{ body } from 'express-validator'

export const loginMiddleware=[
    body('email').isEmail().withMessage('mail invalido'),
    body('password').isLength({min:8}).withMessage('Debe conteer al menos 8 caracteres')
]