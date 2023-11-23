const express = require('express');
const router=express.Router();

router.get('/admin', (req, res)=> res.send('Route for admin view'));

router.get('/admin/create', (req, res)=> res.send('Route for create'));

router.post('/admin/create', (req, res)=> res.send('Route for create check'));

router.get('/admin/edit/:id', (req, res)=> res.send('Route for edit id for admin'));

router.put('/admin/edit/:id', (req, res)=> res.send('Route for  put edit id for admin'));

router.delete('/admin/delete/:id', (req, res)=> res.send('Route for delete id for admin'));

module.exports= router;