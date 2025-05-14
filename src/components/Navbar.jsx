import React, { useState } from 'react'
import Button from './Button'
import { AlignJustify, Download } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex justify-between border-[#D6BD98] border-b px-5 py-3 fixed top-0 left-0 w-full z-50 bg-custom-gradient' >
            {/* Left Section */}
            <div>
                <Button val="Portfolio" cls="bg-btn-unique text-[#000000] font-bold" />
            </div>

            {/* Center Section */}
            <div className='md:flex gap-3 hidden text-white' >
                <a href="#home"><Button val={"Home"} /></a>
                <a href="#about"><Button val={"About"} /></a>
                <a href="#skills"><Button val={"Skills"} /></a>
                <a href="#projects"><Button val={"Projects"} /></a>
                <a href="#contact"><Button val={"Contact"} /></a>
            </div>

            {/* Right Section */}
            <div className='md:flex hidden' >
                <a href="./pro1 (10).pdf" download={true}><Button cls={"bg-btn-unique font-bold text-[#000000]"} val={"Resume"} btn={<Download />} /></a>
            </div>
            <div className='md:hidden relative' >
                <Button cls={"bg-btn-unique font-bold text-[#000000] py-1.5 px-1.5"} btn={<AlignJustify onClick={() => setIsOpen(!isOpen)} />} />

                {/* Overlay */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    />
                )}

                {/* Drawer - Right Side */}
                <div
                    className={`fixed top-0 right-0 h-full w-[80%] bg-custom-gradient shadow-xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className="p-4">
                        {/* Close Button (X icon) */}
                        <div onClick={() => setIsOpen(false)} className="absolute top-2 right-3.5 p-1 text-gray-500 hover:text-gray-700">
                            <Button val='X' cls={"bg-btn-unique font-bold text-[#000000] py-1.5 px-3"} />
                        </div>

                        <h2 className="text-2xl mb-5 text-[#D6BD98] font-bold border-[#D6BD98] border-b pb-3">Menu</h2>
                        <div className='sm:px-10' >
                            <ul className="space-y-2 text-white flex flex-col gap-2">
                                <a href="./pro1 (10).pdf" download={true}  onClick={() => setIsOpen(false)} ><Button cls={"bg-btn-unique font-bold text-[#000000] w-full"} val={"Resume"} btn={<Download />} /></a>
                                <a onClick={() => setIsOpen(false)} href='#home'><Button cls={"w-full"} val={"Home"} /></a>
                                <a onClick={() => setIsOpen(false)} href='#about'><Button cls={"w-full"} val={"About"} /></a>
                                <a onClick={() => setIsOpen(false)} href='#skills'><Button cls={"w-full"} val={"Skills"} /></a>
                                <a onClick={() => setIsOpen(false)} href='#projects'><Button cls={"w-full"} val={"Projects"} /></a>
                                <a onClick={() => setIsOpen(false)} href='#contact'><Button cls={"w-full"} val={"Contact"} /></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
