const Anotacoes = require("../model/AnotacaoModel");
module.exports = {
    async read(req, res){
      //read recebe get
      //async pega/inclue informaçoes no banco de dados
        const anotacoesList = await Anotacoes.find();
        //find pega todos os registros e guarda/processa em anotacoesList
        return res.json(anotacoesList);
    },

    async create(req, res){
        const {Titulo, Notas, Prioridade} = req.body;

        if(!Titulo || !Notas){
            return res.status(400).json({error: "É necessario preencher um titulo e uma anotação."});
        }

        const anotacaoCriada = await Anotacoes.create({
            Titulo,
            Notas,
            Prioridade
        });
        return res.json(anotacaoCriada);
    },

    async delete(req, res){
        const{ id } = req.params;
        const anotacaoDeletada = await Anotacoes.findOneAndDelete({_id : id });
        if(anotacaoDeletada){
            return res.json(anotacaoDeletada);
        }
    },
    async update(req, res){
        const { id } = req.params;
        const { Titulo, Notas, Prioridade} = req.body;

        const anotacao = await Anotacoes.findOne({_id: id});
        anotacao.Titulo = Titulo;
        anotacao.Notas = Notas;
        anotacao.Prioridade = Prioridade;

        await anotacao.save();

        return res.json(anotacao);
    }
}