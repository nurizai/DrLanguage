const express = require('express')
const cors = require('cors')
const server = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/drlanguage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

server.listen(3333, () => console.log('Server ready on port 3333'))
server.use(express.json())
server.use(cors())
server.set('json spaces', 2)

server.use('/doctors', require('./routes/doctors'))
