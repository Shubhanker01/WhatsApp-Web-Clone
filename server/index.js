require('dotenv').config()
const { app } = require('./app')
const connectToDb = require('./db/connectToDb')
const PORT = process.env.PORT || 8050

app.listen(PORT, () => {
    console.log(`App is listening on port:${PORT}`)
})

connectToDb()