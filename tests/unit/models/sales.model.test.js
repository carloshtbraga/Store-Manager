const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connections/connection");
const { allSales, salesbyId } = require("./sales.model.mocks");
const { salesModel } = require("../../../src/models");

describe("Testes de unidade do model de Sales", function () {
  it("Mostra todos as vendas", async function () {
    sinon.stub(connection, "execute").resolves([allSales]);
    const result = await salesModel.getAllSales();
    expect(result).to.be.deep.equal(allSales);
  });

  it("Mostra uma venda a partir do seu id", async function () {
    sinon.stub(connection, "execute").resolves([salesbyId]);
    const result = await salesModel.getSaleFromId(1);
    expect(result).to.be.deep.equal(salesbyId);
  });
  // it("Adicionar um produto", async function () {
  //   sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
  //   const result = await productsModel.insertProduct(modelMockInsert);
  //   expect(result).to.be.deep.equal(1);
  // });
  afterEach(function () {
    sinon.restore();
  });
});
