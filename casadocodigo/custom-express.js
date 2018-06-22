const consign = require('consign');
const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

module.exports = function () {
    var app = express();

    // Set Viewengine
    app.set('view engine', 'ejs');
    app.use(express.static('./public'));
    app.use(bodyparser.urlencoded({extended:true}));

    consign()
        .include('./routes')
        .then('./infra')
        .into(app)

    // 404 consign
    app.use((req, res) => {
        res.send('Essa página não existe!')
    })

    // Map a GET REQUEST
    require('./routes/produtos')(app);
    return app;
}