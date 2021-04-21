const knexFille = require('../knexfile')

const knex = require('knex')(knexFille.development)

module.exports = knex