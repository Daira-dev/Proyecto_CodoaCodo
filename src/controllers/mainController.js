import productModel from '../models/productModel.js';

export const home = async (req, res, next) => {
    try {
      const products = await productModel.getAllProducts();
      res.render('../src/views/index.ejs', { products });
    } catch (error) {
      console.error('Error fetching products', error);
      next(error);
    }
  };

export const contact = (req, res) => res.render('../src/views/contact.ejs');

export const about = (req, res) => res.render('../src/views/about.ejs');

export const faqs = (req, res) => res.render('../src/views/faqs.ejs');