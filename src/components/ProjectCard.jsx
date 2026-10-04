import { Folder, ExternalLink } from 'lucide-react';

const Github = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.5.1-.3.6-1.7-.1-3.5 0 0-1.2-.4-3.9 1.5a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.5 5 1.5c-.7 1.8-.2 3.2-.1 3.5-1 1-1.5 2.1-1.5 3.5 0 5 3 6.2 6 6.5-.4.4-.9 1.1-1 2.2-.9.4-3.1 1.4-4.5-.3 0 0-.8-1.5-2.2-1.5 0 0-1.4 0-1 .5 0 0 1 .5 2 1.7 0 0 1.2 3.5 4.5 3.1 0 0 0 3.2 0 4.2"/>
  </svg>
);

export default function({title, description, tech, github, link}){
    return(
        <div className='flex flex-col justify-between h-full bg-teal-panel p-6 md:p-7 rounded-lg transition-transform duration-300 hover:-translate-y-2'>

            <div>
        {/* Top Icons */}
        <div className="flex justify-between items-center mb-6">
          <Folder size={36} className="text-mint-bright" strokeWidth={1.5} />
          
          <div className="flex gap-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-ivory hover:text-ivory transition-colors">
                <Github size={20} strokeWidth={2} />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-ivory hover:text-ivory transition-colors">
                <ExternalLink size={20} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>

        {/* Text Content */}
        <h3 className="text-ivory text-xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-ivory text-[15px] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 text-ivory text-sm font-mono">
        {tech}
      </div>
      </div>
    );
}