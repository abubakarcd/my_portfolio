import React from "react";
import Navigation from "./navigation";
import 'animate.css';
import Projects from "./projects";
import CertificateSection from "./certificate";
import EducationSection from "./education";
import ContactSection from "./contact";

function Portfolio(){
    return(
        <div className="bg-[#0F0F0F] min-w-[330px] min-h-screen font-mono text-[#EAEAEA]">
        {/* Navigation Bar */}
        <div className="h-max bg-[#161616] shadow-md border-b border-[#FFD700]">
          <Navigation />
        </div>
  
        {/* Hero Section (Name & Title) */}
        <section id="home" className="text-center p-8 lg:p-20">
  <h1 className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text 
    p-6 rounded-lg text-4xl md:text-5xl lg:text-7xl xl:text-8xl 
    shadow-[0px_0px_15px_#FFD700] animate__animated animate__fadeIn animate__delay-0.7s">
    Hi! I'm Muhammad Abubakar.<br /> A Full Stack Website Developer.
  </h1>
</section>

  
        {/* Summary Section */}
        <section id="about" className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border-l-4 border-[#FFD700]">
          <h2 className="text-3xl font-semibold text-[#FFD700]">Summary</h2>
          <p className="text-[#EAEAEA]">I’m a full stack web developer with around 6 months of hands-on experience building web applications. I started with Dr. Angela Yu’s full stack course and have been learning by building real projects ever since. I enjoy the process of solving problems, writing clean code, and creating websites that actually work and feel good to use.<br></br><br></br>

My main tools are React, JavaScript, Tailwind CSS, Node.js, Express, and PostgreSQL. I’ve also worked with MySQL, jQuery, and EJS when needed. Recently, I’ve been exploring SaaS-style apps and focusing more on building things that are fast, simple, and easy to use, especially on mobile.
            
          </p>
        </section>
  
        {/* Projects Section */}
        <Projects/>
  
        {/* Certificates Section */}
       <CertificateSection/>
  
        {/* Education Section */}
      <EducationSection/>
  
        {/* Contact Section */}
        <ContactSection/>
      </div>
               
    )
}

export default Portfolio; 
 