// function to connect to mongodb
const mongoose = require('mongoose')


async function connectToMongoDb() {
    try {
        let response = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`${response.connection.host} is mongodb connection host`)
    } catch (error) {
        console.log(error)
    }

}

module.exports = connectToMongoDb