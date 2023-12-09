import productModel from '../models/productModel.js';

export const admin = async (req, res) => {
    try {
      const products = await productModel.getAllProducts();
      res.render('../src/views/admin.ejs', { products });
    } catch (error) {
      console.error('Error finding products', error);
      res.status(500).send('Error');
    }
};

export const create = (req, res) => res.render('../src/views/create');

export const createpost = (req, res) => { 
    console.log(req.body)
    res.send('Router for save and send the new product')
};

export const edit = async (req, res) => {
  const productId = req.params.product_id;
  try {
      const product = await productModel.getProductById(productId);
      const products = await productModel.getAllProducts();

      res.render('../src/views/edit.ejs', { product, products });
  } catch (error) {
      console.error('Error fetching product details', error);
      res.status(500).send('Error');
  }
};

export const editput = (req, res) => {
    const productId = req.params.id;
    res.send(`Router for save a product for ID: ${req.params.id}`)
};

export const remove = (req, res) => {
    const productId = req.params.id;
    res.send(`Router for delete a product for ID: ${req.params.id}`)
};
