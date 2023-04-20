const express = require("express");
const rotas = express.Router();
const AnotacaoController = require("./Controller/AnotacaoController");
//const AnotacaoCliente = require("./controller/ClienteController");

rotas.get("/anotacoes", AnotacaoController.read);
rotas.post("/anotacoes", AnotacaoController.create);
rotas.delete("/anotacoes/:id", AnotacaoController.delete);
rotas.post("/anotacoes/:id", AnotacaoController.update);

module.exports = rotas;