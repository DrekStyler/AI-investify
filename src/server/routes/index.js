const express = require('express');
const router = express.Router();
const request = require('request');
const format = require('date-format');
const AWSAccessKeyId = process.env.AWSAccessKeyId;
const AWSSecretKey = process.env.AWSSecretKey;
const indexController = require('../controllers/index');
const crypto = require('crypto-js');
process.env.TZ = 'Europe/Amsterdam';
format(new Date());
let keyWords = "Dog";
let searchIndex = "Books";
let date = format('yyyy-MM-ddThh:mm:ssZ', new Date());
let dateStamp = format('yyyyMMdd', new Date());
let regionName = 'us-west-2';
let serviceName = 'AWSECommerceService';
let kSigning = null;


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
  function getSignatureKey(Crypto, AWSSecretKey, dateStamp, regionName, serviceName) {
    var kDate = Crypto.HmacSHA256(dateStamp, 'AWS4' + AWSSecretKey);
    var kRegion = Crypto.HmacSHA256(regionName, kDate);
    var kService = Crypto.HmacSHA256(serviceName, kRegion);
    var kSigning = Crypto.HmacSHA256('aws4_request', kService);
    return kSigning;
  }

  const signature = getSignatureKey(crypto, AWSSecretKey, dateStamp, regionName, serviceName);
  console.log(dateStamp,date);
  console.log(signature);
    request(`http://webservices.amazon.com/onca/xml?AWSAccessKeyId=${AWSAccessKeyId}&AssociateTag=derekstyer20-20&Keywords=${keyWords}&Operation=ItemSearch&ResponseGroup=2COffers&SearchIndex=${searchIndex}&Service=AWSECommerceService&Sort=price&Timestamp=${date}&Signature=${signature}`, function (error, response, body) {
    console.log('body', body);
  });
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
