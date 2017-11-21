module.exports = (app) => {
  
  const fotoApi = app.api.foto;

  app.route('/v1/fotos')
    .get(fotoApi.lista)
    .post(fotoApi.adiciona)
  
  app.route('/v1/fotos/:id')
    .get(fotoApi.buscaPorId)
    .delete(fotoApi.removePorId)
    .put(fotoApi.atualiza)

}

