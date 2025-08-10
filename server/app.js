const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const chatRouter = require('./routes/chats.routes')

app.use('/api/v1', chatRouter)


module.exports = { app }