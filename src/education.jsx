import { useState } from "react";
import { Award, Book, GraduationCap } from "lucide-react"; // Import icons from lucide-react

const EducationSection = () => {
  const educationData = [
    {
      title: "Dars-e-Nizami",
      institution: "Jamia Ashrafia ",
      date: "2024-Present",
      description: "A multi-year program focused on classical Arabic, Islamic jurisprudence, and traditional Islamic sciences.",
      details: "Studying classical Arabic, logic, Fiqh, and other core Islamic sciences with a focus on deep textual understanding and traditional scholarship.",
      icon: <GraduationCap className="w-6 h-6 text-[#FFD700]" />, // Using the GraduationCap icon
    },
    {
      title: "Web Development Certification",
      institution: "Udemy",
      date: "2024",
      description: "An intensive course covering HTML, CSS, JavaScript, React, and Node.js.",
      details: "Completed 200+ hours of coursework and built several projects including a portfolio website and e-commerce app.",
      icon: <Book className="w-6 h-6 text-[#FFD700]" />, // Using the Book icon
    },
    {
      title: "Intermediate",
      institution: "Government College University, Lahore",
      date: "2021-2023",
      description: "Completed coursework in core scientific subjects, building critical thinking and analytical skills for further academic pursuits.",
      details: "",
      icon: <GraduationCap className="w-6 h-6 text-[#FFD700]" />

    },  {
      title: "Matriculation",
      institution: "The Punjab School",
      date: "2019-2021",
      description: "Completed coursework in core scientific subjects, honing analytical skills and preparing for further academic challenges.",
      details: "",
      icon: <GraduationCap className="w-6 h-6 text-[#FFD700]" />

    },
    // Add more education data as needed
  ];

  return (
    <section id="education" className="py-10 px-5 lg:px-20 bg-gray-800 text-white">
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
    </section>
  );
};

export default EducationSection;
