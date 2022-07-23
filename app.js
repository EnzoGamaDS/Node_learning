const express = require("express");

const app = express();

app.get("/primeira-rota", (request, response) => {
    return response.json({
        data: "Ola isis"
    });
});
 

app.listen(4002, () => console.log("Servidore rodando na porta 4002"));

