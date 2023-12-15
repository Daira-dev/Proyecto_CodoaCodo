import productModel from '../models/productModel.js';
import categoryModel from '../models/categoryModel.js';
import licenceModel from '../models/licenceModel.js';


// Para cargar todos los producto de la DB 
export const admin = async (req, res) => {  
  try {
    const products = await productModel.getAllProducts();
    res.render('../src/views/admin.ejs', { products });

  } catch (error) {
    console.error('Error finding products', error);
    res.status(500).send('Error');
  }
};

export const create = async (req, res) => {
  const productId = req.params.product_id;
  try {
      const product = await productModel.getProductById(productId);
      const products = await productModel.getAllProducts();
      const categories = await categoryModel.getAllCategories();
      const licences = await licenceModel.getAllLicences();

      res.render('../src/views/create.ejs', { product, products, categories, licences });

  } catch (error) {
      console.error('Error fetching categories and licences', error);
      res.status(500).send('Error');
  }
};

// Para crear el nuevo producto y añadirlo a la DB 
export const createpost = async (req, res) => { 
  try {
      const newProductData = {
        category_id: req.body.categoria,
        licence_id: req.body.licencia,
        product_name: req.body.nombre,
        product_description: req.body.descripcion,
        product_sku: req.body.sku,
        product_price: req.body.precio,
        stock: req.body.stock,
        discount: req.body.descuento,
        dues: req.body.cuotas,
        img_front: req.body.img_front,
        img_back: req.body.img_back,
      };

      const result = await productModel.createProduct(newProductData);

      if (result) {
          res.send('Producto creado exitosamente');
      } else {
          res.status(500).send('Error al crear el producto');
      }
  } catch (error) {
      console.error('Error al procesar la creación del producto', error);
      res.status(500).send('Error interno del servidor');
  }
};


// Para cargar los datos correspondientes de cada producto 
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


// Para enviar los cambios a la DB
export const editput = (req, res) => {
  const productId = req.params.product_id;
  res.send(`Router for save a product for ID: ${req.params.product_id}`)
}


// Para eliminar un producto
export const remove = async (req, res) => {
  const productId = req.params.product_id;

  try {
    const result = await productModel.deleteProduct(productId);

    if (result) {
      res.redirect('/admin');
    } else {
      res.status(500).send('Error al eliminar el producto');
    }
  } catch (error) {
    console.error('Error al eliminar el producto', error);
    res.status(500).send('Error interno del servidor');
  }
};
