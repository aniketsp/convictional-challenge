const express = require('express')
const app = express()
const port = 3000

const utils = require('./utils')

app.get('/products', (req, res) => {
  utils.getAllProducts(res);
})

app.get('/products/:id', (req, res) => {
  utils.getProductById(res, req.params.id);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
