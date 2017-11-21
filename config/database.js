module.exports = uri => {
  const mongoose = require("mongoose");

  mongoose.connect(`mongodb://${uri}`);

  mongoose.connection.on("connected", () => {
    console.log("Conectado ao MongoDB!");
  });

  mongoose.connection.on("error", error => {
    console.error(`Erro no MongoDB: ${error}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Desconectado do MongoDB!");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("Conexão fechada pelo término da aplicação!");
      process.exit(0);
    });
  });
};
