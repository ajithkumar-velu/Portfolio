import React, { useRef } from 'react'
import Button from './Button'
import Title from './Title'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        
        emailjs
            .sendForm(
                "service_a0thb9k", // from EmailJS
                "template_i5gcrnl", // from EmailJS
                form.current,
                "VSoxaHrvHn50dAriu" // from EmailJS account → Integration
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                }
            );
    };
    return (
        <div id='contact' className='md:pb-40 p-5 pt-12' >
            <Title val='CONTACT ME' />
            <div className='pt-24 pb-20 flex items-center justify-center max-w-lg lg:max-w-xl w-full m-auto' >
                <form ref={form} onSubmit={sendEmail} className='gap-7 flex flex-col w-full ' >
                    <div className='gap-7 w-full flex flex-col sm:flex-row' >
                        <input name='name' className='bg-c1 rounded-md w-full focus:border-white border-c1 focus:shadow-[2px_1px_0.5px_#152b2b] border text-black placeholder:text-black/50  outline-none shadow-[-4px_-2px_10px_#000000,2.5px_1.5px_1px_#152b2b] px-5 py-2 font-semibold' type="text" placeholder='Enter Your Name...' required />
                        <input name='email' className='bg-c1 rounded-md w-full focus:border-white border-c1 focus:shadow-[2px_1px_0.5px_#152b2b] border text-black placeholder:text-black/50  outline-none shadow-[-4px_-2px_10px_#000000,2.5px_1.5px_1px_#152b2b] px-5 py-2 font-semibold' type="email" placeholder='Enter Your Email...' required />
                    </div>
                    <div className='gap-7 flex w-full flex-col sm:flex-row' >
                        <input min={10} max={10} name='phone' className='bg-c1 rounded-md w-full focus:border-white border-c1 focus:shadow-[2px_1px_0.5px_#152b2b] border text-black placeholder:text-black/50  outline-none shadow-[-4px_-2px_10px_#000000,2.5px_1.5px_1px_#152b2b] px-5 py-2 font-semibold' type="number" placeholder='Enter Phone Number...' />
                        <input name='subject' className='bg-c1 rounded-md w-full focus:border-white border-c1 focus:shadow-[2px_1px_0.5px_#152b2b] border text-black placeholder:text-black/50  outline-none shadow-[-4px_-2px_10px_#000000,2.5px_1.5px_1px_#152b2b] px-5 py-2 font-semibold' type="text" placeholder='Enter Email Subject...' />
                    </div>
                    <textarea name='message' className='bg-c1 rounded-md focus:border-white border-c1 focus:shadow-[2px_1px_0.5px_#152b2b] border text-black placeholder:text-black/50  outline-none shadow-[-4px_-2px_10px_#000000,2.5px_1.5px_1px_#152b2b] w-full px-5 py-2 font-semibold h-48' placeholder='Write Email here...' />
                    <div className=' block' type='submit'>
                        <Button cls={"bg-btn-unique font-bold text-[#000000] m-auto px-16"} val={"Send"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact