import express from 'express';
import { shop, item, add, cart, cartpost } from '../controllers/shopController.js';

const router = express.Router();

router.get('/', shop);
router.get('/item/:product_id', item);
router.post('/item/:product_id/add', add);
router.get('/cart', cart);
router.post('/cart', cartpost); 

export default router;