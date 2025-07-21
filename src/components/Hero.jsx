import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { LuImport } from "react-icons/lu";
import alwyn from "../assets/coding.jpg";
import { INTRO } from "../constants/index";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current.children,
      { y: 100, opacity: 0, rotateX: 90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  const letters = "ALWYN WILSON".split("");

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-black font-outfit overflow-hidden px-4 sm:px-6"
      style={{
        backgroundImage: `url(${alwyn})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center text-white max-w-[90vw] sm:max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Name */}
        <div
          ref={titleRef}
          className="text-[clamp(2rem,8vw,4rem)] font-extrabold uppercase leading-tight tracking-tight flex flex-wrap justify-center"
        >
          {letters.map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Intro */}
        <motion.p
          className="mt-4 text-[clamp(0.9rem,2vw,1.2rem)] text-gray-200 px-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {INTRO}
        </motion.p>

        {/* Resume Button */}
        <motion.a
          href="/Alwyn_Wilson.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-black px-5 py-3 sm:px-6 sm:py-3 rounded-xl shadow-md transition-all duration-300 text-sm sm:text-base font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Download Resume <LuImport className="text-lg" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
