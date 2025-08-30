import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll('.hero-card');
      const rect = cardsRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        const intensity = 0.01 + (index * 0.002);
        const rotateX = mouseY * intensity * -1;
        const rotateY = mouseX * intensity;
        const translateZ = Math.abs(mouseX) * 0.03 + Math.abs(mouseY) * 0.03;

        // Base positions and rotations
        const baseRotation = [-6, -3, 0, 3, 6][index];
        const baseTranslateX = (index - 2) * 160; // 160px spacing between cards, centered
        
        cardElement.style.transform = `
          perspective(1000px)
          translateX(${baseTranslateX}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${baseRotation}deg)
          translateZ(${translateZ}px)
        `;
      });
    };

    const handleMouseLeave = () => {
      if (!cardsRef.current) return;
      
      const cards = cardsRef.current.querySelectorAll('.hero-card');
      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        const baseRotation = [-6, -3, 0, 3, 6][index];
        const baseTranslateX = (index - 2) * 160;
        
        cardElement.style.transform = `
          perspective(1000px)
          translateX(${baseTranslateX}px)
          rotateZ(${baseRotation}deg)
        `;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    cardsRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cardsRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const showcaseItems = [
    {
      id: 1,
      title: 'Video Production',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-blue-500',
      shadowColor: 'shadow-blue-500/30'
    },
    {
      id: 2,
      title: 'Photography',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-purple-500',
      shadowColor: 'shadow-purple-500/30'
    },
    {
      id: 3,
      title: 'Branding',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-amber-500',
      shadowColor: 'shadow-amber-500/30'
    },
    {
      id: 4,
      title: 'E-commerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-emerald-500',
      shadowColor: 'shadow-emerald-500/30'
    },
    {
      id: 5,
      title: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      bgColor: 'bg-rose-500',
      shadowColor: 'shadow-rose-500/30'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Logo Integration */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo-black.png" 
              alt="Ceylon Creative Agency" 
              className="h-32 md:h-40 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            A place to display your
            <br />
            <span className="text-gray-800">masterpiece</span>
          </h1>
          
          {/* Horizontal Fanned Cards */}
          <div 
            ref={cardsRef}
            className="flex justify-center items-center mb-12 h-96 relative overflow-hidden"
            style={{ perspective: '1000px' }}
          >
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className={`hero-card absolute w-64 h-80 ${item.bgColor} rounded-3xl p-3 ${item.shadowColor} shadow-2xl cursor-pointer transition-all duration-500 ease-out hover:scale-110 hover:z-20`}
                style={{
                  transform: `
                    perspective(1000px)
                    translateX(${(index - 2) * 160}px)
                    rotateZ(${[-6, -3, 0, 3, 6][index]}deg)
                  `,
                  zIndex: index === 2 ? 15 : 10 - Math.abs(index - 2),
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-4/5 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
                    <h3 className="text-white font-bold text-lg text-center">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Floating elements for extra visual interest */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Artists can display their masterpieces, and buyers can discover and purchase works 
            that resonate with them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Contact Me
            </button>
            <button className="bg-transparent text-gray-900 px-8 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-100 transition-all duration-200 hover:shadow-lg">
              Discover Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;