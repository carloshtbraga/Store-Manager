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

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const id = Number(req.params.id);
  const { type, message } = await productsService.updateProduct(id, name);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(404).json({ message });
  res.status(204).json('');
};

const searchProductbyQuery = async (req, res) => {
  const { q } = req.query;
  const { message } = await productsService.searchQuery(q);
  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
  updateProduct,
  deleteProduct,
  searchProductbyQuery,
};