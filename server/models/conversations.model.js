const mongoose = require('mongoose')

const conversations = new mongoose.Schema({
    conversationName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phoneNo:
    {
        type: String,
        ref: 'users'
    },
    conversationId: {
        type: String,
        ref: 'processed_messages'
    },
    lastMessage:
    {
        type: String
    },
    date: {
        type: Date
    }

})

const Conversations = mongoose.model('conversations', conversations)
module.exports = { Conversations }