import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module'; 
const require = createRequire(import.meta.url);
const productos = require('./productos.json');



/* Importación de Rutas */
import mainRoutes, { mainRouter } from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

console.log(productos);

dotenv.config()

/* Para el funcionamiento de __dirname */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

/* Motor Plantillas EJS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('metodo'));
app.use(methodOverride('put'));
app.use(methodOverride('delete'));


/* Rutas */
app.use('/', mainRoutes);  
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


/* Ícono */
app.use((req, res, next) => {
  res.locals.iconPath = '/Assets/Img/branding/isotype.svg';
  next();
});

/* Redirección al Home al iniciar el server*/
app.get('/', (req, res) => {
    res.redirect('/home');
});


/* Redireccion de Formularios */

import {uploadMiddleware, loginMiddleware, validatorMiddleware} from './src/middleware/index.js'
//import { loginMiddleware }  from './src/middleware/loginMiddleware.js';
//import { validatorMiddleware } from './src/middleware/validatorMiddleware.js';



import { mainRouter, formRouter, formRouter} from './../src/routes/index.js'
app.use(express.urlencoded({extended: true}))


app.get('/home', (req, res) => {
  res.render('index', { title: 'Mi Página EJS' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en  http://localhost:${PORT}`);
});


app.use('/', mainRouter)
app.use('/', formRouter)

