import pool from '../config/conn.js';

const productModel = {
  getAllProducts: async () => {
    try {
      const [rows, fields] = await pool.query(`
        SELECT products.*, category.category_name, licence.licence_name
        FROM products
        JOIN category ON products.category_id = category.category_id
        JOIN licence ON products.licence_id = licence.licence_id
      `);

      return rows;
    } catch (error) {
      console.error('Error fetching products', error);
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

  updateProduct: async (productId, updatedProductData) => {
    try {
        const [result] = await pool.query('UPDATE products SET ? WHERE product_id = ?', [updatedProductData, productId]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Error al actualizar el producto en el modelo', error);
        throw error;
    }
  },

  createProduct: async (newProductData) => {
    try {
        const [rows] = await pool.query('INSERT INTO products SET ?', [newProductData]);
        return rows.affectedRows > 0;

    } catch (error) {
        console.error('Error al crear el producto en el modelo', error);
        throw error;
    }
  },


  deleteProduct: async (productId) => {
    try {
      const [result] = await pool.query('DELETE FROM products WHERE product_id = ?', [productId]);
      return result.affectedRows > 0;
      
    } catch (error) {
      console.error('Error al eliminar el producto en el modelo', error);
      throw error;
    }
  },
};


export default productModel;
