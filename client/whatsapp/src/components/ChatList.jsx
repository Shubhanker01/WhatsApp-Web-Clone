import React, { useEffect } from 'react'
import Chat from './Chat'
import { showUserConversations } from '../services/chat.services'
import { useState } from 'react'
import formatWhatsAppDate from '../utils/formatWhatsappDate'
function ChatList({ chatId, setChatId, setChatName }) {
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        async function showConversations() {
            let data = await showUserConversations()
            console.log(data)
            setChatList(data)
        }
        showConversations()
    }, [])

    return (
        <div className='mt-4'>
            {
                chatList.map((chat) => {
                    return (
                        <div key={chat._id}>
                            <Chat setChatId={setChatId} id={chat.conversationId} name={chat.conversationName} recentMessage={chat.lastMessage} timestamp={formatWhatsAppDate(chat.date)} setChatName={setChatName} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatList