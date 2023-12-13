import { validationResult} from 'express-validator'


export const validatorMiddleware =(req,res,next) =>{
    
    const errors = validationResult(req)

    if (!errors.isEmpty())
    //return res.status(400).json({errors:errors.array()})
    res.send('Alguno de los campos ingresados es incorrecto')
    console.log(errors)
    next()
}