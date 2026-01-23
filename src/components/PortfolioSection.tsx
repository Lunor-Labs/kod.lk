import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Video', 'Photography', 'Branding'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Nivartana Blue Butterfly PEA',
      category: 'Branding',
      image: '/BBF 001_Packaging.jpg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Ocean Breeze Resort',
      category: 'Branding',
      image: '/BBF 002_Packaging.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Spice Island Brand',
      category: 'Branding',
      image: '/BBF 003_Packaging.jpg',
      year: '2023'
    },
    {
      id: 4,
      title: 'Ceylon ZIMT',
      category: 'Branding',
      image: '/C 001_Packaging.jpg',
      year: '2023'
    },
    {
      id: 5,
      title: 'HIBISKUS',
      category: 'Branding',
      image: '/H 001_Packaging.jpg',
      year: '2024'
    },
    {
      id: 6,
      title: 'HIBISKUS Nvaratana',
      category: 'Branding',
      image: '/H 002_Packaging.jpg',
      year: '2023'
    },
        {
      id: 7,
      title: 'Nivartana Blue Butterfly PEA',
      category: 'Branding',
      image: '/H 003_Packaging.jpg',
      year: '2024'
    },
    {
      id: 8,
      title: 'Ocean Breeze Resort',
      category: 'Branding',
      image: '/M 002_Packaging.jpg',
      year: '2024'
    },
    {
      id: 9,
      title: 'Spice Island Brand',
      category: 'Branding',
      image: '/M 003_Packaging.jpg',
      year: '2023'
    },
    {
      id: 10,
      title: 'Ceylon ZIMT',
      category: 'Branding',
      image: '/MORINGA 001_Packaging.jpg',
      year: '2023'
    },
    {
      id: 11,
      title: 'HIBISKUS',
      category: 'Branding',
      image: '/T 002_Packaging.jpg',
      year: '2024'
    },
    {
      id: 12,
      title: 'HIBISKUS Nvaratana',
      category: 'Branding',
      image: '/T 003_Packaging.jpg',
      year: '2023'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore our latest creative endeavors
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-white text-black shadow-lg shadow-white/20'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${
                index === 0 ? 'h-[400px] md:h-full' : 'h-[300px] md:h-[350px]'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs md:text-sm text-gray-400">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    
                    {/* View Project Button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all">
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;