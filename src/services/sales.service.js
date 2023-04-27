const { salesModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales;
  return sales;
};

const getSaleFromId = async (id) => {
  const sale = await salesModel.getSaleFromId(id);
  if (sale === undefined) {
    return {
      type: 'SALE_NOT_FOUND',
      message: { message: 'Sale not found' },
    };
  }
  return { type: null, message: sale };
};

module.exports = {
  getAllSales,
  getSaleFromId,
};