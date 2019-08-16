'use strict';

const websocket = require('websocket');
const WebSocketServer = websocket.server;
const express = require('express');
const http = require('http');

const app = express();

app.get('/version', (req, res) => { res.send({ 'test': 4567 }) });
const server = http.createServer(app);

server.listen(8080, function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('request', function (request) {
    console.log((new Date()) + ' Connection accepted.');
    var connection = request.accept(null, request.origin);
    connection.on('message', message => {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    })
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});