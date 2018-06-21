// const LivrosDao = require('../dao/LivrosDao')
const ProdutoDao = require('../dao/ProdutoDao')


module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtoDao = new ProdutoDao(connection);
        produtoDao.getAllLivros((err, result, fields) => {
            res.render('produtos/lista', {
                livros: result
            });
        });
        connection.end();
    })
}