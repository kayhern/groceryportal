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
    // Your password
    password: "",
    database: "grocery_db"
});

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