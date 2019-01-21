//taken from wedding app, add dependencies
var express = require("express");

var router = express.Router();
var path = require("path");
// // Requiring our models and passport as we've configured it
// var passport = require("../config/passport");

// var user = require("../models/users.js");
// var wedding = require("../models/wedding.js");

var request = require('request');
var cheerio = require('cheerio');

var Note = require('../models/Note.js');
var Arti = require('../models/Article.js');

// create all our routes and setup logic within those routes

router.get('/', function(req, res){
    res.redirect('/index')
})

router.get('/scrape', function(req, res){
    
})