import React from 'react'

const Button = (prop) => {
    return (
        <button className={`
            rounded-full
            bg-transparent
            
            shadow-[-8px_-3px_10px_#152b2b,2px_1px_1px_#D6BD98]
            px-8
            py-2
            border-none
            text-white
            cursor-pointer
            transition-all
            duration-100
            ease-linear
            active:shadow-[-5px_-1px_7px_#152b2b,2px_1px_1px_#D6BD98]
            active:translate-x-[1%]
            active:translate-y-[1%]
            w-fit
            flex items-center gap-2
            justify-center
            ${prop.cls}
        `} >
            {prop.val}
            {prop.btn}
        </button>
    )
}

export default Button