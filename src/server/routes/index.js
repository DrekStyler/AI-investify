const express = require('express');
const router = express.Router();
const request = require('request');
const format = require('date-format');
const AWSAccessId='AKIAI5YPWCDEVYEOHFCA';
const AWSSecret='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';
const indexController = require('../controllers/index');
format(new Date());
let date = format('yyyy-MM-ddThh:mm:ssZ', new Date());
console.log(date);


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

router.get('/amazon', function (req, res, next) {
  console.log(date);
  request(`http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=${AWSAccessId}&AssociateTag=${AWSSecret}&Operation=ItemSearch&Keywords=the%20hunger%20games&SearchIndex=Books&Timestamp=${date}`, function (error, response, body){
    console.log(body);
  });
  console.log(req.body);
  console.log("it hit!");
});

// http://webservices.amazon.com/onca/xml?
// Service=AWSECommerceService&
// AWSAccessKeyId=[AWS Access Key ID]&
// AssociateTag=[Associate ID]&
// Operation=ItemSearch&
// Keywords=the%20hunger%20games&
// SearchIndex=Books
// &Timestamp=[YYYY-MM-DDThh:mm:ssZ]
// &Signature=[Request Signature]

module.exports = router;
