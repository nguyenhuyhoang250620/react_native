'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');
  var usersCtrl = require('./controllers/UserController');

  // todoList Routes
  app.route('/products/:page')
    .get(productsCtrl.get)
    .post(productsCtrl.store);

  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);





  app.route('/usersCtrl')
    .get(usersCtrl.get)
    .post(usersCtrl.store);


  app.route('/usersCtrl/:userId')
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);
};
