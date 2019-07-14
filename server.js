const next = require('next');
const express = require('express');
const compression = require('compression');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
// Create the Express-Next App
const app = next({ dev });
const handle = routes.getRequestHandler(app);
// Start the app
app.prepare()
// Start Express server and serve the
  .then(() => {
    const server = express();
    if (!dev) {
      server.use(compression());
    }
    server.get('*', (req, res) => handle(req, res));
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
