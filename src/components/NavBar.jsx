import React from 'react';
import { Mail } from 'lucide-react';

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

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center pb-6 mb-8 border-b border-gray-800 text-[#8892b0]">
      
      {/* Left Side: Page Links */}
      <div className="flex gap-8 font-mono text-lg">
        <a href="#about" className="hover:text-[#963fbb] transition-colors">
          / about
        </a>
        <a href="#software" className="hover:text-[#963fbb] transition-colors">
          / software
        </a>
       
      </div>

      {/* Right Side: Social Icons */}
      <div className="flex gap-5">
        <a 
          href="https://github.com/alayacruz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#963fbb] transition-colors"
        >
          <Github size={22} />
        </a>
        <a 
          href="https://www.linkedin.com/in/alaya-d-cruz-8590952a5/?isSelfProfile=true" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#963fbb] transition-colors"
        >
          <Linkedin size={22} />
        </a>
        <a 
          href="mailto:alayadcruz09@gmail.com" 
          className="hover:text-[#963fbb] transition-colors"
        >
          <Mail size={22} />
        </a>
      </div>

    </nav>
  );
};

export default NavBar;