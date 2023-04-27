const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/products', productsController.getAllProducts);

router.get('/products/:id', productsController.getProductFromId);

module.exports = router;