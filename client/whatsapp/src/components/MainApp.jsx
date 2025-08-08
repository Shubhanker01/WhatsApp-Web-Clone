import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import ShowChat from './ShowChat'
function MainApp() {
    const [chatId, setChatId] = useState("")
    return (
        <>
            <div className='grid grid-cols-3'>
                <Sidebar />
                <Middlebar setChatId={setChatId} />
                <ShowChat chatId={chatId} />
            </div>

        </>
    )
}

export default MainApp