import React from 'react';

const HeroSection = () => {
  const handleHandClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative bg-black overflow-hidden">
      {/* Top Navigation */}
      {/* <div className="absolute top-0 left-0 right-0 w-full flex justify-between items-center px-6 py-4 text-white text-xs md:text-sm z-20">
        <button className="hover:text-gray-300 transition-colors">Enter the Universe</button>
        <button className="hover:text-gray-300 transition-colors">Our Work</button>
        <button className="hover:text-gray-300 transition-colors">Start Your Project</button>
      </div> */}

      {/* Hero Image Section - Full Width */}
      <div className="relative w-full mt-20 md:mt-24 aspect-[9/16] md:aspect-video lg:max-h-[85vh]">
        <picture>
          <source media="(min-width: 768px)" srcSet="/hero-desktop.png" />
          <img
            src="/hero-mobile.png"
            alt="KOD Universe"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Gradient Overlay on Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"></div>

        {/* Hand Button - Positioned at Bottom of Hero Image */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30">
          <button
            onClick={handleHandClick}
            className="group relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300/40 backdrop-blur-sm flex items-center justify-center hover:bg-gray-300/60 hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Navigate to about section"
          >
            <img
              src="/hand.png"
              alt="Hand gesture"
              className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;