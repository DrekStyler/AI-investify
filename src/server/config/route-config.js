(function (routeConfig) {

  'use strict';
  const bodyParser = require('body-parser');

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');

    // *** register routes *** //
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/', routes);
    app.use('/team', routes);

  };

})(module.exports);
