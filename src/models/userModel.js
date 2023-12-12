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
};

export default userModel;