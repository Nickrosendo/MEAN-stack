const api = {}

const fotos = [
    { _id: 1, titulo: 'Leão', url: 'http://www.fundosanimais.com/Minis/leoes.jpg', descricao: 'Esse é um Leão africano muito selvagem' },
    { _id: 2, titulo: 'Leão 2', url: 'http://www.fundosanimais.com/Minis/leoes.jpg',  descricao: 'Esse é um Leão asiatico muito selvagem' }
  ]

let contador = fotos.length

api.lista = (req, res) => {  
  res.json(fotos)
}

api.adiciona = (req, res) => {
  let foto = req.body;
  foto._id = ++contador;
  fotos.push(foto);
  res.json(foto);
}

api.atualiza = (req, res) => {
  let foto = req.body;
  fotoId = req.params.id;
  let indice = fotos.findIndex( foto => foto._id == fotoId);

  fotos[indice] = foto;

  res.sendStatus(200);
}

api.buscaPorId = (req, res) => {
  let foto = fotos.find( foto => foto._id == req.params.id)

  res.json(foto)
}

api.removePorId = (req, res) => {
  let foto = fotos.filter( foto => foto._id != req.params.id)
  res.sendStatus(204)
}

module.exports = api;