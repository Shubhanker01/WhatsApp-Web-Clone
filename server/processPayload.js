const fs = require('fs/promises')
const path = require('path')
const dir = './payloads'
const { Messages } = require('./models/messages.model')
const { Users } = require('./models/users.model')
const { Conversations } = require('./models/conversations.model')
const { flattenObject } = require('./utils/flattenObject')

async function processPayloadFile(fullPath) {
    // console.log("I am running")
    const rawData = await fs.readFile(fullPath)
    const json = JSON.parse(rawData)
    const obj = flattenObject(json)
    const entries = obj['metaData.entry']
    for (const entry of entries) {
        const changes = entry.changes
        // extract and save users and also save messages
        for (const change of changes) {
            const contacts = change.value.contacts
            const phoneNo = change.value.metadata.display_phone_number
            const user = await Users.findOne({ phoneNo: phoneNo })
            if (!user && contacts) {
                let name = contacts[0].profile.name
                let whatsapp_id = contacts[0].wa_id
                await Users.create({
                    name: name,
                    phoneNo: phoneNo,
                    account_type: obj['metaData.object'],
                    whatsapp_id: whatsapp_id
                })
            }
            const messages = change.value?.messages;
            if (Array.isArray(messages) && messages.length > 0) {
                const text = messages[0]?.text?.body;
                const senderNo = messages[0]?.from;
                const receiverNo = phoneNo;
                const conversationId = obj['metaData.gs_app_id'];

                const existingMessage = await Messages.findOne({
                    message: text,
                    senderPhoneNo: senderNo,
                    receiverPhoneNo: receiverNo,
                    conversationId
                });

                if (!existingMessage) {
                    await Messages.create({
                        message: text,
                        senderPhoneNo: senderNo,
                        receiverPhoneNo: receiverNo,
                        status: "sent",
                        conversationId
                    });
                    // get latest message between sender and reciver
                    let latestMessage = await Messages.findOne({
                        conversationId,
                        $or: [
                            { senderPhoneNo: senderNo, receiverPhoneNo: receiverNo },
                            { senderPhoneNo: receiverNo, receiverPhoneNo: senderNo }
                        ]
                    }).sort({ createdAt: -1 })
                    // get receiver name first
                    let receiverName = await Users.findOne({ phoneNo: receiverNo })
                    // Ensure conversation exists
                    let conversation = await Conversations.findOne({ name: receiverName })
                    if (!conversation) {
                        await Conversations.create({
                            conversationName: receiverName.name,
                            phoneNo: senderNo,
                            username: user.name,
                            conversationId: conversationId,
                            lastMessage: latestMessage?.message || "",
                            date: latestMessage?.createdAt || new Date()
                        })
                    }
                    else {
                        conversation.lastMessage = latestMessage?.message || "";
                        conversation.date = latestMessage?.createdAt || new Date();
                        await conversation.save();
                    }
                }
            }

        }

    }
}

async function processAllPayloadFiles() {
    try {
        const files = await fs.readdir(dir)
        for (const file of files) {
            const fullPath = path.join(dir, file)
            await processPayloadFile(fullPath)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { processAllPayloadFiles }

