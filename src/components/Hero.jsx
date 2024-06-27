import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/profile.jpg'
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className='pb-4 text-6xl font-thin tracking-tight lg:mt-14 lg:text-8xl'>SAMNANG Chanserey</h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent py-2'>Software Developer</span>
                <p className='
                my-2 max-w-xl py-6 font-light tracking-tighter'>
                    {HERO_CONTENT}
                    <br />
                    <a className='hover:text-purple-500 text-purple-300' href="/filese/resume.pdf" target="_blank" rel="noopener noreferrer">View my resume</a>.
                </p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-2">
            <div className="flex justify-center">
              <img className='rounded-3xl scale-75' src={profilePic} alt="ProfilePic" />
            </div>
            </div>
        </div>

    </div>
  )
}

export default Hero