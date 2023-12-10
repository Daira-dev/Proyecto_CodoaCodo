const { conn } = require('/config/conn');

const getCatagory = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM category;');
        const response = {
            isError: false,
            data: rows
        };

        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };

        return error;
    } finally {
        await conn.releaseConnection();
    }
}

module.exports = {
    getCatagories
}