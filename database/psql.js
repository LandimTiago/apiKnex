const knex = require('knex')({
  client: 'pg',
  connection: {
    host: "localhost",
    user: "postgres",
    password: '112233',
    database: 'masterClassKnex'
  }
});