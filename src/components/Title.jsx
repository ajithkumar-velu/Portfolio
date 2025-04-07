import React from 'react'

const Title = (prop) => {
    return (
        <div className='flex items-center gap-10' >
            <h1 className='text-c1 text-[clamp(3rem,5vw,3rem)] font-bold ' >{prop.val}</h1>
            <p className='h-1 flex-1 bg-c1 shadow-[-8px_-4px_4px_#152b2b,2px_1px_1px_#D6BD98]' ></p>
        </div>
    )
}

export default Title