import React, { useState } from 'react'
import Body from './Body'
import Person from './Person'
import MessageBox from './MessageBox'
import IndividualChat from './IndividualChat'


function ShowChat({ chatId }) {
    const [messages, setMessages] = useState([])
    return (
        <>
            <div className='bg-[url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)] fixed w-[70%] h-screen left-[34%]'>
                {
                    chatId == "" ?
                        <Body />
                        :
                        <div>
                            <Person />
                            <IndividualChat messages={messages}/>
                            <MessageBox messages={messages} setMessages={setMessages} />
                        </div>
                }
            </div>


        </>
    )
}

export default ShowChat