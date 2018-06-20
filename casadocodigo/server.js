var app = require('./custom-express')();
app.listen(3001, function () {
    console.log('Servidor rodando em http://localhost:3001');
});