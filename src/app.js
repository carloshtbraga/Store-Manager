const express = require('express');
const productsRouter = require('./Routers/products.router');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use(productsRouter);

module.exports = app;