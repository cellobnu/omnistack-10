const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Tipos de Parametros  
// Query params: request.query (filtros, ordenacao, paginacao, ...)
// Routes params: request.params (Identificar um recurso na alteracao, remocao)
// Body: request.body (dados para criacao ou alteracao de um registro)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes