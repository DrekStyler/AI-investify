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

router.get('/semantics', function (req, res, next) {
    let renderObject = {};
    let endpoint = "products";
    let method = "GET";
    let search_term = req.query.item;
    let jsonStr = `{"search": "${search_term}"}`;
    jsonStr = JSON.stringify(jsonStr);

  sem3.run_query(endpoint, jsonStr, method, function(err, products) {
        if (err) {
            return console.error("Couldn't execute query: get_products");
          }
      renderObject = products;
      res.send(renderObject);
    });
  });

  router.get('/market', function (req, res, next) {
    var renderObject = {};
    res.render('market', renderObject);
  });

module.exports = router;
