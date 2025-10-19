import { Video, Camera, Palette, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Video Production',
      subtitle: 'Cinematic Storytelling',
      description: 'From brand stories to promotional content, we create videos that captivate and engage your audience.',
      icon: Video,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    },
    {
      id: 2,
      title: 'Photography',
      subtitle: 'Visual Excellence',
      description: 'Professional photography that captures the essence of your brand through stunning visuals.',
      icon: Camera,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    },
    {
      id: 3,
      title: 'Brand Identity',
      subtitle: 'Creative Design',
      description: 'Complete brand identity solutions that reflect your values and resonate with audiences.',
      icon: Palette,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gray-400 text-sm md:text-base uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that inspire and engage
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">
                  {service.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="group/btn flex items-center text-white text-sm font-medium hover:text-gray-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 group">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;