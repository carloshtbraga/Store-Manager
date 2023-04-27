const { productsService } = require('../services');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
};

const getProductFromId = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await productsService.getProductFromId(id);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.insertProduct(name);
  if (type) return res.status(404).json(message);

  res.status(201).json(message);
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
};