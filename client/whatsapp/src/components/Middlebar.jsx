import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import ChatList from './ChatList'
function Middlebar({ chatId, setChatId }) {
    return (
        <div className='h-screen fixed left-16 bg-slate-100 w-[30%]'>
            <Header />
            <SearchBar />
            <ChatList setChatId={setChatId} />
        </div>
    )
}

export default Middlebar