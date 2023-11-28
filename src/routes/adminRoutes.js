const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController')

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.create);
router.post('/admin/create', adminControllers.createpost);
router.get('/admin/edit/:id', adminControllers.id);
router.put('/admin/edit/:id', adminControllers.idput);
router.delete('/admin/delete/:id', adminControllers.delete);

module.exports = router;
