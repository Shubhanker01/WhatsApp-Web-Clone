import React from 'react'
import { PiChatTextBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header() {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div>
                    <h1 className='text-green-500 font-bold text-3xl ml-8 mt-3'>WhatsApp</h1>
                </div>
                <div className='flex justify-end'>
                    <div className='mt-3 mr-8'>
                        <PiChatTextBold size={'32px'} />
                    </div>
                    <div className='mt-3 ml-4 mr-16'>
                        <BsThreeDotsVertical size={'28px'} />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header