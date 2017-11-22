const mongoose = require("mongoose");

const api = {};

// let contador = fotos.length

api.lista = (req, res) => {
  const model = mongoose.model("Foto");
  model.find({}).then(
    fotos => res.json(fotos),
    error => {
      console.log(error)
      res.sendStatus(500).json(error);
    }
  );
};

api.adiciona = (req, res) => {
  // let foto = req.body;
  // foto._id = ++contador;
  // fotos.push(foto);
  // res.json(foto);
};

api.atualiza = (req, res) => {
  // let foto = req.body;
  // fotoId = req.params.id;
  // let indice = fotos.findIndex( foto => foto._id == fotoId);
  // fotos[indice] = foto;
  // res.sendStatus(200);
};

api.buscaPorId = (req, res) => {
  // let foto = fotos.find( foto => foto._id == req.params.id)
  // res.json(foto)
};

api.removePorId = (req, res) => {
  // let foto = fotos.filter( foto => foto._id != req.params.id)
  // res.sendStatus(204)
};

module.exports = api;
