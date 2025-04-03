import { useState } from "react";
import backimg from "./assets/back.webp"
const Projects = () => {
  // Sample project data with description
  const projects = [
    {
      title: "Project 1",
      image: backimg, // Ensure to use correct image path
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      description: "This project is a full-stack web application that allows users to track their tasks and manage to-do lists.",
      technologies: "React, Node.js, MongoDB, Express",
    },
    {
      title: "Project 2",
      image: backimg,
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      description: "An e-commerce website built with React and Stripe for online payments.",
      technologies: "React, Stripe, Node.js, MongoDB",
    },
    {
      title: "Project 3",
      image: backimg,
      videoUrl: "https://www.youtube.com/embed/vbJ6zSoZcLg",
      description: "A portfolio website to showcase my web development skills and projects.",
      technologies: "HTML, CSS, JavaScript, React",
    },
    // Add more projects as needed
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projects" className="py-10 px-5 lg:px-20">
      <h2 className="text-4xl text-center font-semibold text-[#FFD700] mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg shadow-lg transition-all duration-300"
            />

            {/* Project Info (Title, Description, Technologies) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="text-xl font-semibold text-[#FFD700]">{project.title}</h3>
              <p className="text-sm text-white mt-2">{project.description}</p>
              <p className="text-sm text-gray-400 mt-2">{project.technologies}</p>
              <button
                onClick={() => setActiveVideo(project.videoUrl)}
                className="mt-4 px-6 py-2 text-white bg-[#FFD700] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View
              </button>
            </div>

            {/* Display video when activeVideo is set */}
            {activeVideo === project.videoUrl && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative w-11/12 h-3/4 md:w-3/4 md:h-1/2">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.videoUrl}
                    frameBorder="0"
                    allowFullScreen
                    title={project.title}
                  ></iframe>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-0 right-0 m-4 text-white text-2xl font-bold"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
