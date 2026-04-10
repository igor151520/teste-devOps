const express = require('express')
const app = express()

const PORT = 3000

// dados dos integrantes
const data = {
  integrantes: [
    { nome: "Igor da Rosa Mafalda" },
    { nome: "Luan Martins Sastre" },
    { nome: "Hiuri Machado Cardozo" },
  ]
}

// rota principal -> HTML
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

// rota integrantes -> JSON
app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})