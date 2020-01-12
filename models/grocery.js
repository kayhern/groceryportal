var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Grocery = sequelize.define("book", {
    item_name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    aisle_number: Sequelize.INTEGER
});

Grocery.sync();

module.exports = Grocery;