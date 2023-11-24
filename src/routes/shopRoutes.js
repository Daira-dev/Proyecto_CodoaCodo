const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController')

router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.item);
router.post('/shop/item/:id/add', shopControllers.add);
router.get('/shop/cart', shopControllers.cart);
router.post('/shop/cart', shopControllers.cartpost);

module.exports = router;