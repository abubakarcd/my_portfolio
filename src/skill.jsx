import React from "react";
import reactImg from "./assets/react_1.webp";
import expressImg from "./assets/express.webp";
import nodeImg from "./assets/nodejs.webp";
import postgresImg from "./assets/postgresql.webp";
import jsImg from "./assets/js.webp";
import htmlImg from "./assets/html.webp";
import cssImg from "./assets/css.webp";
import tailwind from "./assets/tailwind.webp"
import bootstrapImg from "./assets/bootstrap-icons.webp";

const skills = [
  { name: "React", img: reactImg },
  { name: "Express", img: expressImg },
  { name: "Node.js", img: nodeImg },
  { name: "PostgreSQL", img: postgresImg },
  { name: "JavaScript", img: jsImg },
  { name: "Tailwind", img: tailwind},
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "Bootstrap", img: bootstrapImg },
];
const Skills = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-black relative">
      <h2 className="text-2xl font-bold text-center mb-6 text-yellow-400">Skills</h2>

      <div className="relative w-full h-24 overflow-hidden">
        <div className="animate-slide flex gap-8 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <img
              key={index}
              src={skill.img}
              alt={skill.name}
              className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              title={skill.name}
            />
          ))}
        </div>
      </div>

      {/* Inline animation styling */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
