// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "postgres",
      password: "112233",
      database: "masterClassKnex",
    },
    migrations: {
      tableName: 'knexMigration',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
