var http = require('http');
var porta = 3001;
var ip = 'localhost';

http.createServer(function (req, res) {

    console.log('Recebendo request!');
    res.writeHead(200, {
        'Content-Type': 'text/hml'
    });
    res.end('<html><body>Uma mensagem na tela!</body></html>');

}).listen(porta, ip);

console.log('servidor executando em http://' + ip + ':' + porta);