import express from 'express';
import { login, loginpost, register, registerpost, logout } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', login);
router.post('/login', loginpost);
router.get('/register', register);
router.post('/register', registerpost);
router.get('/logout', logout);

export default router;