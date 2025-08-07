const fs = require('fs/promises')
const path = require('path')
const dir = './payloads'
const { Messages } = require('./models/messages.model')
const { Users } = require('./models/users.model')
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
                console.log("I am also called")
                let name = contacts[0].profile.name
                let whatsapp_id = contacts[0].wa_id
                await Users.create({
                    name: name,
                    phoneNo: phoneNo,
                    account_type: obj['metaData.object'],
                    whatsapp_id: whatsapp_id
                })
            }
            const messages = change.value.messages
            if (messages !== undefined) {
                const text = messages[0].text.body
                const senderNo = messages[0].from
                const receiverNo = phoneNo
                await Messages.create({
                    message: text,
                    senderPhoneNo: senderNo,
                    receiverPhoneNo: receiverNo,
                    status: "sent",
                    conversationId: obj['metaData.gs_app_id']
                })
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

