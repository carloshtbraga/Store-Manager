const { salesModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  const workedSales = sales.map((e) => ({
      saleId: e.sale_id,
      date: e.date,
      productId: e.product_id,
      quantity: e.quantity,
  }));
  return { type: null, message: workedSales };
};

const getSaleFromId = async (id) => {
  const sale = await salesModel.getSaleFromId(id);
  const workedSalesFromId = sale.map((e) => ({
    date: e.date,
    productId: e.product_id,
    quantity: e.quantity,
  }));
  if (sale.length === 0) {
    return {
      type: 'SALE_NOT_FOUND',
      message: 'Sale not found',
    };
  }
  return { type: null, message: workedSalesFromId };
};

module.exports = {
  getAllSales,
  getSaleFromId,
};