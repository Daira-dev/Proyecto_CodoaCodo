const express = require('express');
const router=express.Router();

router.get('/admin/login', (req, res)=> res.send('Route for login view'));

router.post('/admin/login', (req, res)=> res.send('Route for  post login view'));

router.get('/admin/register', (req, res)=> res.send('Route for register view'));

router.post('/admin/register', (req, res)=> res.send('Route for post register view'));


module.exports= router;