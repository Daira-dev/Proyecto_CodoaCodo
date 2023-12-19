import productModel from '../models/productModel.js';

export const shop = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.render('../src/views/shop.ejs', { products });
  } catch (error) {
    console.error('Error finding products', error);
    res.status(500).send('Error');
  }
};

export const item = async (req, res) => {
  const productId = req.params.product_id;
  try {
    const product = await productModel.getProductById(productId);
    const products = await productModel.getAllProducts();

    res.render('../src/views/item.ejs', { product, products });
  } catch (error) {
    console.error('Error fetching product details', error);
    res.status(500).send('Error');
  }
};

export const add = (req, res) => {
  console.log(req.body);
  const productId = req.params.id;
  res.send(`Router for add the current item ID: ${req.params.id} to the shop cart`);
};

export const cart = async (req, res) => {
  const productId = req.params.product_id;
  try {
    const product = await productModel.getProductById(productId);
    const products = await productModel.getAllProducts();

    res.render('../src/views/carrito.ejs', { product, products });
  } catch (error) {
    console.error('Error fetching product details', error);
    res.status(500).send('Error');
  }
};


export const cartpost = (req, res) => {
  console.log(req.body);
  res.render('../src/views/carrito.ejs');
};
