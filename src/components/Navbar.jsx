import React from 'react'
import Button from './Button'
import { Download } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between border-[#D6BD98] border-b px-5 py-3' >
            {/* Left Section */}
            <div>
                <Button val="Portfolio" cls="bg-btn-unique text-black font-bold" />
            </div>

            {/* Center Section */}
            <div className='flex gap-3' >
                <Button val={"Home"} />
                <Button val={"Skils"} />
                <Button val={"About"} />
                <Button val={"Contact"} />
            </div>

            {/* Right Section */}
            <div >
                
                <Button cls={"bg-btn-unique font-bold text-black "} val={"Resume"} btn={<Download />} />
            </div>
        </div>
    )
}

export default Navbar