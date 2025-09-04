import React, { useEffect, useRef } from 'react';

const References = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const clone = slider.cloneNode(true);
    slider.parentNode?.appendChild(clone);

    let animationFrameId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      if (!slider.parentNode) return;
      
      position -= speed;
      
      const firstSlider = slider.parentNode.children[0] as HTMLElement;
      const secondSlider = slider.parentNode.children[1] as HTMLElement;
      
      firstSlider.style.transform = `translateX(${position}px)`;
      secondSlider.style.transform = `translateX(${position}px)`;
      
      if (Math.abs(position) >= firstSlider.offsetWidth) {
        position = 0;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const clientLogos = [
    { logo: 'https://images2.imgbox.com/99/92/H3jKMgFr_o.png' },
    { logo: 'https://images2.imgbox.com/24/c7/JLLhEJxI_o.png' },
    { logo: 'https://images2.imgbox.com/cc/06/DXdujOUm_o.png' },
    { logo: 'https://images2.imgbox.com/4e/a4/XvRzZtCG_o.png' },
    { logo: 'https://images2.imgbox.com/32/4d/BPiUa9lI_o.png' },
    { logo: 'https://images2.imgbox.com/0d/cf/SV31WCrC_o.png' },
    { logo: 'https://images2.imgbox.com/08/69/4Ubfxi6C_o.png' },
    { logo: 'https://images2.imgbox.com/a2/62/7yuNGYWh_o.png' }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-white via-african-violet-50 to-blue-green-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-arkeup-gray-800">
          Ils nous font confiance
        </h2>
      </div>
      
      <div ref={containerRef} className="w-full overflow-hidden relative">
        <div className="flex relative" style={{ width: '200%' }}>
          <div ref={sliderRef} className="flex items-center justify-around min-w-full">
            {clientLogos.map((client, index) => (
              <div 
                key={`logo-${index}`} 
                className="mx-6"
              >
                <div className="w-40 h-24 bg-white rounded-lg shadow-md overflow-hidden transition-all hover:scale-110 hover:shadow-xl duration-300">
                  <img 
                    src={client.logo} 
                    alt="Company logo"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;