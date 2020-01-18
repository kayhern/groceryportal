require("dotenv").config();


module.exports = {
  "development": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}