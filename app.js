/**************************************************************************************
 *  Objetivo: API para teste de hospedagem da azure
 *  Autor: Luiz Gustavo e Felipe Graciano
 *  Data: 10/01/2023
 *  Versão: 1.0
 **************************************************************************************/

//import das bibliotecas para API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const app = express();

//Permissões do cors
app.use((request, response, next) => {
    //Define quem poderá acessar a Api - '*' = Todos
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET , POST, PUT, DELETE, OPTIONS');

    app.use(cors());
    next();
});

const controllerUser = require('./controller/controllerUser.js')

app.get('/user', cors(), async function (request, response) {
    let dadosUsuario = await controllerUser.ctlGetUsuario()

    response.status(dadosUsuario.status)
    response.json(dadosUsuario)
})

app.get('/user/:id', cors(), async function (request, response) {
    let idUsuario = request.params.id

    let dadosUsuario = await controllerUser.ctlGetUsuarioByID(idUsuario)

    response.status(dadosUsuario.status)
    response.json(dadosUsuario)
})



app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})

/*****************************************************************************************************************
* Objetivo: Exemplo de Socket.IO
* Data: 10/01/2023
* Autor: Luiz
* Versão: 1.0
******************************************************************************************************************/
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: '*'}})

const { useAzureSocketIO } = require("@azure/web-pubsub-socket.io");

useAzureSocketIO(io, {
    hub: "Hub", // Esse hub estará na aba chaves e ver o nome que está no seu hub.
    connectionString: "Endpoint=https://socket-back-teste.webpubsub.azure.com;AccessKey=HJNJnRrNIGvn8MyV/JwKLRBXDGrNLOmbgTzvleZ3oGU=;Version=1.0;"
    //Essa connectionString será na aba chaves também e pegue o "Cadeia de conexão" e cole acima
});

io.on('connection', socket => {
    console.log('Usuario Conectado', socket.id);
})

server.listen(3001, () => console.log('SERVER SOCKEET.IO LIGADO: 3001'))
