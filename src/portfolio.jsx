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
    I'm Muhammad Abubakar.<br /> A Full Stack Website Developer.
  </h1>
</section>

  
        {/* Summary Section */}
        <section id="about" className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border-l-4 border-[#FFD700]">
          <h2 className="text-3xl font-semibold text-[#FFD700]">Summary</h2>
          <p className="text-[#EAEAEA]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem doloribus earum minima odit. Veritatis, aperiam. Possimus consequatur impedit explicabo vitae. Nobis dolorum magnam laborum vitae earum tenetur ipsa explicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, id numquam ex incidunt vel eos! Neque laboriosam tempore officiis itaque distinctio dolores possimus! Fugiat tempore, quibusdam porro est eligendi similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque delectus, voluptas aut aliquam eveniet magni dignissimos, perferendis ea, sequi cupiditate saepe? Assumenda sit animi commodi illum dolores quos provident?</p>
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
 