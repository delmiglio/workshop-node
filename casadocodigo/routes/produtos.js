module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'casadocodigo'
        });

        connection.query('Select * From livros', (err,result,fields ) =>{
            res.send(result);
        });

        connection.end();

        // res.render('produtos/lista');
    })
}