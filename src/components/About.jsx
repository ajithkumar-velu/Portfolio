import React from 'react'

const About = () => {
    return (
        <div id='about' className='p-5 pt-20' >
            <div className='flex items-center gap-10' >

                <h1 className='text-c1 text-[clamp(2rem,10vw,3.5rem)] font-bold ' >ABOUT ME</h1>
                <p className='h-1 flex-1 bg-c1 shadow-[-8px_-4px_4px_#152b2b,2px_1px_1px_#D6BD98]' ></p>
            </div>


            <div className='flex gap-12 md:gap-16 lg:gap-24 flex-col mt-7 sm:mt-12 md:mt-16 xl:20 2xl:mt-24' >
                {/* <div className='max-w-[800px] w-full' >
                    <img src={images.hero5} alt="" />
                </div> */}
                <div className='flex' >
                    <div className='2xl:w-3/5' >
                        <h1 className='text-c1 text-[clamp(1.5rem,7vw,3rem)] font-semibold mb-5 border-b-2 w-fit pb-2 border-c1' >💼 Who I Am</h1>
                        <div className='flex gap-2 flex-col text-black font-semibold bg-c1  px-10 py-14 rounded-3xl shadow-[-8px_-3px_8px_#152b2b,2px_1px_1px_#D6BD98] text-[clamp(1rem,1vw,1.25rem)]' >
                            I'm Ajith Kumar V, an enthusiastic and dedicated Full-Stack Web Developer with a strong focus on the MERN stack – MongoDB, Express.js, React, and Node.js. I started my coding journey with curiosity and a strong desire to build real-world applications that solve problems and improve user experience. I have a solid foundation in JavaScript and love creating dynamic and responsive frontends with React, while also developing scalable backends with Node.js and Express. I'm also comfortable using modern UI tools like Tailwind CSS and DaisyUI to craft clean and intuitive designs.
                        </div>
                    </div>
                    <div className='-mt-28 ' >
                        <svg className=' hidden md:block w-[clamp(1.5rem,15vw,30rem)]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#D6BD98">

                                <path d="M100 50 Q105 100 100 150 Q95 100 100 50 Z M50 100 Q100 105 150 100 Q100 95 50 100 Z" />

                                <path d="M150 80 Q152 90 150 100 Q148 90 150 80 Z M140 90 Q150 92 160 90 Q150 88 140 90 Z" />
                            </g>
                        </svg>
                    </div>


                </div>

                <div className='flex justify-end' >
                    <div className='mt-52 mr-44 hidden md:block w-[clamp(1.5rem,20vw,30rem)]' >
                        <svg className='w-[clamp(1.5rem,15vw,30rem)]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#D6BD98">

                                <path d="M100 50 Q105 100 100 150 Q95 100 100 50 Z M50 100 Q100 105 150 100 Q100 95 50 100 Z" />

                                <path d="M150 80 Q152 90 150 100 Q148 90 150 80 Z M140 90 Q150 92 160 90 Q150 88 140 90 Z" />
                            </g>
                        </svg>
                    </div>
                    <div className='2xl:w-3/5' >
                        <h1 className='text-c1 text-5xl font-semibold mb-5 border-b-2 w-fit pb-2 border-c1' >🚀 What I Do</h1>
                        <div className='flex gap-2 flex-col text-black font-semibold bg-c1  px-10 py-14 rounded-3xl shadow-[-8px_-3px_8px_#152b2b,2px_1px_1px_#D6BD98] text-[clamp(1rem,1vw,1.25rem)]' > I develop responsive and dynamic web apps using the MERN stack – from frontend interfaces in React to backend logic in Node.js and Express, with MongoDB as the database. I create clean and responsive UI using Tailwind CSS and DaisyUI, focusing on user experience, accessibility, and modern design principles. I work on building real features like authentication, file uploads, form handling, real-time chat, and more using best practices. I focus on writing scalable, efficient code and optimizing both frontend and backend performance. I regularly practice DSA (Data Structures & Algorithms), explore new tools like TanStack Query and Redux, and stay updated with the latest in web development.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About