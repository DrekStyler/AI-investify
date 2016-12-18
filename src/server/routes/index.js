const express = require('express');
const router = express.Router();
const oauth = require('oauth');
const request = require('request');
const indexController = require('../controllers/index');
const SEMANTICS_KEY = process.env.SEMANTICS_KEY;
const SEMANTICS_SECRET = process.env.SEMANTICS_SECRET;
const sem3 = require('semantics3-node')(SEMANTICS_KEY,SEMANTICS_SECRET);

router.get('/', function (req, res, next) {
  var renderObject = {};
  res.render('index', renderObject);
});

router.get('/team', function (req, res, next) {

  var renderObject = {};
  res.render('team', renderObject);
});

router.get('/position', function (req, res, next) {
  const renderObject = {};
  res.render('position', renderObject);
});

router.get('/amazon', function (req, res, next) {
  let renderObject = {};
  var endpoint = "products";
  var method = "GET";
  var jsonStr = '{"search" : "nike"}';

  sem3.run_query(endpoint, jsonStr, method, function(err, products) {
        if (err) {
            return console.error("Couldn't execute query: get_products");
          }

      renderObject = products;
      res.send(renderObject);
    });
  });

module.exports = router;
