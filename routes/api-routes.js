// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
let express = require("express");
let Grocery = require('../models/grocery.js');
let router = express.Router();

// Routes
// =============================================================
module.exports = function (app) {

    //display all tables
    app.get("/api/all", function (req, res) {
        Grocery.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    //get table data

    //get item data

    //get location data

    //add grocery data
    // add a book  - video - time ; 8:51 
    //https://www.youtube.com/watch?v=dt9mXaEEAkM

    app.post("api/new", function(req, res){
    grocery.create({ 
        id:req.body.id,
    item_name: req.body.item_name, 
    price: req.body.price, 
    quantity: req.body.quantity,
    aisle_name: req.body.aisle_number, 
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt
    }); 
    }); 

    //notify about item data
};