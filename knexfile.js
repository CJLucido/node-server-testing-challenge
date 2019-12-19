// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/resourcesDB.db3'
    },
    pool: {
      afterCreate: (conn,done)=>{//make sure this is in production object too later
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/tester.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn,done)=>{//make sure this is in production object too later
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

  


  // production: {
  //   client: 'pg', //talking to postgres
  //   //don't need useNullAsDefault for postgres
  //   connection: process.env.DATABASE_URL,
  // },
  // migrations: {
  //   directory: './data/migrations',
  // },
  // seeds: {
  //   directory: './data/seeds',
  // }


};
