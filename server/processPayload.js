const fs = require('fs/promises')
const path = require('path')
const dir = './payloads'
const { Messages } = require('./models/messages.model')
const { Users } = require('./models/users.model')
const { flattenObject } = require('./utils/flattenObject')

async function processPayloadFile(fullPath) {
    const rawData = await fs.readFile(fullPath)
    const json = JSON.parse(rawData)
    const obj = flattenObject(json)
    console.log(obj)
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

processAllPayloadFiles()

