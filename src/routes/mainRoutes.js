import express from 'express';
import { home, contact, about, faqs } from '../controllers/mainController.js';

const router = express.Router();

router.get('/home', home);
router.get('/contact', contact);
router.get('/about', about);
router.get('/faqs', faqs);

export default router;

//_Formularios--Middlewares//

import {uploadMiddleware, loginMiddleware, validatorMiddleware} from '../src/middleware/index.js'

export const mainRouter = express.Router()

mainRouter.post('/' , uploadMiddleware.single('image') ,(req,res) => {
    res.send('Gracias!')
  })