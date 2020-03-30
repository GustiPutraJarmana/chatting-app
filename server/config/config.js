module.exports = {
  "development": {
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": "chatting_app",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
   
  }
}
