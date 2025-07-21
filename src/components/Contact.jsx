import React from 'react'
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants/index'

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-t from-black via-gray-900 to-gray-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Want to Build Something Amazing?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          {CONTACT.text}
        </p>

        <div className="mt-10 space-y-2">
          <p className="text-orange-400 text-xl lg:text-3xl font-semibold">{CONTACT.email}</p>
          <p className="text-orange-400 text-xl lg:text-3xl font-semibold">{CONTACT.phone}</p>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Alwyn Wilson. All rights reserved.
      </div>

      <div className="absolute top-[60px] left-[-60px] w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl z-0" />
    </section>
  )
}

export default Contact
