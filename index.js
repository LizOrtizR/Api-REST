

const express = require('express');
const { default: mongoose } = require('mongoose');
const { getConnection } = require ('./db/db-connection-mongo');


const app = express()
const port = process.env.PORT||3000;

getConnection();
app.use(express.json());
app.use('/usuario', require('./router/usuario'));
app.use('/marca', require('./router/marca'));
app.use('/estadoequipo', require('./router/estadoequipo'));
app.use('/tipoequipo', require('./router/tipoequipo'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})