import React from "react";
import { Mail, Phone } from "lucide-react"; // Importing icons from lucide-react

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 px-5 lg:px-20 bg-gray-800 text-white">
      <h2 className="text-4xl text-center font-semibold text-[#FFD700] mb-10">
        Get In Touch
      </h2>

      {/* Contact Information */}
      <div className="text-center">
        
        <div className="space-y-6">
          {/* Email */}
          <div className="flex justify-center items-center space-x-4 text-white hover:text-[#FFD700]">
            <Mail className="w-6 h-6" />
            <a href="mailto:example@example.com" className="text-lg">abubakarch804@gmail.com</a>
          </div>

          {/* Phone */}
          <div className="flex justify-center items-center space-x-4 text-white hover:text-[#FFD700]">
            <Phone className="w-6 h-6" />
            <a href="tel:+1234567890" className="text-lg">+923096208927</a>
          </div>
         
         
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
