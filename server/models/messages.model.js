const mongoose = require('mongoose')
const { Schema } = mongoose

const messages = new Schema({
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    senderPhoneNo: {
        type: String,
        ref: 'users'
    },
    receiverPhoneNo: {
        type: String,
        ref: 'users'
    },
    conversationId: {
        type: String,
    }
}, {
    timestamps: true
})

const Messages = mongoose.model('processed_messages', messages)
module.exports = { Messages }
