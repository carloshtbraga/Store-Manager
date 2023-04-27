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
  console.log('IDDDDDDDD', sale);
  return sale;
};

module.exports = {
  getAllSales,
  getSaleFromId,
};