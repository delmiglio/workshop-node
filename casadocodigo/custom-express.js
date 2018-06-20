var express = require('express');

module.exports = function () {
    var app = express();

    // Set Viewengine
    app.set('view engine', 'ejs'); 

    // Map a GET REQUEST
    require('./routes/produtos')(app);
    return app;
}