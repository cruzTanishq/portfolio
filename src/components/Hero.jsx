import Ascii from './Ascii'; // Make sure this matches your file name exactly
import "../styles/intro.css"


const Hero = () => {
  return (
   
    <header className=" flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left side: Your Intro Text */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-ivory whitespace-nowrap">
          hi, <span className='text-indigo-name semi-bold'>Tanishq</span> here.<span className="intro-cursor text-ivory">|</span>
        </h1>
        <p className="text-xl text-white leading-relaxed max-w-2xl mb-8">
          Software Engineer with 7+ years of experience building mission-critical financial systems.
        </p>

         

        <a 
          href="mailto:tanishqdc@gmail.com" 
          className="inline-block px-6 py-3 border border-mint-bright text-ivory hover:bg-mint-bright hover:text-teal-page font-mono font-medium rounded transition-colors duration-300 "
        >
          Say hi!
        </a>

      </div>

      {/* Right side: The ASCII Canvas */}
      <div className="w-full md:w-[500px] h-[500px] md:h-[500px] flex justify-center items-center">
      
        <Ascii imgSrc="profile.png" /> 
      </div>

    </header>
  );
};

export default Hero;