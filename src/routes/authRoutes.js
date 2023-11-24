import express from 'express';
const router = express.Router();

router.get('/auth/login', (req, res) => {
    console.log(req.body)
});
router.post('/auth/login', (req, res) => {
    console.log(req.body)
});
router.get('/auth/register', (req, res) => {
    console.log(req.body)
});
router.post('/auth/register', (req, res) => {
    console.log(req.body)
});
router.get('/auth/logout', (req, res) => {
    console.log(req.body)
});

export default router