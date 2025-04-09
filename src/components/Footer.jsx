import React from 'react'
import Links from './Links'

const Footer = () => {
    return (
        <div className='border-t py-2 text-center border-c1 md:-mx-10 bg-custom-gradient flex items-center px-5 justify-between' >
            <div className='w-32 hidden md:block' >
            </div>  
            <p className='text-c1 sm:text-left m-auto' >&copy; 2025 AJITH KUMAR V. All rights reserved.</p>
            <Links cls="hidden sm:flex" />
            
        </div>
    )
}

export default Footer