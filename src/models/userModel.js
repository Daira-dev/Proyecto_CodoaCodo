import pool from '../config/conn.js';

const userModel = {
    createUser: async (name, lastname, email, password) => {
        try {
            const [result] = await pool.query('INSERT INTO users (name, lastname, email, password) VALUES (?, ?, ?, ?)', [name, lastname, email, password]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al crear el usuario en el modelo', error);
            throw error;
        }
    },

    getUser: async (email, password) => {
      try {
          const [rows] = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
          console.log('Resultado de la consulta:', rows);
          return rows[0];
      } catch (error) {
          console.error('Error al obtener el usuario por email y contraseña', error);
          throw error;
      }
  },

    comparePassword: (inputPassword, storedPassword) => {
        return inputPassword === storedPassword;
    },
};

export default userModel;