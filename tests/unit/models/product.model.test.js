const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connections/connection');

const {getAllResultMock} = require('./product.model.mocks');
const { productsModel } = require('../../../src/models');

describe('Testes de unidade do model de products', function () {
  it("Mostra todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([getAllResultMock]);
    const result = await productsModel.getAllProducts()
    expect(result).to.be.deep.equal(getAllResultMock);
  });

  it("Mostra um produto a partir do seu id", async function () {
    sinon.stub(connection, "execute").resolves([[getAllResultMock[0]]]);
    const result = await productsModel.getProductFromId(1)
    expect(result).to.be.deep.equal(getAllResultMock[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});