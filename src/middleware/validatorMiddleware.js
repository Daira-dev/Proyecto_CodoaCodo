import { validationResult} from 'express-validator'


export const validatorMiddleware = (req,res,next)=>{

    const errors = validationResult(req)
    console.log(errors)

    next()
}