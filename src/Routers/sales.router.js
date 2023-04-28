const express = require('express');

const { salesController } = require('../controllers');
const { updateSaleValidation,
  updateSaleValidation2 } = require('../middlewares/updateSaleValidation');

const router = express.Router();

router.get('/sales', salesController.getAllSales);

router.get('/sales/:id', salesController.getSalesFromId);

router.delete('/sales/:id', salesController.deleteSale);

router.put('/sales/:id', updateSaleValidation, updateSaleValidation2, salesController.updateSale);

module.exports = router;
