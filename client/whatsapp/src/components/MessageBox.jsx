import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { nanoid } from 'nanoid'
import getWhatsAppTime from '../utils/formatWhatsappMsgtime';

function MessageBox({ messages, setMessages }) {
    const [arrowBtn, showArrowBtn] = useState(false)
    const [message, setMessage] = useState('')
    const handleMessage = (e) => {
        setMessage(e.target.value)
        if (e.target.value.trim() !== '') {
            showArrowBtn(true)
        }
        else {
            showArrowBtn(false)
        }
    }

    const sendMessage = () => {
        let msg = {
            id: nanoid(),
            text: message,
            from: "me",
            time: getWhatsAppTime()
        }
        setMessages([...messages, msg])
        setMessage("")
    }
    return (
        <div className='fixed bottom-4 w-[85%]'>
            <input type='text' className='bg-slate-100 p-2 w-[70%] ml-4 rounded-2xl h-[50px]' placeholder='type a message...' onChange={handleMessage} value={message}></input>
            {
                arrowBtn == true ?
                    <div className='fixed right-4 bottom-6 cursor-pointer' onClick={sendMessage}>
                        <IoMdSend size={'32px'} />
                    </div> :
                    <div></div>
            }
        </div>
    )
}

export default MessageBox