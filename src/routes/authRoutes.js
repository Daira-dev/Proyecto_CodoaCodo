const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController')

router.get('/auth/login', authControllers.login );
router.post('/auth/login', authControllers.loginpost);
router.get('/auth/register', authControllers.register);
router.post('/auth/register', authControllers.registerpost);
router.get('/auth/logout', authControllers.logout);

module.exports = router;