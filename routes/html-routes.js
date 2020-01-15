// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });


  // our html files are : all.html, deptSearch.html, search.html , about.html,speciallist.html, view.html 
// 


  // all route loads the all.html page, where all  in inventory in db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });

  // short route loads the search.html page, where the search page in the db are displayed
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

// specialist route loads the specialist.html page, where the specialist info is displayed

  app.get("/specialist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/specialist.html"));
  });

   // deptSearch route loads the deptSearch.html page, where dept Search in the db are displayed
  app.get("/deptSearch", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/deptSearch.html"));
  });

  //   // about route loads the about.html page, a page that gives a brief description of the team

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

};
