import express from 'express';
import { home, contact, about, faqs } from '../controllers/mainController.js';
import { uploadMiddleware } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/home', home);
router.get('/contact', contact);
router.get('/about', about);
router.get('/faqs', faqs);

export default router;

//_Formularios--Middlewares//

app.post('/', uploadMiddleware.single('imagen'), (req,res) =>{
    res.send('GRACIAS!!')
})