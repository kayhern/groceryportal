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
    //***NEED TO ADD A .js file called "all" under public folder */
    app.get("/api/all", function (req, res) {
        Grocery.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    //get table data

    //get item data

    //get location data

    //add item data

    //notify about item data
};