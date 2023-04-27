const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

const getProductFromId = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await productsService.getProductFromId(id);
  if (type) return res.status(404).json(message);
  res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProductFromId,
};