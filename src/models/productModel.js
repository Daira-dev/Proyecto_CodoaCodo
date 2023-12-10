import pool from '../config/conn.js';

const productModel = {
  getAllProducts: async () => {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM products');
      return rows;
    } catch (error) {
      console.error('Error fetching products', error);
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM products WHERE product_id = ?', [productId]);
      return rows[0];
    } catch (error) {
      console.error('Error fetching product by ID', error);
      throw error;
    }
  },
};

export default productModel;
