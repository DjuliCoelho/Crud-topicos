const express = require("express");
const app = express();
const rotas = require("./Rotas");
app.use(express.json());
app.use(rotas);
require("./Config/DbConfig");

app.get("/", (req, res) => {
    return res.json({
        nome: "Djuli",
        carro: "Azera",
        materia: "CSS",
        profissao: "TikToker"
    });
})

app.listen(8089);