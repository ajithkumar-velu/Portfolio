import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div id='home' className='' >

      <Navbar />
      <Hero />
      <div  className='w-6' ></div>
      <About />
    </div>
  )
}
export default Home