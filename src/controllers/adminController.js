import productModel from '../models/productModel.js';
import categoryModel from '../models/categoryModel.js';
import licenceModel from '../models/licenceModel.js';


export const admin = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.render('../src/views/admin.ejs', { products });
  } catch (error) {
    console.error('Error finding products', error);
    res.status(500).send('Error');
  }
};

export const create = (req, res) => res.render('../src/views/create');

export const createpost = (req, res) => { 
    console.log(req.body)
    res.send('Router for save and send the new product')
};

export const edit = async (req, res) => {
  const productId = req.params.product_id;
  try {
      const product = await productModel.getProductById(productId);
      const products = await productModel.getAllProducts();
      const categories = await categoryModel.getAllCategories();
      const licences = await licenceModel.getAllLicences();

      res.render('../src/views/edit.ejs', { product, products, categories, licences });
  } catch (error) {
      console.error('Error fetching product details', error);
      res.status(500).send('Error');
  }
};


export const editput = async (req, res) => {
  const productId = req.params.product_id;
  try {
      const {
          categoria,
          licencia,
          nombre,
          descripcion,
          sku,
          precio,
          stock,
          descuento,
          cuotas
      } = req.body;

      await productModel.updateProduct(productId, {
          categoria,
          licencia,
          nombre,
          descripcion,
          sku,
          precio,
          stock,
          descuento,
          cuotas
      });

      res.redirect('/admin');
  } catch (error) {
      console.error('Error updating product', error);
      res.status(500).send('Error');
  }
};

export const remove = (req, res) => {
    const productId = req.params.id;
    res.send(`Router for delete a product for ID: ${req.params.id}`)
};
