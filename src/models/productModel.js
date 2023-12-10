import pool from '../config/conn.js';

const productModel = {
  getAllProducts: async () => {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM products');
      return rows;
    } catch (error) {
      console.error('Error encontrando el producto', error);
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const [rows, fields] = await pool.query(`
        SELECT products.*, category.category_name, licence.licence_name
        FROM products
        JOIN category ON products.category_id = category.category_id
        JOIN licence ON products.licence_id = licence.licence_id
        WHERE products.product_id = ?
      `, [productId]);

      return rows[0];
    } catch (error) {
      console.error('Error encontrando el producto by ID', error);
      throw error;
    }
  },
};

export default productModel;
