const connectionFactory = require('../infra/connectionFactory')

module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        const connection = connectionFactory();

        connection.query('Select * From livros', (err, result, fields ) =>{
            res.render('produtos/lista', {livros: result});
        });

        connection.end();
    })
}