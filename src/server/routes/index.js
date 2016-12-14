const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  res.render('index', renderObject);
});

router.get('/team', function (req, res, next) {
  const renderObject = {};
  res.render('team', renderObject);
});

router.get('/position', function (req, res, next) {
  const renderObject = {};
  res.render('position', renderObject);
});

module.exports = router;
