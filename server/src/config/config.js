module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'fashionblog',
    user: process.env.DB_USER || 'fashionblog',
    password: process.env.DB_PASS || 'swoonz101',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './fashionblog.sqlite'
    }
  }
}
