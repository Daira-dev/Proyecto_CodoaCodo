import express from 'express';
import { shop, item, add, cart, cartpost } from '../controllers/shopController.js';

const router = express.Router();

router.get('/shop', shop);
router.get('/shop/item/:id', item);
router.post('/shop/item/:id/add', add);
router.get('/shop/cart', cart);
router.post('/shop/cart', cartpost);

export default router;