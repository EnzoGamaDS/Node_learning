const express = require("express");
const uuid = require('uuid').v4;
const fs = require('fs');

const app = express();

app.use(express.json());

let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }else{
        products = JSON.parse(data);
    }
})

// Body => Sempre que eu quiser enviar dados para minha aplicação
// Params => Vem na URL -> /products/12312312341/123231/teste
// Query => Parametros opcionais -> /product?id=123&value=Cadeira
 
app.post("/products", (request, response) => {
    //nome e preço
    const {name, price} = request.body;

    const product = {
        name,
        price, 
        id: uuid(),
    };
    products.push(product);
    productFile();

    return response.json(product);
});

app.get("/products", (request, response) => {
    return response.json(products);
});

app.get("/products/:id", (request, response) => {

    const { id } = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product);
});

app.put("/products/:id", (request, response) => {
    const { id } = request.params;
    const {name, price} = request.body;

    const productIndex = products.findIndex((product) => product.id === id);

    //alterando produto
    products[productIndex] = {
        name,
        price
    };
    productFile();

    return response.json({message: "Produto alterado com sucesso"});
});

app.delete("/products/:id", (request, response) => {
    const { id } = request.params;
    const productIndex = products.findIndex((product) => product.id === id);

    products.splice(productIndex, 1);

    return response.json({message: "Produto removido com sucesso ! "})
});

function productFile(){
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Produto inserido")
        }
    });
}

app.listen(4002, () => console.log("Servidore rodando na porta 4002"));

