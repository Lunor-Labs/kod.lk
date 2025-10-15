import React from 'react';

const Footer = () => {
  const footerLinks = {
    Services: ['Video Production', 'Photography', 'Branding', 'Consulting'],
    Company: ['About Us', 'Our Team', 'Careers', 'News'],
    Resources: ['Portfolio', 'Case Studies', 'Blog', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src="logo-black.png" 
              alt="Ceylon Creative Agency" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Sri Lankan creativity meets global excellence. Crafting exceptional content that tells your story.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Ceylon Creative Agency. All rights reserved. Made with ❤️ in Sri Lanka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;