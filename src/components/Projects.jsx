import React from 'react'
import Title from './Title'
import { images, projects } from '../assets/assets'
import Button from './Button'
import Links from './Links'

const Projects = () => {
  return (
    <div id="projects" className='p-5  m-auto' >
      <Title val={"PROJECTS"} />
      <div className='pt-10 w-full cursor-pointer flex flex-col items-center justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10'>
        {projects.map((pro, idx) => (

          <div key={idx} className={` transition-all duration-300 bg-c1 max-w-md w-full h-full px-5  mb-10 pb-8 flex flex-col gap-4 shadow-[2px_1px_1px_#D6BD98,-8px_-3px_8px_#152b2b] relative group`} >
            <div className='text-[#1a3636] font-bold text-3xl text-center py-5 ' >
              {pro.name}
            </div>

            <div className='' >
              <img src={pro.image} alt="" />
            </div>
            <div className='gap-2 px-4 items-center justify-center ease-in-out py-2 flex' >
              <div className="px-[5px] py-[5px] bg-btn-unique shadow-[-3px_-1px_3px_#152b2b,2px_1px_1px_#D6BD98] active:translate-x-[0.5%] active:translate-y-[0.5%] active:shadow-[-1px_-0.4px_3px_#152b2b] hover:scale-105 rounded-full bg-transparent border-none cursor-pointer transition-all duration-100 ease-linear w-fit flex items-center gap-2 justify-center"><a href={pro.links.live} target='blank' > <img src={images.view} className='w-7' /></a></div>
              <div className="px-[5px] py-[5px] bg-btn-unique shadow-[-3px_-1px_3px_#152b2b,2px_1px_1px_#D6BD98] active:translate-x-[0.5%] active:translate-y-[0.5%] active:shadow-[-1px_-0.4px_3px_#152b2b] hover:scale-105 rounded-full bg-transparent border-none cursor-pointer transition-all duration-100 ease-linear w-fit flex items-center gap-2 justify-center"><a href={pro.links.github} target='blank' > <img src={images.githubIcon} className='w-7' /></a></div>
            </div>
            <div>
              <p>{pro.content}</p>
            </div>
            <div className='flex gap-2 flex-wrap' >
              {pro.tools.map((tools, i) => (
                <p key={i} className='bg-[#1a3636] text-c1 px-5 py-1 rounded-full' >{tools}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
       
      </div>

    </div>
  )
}

export default Projects