const express = require('express');
const http = require("http");

const port = process.env.port || 3000;

const app = express();

app.get('/', (req, res, next) => {
    res.send("** MAITRE YODA VOUS SALUT **");
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log("** MAITRE YODA * IS CONNECTED**");
});
