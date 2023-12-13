import {body} from 'express-validator'


export const loginMiddleware = [
    body ('email').isEmail().withMessage('Mail invàlido'),
    body('password').isLength({min:8}).withMessage('Debe contener al mennos 8 caracteres')
]