import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1
      className='font-extrabold text-[60px] text-center mt-16'
      >
        <span className='text-[#ff7a00]'>Discover Your Next Adventure with AI:</span> Personalised Itineraries at You Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal Trip Planner and travel curator, creating custom iternaries tailored to your interests and budget</p>
    <Link to={'/create-trip'}>
    <Button>Get Started</Button>
    </Link>
    </div>
  )
}

export default Hero
