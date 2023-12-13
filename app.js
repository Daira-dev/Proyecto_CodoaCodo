import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {uploadMiddleware} from './src/middlewares/uploadMiddleware.js'


/* Importación de Rutas */
import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import { loginMiddleware } from './src/middlewares/loginMiddleware.js';
import { validatorMiddleware } from './src/middlewares/validatorMiddleware.js';

//console.log(productos);

dotenv.config()

/* Para el funcionamiento de __dirname */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

/* Carga de archivos estáticos */
app.use(express.static(path.join(__dirname, 'public')));

/* Motor Plantillas EJS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'));

//app.post('/', uploadMiddleware.single('image'), (req, res) => {
  //res.send('¡Producto actualizado!')
//})

/* Rutas */
app.use('/', mainRoutes);  
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


/* Redirección al Home al iniciar el server*/
app.get('/', (req, res) => {
    res.redirect('/home');
});



/* Redireccion de Formularios */

//uploadMiddleware//
app.post('/admin/create', uploadMiddleware.single('imagen'), (req,res) => {
  res.send('tu imagen ha sido subida!')

})

//login validatorMiddleware//

app.post('/auth/register', loginMiddleware, validatorMiddleware,(req,res) => {
  console.log(req.body)
  res.send('subido')
})


app.post('/login', loginMiddleware, validatorMiddleware,(req,res) => {
  console.log(req.body)
  res.send('subido')
})

app.post('/form', loginMiddleware, validatorMiddleware,(req,res) => {
  console.log(req.body)
  res.send('subido')
})

