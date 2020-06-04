import express from 'express'
import path from 'path'
const env = process.env.NODE_ENV || 'development'

import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', express.static(path.resolve('./public')))

app.get('/api', (req, res) => {
  res.send({ message: 'hello' })
})

app.use(function(req, res) {
  res.redirect('/')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})
