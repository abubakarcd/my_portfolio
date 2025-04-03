import { useState } from "react";
import { Award, Book, GraduationCap } from "lucide-react"; // Import icons from lucide-react

const EducationSection = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      date: "2018 - 2022",
      description: "A four-year program focusing on software development, algorithms, and computer systems.",
      details: "Graduated with Honors. Focused on Full Stack Web Development and Software Engineering.",
      icon: <GraduationCap className="w-6 h-6 text-[#FFD700]" />, // Using the GraduationCap icon
    },
    {
      title: "Web Development Certification",
      institution: "Udemy",
      date: "2023",
      description: "An intensive course covering HTML, CSS, JavaScript, React, and Node.js.",
      details: "Completed 200+ hours of coursework and built several projects including a portfolio website and e-commerce app.",
      icon: <Book className="w-6 h-6 text-[#FFD700]" />, // Using the Book icon
    },
    {
      title: "React Developer Bootcamp",
      institution: "Coursera",
      date: "2024",
      description: "A comprehensive bootcamp focused on mastering React, Redux, and modern front-end development.",
      details: "Built multiple React apps, including a task manager and an interactive map app.",
      icon: <Award className="w-6 h-6 text-[#FFD700]" />, // Using the Award icon
    },
    // Add more education data as needed
  ];

  return (
    <div className="py-10 px-5 lg:px-20 bg-gray-800 text-white">
      <h2 className="text-4xl text-center font-semibold text-[#FFD700] mb-10">
        My Education
      </h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="relative flex items-start group">
            {/* Icon */}
            <div className="w-8 h-8 rounded-full  flex items-center justify-center text-white shadow-md">
              {edu.icon}
            </div>

            {/* Content */}
            <div className="ml-6 w-full">
              <h3 className="text-xl font-semibold text-[#FFD700]">{edu.title}</h3>
              <p className="text-sm text-gray-400">{edu.institution} | {edu.date}</p>
              <p className="text-sm mt-2">{edu.description}</p>

              {/* Details on Hover */}
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">{edu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
