import React from 'react'
import Title from './Title'
import Button from './Button'
import { skils } from '../assets/assets'

const Skills = () => {
  return (
    <div id='skills' className='p-5 pt-12 -mb-12' >
      <Title val={"SKILLS"} />
      <p className='text-c1 border-b border-c1 w-fit hidden sm:block mt-5 m-auto text-[clamp(1.4rem,1vw,1rem)]' >The skills, tools and technologies I am really good at:</p>
      <div className='m-auto' >

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-14' >
          {
            skils.map((item, idx) => (
              <div className='mb-12 flex items-center justify-center' key={idx} >
                <Button btn={item.name} cls={"rounded-none flex flex-col text-c1 font-semibold pl-8 pr-8 pt-5 pb-5"} val={<img src={item.img} alt="" />} />
                {/* <p>{item.name}</p> */}
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Skills