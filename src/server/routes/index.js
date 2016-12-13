const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  var renderObject = {};
  res.render('index', renderObject);
});

router.get('/team', function (req, res, next) {

  var renderObject = {};
  res.render('team', renderObject);
});

module.exports = router;
