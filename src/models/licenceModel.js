import pool from '../config/conn.js';

const licenceModel = {
  getAllLicences: async () => {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM licence');
      return rows;
    } catch (error) {
      console.error('Error fetching licences', error);
      throw error;
    }
  },

  getLicenceById: async (licenceId) => {
    try {
      const [rows, fields] = await pool.query('SELECT * FROM licence WHERE licence_id = ?', [licenceId]);
      return rows[0];
    } catch (error) {
      console.error('Error fetching licence by ID', error);
      throw error;
    }
  },
};

export default licenceModel;
