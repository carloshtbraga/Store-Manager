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
  const result = await connection.execute(
    `UPDATE StoreManager.products SET name = ? WHERE id = ?;
`,
    [productName, productId],
  );
  return result;
};

const deleteProduct = async (productId) => {
  const result = await connection.execute(
    `DELETE FROM StoreManager.products WHERE id = ?;
`,
    [productId],
  );
  return result;
};

const searchQuery = async (q) => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE name LIKE ?;
`,
    [`%${q}%`],
  );
  return result;
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
  deleteProduct,
  updateProduct,
  searchQuery,
};