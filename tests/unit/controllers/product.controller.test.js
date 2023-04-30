const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require("../../../src/services");
const { productsController } = require("../../../src/controllers");
const {
  productsListMock,
  newProductMock,
} = require("./product.controller.mock");

describe("Teste de unidade do products no Controller", function () {
  it("Deve retornar o status 200 e a lista de todos produtos", async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "getAllProducts")
      .resolves({ type: null, message: productsListMock });

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsListMock);
  });

  it("Deve ter status 200 e mostrar o produto se tudo der certo", async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "getProductFromId")
      .resolves({ type: null, message: newProductMock });

    await productsController.getProductFromId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(newProductMock);
  });

  it("Ao passar um id de produto que não existe no banco deve retornar um erro", async function () {
    const res = {};
    const req = {
      params: { id: 9999 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, "getProductFromId").resolves({
      type: "PRODUCT_NOT_FOUND",
      message: "Product not found",
    });

    await productsController.getProductFromId(req, res);

    expect(res.status).to.have.been.calledWith(404);

    expect(res.json).to.have.been.calledWith({ message: "Product not found" });
  });

  it("Adicionar produto", async function () {
    const req = { body: { name: "Carlos" } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, "insertProduct").resolves({ type: null, message: "Carlos" });

    await productsController.insertProduct(req, res);

    expect(res.json).to.have.been.calledWith("Carlos");   
  });

  afterEach(function () {
    sinon.restore();
  });
});
