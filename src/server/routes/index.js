const http = require('http')
// const request = require('request');
const express = require('express');
const app = express();
const router = express.Router();
var xml = require('xml');
const bodyParser = require('body-parser');
const request = require('then-request');
const oauth = require('oauth');
const crunchbase = require('crunchbase2');
const indexController = require('../controllers/index');
const SEMANTICS_KEY = process.env.SEMANTICS_KEY;
const SEMANTICS_SECRET = process.env.SEMANTICS_SECRET;
const sem3 = require('semantics3-node')(SEMANTICS_KEY,SEMANTICS_SECRET);
const crunchbase_key = process.env.CRUNCHBASE_KEY;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





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

  router.get('/funding', function (req, res, next) {
    var renderObject = {};
    res.render('funding', renderObject);
  });

  router.get('/crunchbase', function (req, res, next) {
    var renderObject = {};
    var api_key_crunch = "&user_key=" + crunchbase_key;
    var obj_key = Object.keys(req.query)[0];
    var query_string = "?name=" + req.query[obj_key];
    var peopleUrl = 'https://api.crunchbase.com/v/3/odm-people';
      request('GET',peopleUrl + query_string + api_key_crunch).then(function (results) {
        var parsedBody = JSON.parse(results.body.toString('utf8'));
        renderObject.data = parsedBody.data.items;
        res.contentType('json');
        res.status(200).send(renderObject);
      });
    });

    router.get('/crunchbase_org', function (req, res, next) {
      var renderObject = {};
      var api_key_crunch = "&user_key=" + crunchbase_key;
      var obj_key = Object.keys(req.query)[0];
      var query_string = "?name=" + req.query[obj_key];
      var peopleUrl = 'https://api.crunchbase.com/v/3/odm-organizations';
        request('GET',peopleUrl + query_string + api_key_crunch).then(function (results) {
          var parsedBody = JSON.parse(results.body.toString('utf8'));
          console.log(parsedBody);
          renderObject.data = parsedBody.data.items;
          console.log(renderObject);
          res.contentType('json');
          res.status(200).send(renderObject);
        });
      });
module.exports = router;
