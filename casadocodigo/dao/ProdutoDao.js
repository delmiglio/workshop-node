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


module.exports = ProdutoDao;