import React from 'react';

const HeroSection = () => {
  const handleHandClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-between overflow-hidden">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center px-6 py-4 text-white text-xs md:text-sm z-10">
        <button className="hover:text-gray-300 transition-colors">Enter the Universe</button>
        <button className="hover:text-gray-300 transition-colors">Our Work</button>
        <button className="hover:text-gray-300 transition-colors">Start Your Project</button>
      </div>


      {/* Hero Image */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        <div className="relative w-full max-w-2xl px-4">
          <img
            src="/hero.png"
            alt="KOD Universe"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Hand Button */}
      <div className="pb-8 md:pb-12 z-20">
        <button
          onClick={handleHandClick}
          className="group hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Navigate to about section"
        >
          <img
            src="/hand.png"
            alt="Hand gesture"
            className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform drop-shadow-lg"
          />
        </button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;