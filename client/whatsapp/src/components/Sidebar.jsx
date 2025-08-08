import React from 'react'
import { BsChatSquareDots } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";

function Sidebar() {
    return (
        <div className='bg-gray-200 w-[68px] fixed left-0 top-0 h-screen'>
            <div className='ml-4 mt-4'>
                <BsChatSquareDots size={'32px'} />
            </div>
            <div className='ml-4 mt-4'>
                <HiOutlineStatusOnline size={'32px'} />
            </div>
            <div className='ml-4 mt-4'>
                <RiUserCommunityLine size={'32px'} />
            </div>
            <div className='ml-4 mt-4'>
                <MdGroups2 size={'32px'} />
            </div>
        </div>
    )
}

export default Sidebar