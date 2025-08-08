import React, { useState } from 'react'
import Body from './Body'
import Person from './Person'
import MessageBox from './MessageBox'
import IndividualChat from './Chat'

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
                            <MessageBox />
                        </div>
                }
            </div>


        </>
    )
}

export default ShowChat