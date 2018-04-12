const dbConnectionFactory = require('../infra/dbConnectionFactory');
const dao = require('../infra/dao');

function postDht22(req, res){
    const { temperatura, umidade } = res.body;
    //make this save a dht22
    const connection =  app.infra.dbConnectionFactory();
    const dao = new app.infra.dao(connection);
    
    dao.salva({ temperatura, umidade }, function(erro, respostaDoBanco){
        if(erro){
            res.status(400).send('rolou não');
        }else{
            res.status(201).send(respostaDoBanco);
        }
    });
}

function getDht22(req, res){
    const { temperatura, umidade } = req.body;
    //make this save a dht22
    const connection =  app.infra.dbConnectionFactory();
    const dao = new app.infra.dao(connection);
    
    dao.lista(function(erro, respostaDoBanco){
        if(erro){
            res.status(400).send('rolou não');
        }else{
            res.status(200).send(respostaDoBanco);
        }
    });
}

/*
function postdsb18(req, res){
    const { umidade } = req.body;
    //make this save a dht22
    res.status(201).send({ umidade});
}

function getdsb18(req, res){
    const { umidade } = req.body;
    //make this get all dht22
    res.status(200).send({ umidade});
}

function postNvAgua(req, res){
    const { nv_cheio, nv_vazio } = req.body;
    //make this save a dht22
    res.status(201).send({nv_cheio, nv_vazio});
}

function getNvAgua(req, res){
    const { nv_cheio, nv_vazio } = req.body;
    //make this save a dht22
    res.status(200).send({temperatura, umidade});
}*/

module.exports = { 
    postDht22,
    getDht22
   /* postdsb18,
    getdsb18,
    postNvAgua,
    getNvAgua*/
}
