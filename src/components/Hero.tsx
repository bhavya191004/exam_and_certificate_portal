import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const backgrounds = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentBg === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={bg}
            alt="Beautiful landscape"
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className={`text-white max-w-3xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Discover the World's Hidden Gems
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in animation-delay-300">
            Experience unforgettable adventures and create lasting memories with our curated travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all hover:scale-105 flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all hover:scale-105">
              View Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}