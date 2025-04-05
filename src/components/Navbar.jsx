import React, { useState } from 'react'
import Button from './Button'
import { AlignJustify, Download } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
            <div className='md:hidden relative' >
                <Button cls={"bg-btn-unique font-bold text-black py-1.5 px-1.5"} btn={<AlignJustify onClick={() => setIsOpen(!isOpen)} />} />

                {/* Overlay */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    />
                )}

                {/* Drawer - Right Side */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-custom-gradient shadow-xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className="p-4">
                        {/* Close Button (X icon) */}
                        <div onClick={() => setIsOpen(false)} className="absolute top-2 right-3.5 p-1 text-gray-500 hover:text-gray-700">
                            <Button val='X' cls={"bg-btn-unique font-bold text-black py-1.5 px-3"} />
                        </div>

                        <h2 className="text-2xl mb-5 text-black font-bold border-[#D6BD98] border-b pb-3">Menu</h2>
                        <ul className="space-y-2">
                            <Button cls={"w-full"} val={"Home"} />
                            <Button cls={"w-full"} val={"Skils"} />
                            <Button cls={"w-full"} val={"About"} />
                            <Button cls={"w-full"} val={"Contact"} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar