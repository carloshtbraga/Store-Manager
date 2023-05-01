const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();

  return { type: null, message: products }; 
};

const getProductFromId = async (id) => {
  const product = await productsModel.getProductFromId(id);
  if (product === undefined) {
 return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }; 
}
  return { type: null, message: product }; 
};

const insertProduct = async (name) => {
  const newProductId = await productsModel.insertProduct(name);
  return { type: null, message: { id: newProductId, name } };
};

const updateProduct = async (id, name) => {
  const result = await productsModel.updateProduct(id, name);
  if (result[0].affectedRows === 0) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }  
  return { type: null, message: { id, name } }; 
};

const deleteProduct = async (id) => {
  const result = await productsModel.deleteProduct(id);
  if (result[0].affectedRows === 0) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null };
};

const searchQuery = async (q) => {
  const result = await productsModel.searchQuery(q);
  return { type: null, message: result };
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
  updateProduct,
  deleteProduct,
  searchQuery,
};