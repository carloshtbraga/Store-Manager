const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductFromId = async (id) => {
  const product = await productsModel.getProductFromId(id);
  if (product === undefined) {
 return {
    type: 'PRODUCT_NOT_FOUND',
    message: { message: 'Product not found' },
  }; 
}
  return { type: null, message: product }; 
};

const insertProduct = async (name) => {
  const newProductId = await productsModel.insertProduct(name);
  return { type: null, message: { id: newProductId, name } };
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
};