const http = require('http');
const port = 8080;
const ip = 'localhost';
const server = http.createServer((request, response) => {
    const rota = [];

    // Mesmo Código SEM IF
    rota['/'] = '<h1>Home</h1>';
    rota['/contato'] = '<h1>Contato</h1>';
    // if (rota[request.url]) {
    //     response.end(rota[request.url]);
    // }
    // else{
    //     response.end('<h1>NAO TEM</h1>'); 
    // }

    // TERNARIO
    // rota[request.url] ? response.end(rota[request.url]) : response.end('<meta charset="utf-8"<h1>NAO TEM</h1>');
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end(rota[request.url] || '<html><meta charset="utf-8"><h1>NAO TEM!</h1></html>');

    // console.log('Eita', request.url);
    // if (request.url === '/') {
    //     response.end('<h1>Home</h1>');
    // }
    // else if(request.url === '/contato'){
    //     response.end('<h1>Contato</h1>'); 
    // }
    // else {
    //     response.end('<h1>NAO TEM</h1>'); 
    // }
});
server.listen(port, ip, () => {
    // console.log('Servidor de pé em http://' + ip + ':' +port);
    console.log(`Servidor de pé em http://${ip}:${port}`);
    console.log('Pra derrubar o servidor: ctrl+c');
});