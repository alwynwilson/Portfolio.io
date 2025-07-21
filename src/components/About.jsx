import React from 'react'
import { ABOUT } from '../constants'

const About = () => {
  return (
    <section id="about">
        <h2 className='my-10 text-center text-3xl lg:text-7xl'>About Me</h2>
        <div className='flex items-center justify-center'>
            <p className='m-8 max-w-5xl lg:text-xl text-justify leading-relaxed tracking-normal'>{ABOUT}</p>
        </div>
    </section>
  )
}

export default About