// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models/index.js");
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

    //add item data
    // add a book  - video - time ; 8:51
    // app.post("api/new", function(req, res){
    // Book.create({ 
    // title: req.body.title, 
    // author: req.body.author, 
    // genere: req.body.genre,
    // pages: req.body.pages 
    // }); 
    // }); 

    //notify about item data
};