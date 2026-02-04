import express from 'express'
const app = express()

// get the port from env variable
const PORT = 5000
const CURRENT_VERSION = '1.0.0'

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send(CURRENT_VERSION)
})

app.listen(PORT, () => {})
