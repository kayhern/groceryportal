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
});

Grocery.sync();

module.exports = Grocery;