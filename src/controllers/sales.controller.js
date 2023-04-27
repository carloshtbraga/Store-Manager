const { salesService } = require('../services');

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

module.exports = {
  getAllSales,
  getSalesFromId,
};