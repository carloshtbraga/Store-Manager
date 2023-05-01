const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel } = require("../../../src/models");
const { salesService } = require("../../../src/services");
const { workedSales, workedSalesFromId } = require("./sales.service.mocks");



describe("Testes de unidade do service de sales", function () {
  it("Mostra todas as vendas", async function () {
    sinon.stub(salesModel, "getAllSales").resolves(workedSales);
    const result = await salesService.getAllSales();
    expect(result.message).to.deep.equal(workedSales);
  });

  it("Mostra a venda buscado pelo ID", async function () {
    sinon.stub(salesModel, "getSaleFromId").resolves(workedSalesFromId);
    const result = await salesService.getSaleFromId(1);
    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(workedSalesFromId);
  });

  it("Retorna um erro caso a venda não seja encontrada", async function () {
    sinon.stub(salesModel, "getSaleFromId").resolves([]);
    const result = await salesService.getSaleFromId(15);
    expect(result.type).to.equal("SALE_NOT_FOUND");
    expect(result.message).to.equal("Sale not found");
  });

  // it("Adicionar produto", async function () {
  //   sinon.stub(productsModel, "insertProduct").resolves(2);
  //   const result = await productsService.insertProduct("Carlos");
  //   expect(result.message).to.deep.equal({ id: 2, name: "Carlos" });
  // });
});

afterEach(function () {
  sinon.restore();
});
