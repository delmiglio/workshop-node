// class LivrosDao {
//     getAllLivros(callback) {
//         const connection = connectionFactory();
//         // connection.query('Select * from livros', (err, result, fields) => {
//         //     callback(err, result, fields);
//         // });
//         connection.query('Select * from livros', callback);
//         connection.end();
//     }
// }

function ProdutoDao(connection){
    this._connection = connection;
}

ProdutoDao.prototype.getAllLivros = function(callback){
    this._connection.query('Select * from livros',callback);
}

ProdutoDao.prototype.save = function(livro, callback){
    console.log(livro);
    this._connection.query('INSERT INTO livros SET ?', livro , callback);
}

module.exports = ProdutoDao;