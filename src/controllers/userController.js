const knex = require('../../database')

module.exports = {
  async index(req, res) {

    // return await knex('users').then(results => res.json(results))
    const results = await knex('users')

    return res.json(results)
  }
}