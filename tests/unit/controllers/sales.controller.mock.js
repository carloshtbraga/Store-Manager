const allSales = [
  {
    saleId: 1,
    date: "2023-05-01T01:34:36.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2023-05-01T01:34:36.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2023-05-01T01:34:36.000Z",
    productId: 3,
    quantity: 15,
  },
];

const workedSales = allSales.map((e) => ({
  saleId: e.sale_id,
  date: e.date,
  productId: e.product_id,
  quantity: e.quantity,
}));

const salesbyId = [
  {
    date: "2023-05-01T01:34:36.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2023-05-01T01:34:36.000Z",
    productId: 2,
    quantity: 10,
  },
];

const workedSalesFromId = salesbyId.map((e) => ({
  date: e.date,
  productId: e.product_id,
  quantity: e.quantity,
}));

module.exports = {
  allSales,
  workedSales,
  salesbyId,
  workedSalesFromId,
};
