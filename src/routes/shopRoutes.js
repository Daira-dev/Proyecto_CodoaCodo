import express from 'express';
import { shop, item, addtocart, cart, cartpost } from '../controllers/shopController.js';

const router = express.Router();

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/addtocart', addtocart);
router.get('/cart', cart);
router.post('/cart', cartpost); 

export default router;