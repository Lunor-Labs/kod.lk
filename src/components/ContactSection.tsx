import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's create something
              <br />
              <span className="text-amber-500">extraordinary</span>
            </h2>
            
            {/* Logo in contact section */}
            <div className="flex items-center mb-6">
              <img 
                src="/logo-black.png" 
                alt="Ceylon Creative Agency" 
                className="h-12 w-auto mr-3 opacity-80"
              />
              <span className="text-amber-500 font-medium">Ceylon Creative Agency</span>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Ready to elevate your brand with world-class creative content? 
              Our team is here to bring your vision to life with authentic Sri Lankan creativity and global excellence.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-amber-500 mr-4" />
                <span className="text-gray-300">hello@ceyloncreative.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-amber-500 mr-4" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-amber-500 mr-4" />
                <span className="text-gray-300">Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-800 hover:bg-amber-500 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-amber-500 rounded-full transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-amber-500 rounded-full transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                >
                  <option>Video Production</option>
                  <option>Photography</option>
                  <option>Branding</option>
                  <option>Complete Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-gray-900 py-3 rounded-lg font-medium hover:bg-amber-400 transition-all duration-200 transform hover:scale-105"
              >
                Send Project Brief
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;