const express = require('express')
const userController = require('./controllers/userController')
const projectController = require('./controllers/projectController')

const routes = express.Router()

routes
  //USERS ROUTES
  .get('/users', userController.index)
  .post('/users', userController.create)
  .put('/users/:id', userController.update)
  .delete('/users/:id', userController.delete)

  //PROJECTS ROUTES
  .get('/projects', projectController.index)

module.exports = routes