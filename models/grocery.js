
module.exports = (sequelize, types) => {
    return sequelize.define("User", {
        name: {
            type: types.STRING,
            require: true
        }
    })
}

const colors = require("colors");
const mysql = require('mysql');
//mysql database for the grocery store inventory
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your pasJoe4hire",
    database: "grocery_db"
=======
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Grocery = sequelize.define("produce_inventory", {
    item_name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    aisle_number: Sequelize.INTEGER
});

Grocery.sync();

module.exports = Grocery;