import React from 'react'
import { images } from '../assets/assets'
import Button from './Button'
import Links from './Links'
import { Download } from 'lucide-react'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse gap-10 lg:gap-10 lg:flex-row items-center justify-around px-5 sm:px-24 pt-10 bg-[#D6BD98] m-5 clip-path-zigzag pb-28 mt-32 rounded-s-3xl rounded-e-3xl'>
            <div className=' flex-1 flex flex-col gap-8 text-center md:text-left' >
                <h1 className='text-[#1a3636] text-4xl sm:text-5xl md:text-6xl font-bold uppercase' >Hi, I'm
                    <p  className='whitespace-nowrap' >Ajith Kumar V</p>
                </h1>
                <div className=' text-[#1a3636] font-semibold flex flex-col gap-2' >
                    <p className='font-bold text-[#1a3636] sm:text-[23px] ' >Aspiring Software Developer | MERN Stack Developer | Problem Solver</p>
                    <p className='lg:w-4/5' >Welcome to my portfolio! I'm a passionate full-stack developer skilled in the MERN stack (MongoDB, Express.js, React, Node.js). I love building real-world web applications, solving coding challenges, and constantly improving my development skills. I enjoy turning complex problems into clean, efficient solutions. I'm always eager to learn new technologies and contribute to impactful projects.</p>
                </div>
                <Links cls="m-auto" />
                <div className=' flex gap-10 mt-4 m-auto xl:m-0 md:mt-4' >
                    <a className='hover:scale-[103%] transition-all duration-300' href='#contact'><Button cls={"shadow-[-4px_-2px_10px_#000000,2.5px_1.5px_1px_#152b2b] px-10 py-3 bg-btn-unique font-semibold"} val={"Contact Me"} /></a>
                    <a className='hover:scale-[103%] transition-all duration-300' href="./pro1 (10).pdf" download={true}><Button cls={"bg-btn-unique font-bold text-[#000000] px-10 py-3"} val={"Resume"} btn={<Download />} /></a>
                </div>
            </div>
            <div className='max-w-[800px] overflow-hidden flex-1' >

                <img src={images.hero4} className='w-full' alt="" />
            </div>
            <style>{`
        .clip-path-zigzag {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% calc(100% - 20px),
            90% 100%,
            80% calc(100% - 20px),
            70% 100%,
            60% calc(100% - 20px),
            50% 100%,
            40% calc(100% - 20px),
            30% 100%,
            20% calc(100% - 20px),
            10% 100%,
            0% calc(100% - 20px)
          );
        }
      `}</style>
        </div>
    )
}

export default Hero
