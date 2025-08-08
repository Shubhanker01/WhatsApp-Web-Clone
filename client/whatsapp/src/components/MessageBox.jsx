import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";

function MessageBox() {
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
    return (
        <div className='fixed bottom-4 w-[85%]'>
            <input type='text' className='bg-slate-100 p-2 w-[70%] ml-4 rounded-2xl h-[50px]' placeholder='type a message...' onChange={handleMessage}></input>
            {
                arrowBtn == true ?
                    <div className='fixed right-4 bottom-6 cursor-pointer'>
                        <IoMdSend size={'32px'} />
                    </div> :
                    <div></div>
            }
        </div>
    )
}

export default MessageBox