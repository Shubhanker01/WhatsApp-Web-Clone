import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
function Chat({ setChatId, id, name, recentMessage, timestamp }) {

    const handleOpenChat = () => {
        setChatId(id)
    }
    return (
        <div className='grid grid-cols-2 ml-4 mt-4 cursor-pointer hover:bg-slate-200 rounded-md p-2' onClick={handleOpenChat}>
            <div className='flex'>
                <div className='mt-2'>
                    <FaCircleUser size={'36px'} />
                </div>
                <div className='ml-4'>
                    <h1 className='text-xl'>{name}</h1>
                    <p className='text-slate-600'>{recentMessage}</p>
                </div>
            </div>
            <div className='ml-8 justify-end'>
                <p>{timestamp}</p>
            </div>
        </div>
    )
}

export default Chat