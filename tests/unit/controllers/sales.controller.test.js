const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require("../../../src/services");
const { productsController, salesController } = require("../../../src/controllers");
const { allSales, salesbyId } = require("./sales.controller.mock");

describe("Teste de unidade do sales no Controller", function () {
  it("Deve retornar o status 200 e a lista de todas as vendas", async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "getAllSales")
      .resolves({ type: null, message: allSales });

    await salesController.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

  it("Deve ter status 200 e mostrar o produto se tudo der certo", async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "getSaleFromId")
      .resolves({ type: null, message: salesbyId });

    await salesController.getSalesFromId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesbyId);
  });

  it("Ao passar um id de produto que não existe no banco deve retornar um erro", async function () {
    const res = {};
    const req = {
      params: { id: 9999 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "getSaleFromId").resolves({
      type: "SALE_NOT_FOUND",
      message: "Sale not found",
    });

    await salesController.getSalesFromId(req, res);

    expect(res.status).to.have.been.calledWith(404);

    expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
  });


   it("Adicionar venda", async function () {
     const req = {
       body: [
         {
           productId: 1,
           quantity: 1,
         },
         {
           productId: 2,
           quantity: 5,
         },
       ],
     };
     const res = {};
     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();
     sinon.stub(salesService, "insertSalesProduct").resolves({
       type: null,
       message: {
         id: 3,
         itemsSold: [
           {
             productId: 1,
             quantity: 1,
           },
           {
             productId: 2,
             quantity: 5,
           },
         ],
       },
     });

     await salesController.insertSalesProduct(req, res);

     expect(res.json).to.have.been.calledWith({
       id: 3,
       itemsSold: [
         {
           productId: 1,
           quantity: 1,
         },
         {
           productId: 2,
           quantity: 5,
         },
       ],
     });
   });
  
  afterEach(function () {
    sinon.restore();
  });
});
