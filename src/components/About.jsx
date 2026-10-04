// src/components/About.jsx
const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-ivory font-mono">/ about me</h2>
      
      {/* Container for Image (Left) and Text (Right) */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mt-4">
        
        {/* Left Side: Image Wrapper */}
        <div className="w-full md:w-3/5 max-w-[500px] mx-auto md:mx-0 relative group">
        
          <div className="absolute inset-0 border-2 border-mint-bright rounded translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
       
          <img 
            src="/me.jpeg" 
            alt="Tanishq" 
            className="relative z-10 rounded w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Subtle purple overlay that fades out on hover */}
          <div className="absolute inset-0 bg-mint-bright/20 mix-blend-multiply z-20 group-hover:bg-transparent transition-all duration-500 rounded pointer-events-none"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-3/5 text-ivory text-lg leading-relaxed flex flex-col gap-5">
          <p className="text-white">
            Software Engineer with 7+ years of experience building and maintaining mission-critical financial systems in Python, specializing in trade capture, data normalization, and market surveillance for a global investment bank. Proven track record in end-to-end software delivery — system design, application development, testing, and production support — using Agile/Scrum methodologies. Experienced across trade lifecycle applications, RESTful API development, NoSQL data migration, and rule-based detection systems for regulatory compliance. Adept at cross-functional collaboration to drive measurable improvements in data quality and operational efficiency.
          </p>
          <p className="text-white">
            Outside of work, I’m a violinist, a food enthusiast with an epicurean’s appreciation for new flavors, and a holophile who loves discovering new places and cultures.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;