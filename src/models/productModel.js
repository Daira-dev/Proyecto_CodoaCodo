import connectDB from '../config/conn';

const getProducts = async () => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT * FROM products');
    connection.end();
    return rows;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export default { getProducts };