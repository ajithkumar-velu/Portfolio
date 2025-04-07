import React from 'react'
import { images } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-around px-5 sm:px-24 pt-10 bg-[#D6BD98] m-5 clip-path-zigzag pb-16 mt-24'    >
            <div className=' flex-1 flex flex-col gap-8 text-center md:text-left' >
                <h1 className='text-[#1a3636] text-4xl sm:text-5xl md:text-6xl font-bold uppercase' >Hi 👋, I'm
                    <p  className='whitespace-nowrap' >Ajith Kumar V</p>
                </h1>
                <div className=' text-[#1a3636] font-semibold flex flex-col gap-2' >
                    <p className='font-bold text-[#1a3636] sm:text-[23px]' >Aspiring Software Developer | MERN Stack Developer | Problem Solver</p>
                    <p>Welcome to my portfolio! I'm a passionate full-stack developer skilled in the MERN stack (MongoDB, Express.js, React, Node.js). I love building real-world web applications, solving coding challenges, and constantly improving my development skills. I enjoy turning complex problems into clean, efficient solutions. I'm always eager to learn new technologies and contribute to impactful projects.</p>
                </div>
            </div>
            <div className='max-w[900px] flex-1' >

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