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

    //display all items in the frocery table
    app.get("/api/all", function (req, res) {
        Grocery.findAll({}).then(function (results) {
            res.json(results);

        });
    });

    //get displays items whose names matches users query as a JSON object 
    app.get("/api/item/:item", function (req, res) {
        if (req.param.item_name) {
            Grocery.findAll({
                where: {
                    name: req.param.item_name
                }
            }).then(function (results) {
                res.json(results);
            });
        }
    });

    //get location data
    app.get("/api/location/:location", function (req, res) {
        if (req.param.aisle_number) {
            Grocery.findAll({
                where: {
                    location: req.param.aisle_number
                }
            }).then(function (results) {
                res.json(results);
            });
        }
    });


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