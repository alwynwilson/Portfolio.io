import React from 'react'
import { LuImport } from 'react-icons/lu'
import alwyn from '../assets/coding.jpg'
import {INTRO} from '../constants/index'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row lg:w-full max-w-5xl">
        <div className="flex flex-col items-start justify-center flex-1 p-4 mx-2">
          <h1 className="mt-12 overflow-hidden text-[12vw] lg:text-[7vw] font-semibold uppercase leading-none">
            ALWYN <br /> WILSON
          </h1>
          <p className='my-8 text-left text-xl'>{INTRO}</p>
          <div className="mt-2 mb-5">
            <a
              href="/Alwyn_Wilson.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center rounded-xl bg-orange-300 p-2 px-3 font-sans font-medium text-black hover:bg-orange-400 transition duration-300"
            >
              <span>Download Resume</span>
              <LuImport className="ml-2" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center px-5">
          <img
            src={alwyn}
            alt="Alwyn Wilson"
            className="h-screen object-cover rounded-lg shadow-lg bg-orange-300"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero