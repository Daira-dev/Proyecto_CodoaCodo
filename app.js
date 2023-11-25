import express from 'express';
import methodOverride from 'method-override';

import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

const app = express();
const PORT = 3000

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('metodo'));
app.use(methodOverride('put'));
app.use(methodOverride('delete'));


app.use('/', mainRoutes);  
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


app.listen(3000, () => console.log("servidor  http://localhost:3000"));