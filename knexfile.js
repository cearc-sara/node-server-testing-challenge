// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/wizards"

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/wizards.db3'
    },
    useNullAsDefault:true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: "./database/test.db3"
    },
    useNullAsDefault: true, 
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }

};
