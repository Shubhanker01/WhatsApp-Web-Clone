import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import { FaCheckDouble } from 'react-icons/fa6'
import getWhatsAppTime from '../utils/formatWhatsappMsgtime'

function IndividualChat({ chatId, messages, setMessages }) {
    // useEffect(() => {
    //     setMessages(messages)
    // }, [chatId])
    console.log(messages)
    return (
        <div className='w-[60%] fixed right-8 top-16 h-[78%] overflow-y-scroll no-scrollbar'>
            {
                messages.map((message) => {
                    return (<div key={message._id} className={`flex ${message.sender === "918329446054" ? "justify-end" : "justify-start"} mb-2`}>
                        <div
                            className={`max-w-xs p-2 rounded-xl text-sm ${message.sender === "918329446054"
                                ? "bg-green-100 text-right"
                                : "bg-white text-left"
                                }`}
                        >
                            <div>{message.message}</div>
                            <div className="text-[10px] text-gray-500 flex justify-end gap-1 items-center">
                                {message.sender === "918329446054" && <FaCheckDouble className="text-blue-500 text-[11px]" />}
                                {getWhatsAppTime(message.createdAt)}
                            </div>
                        </div>

                    </div>)
                })
            }
        </div>
    )
}

export default IndividualChat