var mysql = require('mysql');

function connectionFactory() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'casadocodigo'
    });
    return connection;
}

module.exports = () => connectionFactory;