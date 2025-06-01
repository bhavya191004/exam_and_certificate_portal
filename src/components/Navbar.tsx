import { Menu, X, Compass } from 'lucide-react';
import { useState } from 'react';
import AuthButtons from './AuthButtons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-primary-600 animate-spin-slow" />
            <span className="ml-2 text-xl font-bold text-gray-800">GoVenture</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#" className="text-gray-800 hover:text-primary-600 transition-colors">Home</a>
              <a href="#destinations" className="text-gray-800 hover:text-primary-600 transition-colors">Destinations</a>
              <a href="#hotels" className="text-gray-800 hover:text-primary-600 transition-colors">Hotels</a>
              <a href="#transport" className="text-gray-800 hover:text-primary-600 transition-colors">Transport</a>
              <AuthButtons />
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-primary-600">Home</a>
            <a href="#destinations" className="block px-3 py-2 text-gray-800 hover:text-primary-600">Destinations</a>
            <a href="#hotels" className="block px-3 py-2 text-gray-800 hover:text-primary-600">Hotels</a>
            <a href="#transport" className="block px-3 py-2 text-gray-800 hover:text-primary-600">Transport</a>
            <div className="px-3 py-2">
              <AuthButtons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}