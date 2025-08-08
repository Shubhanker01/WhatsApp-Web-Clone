import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
function Person() {
    return (
        <div className='bg-slate-100 h-[32%] w-full'>
            <div className='flex'>
                <div className='m-2'>
                    <FaCircleUser size={'36px'} />
                </div>
                <div className='ml-4 mt-2'>
                    <h1>Neha</h1>
                </div>
            </div>

        </div>
    )
}

export default Person