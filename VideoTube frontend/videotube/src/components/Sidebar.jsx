import React from 'react'

function Sidebar() {

    const logoutHandler = () => {}
return (
    <div className='w-1/5 h-full sticky border border-gray-200'>
        <div className='flex flex-col justify-center items-center mt-3'>
            <ul className='text-base space-y-4'>
                <li className='pt-4'><a href="#">Home</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Liked videos</a></li>
                <li><a href="#">Settings</a></li>
                </ul> 
        </div>
        <button
        onClick={logoutHandler}
        className='bg-blue-500 text-white w-24 rounded-md px-4 py-1 mt-80 ml-20'>
            Logout
        </button> 
    </div>
)
}

export default Sidebar
