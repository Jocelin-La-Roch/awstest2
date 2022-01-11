const express = require('express');

const port = process.env.port || 3000;

const app = express();

app.get('/', (req, res, next) => {
    res.send("** MAITRE YODA VOUS SALUT **");
});

app.listen(port, () => {
    console.log("** MAITRE YODA * IS CONNECTED **");
});
