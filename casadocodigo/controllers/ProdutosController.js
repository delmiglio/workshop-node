const connectionFactory = require('../infra/connectionFactory')();
const ProdutoDao = require('../dao/ProdutoDao');

class ProdutosController {

    getAll(req, res) {
        var connection = connectionFactory();
        var produto = new ProdutoDao(connection);
        produto.getAllLivros((err, result, fields) => {
            console.log(err);
            res.render('produtos/lista', {
                livros: result
            });
        });
        connection.end();
    }

    save(req, res) {
        var livro = req.body;
        var connection = connectionFactory();
        var produtoDao = new ProdutoDao(connection);
        produtoDao.save(livro, (error) => {
            res.redirect('/produtos');
            console.log(error);
        })
    }

    show(req,res) {
        res.render('produtos/form');
    }

}

module.exports = new ProdutosController()