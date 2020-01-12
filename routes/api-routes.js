// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
let express = require("express");
let grocery = require('../models/grocery.js');
let router = express.Router();

// Routes
// =============================================================
module.exports = function (app) {};

//APP.GET ALL DATA
app.get('/api/burgers', function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
        res.render('index', dbBurger);
    });
});

//APP.GET ONE PIECE OF DATA

//APP.FIND ONE PIECE OF DATA

//APP.RETRIEVE DATA

//APP.DELETE ITEM