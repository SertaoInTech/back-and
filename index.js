const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Sertão Tech!!!')
})

app.listen(port, () => {
  console.log(`Opa!!! estou radando na rota: http://localhost:${port}`)
})