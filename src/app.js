const express = require('express');
const productsRouter = require('./Routers/products.router');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(productsRouter);

module.exports = app;