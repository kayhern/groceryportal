'use strict';
//npm packages
const fs = require('fs');
const colors = require("colors");
const path = require('path');
const Sequelize = require('sequelize');
const mysql = require('mysql');
//mysql database for the grocery store inventory
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "grocery_db"
});
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

//functions for the database functionality//

//shows a table of the inventory - should change it so the inventory displays in the HTML
function displayItems() {
  connection.query("SELECT * FROM grocery_db.produce_inventory", function (err, result) {
    if (err) throw err;
    //borrowed some of this code from the bamazon homework
    console.log("These are the items in inventory:")
    console.log(colors.rainbow("-------------------------------------"))
    // console.log(JSON.stringify(result));
    result.forEach(element => {
      console.log("ID: ".brightMagenta + element.id)
      console.log("product: ".brightMagenta + element.item_name)
      console.log("price: ".brightMagenta + element.price)
      console.log("stock: ".brightMagenta + element.quantity)
      console.log("aisle: ".brightMagenta + element.aisle_number)
      console.log(colors.rainbow("-------------------------------------"))
    });
  });
};
displayItems();

//this is called when the store manager checks inventory for a specific department
function checkDepartmentInventory() {

};
checkDepartmentInventory();