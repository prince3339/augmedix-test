const routes = require('next-routes');

const Routes = routes()
  .add('index', '/')
  .add('PostDetail', '/post/:postId');

module.exports = Routes;
