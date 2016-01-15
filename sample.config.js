module.exports = {
  store: {
    memory: {
      driver: 'memory'
    },
    mongoose: {
      driver: 'mongoose', //mongodb://jle-code-sample:jle-code-sample#1@ds039175.mongolab.com:39175/jle-code-sample
      host: 'ds039175.mongolab.com',
      port: '39175',
      username: 'jle-code-sample',
      password: 'jle-code-sample#1',
      database: 'jle-code-sample',
      pool: true
    },
    redis: {
      driver: 'redis', //redis://redistogo:a57abc412a5c79b47c14d33a0928c52d@clingfish.redistogo.com:9339/
      host: 'clingfish.redistogo.com',
      port: '9339',
      username: 'redistogo',
      password: 'a57abc412a5c79b47c14d33a0928c52d'
    },
    mysql: {
      driver: 'mysql', // mariadb
      host: 'localhost',
      port: '3306',
      username: 'test',
      password: 'test',
      database: 'test',
      pool: true
    },
    postgres: {
      driver: 'postgres',
      host: 'localhost',
      port: '5432',
      username: 'test',
      password: 'test',
      database: 'test',
      pool: true
    },
    sqlite3: {
      driver: 'sqlite3',
      database: '/db/mySite.db'
    }
  }
};
