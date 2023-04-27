const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.get('/sales', salesController.getAllSales);

router.get('/sales/:id', salesController.getSalesFromId);

module.exports = router;
