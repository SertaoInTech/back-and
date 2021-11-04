const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');

require('./database')

const app = express();

app.use(express.json());

app.use(morgan('combined'));

app.use(routes);
app.listen(3333, () =>{
    console.log("Rodando na porta 3333 \\0/.");
})