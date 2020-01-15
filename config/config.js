require("dotenv").config();


module.exports = {
  "development": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
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
    "username": "root",
    "password": "joe4hire",
    "database": "grocery_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}