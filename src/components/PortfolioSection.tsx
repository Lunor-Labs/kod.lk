import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Categories');

  const categories = ['All Categories', 'Video', 'Photography', 'Branding'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Ceylon Tea Heritage',
      category: 'Video',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-green-400'
    },
    {
      id: 2,
      title: 'Ocean Breeze Resort',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-blue-400'
    },
    {
      id: 3,
      title: 'Spice Island Brand',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-orange-400'
    },
    {
      id: 4,
      title: 'Gem Mining Documentary',
      category: 'Video',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-purple-400'
    },
    {
      id: 5,
      title: 'Traditional Crafts',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-yellow-400'
    },
    {
      id: 6,
      title: 'Tech Startup Identity',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-pink-400'
    }
  ];

  const filteredItems = activeFilter === 'All Categories' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className={`${item.bgColor} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;