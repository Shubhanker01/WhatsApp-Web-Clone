import React from 'react'
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
    return (
        <div className='mt-2 ml-8 w-[80%]'>
            <div className='relative top-[35px] left-[10px]'>
                <IoIosSearch size={'26px'} />
            </div>
            <input type="text" className='bg-slate-200 rounded-3xl w-full p-3 pl-12' placeholder='Search or start a new chat' />
        </div>
    )
}

export default SearchBar