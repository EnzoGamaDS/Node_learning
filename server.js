const http = require("http");

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (req.url === '/produto') {
        res.end(JSON.stringify({
            data: 'Rota de produto',
        }));
    }    
    if (req.url === '/usuario') {
        res.end(JSON.stringify({
            data: 'Rota de usuario',
        }));
    }
    res.end("Qualquer outra rota")

});

server.listen(8000, () => console.log("Servidor está rodando na porta 8000"));