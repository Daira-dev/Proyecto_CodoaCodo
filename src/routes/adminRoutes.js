import express from 'express';
import { admin, create, createpost, edit, editput, remove } from '../controllers/adminController.js';
import { uploadMiddleware } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', admin);
router.get('/create', create);
router.post('/create', uploadMiddleware.array('images', 2), createpost);
router.get('/edit/:product_id', edit);
router.put('/edit/:product_id', editput);
router.delete('/delete/:product_id', remove);

export default router;