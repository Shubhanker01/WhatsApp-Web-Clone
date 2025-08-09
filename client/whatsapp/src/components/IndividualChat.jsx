import React from 'react'
import { nanoid } from 'nanoid'
import { FaCheckDouble } from 'react-icons/fa6'
function IndividualChat({ id, messages }) {
    // const dummyChats = [
    //     { id: nanoid(), from: "them", text: "😂", time: "9:43 pm" },
    //     { id: nanoid(), from: "me", text: "Mere database me iska id kisne dala?", time: "9:43 pm" },
    //     { id: nanoid(), from: "me", text: "Ye toh mene abi dekha 😂", time: "9:44 pm" },
    //     { id: nanoid(), from: "me", text: "Ok", time: "10:32 pm" },
    //     { id: nanoid(), from: "me", text: "Ok", time: "10:32 pm" },
    //     { id: nanoid(), from: "me", text: "Ok", time: "10:32 pm" },
    //     { id: nanoid(), from: "me", text: "Ok", time: "10:32 pm" },
    //     { id: nanoid(), from: "me", text: "Mere database me iska id kisne dala?", time: "9:43 pm" },
    //     { id: nanoid(), from: "me", text: "Mere database me iska id kisne dala?", time: "9:43 pm" },
    //     { id: nanoid(), from: "me", text: "Mere database me iska id kisne dala?", time: "9:43 pm" },
    //     { id: nanoid(), from: "me", text: "Mere database me iska id kisne dala?", time: "9:43 pm" },
    // ]

    return (
        <div className='w-[60%] fixed right-8 top-16 h-[78%] overflow-y-scroll no-scrollbar'>
            {
                messages.map((message) => {
                    return (<div key={message.id} className={`flex ${message.from === "me" ? "justify-end" : "justify-start"} mb-2`}>
                        <div
                            className={`max-w-xs p-2 rounded-xl text-sm ${message.from === "me"
                                ? "bg-green-100 text-right"
                                : "bg-white text-left"
                                }`}
                        >
                            <div>{message.text}</div>
                            <div className="text-[10px] text-gray-500 flex justify-end gap-1 items-center">
                                {message.from === "me" && <FaCheckDouble className="text-blue-500 text-[11px]" />}
                                {message.time}
                            </div>
                        </div>

                    </div>)
                })
            }
        </div>
    )
}

export default IndividualChat