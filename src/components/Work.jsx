import React from 'react'
import {EXPERIENCES} from '../constants/index'

const Work = () => {
  return (
    <section id="experience">
        <h2 className='my-10 text-center text-3xl lg:text-7xl lg:mt-32'>Work Experience</h2>
        <div className='mx-auto max-w-6xl'>
            {EXPERIENCES.map((experience,id)=> (
                <div key={id} className='mx-8 mb-20'>
                    <h2 className='font-medium lg:text-2xl'>{experience.company}</h2>
                    <div className='flex justify-between'>
                        <p className='py-4 tracking-wide lg:text-xl'>{experience.role}</p>
                        <p className='py-4 lg:text-xl'></p>
                        <p className='py-4 lg:text-xl'>{experience.year}</p>
                    </div>
                    <p className='font-sans lg:text-xl text-justify sm:text-center'>{experience.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Work