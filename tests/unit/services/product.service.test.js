const { expect } = require("chai");
const sinon = require("sinon");
const { getAllResultMock, getAllResultMock2 } = require("./product.service.mocks");
const { productsModel } = require("../../../src/models");
const { productsService } = require("../../../src/services");

describe("Testes de unidade do service de products", function () {
  it("Mostra todos os produtos", async function () {
    sinon.stub(productsModel, "getAllProducts").resolves(getAllResultMock2);
    const result = await productsService.getAllProducts();
    expect(result.message).to.deep.equal(getAllResultMock2);
  });

  it("Mostra o produto buscado pelo ID", async function () {
    sinon.stub(productsModel, "getProductFromId").resolves(getAllResultMock[1]);
    const result = await productsService.getProductFromId(2);
    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(getAllResultMock[1]);
  });

  it("Retorna um erro caso o produto não seja encontrado", async function () {
    sinon.stub(productsModel, "getProductFromId").resolves(undefined);
    const result = await productsService.getProductFromId(15)
    expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.equal('Product not found');
  });


 it("Adicionar produto", async function () {
   sinon.stub(productsModel, "insertProduct").resolves(2);
   const result = await productsService.insertProduct('Carlos');
   expect(result.message).to.deep.equal({id: 2, name: 'Carlos'});
 });
});

afterEach(function () {
  sinon.restore();
});
