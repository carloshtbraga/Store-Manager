const { salesService } = require('../services');

const insertSalesProduct = async (req, res) => {
  const productsFromBody = req.body;
  const { type, message } = await salesService.insertSalesProduct(productsFromBody);
  if (type) return res.status(404).json(message);

  res.status(201).json(message);
};

const getAllSales = async (_req, res) => {
 const { message } = await salesService.getAllSales();
  return res.status(200).json(message);
};

const getSalesFromId = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await salesService.getSaleFromId(id);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await salesService.deleteSale(id);
  if (type) return res.status(404).json({ message });
  res.status(204).json('');
};

const updateSale = async (req, res) => {
  const sale = req.body;
  const id = Number(req.params.id);
  const { type, message } = await salesService.updateSale(sale, id);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getAllSales,
  getSalesFromId,
  deleteSale,
  updateSale,
  insertSalesProduct,
};