const { expect } = require("chai");
const sinon = require("sinon");
const { getAllResultMock } = require("./product.service.mocks");
const { productsModel } = require("../../../src/models");
const { productsService } = require("../../../src/services");

describe("Testes de unidade do service de products", function () {
  it("Mostra todos os produtos", async function () {
    sinon.stub(productsModel, "getAllProducts").resolves(getAllResultMock);
    const result = await productsService.getAllProducts();
    expect(result.message).to.deep.equal(getAllResultMock);
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
    expect(result.message.message).to.equal('Product not found');
  });
});

afterEach(function () {
  sinon.restore();
});
