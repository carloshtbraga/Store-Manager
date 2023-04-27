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

const insertProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return insertId;
};

const updateProduct = async (productId, productName) => {
  const oi = await connection.execute(
    `UPDATE StoreManager.products SET name = ? WHERE id = ?;
`,
    [productName, productId],
  );
  return oi;
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
  updateProduct,
};