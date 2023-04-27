const express = require('express');
const { productsController } = require('../controllers');
const { nameValidation } = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/products', productsController.getAllProducts);

router.get('/products/:id', productsController.getProductFromId);

router.post('/products', nameValidation, productsController.insertProduct);

router.put('/products/:id', nameValidation, productsController.updateProduct);

module.exports = router;