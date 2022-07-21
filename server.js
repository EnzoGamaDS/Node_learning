const http = require("http");

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        data: 'Enzo Gama2',
        message: "Olá mundo"
    }));
    // res.end("Olá mundo")

});

server.listen(8000, () => console.log("Servidor está rodando na porta 8000"));