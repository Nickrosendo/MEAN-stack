module.exports = (app) => {
  
  const grupoApi = app.api.grupo
  app.get('/v1/grupos', grupoApi.lista)

}
