import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config()

export const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            dialect: 'mysql',
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASS,
            database: process.env.DB,
            port: process.env.PORTDB,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        console.log('Conexión a la base de datos exitosa');
        return connection;
      } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        throw error;
      }
    };
    

module.exports = connectDB;