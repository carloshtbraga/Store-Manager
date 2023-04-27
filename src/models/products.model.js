const connection = require('./connections/connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const getProductFromId = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
   [id],
);
  return product;
};

module.exports = {
  getAllProducts,
  getProductFromId,
};