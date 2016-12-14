const express = require('express');
const router = express.Router();
const request = require('request');
const format = require('date-format');

const AWSAccessId = process.env.AWSAccessId;
console.log(AWSAccessId);
const indexController = require('../controllers/index');
const Crypto = require('crypto-js');
format(new Date());
let date = format('yyyy-MM-ddThh:mm:ssZ', new Date());
let dateStamp = format('yyyy-MM-dd', new Date());
let regionName = 'us-west-2';
let serviceName = 'apigateway';
let kSigning = null;
console.log(date);


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
  console.log(date);
  function getSignatureKey(Crypto, key, dateStamp, regionName, serviceName) {
      var kDate = Crypto.HmacSHA256(dateStamp, "AWS4" + key);
      var kRegion = Crypto.HmacSHA256(regionName, kDate);
      var kService = Crypto.HmacSHA256(serviceName, kRegion);
      var kSigning = Crypto.HmacSHA256("aws4_request", kService);
      console.log("ksgin",kSigning);
      return kSigning;

  }
  getSignatureKey(Crypto, AWSSecret, dateStamp, regionName, serviceName);

  request(`http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=${AWSAccessId}&AssociateTag=${AWSSecret}&Operation=ItemSearch&Keywords=the%20hunger%20games&SearchIndex=Books&Timestamp=${date}&Signature=${kSigning}`, function (error, response, body){
    console.log(body);
  });
  console.log(kSigning);
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
