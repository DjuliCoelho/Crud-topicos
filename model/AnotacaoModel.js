const mongoose = require("mongoose");
const AnotacaoModelSchema = new mongoose.Schema({
    Titulo: String,
    Notas: String,
    Prioridade: Boolean
});

module.exports = mongoose.model("Anotacoes", AnotacaoModelSchema);