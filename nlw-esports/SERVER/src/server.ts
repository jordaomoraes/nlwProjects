import express from "express";

const app = express();

app.get('/ads',(request, response) =>{
    return response.json({teste : 'aqui é o valor'})
})

console.log("server rodando na porta 3333")

app.listen(3333)