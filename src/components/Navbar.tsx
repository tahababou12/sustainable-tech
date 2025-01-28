import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Leaf className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#solutions" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Solutions</a>
                <a href="#impact" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Impact</a>
                <a href="#contact" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#solutions" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
            <a href="#impact" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">Impact</a>
            <a href="#contact" className="text-gray-800 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
