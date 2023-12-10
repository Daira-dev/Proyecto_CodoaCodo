import pool from '../config/conn.js';

const categoryModel = {
  getAllCategories: async () => {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM category');
      return rows;
    } catch (error) {
      console.error('Error fetching categories', error);
      throw error;
    }
  },

  getCategoryById: async (categoryId) => {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM licence WHERE licence_id = ?', [categoryId]);
      return rows[0];
    } catch (error) {
      console.error('Error fetching category by ID', error);
      throw error;
    }
  },
};

export default categoryModel;
