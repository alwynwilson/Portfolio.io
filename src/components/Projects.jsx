import React from 'react'
import {PROJECTS} from '../constants/index'

const Projects = () => {
  return (
    <section className='p-8' id='projects'>
        <h2 className='my-20 text-center text-3xl lg:text-7xl'>My Work</h2>
        <div className='columns-1 gap-4 md:columns-2 lg:columns-3'>
            {PROJECTS.map((project)=> (
                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className='block'>
                    <div className='relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg'>
                        <img src={project.imgSrc} alt={project.title} className='h-auto w-full object-cover'/>
                        <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white backdrop-blur-md bg-gradient-to-t from-black/70 to-transparent'>
                            <h3 className='text-xl font-semibold'>{project.title}</h3>
                            <p className='max-w-xs text-lg'>{project.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </section>
  )
}

export default Projects