import { useState } from "react";
import backimg from "./assets/back.webp"
const CertificateSection = () => {
  // Sample certificate data
  const certificates = [
    {
      title: "Full Stack Web Development",
      image: backimg, // Path to certificate image
      issuer: "Coursera",
      date: "July 2023",
      description: "A comprehensive course covering full-stack web development using JavaScript, React, Node.js, and MongoDB.",
      certificateUrl: "https://www.coursera.org/certificate1", // Link to certificate
    },
    {
      title: "React Developer Certification",
      image: backimg, // Path to certificate image
      issuer: "Udemy",
      date: "January 2024",
      description: "A course focused on advanced React concepts, including hooks, state management, and best practices.",
      certificateUrl: "https://www.udemy.com/certificate2",
    },
    {
      title: "MongoDB for Developers",
      image: "/assets/certificate3.jpg", // Path to certificate image
      issuer: "MongoDB University",
      date: "March 2024",
      description: "A certification for understanding MongoDB concepts, including schema design, indexing, and data aggregation.",
      certificateUrl: "https://university.mongodb.com/certificate3",
    },
    // Add more certificates as needed
  ];

  return (
    <div className="py-10 px-5 lg:px-20">
      <h2 className="text-4xl text-center font-semibold text-[#FFD700] mb-10">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((certificate, index) => (
          <div key={index} className="relative group">
            {/* Certificate Image */}
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-60 object-cover rounded-lg shadow-lg transition-all duration-300"
            />

            {/* Certificate Info (visible on hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="text-xl font-semibold text-[#FFD700]">{certificate.title}</h3>
              <p className="text-sm text-white mt-2">{certificate.issuer}</p>
              <p className="text-sm text-white mt-2">{certificate.date}</p>
              <p className="text-xs text-white mt-2">{certificate.description}</p>
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 text-white bg-[#FFD700] rounded-lg"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSection;
