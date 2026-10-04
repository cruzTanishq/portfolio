import ProjectCard from './ProjectCard.jsx'

export default function Software(){

const projects=[
    {
        title:"# Facial Recognition CNN - Blink Detection",
        description:"A real-time eye-blink detection system that combines OpenCV face detection and dlib facial landmarks with a CNN that classifies cropped eye images as open or closed. It tracks blinks from frame-to-frame predictions and provides audio feedback.",
        tech: "Python, TensorFlow/Keras, OpenCV, dlib",
        github: "https://github.com/cruzTanishq/FacialRecognitionCNN",
        link:""
    }
]

        return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold text-ivory mb-4">/ personal projects</h2>
      
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