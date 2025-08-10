import React, { useState } from 'react'
import Body from './Body'
import Person from './Person'
import MessageBox from './MessageBox'
import IndividualChat from './IndividualChat'
import { useEffect } from 'react'
import { showIndividualChat } from '../services/chat.services'

function ShowChat({ chatId, chatName }) {
    const [messages, setMessages] = useState([])
    console.log(chatId)
    useEffect(() => {
        if (chatId !== "") {
            async function showMessages() {
                let data = await showIndividualChat(chatId, "918329446054")
                console.log(data)
                setMessages(data)
            }
            showMessages()
        }
    }, [chatId])
    return (
        <>
            <div className='bg-[url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)] fixed w-[70%] h-screen left-[34%]'>
                {
                    chatId == "" ?
                        <Body />
                        :
                        <div>
                            <Person chatName={chatName} />
                            <IndividualChat chatId={chatId} messages={messages} setMessages={setMessages} />
                            <MessageBox messages={messages} setMessages={setMessages} />
                        </div>
                }
            </div>


        </>
    )
}

export default ShowChat