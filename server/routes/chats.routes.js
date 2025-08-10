const express = require('express')
const router = express.Router()
const { showUserChats, showIndividualChat } = require('../controllers/chat.controller')

router.route('/show/conversations').post(showUserChats)
router.route('/chat').post(showIndividualChat)

module.exports = router