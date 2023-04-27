const connection = require('./connections/connection');

const getAllSales = async () => {
  const sales = await connection.execute(
    'SELECT * FROM StoreManager.sales',
    // `SELECT * FROM StoreManager.sales_products
    //  AS sp JOIN StoreManager.sales AS s ON s.id = sp.sale_id`,
  );
   console.log('model');
 console.log('all sales', sales);
  return sales;
};

const getSaleFromId = async (id) => {
  const [[sale]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return sale;
};

module.exports = {
  getAllSales,
  getSaleFromId,
};