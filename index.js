require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.json());
const port = process.env.API_PORT;

const ocorrenciaRouter = require('./routers/OcorrenciaRouter');
const usuarioRouter = require('./routers/UsuarioRouter');
app.use('/usuarios', usuarioRouter);
app.use('/ocorrencias', ocorrenciaRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});







