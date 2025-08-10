const { Messages } = require('../models/messages.model')
const { Users } = require('../models/users.model')
const { Conversations } = require('../models/conversations.model')

const showUserChats = async (req, res) => {
    try {
        let { phoneNo } = req.body
        let conversations = await Conversations.find({ phoneNo: phoneNo })
        return res.json(conversations)
    } catch (error) {
        console.log(error)
    }
}

const showIndividualChat = async (req, res) => {
    try {
        let { conversationId, phoneNo } = req.body
        let messages = await Messages.find({
            conversationId: conversationId,
            $or: [
                { senderPhoneNo: phoneNo },
                { receiverPhoneNo: phoneNo }
            ]
        })
        return res.json(messages)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { showUserChats, showIndividualChat }