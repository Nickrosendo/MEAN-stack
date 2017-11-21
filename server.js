const
  app = require('./config/express'),
  port = 3000

app.listen(port, () => {
  console.log(`Escutando na porta: ${port}`);
});