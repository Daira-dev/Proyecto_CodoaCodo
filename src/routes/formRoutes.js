import express from 'express'

import { loginMiddleware, validatorMiddleware} from './../src/middleware/index.js'

 export const formRouter = express.Router()


formRouter.post('/form', loginMiddleware, validatorMiddleware,(req,res)=> {
    console.log(req.body)
    res.send('si')
  })