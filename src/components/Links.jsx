import React from 'react'
import Button from './Button'
import { images, links } from '../assets/assets'

const Links = () => {
  return (
    <div className='flex gap-2 items-center m-auto xl:m-0' >
        <Button  btn={<a href={links.github} target='blank' > <img src={images.githubIcon} className='w-7' /></a>} cls="px-[5px] py-[5px] bg-btn-unique shadow-[-3px_-1px_3px_#152b2b,2px_1px_1px_#D6BD98] active:translate-x-[0.5%] active:translate-y-[0.5%] active:shadow-[-1px_-0.4px_3px_#152b2b] hover:scale-105" />
        <Button  btn={<a href={links.linkedIn} target='blank' > <img src={images.linkedInIcon} className='w-7' /></a>} cls="px-[5px] py-[5px] bg-btn-unique shadow-[-3px_-1px_3px_#152b2b,2px_1px_1px_#D6BD98] active:translate-x-[0.5%] active:translate-y-[0.5%] active:shadow-[-1px_-0.4px_3px_#152b2b] hover:scale-105" />
        <Button  btn={<a href={links.leetcode} target='blank' > <img src={images.leetcodeIcon} className='w-7' /></a>} cls="px-[5px] py-[5px] bg-btn-unique shadow-[-3px_-1px_3px_#152b2b,2px_1px_1px_#D6BD98] active:translate-x-[0.5%] active:translate-y-[0.5%] active:shadow-[-1px_-0.4px_3px_#152b2b] hover:scale-105" />
    </div>
  )
}

export default Links