var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
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

//https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "grocery_db"
}); **
A.Grocery Items - options to display data in tables **
    https: //stackoverflow.com/questions/39620761/web-sql-javascript-show-all-tables-of-database

    shows a table of the inventory - should change it so the inventory displays in the HTML
this should be dependent on what the user picks from the UI interface
    .onclick event calls this

function

this

function should help display all of the tables available in the inventory

function displayTables() {
    db.connect(function (err) {
        if (err) throw err;
        db.query("SELECT * from produce_inventory", function (err, results, fields) {
            if (err) throw err;
            console.log(fields[0].orgTable);

        })
    });
    //add additional tables once created
    //display the item in html dashboard
};
displayTables();

//this is called when the store manager checks inventory for a specific department
//.onclick event calls this function
function checkDepartmentInventory() {
    //connection.query should have placeholder from user's selection of department - produce_inventory is a placeholder for testing purposes for now 12/12/2020
    //display the department table in html
    connection.query('SELECT * FROM grocery_db.produce_inventory', function (err, result) {
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
            console.log(colors.rainbow("-------------------------------------"));
        });
    });
};
checkDepartmentInventory();

function checkDepartmentItem() {
    //connection.query should have placeholder from user's selection
    //console.log the specific item
    //display specific item in html
    connection.query('SELECT * FROM grocery_db.produce_inventory', function (err, result) {
        if (err) throw err;
        console.log("Here is the information for this item:")
        console.log(colors.rainbow("-------------------------------------"))
        //here is where we need to incorporate user input from the HTML
        console.log(result[0]);
    });
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