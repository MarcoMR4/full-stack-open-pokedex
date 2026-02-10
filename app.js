import express from 'express'
import path from 'path'
const app = express()

// get the port from env variable
const PORT = 5000
const CURRENT_VERSION = '1.0.0'

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send(CURRENT_VERSION)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'))
})

app.listen(PORT, () => {})
