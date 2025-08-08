import React from 'react'
import Chat from './Chat'
function ChatList({ chatId, setChatId }) {
    const chatList = [
        {
            id: "fjsijfosjf",
            name: "Neha",
            recentMessage: "Hello how are you?",
            timestamp: "Yesterday"
        },
        {
            id: "9foisdjfs",
            name: "Paul",
            recentMessage: "Hey there?",
            timestamp: "Friday"
        }
    ]
    return (
        <div className='mt-4'>
            {
                chatList.map((chat) => {
                    return (
                        <div key={chat.id}>
                            <Chat setChatId={setChatId} name={chat.name} recentMessage={chat.recentMessage} timestamp={chat.timestamp} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatList