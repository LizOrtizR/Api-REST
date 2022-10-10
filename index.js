const express = require('express');
const { getConnection } = require ('./db/db-connection-mongo');
const cors = require('cors');
require ('dotenv').config();


const app = express()
const port = process.env.PORT||4000;



// Implementacion de cors
app.use (cors ());
//routes
getConnection();

// JSON
app.use(express.json());


app.use('/usuario', require('./router/usuario'));
app.use('/marca', require('./router/marca'));
app.use('/estadoequipo', require('./router/estadoequipo'));
app.use('/tipoequipo', require('./router/tipoequipo'));
app.use('/inventario', require('./router/inventario'));



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})