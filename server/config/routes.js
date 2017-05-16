var controller = require('./../controllers/controller');

module.exports = (app) => {
  app.get('/', controller.index);
  app.post('/messages', controller.create);
}
