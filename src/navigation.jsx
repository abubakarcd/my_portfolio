import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between md:justify-around md:h-20 lg:h-38 md:text-2xl lg:text-4xl items-center w-full  top-0 left-0 right-0 z-30 ">
      <div className="text-xl lg:text-4xl md:text-2xl font-bold">My Portfolio</div>
      <div className="hidden md:flex md:space-x-5 lg:space-x-11">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-yellow-400 active:text-blue-500 whitespace-nowrap">
            {link}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} variant="ghost">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-2 left-2 w-full max-w-xs bg-gray-800 p-4 rounded-md md:hidden flex flex-col space-y-4 overflow-x-hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-400 active:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
