const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Minha API está funcionando!');
});

app.get('/sobre', (req, res) => {
  res.send('Essa é uma aplicação Node simples.');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});