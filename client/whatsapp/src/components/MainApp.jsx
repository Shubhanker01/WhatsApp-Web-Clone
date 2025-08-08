import React from 'react'
import Sidebar from './Sidebar'
import Middlebar from './Middlebar'
import ShowChat from './ShowChat'
function MainApp() {
    return (
        <>
            <div className='grid grid-cols-3'>
                <Sidebar />
                <Middlebar />
                <ShowChat />
            </div>

        </>
    )
}

export default MainApp