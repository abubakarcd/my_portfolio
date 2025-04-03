import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Certificates", href: "#certificates" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#161616] text-[#EAEAEA] top-0 w-full shadow-md border-b border-[#FFD700] z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold text-[#FFD700]">Abubakar</div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.title} 
              href={item.href}
              className="px-4 py-2 text-lg font-semibold transition-all duration-300 hover:text-[#FFD700] hover:scale-110 active:text-[#FFA500]"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#FFD700] focus:outline-none text-3xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="lg:hidden bg-[#1E1E1E] border-t border-[#FFD700] flex flex-col items-center">
        {navItems.map((item) => (
          <a 
            key={item.title} 
            href={item.href} 
            className="w-full text-center py-3 text-lg font-semibold border-b border-[#FFD700] hover:text-[#FFD700] active:text-[#FFA500]" 
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </a>
        ))}
      </div>
    )}
  </nav>
  );
}
