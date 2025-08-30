import React from 'react';
import { Video, Camera, Palette, ArrowRight, Play, Aperture, Brush } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Video Production',
      subtitle: 'Cinematic Storytelling',
      description: 'From brand stories to promotional content, we create videos that captivate and engage your audience with professional cinematography and post-production.',
      icon: Video,
      decorIcon: Play,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      features: ['4K Production', 'Drone Footage', 'Color Grading', 'Motion Graphics']
    },
    {
      id: 2,
      title: 'Photography',
      subtitle: 'Visual Excellence',
      description: 'Professional photography that captures the essence of your brand through stunning visuals, from product shoots to lifestyle photography.',
      icon: Camera,
      decorIcon: Aperture,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      features: ['Studio Setup', 'Product Shots', 'Lifestyle', 'Event Coverage']
    },
    {
      id: 3,
      title: 'Brand Identity',
      subtitle: 'Creative Design',
      description: 'Complete brand identity solutions that reflect your values and resonate with audiences while maintaining authentic Sri Lankan creativity.',
      icon: Palette,
      decorIcon: Brush,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Guidelines']
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-100 to-pink-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Creative Services That
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine Sri Lankan creativity with global standards to deliver exceptional 
            content that tells your story and connects with your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative ${service.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <service.decorIcon className="w-24 h-24 text-gray-400" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Text Content */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`}></div>
                </div>

                {/* CTA Button */}
                <button className="group/btn flex items-center justify-between w-full px-6 py-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                  <span className="font-semibold text-gray-900">Learn More</span>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;