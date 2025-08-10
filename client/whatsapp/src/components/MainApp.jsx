import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import ShowChat from './ShowChat'
import { showUserConversations } from '../services/chat.services'
import { useEffect } from 'react'
function MainApp() {
    const [chatId, setChatId] = useState("")
    console.log(chatId)
    const [chatName, setChatName] = useState("")
    return (
        <>
            <div className='grid grid-cols-3'>
                <Sidebar />
                <Middlebar setChatId={setChatId} setChatName={setChatName} />
                <ShowChat chatId={chatId} chatName={chatName} />
            </div>

        </>
    )
}

export default MainApp