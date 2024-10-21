import React from 'react'
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants/index'

const Contact = () => {
  return (
    <section id="contact">
        <div className='mx-7'>
            <p className='mt-40 my-10 text-center text-3xl lg:text-6xl'>Want to Build Something Amazing?</p>
            <p className='p-4 mx-8 text-center text-xl'>{CONTACT.text}</p>
            <p className='my-4 text-center text-xl font-medium text-orange-300 lg:pt-6 lg:text-4xl'>{CONTACT.email}</p>
            <p className='my-4 text-center text-xl font font-medium text-orange-300 lg:pb-6 lg:text-4xl'>{CONTACT.phone}</p>
        </div>
        <div className='mt-20 flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                <a key={index} href={link.href} target="_blank" rel="noopener no referrer">
                    {link.icon}
                </a>
            ))}
        </div>
        <p className='my-8 text-center text-gray-400'>&copy; alwynwilson. All rights reserved.</p>

    </section>
  )
}

export default Contact