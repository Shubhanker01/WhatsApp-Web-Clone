const mongoose = require('mongoose')
const { Schema } = mongoose

const users = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        required: true
    },
    whatsapp_id: {
        type: String,
        required: true
    }
})

const Users = mongoose.model('users', users)
module.exports = { Users }

