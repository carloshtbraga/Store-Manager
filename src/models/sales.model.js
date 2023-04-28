const connection = require('./connections/connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    // 'SELECT * FROM StoreManager.sales',
    `SELECT * FROM StoreManager.sales_products
     AS sp JOIN StoreManager.sales AS s ON s.id = sp.sale_id`,
  );

  return sales;
};

const getSaleFromId = async (id) => {
  const [sale] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s ON sp.sale_id = s.id
WHERE id = ?;`,
    [id],
  );
  return sale;
};

const deleteSales = async (saleId) => {
  const result = await connection.execute(
    `DELETE StoreManager.sales, StoreManager.sales_products
FROM StoreManager.sales
JOIN StoreManager.sales_products ON StoreManager.sales.id = StoreManager.sales_products.sale_id
WHERE StoreManager.sales.id = ?;
`,
    [saleId],
  );
  return result;
};

const updateSale = async (sale, saleId) => {
  const result = await connection.execute(
    `UPDATE StoreManager.sales_products
    JOIN StoreManager.sales ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    SET StoreManager.sales_products.quantity = ?,
        StoreManager.sales.date = NOW()
    WHERE StoreManager.sales.id = ? AND StoreManager.sales_products.product_id = ?;`,
    [sale.quantity, saleId, sale.productId],
  );
  return result;
};

module.exports = {
  getAllSales,
  getSaleFromId,
  deleteSales,
  updateSale,
};