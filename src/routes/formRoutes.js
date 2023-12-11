import express from 'express'
import { loginMiddleware, validatorMiddleware } from '../middleware/index.js';

export const formRouter =express.Router()

formRouter.post('/form', loginMiddleware, validatorMiddleware, uploadMiddleware, (req,res)=>{
    console.log(req.body)
    res.send('subido')
  })