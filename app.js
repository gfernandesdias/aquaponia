const dbConnectionFactory = require('./app/infra/dbConnectionFactory');
const service = require('./app/services/service');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));


app.get('/', (req, res) => {
    res.send('Hello, this is our API');
});

app.post("/parametros/dht22", (req, res) => {
    service.postDht22(req, res);
});

app.get("/parametros/dht22", (req, res) => {
    service.getDht22(req, res);
});

/*
app.post("/parametros/dsb18", (req, res) => {
    service.getdsb18(req, res);
});
app.post("/parametros/nv_agua", (req, res) => {
    service.postNvAgua(req, res);
});
app.get("/parametros/dht22", (req, res) => {
    service.getDht22(req, res);
});
app.get("/parametros/dsb18", (req, res) => {
    service.getdsb18(req, res);
});
app.get("/parametros/nv_agua", (req, res) => {
    service.getNvAgua(req, res);
});*/

//createDbConnection();


app.listen(3000,function(){ console.log("server running"); });
