import express from 'express';
import { login, loginpost, register, registerpost, logout } from '../controllers/authController.js';

const router = express.Router();

router.get('/auth/login', login);
router.post('/auth/login', loginpost);
router.get('/auth/register', register);
router.post('/auth/register', registerpost);
router.get('/auth/logout', logout);

export default router;