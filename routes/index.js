const express = require('express')
const productsRouter = require('./products.router');
const userRouter = require('./users.router');
const categoryRouter = require('./category.router');

function routerApi(app) {
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
    routerV1.use( '/products', productsRouter );
    routerV1.use( '/users', userRouter );
    routerV1.use( '/categories', categoryRouter);

}

module.exports = routerApi;
