import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'

function Middlebar() {
    return (
        <div className='h-screen fixed left-16 bg-slate-100 w-[30%]'>
            <Header />
            <SearchBar/>
        </div>
    )
}

export default Middlebar