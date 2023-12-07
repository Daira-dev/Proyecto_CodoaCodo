import products from '../models/productModel.js';

export const shop = async(req, res) => {
    res.render('../src/views/shop')
};

export const item = async(req, res) => {
    const data = await model.item();
    res.send(data);
};

export const addtocart = async(req, res) => { 
    const data = await model.addtocart();
    res.send(data);
};

export const cart = (req, res) => res.render('../src/views/carrito');

export const cartpost = (req, res) => { 
    console.log(req.body)
    res.render('../src/views/carrito')
};

import productModel from '../models/productModel';

// Ejemplo de cómo utilizar el modelo de producto en un controlador
const obtenerProductos = async (req, res) => {
  try {
    const productos = await productModel.obtenerProductos();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

// Puedes crear otros controladores para usuarios u otras entidades de acuerdo a tus necesidades

export { obtenerProductos };