import { useState } from "react";
import web from "./assets/web-cert.webp";
import digital from "./assets/digital.webp"
import freelancing from "./assets/freelancing.webp"

const CertificateSection = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      image: web,
      issuer: "Udemy",
      date: "2024",
      description: "A comprehensive course covering full-stack web development using JavaScript, React, Node.js, and PostgreSQL.",
      certificateUrl: "https://drive.google.com/file/d/1fVPHBypLbOx4RSR9xtt4uyzXWCuLkzlY/view?usp=sharing",
    },
    {
      title: "Digital Marketing",
      image: digital,
      issuer: "DigiSkills",
      date: "2024",
      description: "A course focused on digital marketing concepts.",
      certificateUrl: "https://drive.google.com/file/d/1f6SkMbcCQO6qdHVH5TfbxPb_00KsJ-ZB/view?usp=sharing",
    },
    {
      title: "Freelancing",
      image: freelancing,
      issuer: "Digiskills",
      date: "2024",
      description: "A certification for understanding freelnacing concepts and relations between client and freelancer.",
      certificateUrl: "https://drive.google.com/file/d/1bCcYSUZ0E2kCOv-apN1zD5LViOOopWA3/view?usp=sharing",
    },
  ];

  
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="certificates" className="py-10 px-5 lg:px-20">
      <h2 className="text-4xl text-center font-semibold text-[#FFD700] mb-10">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((certificate, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-60 object-cover rounded-lg shadow-lg transition-all duration-300"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4 transition-all duration-300
                  ${isExpanded ? "opacity-100" : "opacity-0"}
                  group-hover:opacity-100`}
              >
                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(null);
                    }}
                    className="absolute top-2 right-3 text-white text-2xl font-bold"
                  >
                    &times;
                  </button>
                )}
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
          );
        })}
      </div>
    </section>
  );
};

export default CertificateSection;
