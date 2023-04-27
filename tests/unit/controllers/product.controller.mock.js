const productMock = {
  name: "Martelo de Thor",
};

const newProductMock = { id: 1, ...productMock };


const productsListMock = [newProductMock];

module.exports = {
  productMock,
  newProductMock,
  productsListMock
};
