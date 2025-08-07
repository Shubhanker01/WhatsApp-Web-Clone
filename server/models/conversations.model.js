const mongoose = require('mongoose')

const conversations = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    ]
})

const Conversations = mongoose.model('conversations', conversations)
module.exports = { Conversations }