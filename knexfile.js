// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'yard_sale'
    }
  },

  testEnv: {
    client:'postgresql',
    connection:{
      database:'yard_sale_test'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.NODE_ENV,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
