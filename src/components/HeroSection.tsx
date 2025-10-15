import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOverCards, setIsMouseOverCards] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (!cardsRef.current) return;
      const rect = cardsRef.current.getBoundingClientRect();
      
      const isInside = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      
      setIsMouseOverCards(isInside);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'default';
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }

    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.hero-card');
    const rect = cardsRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = mousePosition.x - centerX;
    const mouseY = mousePosition.y - centerY;

    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      const intensity = 0.01 + (index * 0.002);
      const rotateX = isMouseOverCards ? mouseY * intensity * -1 : 0;
      const rotateY = isMouseOverCards ? mouseX * intensity : 0;
      const translateZ = isMouseOverCards ? Math.abs(mouseX) * 0.03 + Math.abs(mouseY) * 0.03 : 0;

      const baseRotation = [-6, -3, 0, 3, 6][index];
      const baseTranslateX = (index - 2) * 160;
      
      cardElement.style.transform = `
        perspective(1000px)
        translateX(${baseTranslateX}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${baseRotation}deg)
        translateZ(${translateZ}px)
      `;
    });
  }, [mousePosition, isMouseOverCards]);

  const showcaseItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",
      bgColor: "bg-[#98897c]",
      shadowColor: "shadow-[#98897c]/30",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1080&q=80",
      bgColor: "bg-[#e0c4a4]",
      shadowColor: "shadow-[#e0c4a4]/30",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1080&q=80",
      bgColor: "bg-[#996d84]",
      shadowColor: "shadow-[#996d84]/30",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1080&q=80",
      bgColor: "bg-[#c58284]",
      shadowColor: "shadow-[#c58284]/30",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=80",
      bgColor: "bg-[#e6ca95]",
      shadowColor: "shadow-[#e6ca95]/30",
    },
  ];

  return (
    <section className="bg-[#fcf8f7] py-16 md:py-24 overflow-hidden">
      {/* The custom cursor element */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-slate-700 opacity-60 mix-blend-multiply filter blur-sm -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ease-out z-50 hidden sm:block"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="logo-black.png" 
              alt="Ceylon Creative Agency" 
              className="h-20 md:h-24 w-auto opacity-80"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#111111] mb-8 leading-tight">
            A place to display your
            <br />
            <span className="text-[#3b3b3b]">masterpiece</span>
          </h1>
          
          <div 
            ref={cardsRef}
            className="hidden sm:flex justify-center items-center mb-12 h-96 relative overflow-hidden"
            style={{ perspective: '1000px' }}
          >
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className={`hero-card absolute w-64 h-80 rounded-[30px] p-2 ${item.bgColor} ${item.shadowColor} shadow-2xl cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:z-20`}
                style={{
                  transform: `
                    perspective(1000px)
                    translateX(${(index - 2) * 160}px)
                    rotateX(${isMouseOverCards ? (mousePosition.y - cardsRef.current.getBoundingClientRect().top - cardsRef.current.getBoundingClientRect().height / 2) * (0.01 + index * 0.002) * -1 : 0}deg)
                    rotateY(${isMouseOverCards ? (mousePosition.x - cardsRef.current.getBoundingClientRect().left - cardsRef.current.getBoundingClientRect().width / 2) * (0.01 + index * 0.002) : 0}deg)
                    rotateZ(${[-6, -3, 0, 3, 6][index]}deg)
                    translateZ(${isMouseOverCards ? Math.abs((mousePosition.x - cardsRef.current.getBoundingClientRect().left - cardsRef.current.getBoundingClientRect().width / 2)) * 0.03 + Math.abs((mousePosition.y - cardsRef.current.getBoundingClientRect().top - cardsRef.current.getBoundingClientRect().height / 2)) * 0.03 : 0}px)
                  `,
                  zIndex: index === 2 ? 15 : 10 - Math.abs(index - 2),
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-full h-full rounded-[25px] overflow-hidden">
                  <img
                    src={item.image}
                    alt="Creative showcase"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden flex flex-col items-center gap-6 mb-12">
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                className={`w-64 h-80 rounded-[30px] p-2 ${item.bgColor} ${item.shadowColor} shadow-2xl`}
              >
                <div className="w-full h-full rounded-[25px] overflow-hidden">
                  <img
                    src={item.image}
                    alt="Creative showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-[#686868] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Artists can display their masterpieces, and buyers can discover and purchase works 
            that resonate with them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1c1c1c] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Contact Me
            </button>
            <button className="bg-[#efefef] text-[#1c1c1c] px-8 py-3 rounded-full font-medium border border-[#e0e0e0] hover:bg-[#e0e0e0] transition-all duration-200 hover:shadow-lg">
              Discover Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;