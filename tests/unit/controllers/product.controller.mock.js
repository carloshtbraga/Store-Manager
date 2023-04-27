const productMock = {
  name: "Martelo de Thor",
  id:1
};

const newProductMock = { id: 1, ...productMock };


const productsListMock = [newProductMock];

module.exports = {
  productMock,
  newProductMock,
  productsListMock
};
