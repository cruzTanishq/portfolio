import ProjectCard from './ProjectCard.jsx'

export default function Software(){

const projects=[
    {
        title:"VeQRA: Visual Earth Query Retrieval Assistant",
        description:"This is an ISRO ps Inter IIT Bronze project, that performs VQA, captioning and grounding on satellite imagery.",
        tech: "Python, PostGreSQL, React.js",
        github: "https://github.com/alayacruz/ISRO_GI",
        link: "https://github.com/Team-76/ISRO_GI/blob/main/User%20Guide.pdf"
    },

       {
        title:"Alaya's Portfolio",
        description:"This is my personal portfolio to showcase my projects and art, inspired by Gazi.",
        tech: "React.js, Vite, Tailwind",
        github: "https://github.com/alayacruz/portfolio",
       link:""
    },

       {
        title:"ShopHub: online shopping platform",
        description:"This is a group project for my Database management systems course, a full stack online shopping platform catering to both buyers and sellers.",
        tech: "React.js, PostGreSql , Node.js",
        github: "https://github.com/alayacruz/E-commerce",
       link:""
    }


]

        return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold text-[#ccd6f6] mb-4">/ software</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );

    
}