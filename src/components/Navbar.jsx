import React from 'react'
import Button from './Button'
import { AlignJustify, Download } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between border-[#D6BD98] border-b px-5 py-3' >
            {/* Left Section */}
            <div>
                <Button val="Portfolio" cls="bg-btn-unique text-black font-bold" />
            </div>

            {/* Center Section */}
            <div className='md:flex gap-3 hidden' >
                <Button val={"Home"} />
                <Button val={"Skils"} />
                <Button val={"About"} />
                <Button val={"Contact"} />
            </div>

            {/* Right Section */}
            <div className='md:flex hidden' >
                <Button cls={"bg-btn-unique font-bold text-black"} val={"Resume"} btn={<Download />} />
            </div>
            <div className='md:hidden' >
                <Button cls={"bg-btn-unique font-bold text-black"} btn={<AlignJustify />} />
            </div>
        </div>
    )
}

export default Navbar