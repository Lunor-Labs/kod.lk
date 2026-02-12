import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Choose plan', id: 'pricing' },
    { name: 'Contact', id: 'contact' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => {
    // Close mobile menu first
    setIsMenuOpen(false);

    // Add a small delay to ensure menu animation completes before scrolling
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        // Get header height (64px on mobile, 80px on desktop)
        const headerHeight = window.innerWidth >= 768 ? 80 : 64;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionTop - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header className="bg-gray-50 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="logo-black.png" 
              alt="Ceylon Creative Agency" 
              className="h-16 w-auto hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <div ref={profileRef} className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
                aria-label="User profile"
              >
                <User className="h-5 w-5" />
              </button>
              
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-40">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg">
                    My Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Account Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    My Projects
                  </a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg text-red-600">
                    Logout
                  </a>
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search our services and portfolio..."
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">Search for services, projects, or anything else...</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;