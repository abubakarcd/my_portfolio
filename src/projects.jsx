import { useState } from "react";
import bookreview from "./assets/BK.webp";
import blog from "./assets/BLOG.webp";
import crypto from "./assets/CRY.webp";
import iplocator from "./assets/IP.webp";
import keeper from "./assets/KEEPER.webp";
import opned from "./assets/NFT.webp";
import qr from "./assets/qr-code-pic.webp";
import resumify from "./assets/resumify.webp";
import simon from "./assets/SIMON.webp";
import travel from "./assets/TRAVEL.webp";



const Projects = () => {
  // Sample project data with description
  const projects = [
    {
      title: "Resumify",
      image: resumify,
      videoUrl: "https://www.youtube.com/embed/bTmN7IRgtSs",
      description:
        "A powerful tool designed to help users create professional resumes quickly and easily",
      technologies: "React, Node.js, PostgreSQL, Express, JavaScript",
    },
    {
      title: "Book Review Project",
      image: bookreview,
      videoUrl: "https://www.youtube.com/embed/SAl7vjfZwGk",
      description:
        "Book Review is a website where you can submit a review about books and also read other people reviews about a particular book.",
      technologies: "EJS, Node.js, PostgreSQL, Express, JavaScript",
    },
    {
      title: "OpenD Marketplace",
      image: opned,
      videoUrl: "https://www.youtube.com/embed/sbM3MWoPqpo",
      description:
        "OpenD is a NFT Marketplace prpject where you can buy and sell NFT's",
      technologies: "React, Node.js, PostgreSQL, Express, JavaScript, Motoko, ICP",
    },
    {
      title: "DUBA-Crypto Token",
      image: crypto,
      videoUrl: "https://www.youtube.com/embed/h8bBixzy6Ag",
      description:
        "DUBA or DANG is a crypto token. Users can also buy and transfer this token to each other.",
      technologies: "React, Node.js, PostgreSQL, Express, JavaScript, Motoko,ICP",
    },
    {
      title: "Keeper App project",
      image: keeper,
      videoUrl: "https://www.youtube.com/embed/iX6is3TFhOU",
      description:
        "Keeper is a react base project which allows you to write your notes , inspired from google notes. Users can write their notes and also delete them.",
      technologies: "React, HTML, CSS, JavaScript",
    },
    {
      title: "Travel Tracker Project",
      image: travel,
      videoUrl: "https://www.youtube.com/embed/t3pC14GUnNw",
      description:
        "Travel tracker is a website which allows you to store the places that you have visited and also show them on world map.",
      technologies: "EJS, Node.js, PostgreSQL, Express, JavaScript",
    },
    {
      title: "IP Locator Project",
      image: iplocator,
      videoUrl: "https://www.youtube.com/embed/EYDbcljWJRQ",
      description:
        "IP Locator is a website which allows you to locate your location on the basis of IP Address.",
      technologies: "HTML, CSS, JavaScript, Node, Express",
    },
    {
      title: "Blogging Website",
      image: blog,
      videoUrl: "https://www.youtube.com/embed/OVoUsHF3inw",
      description:
        "It is blogging website where people can write, edit , view and delete blogs. It is a useful website for bloggers and for those who loves to read.",
      technologies: "HTML, CSS, JavaScript, EJS, Node.js, PostgreSQL, Express",
    },
    {
      title: "QR code Generator",
      image: qr,
      videoUrl: "https://www.youtube.com/embed/OnBA6YiyYK8",
      description:
        "QR Generator is a website that actually generates QR code based on the Link that user have provided.",
      technologies: "HTML, CSS, JavaScript, Node",
    },
    {
      title: "Simon Game ",
      image: simon,
      videoUrl: "https://www.youtube.com/embed/yrxlo6Wdulw",
      description:
        "Simon game project is acutally a game where user will have to remember the colors and then click on them in order. If order changes the game will over.",
      technologies: "HTML, CSS, JavaScript",
    },
  ];
  const [activeVideo, setActiveVideo] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="projects" className="py-10 px-5 lg:px-20">
      <h2 className="text-4xl text-center font-semibold text-[#FFD700] mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-lg shadow-lg transition-all duration-300"
              />

              {/* Project Info (Title, Description, Technologies) */}
              <div
                className={`
                  absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center
                  px-4 transition-all duration-300
                  ${isExpanded ? "opacity-100" : "opacity-0"}
                  group-hover:opacity-100
                `}
              >
                {/* Close button for mobile */}
                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the onClick on the card
                      setExpandedIndex(null); // Close the expanded card
                    }}
                    className="absolute top-2 right-3 text-white text-2xl font-bold"
                  >
                    &times;
                  </button>
                )}

                <h3 className="text-xl font-semibold text-[#FFD700]">
                  {project.title}
                </h3>
                <p className="text-sm text-white mt-2">{project.description}</p>
                <p className="text-sm text-gray-300 mt-2">{project.technologies}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(project.videoUrl);
                  }}
                  className="mt-4 px-6 py-2 text-black bg-[#FFD700] rounded-lg font-medium"
                >
                  View
                </button>
              </div>

              {/* Display video when activeVideo is set */}
              {activeVideo === project.videoUrl && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                  <div className="relative w-11/12 h-3/4 md:w-3/4 md:h-1/2">
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.videoUrl}
                      
                      allowFullScreen
                      title={project.title}
                    ></iframe>
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-0 right-0 m-4 text-white text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
