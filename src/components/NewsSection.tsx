import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Embracing the Future of Creative Design',
      date: 'January 25, 2024',
      category: 'Design Trends',
      excerpt: 'Discover how the latest design trends are shaping the creative industry and what you need to know.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Behind the Scenes: Our Latest Project',
      date: 'January 20, 2024',
      category: 'Case Study',
      excerpt: 'Learn about the creative process and challenges we faced while developing our latest major project.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Video Production Tips for Beginners',
      date: 'January 15, 2024',
      category: 'Tutorial',
      excerpt: 'Essential tips and tricks to get started with professional video production on a budget.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="news" className="bg-black py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gray-400 text-sm md:text-base uppercase tracking-widest mb-4">Latest Updates</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            News & Updates
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest news from our creative studio
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <button className="text-amber-500 hover:text-amber-600 transition-colors duration-200">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
