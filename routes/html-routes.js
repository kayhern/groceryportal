// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  // our html files are : all.html, deptSearch.html, search.html , about.html,speciallist.html, view.html 
  // 

  // JQuery code require so JS runs smoothly 


  app.get("/search.js", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/search.js"));
  })


  // all route loads the all.html page, where all  in inventory in db are displayed
  app.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/all"));
  });

  app.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "../js/all.js"));
  });

  // short route loads the search.html page, where the search page in the db are displayed
  app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // specialist route loads the specialist.html page, where the specialist info is displayed

  app.get("/specialist", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/specialist.html"));
  });

  // specialist route loads the add.html page, where the specialist add inventory

  app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // specialist route loads the add.html page, where the specialist remove inventory

  app.get("/remove", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/remove.html"));
  });

  // specialist route loads the add.html page, where the specialist modify inventory

  app.get("/modify", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/modify.html"));
  });

  // specialist route loads the add.html page, where the specialist to stock inventory

  app.get("/stock", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stock.html"));
  });

  // deptSearch route loads the deptSearch.html page, where dept Search in the db are displayed
  app.get("/deptSearch", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deptSearch.html"));
  });

  //   // about route loads the about.html page, a page that gives a brief description of the team

  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

};