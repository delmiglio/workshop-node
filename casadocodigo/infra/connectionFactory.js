var mysql = require('mysql');
function connectionFactory() {
    console.log(process.env.DB_USER);
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
    return connection;
}
module.exports = () => connectionFactory;