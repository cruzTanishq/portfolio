// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#ccd6f6] font-mono">/ about me</h2>
      
      {/* Container for Image (Left) and Text (Right) */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mt-4">
        
        {/* Left Side: Image Wrapper */}
        <div className="w-full md:w-3/5 max-w-[500px] mx-auto md:mx-0 relative group">
        
          <div className="absolute inset-0 border-2 border-[#963fbb] rounded translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
       
          <img 
            src="/profile.jpeg" 
            alt="Alaya" 
            className="relative z-10 rounded w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Subtle purple overlay that fades out on hover */}
          <div className="absolute inset-0 bg-[#963fbb]/20 mix-blend-multiply z-20 group-hover:bg-transparent transition-all duration-500 rounded pointer-events-none"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-3/5 text-[#8892b0] text-lg leading-relaxed flex flex-col gap-5">
          <p>
            I am currently a third year Computer Science student at IIT Indore and an upcoming intern at Databricks. I love solving problems and building projects. I am learning as I go.
          </p>
          <p>
            In my free time, I love mixing my creative side with tech projects, I enjoy art, literature and chess.
          </p>
          <p className="mt-2">
            Here are some technologies I have been working with recently:
          </p>
          
          {/* Tech List in a 2-column grid */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2 font-mono text-sm text-[#ccd6f6]">
            <li className="flex items-center gap-3">
              <span className="text-[#963fbb] text-xs">▹</span> Python
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#963fbb] text-xs">▹</span> C++
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#963fbb] text-xs">▹</span> JavaScript
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#963fbb] text-xs">▹</span> React.js
            </li>
            <li>
              <span className="text-[#963fbb] text-xs">▹</span> SQL
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default About;