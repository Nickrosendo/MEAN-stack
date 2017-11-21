const
  express = require('express'),
  app = express(),
  consign = require('consign'),
  bodyParser = require('body-parser');

  require('./database')('localhost/nickpic');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes')
  .into(app);

module.exports = app;