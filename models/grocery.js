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

//**A. Grocery Items - options to display data in tables**

//shows a table of the inventory - should change it so the inventory displays in the HTML
//this should be dependent on what the user picks from the UI interface
//.onclick event calls this function
function displayTables() {
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
    //add additional tables once created
    //display the item in html dashboard
};
displayTables();

//this is called when the store manager checks inventory for a specific department
//.onclick event calls this function
function checkDepartmentInventory() {
    //connection.query should have placeholder from user's selection
    //console.log the same column data from the tables as displayTables(); function
    //display the department table in html
};
checkDepartmentInventory();

function checkDepartmentItem() {
    //connection.query should have placeholder from user's selection
    //console.log the specific item
    //display specific item in html
};
checkDepartmentItem();

//**B. Alert the store manager when stock is low**

//.onclick event for "alert me" will be in the HTML for a modal popup and call the functions here
//function to store the value the user inputs from the modal

function alertMe() {
    //store value the user inputs
    //send message back to the user in HTML
    //node package: mailer npm package
};
alertMe();

//check the inventory to alert the user
function alertMananger() {
    //when the inventory is low send an alert to the stored e-mail from the alertMe() function
    //node package: mailer npm package
};
alertMananger();

//**C. Provide a map of the store for employees to help stock the shelves**
//use some of the same functions as A
//map locator

function showItemMap() {
    //the user selects a specific item
    //this function puts the pin for the item in the aisle in which it resides

};
showItemMap();

//**E. Ability for the manager to add inventory to the database**

//.onclick event for adding item to form - should map to each column except for id
//function to add the item to the SQL table

function addItem() {
    //when the form is submitted the item displays on the form
};
addItem();

function hello() {
    console.log("Hello");
}