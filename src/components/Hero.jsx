import React from 'react';
import { Mail } from 'lucide-react';// Fixed Linkedin import
import Ascii from './Ascii'; // Make sure this matches your file name exactly
import "../styles/intro.css"


const Github = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.5.1-.3.6-1.7-.1-3.5 0 0-1.2-.4-3.9 1.5a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.5 5 1.5c-.7 1.8-.2 3.2-.1 3.5-1 1-1.5 2.1-1.5 3.5 0 5 3 6.2 6 6.5-.4.4-.9 1.1-1 2.2-.9.4-3.1 1.4-4.5-.3 0 0-.8-1.5-2.2-1.5 0 0-1.4 0-1 .5 0 0 1 .5 2 1.7 0 0 1.2 3.5 4.5 3.1 0 0 0 3.2 0 4.2"/>
  </svg>
);

const Linkedin = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Hero = () => {
  return (
   
    <header className=" flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left side: Your Intro Text */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-white whitespace-nowrap">
          hi, <span className='text-[#963fbb] semi-bold'>alaya</span> here.<span className="intro-cursor text-[#963fbb]">|</span>
        </h1>
        <p className="text-xl text-[#8892b0] leading-relaxed max-w-2xl mb-8">
          Computer Science student passionate about building projects, solving problems and learning along the way.
        </p>

         

        <a 
          href="mailto:alayadcruz09@gmail.com" 
          className="inline-block px-6 py-3 border border-[#963fbb] text-[#963fbb] hover:bg-[#963fbb] hover:text-[#1a0442] font-mono font-medium rounded transition-colors duration-300 "
        >
          Say hi!
        </a>

      </div>

      {/* Right side: The ASCII Canvas */}
      <div className="w-full md:w-[500px] h-[500px] md:h-[500px] flex justify-center items-center">
      
        <Ascii imgSrc="me.png" /> 
      </div>

    </header>
  );
};

export default Hero;