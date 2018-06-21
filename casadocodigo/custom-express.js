const consign = require('consign');
const express = require('express');

module.exports = function () {
    var app = express();

    // Set Viewengine
    app.set('view engine', 'ejs');
    app.use(express.static('./public'));

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