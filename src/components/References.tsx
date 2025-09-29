import React, { useEffect, useRef } from 'react';

const References = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Create one clone for seamless loop
    const clone = slider.cloneNode(true) as HTMLElement;
    slider.parentNode?.appendChild(clone);

    return () => {
      // Clean up cloned element
      const parent = slider.parentNode;
      if (parent && parent.children.length > 1) {
        parent.removeChild(parent.lastChild!);
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
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-african-violet-50/50 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-african-violet/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 mb-12 relative z-10">
        <div className="text-center">
          {/* Enhanced subtitle with modern styling */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-african-violet/10 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-african-violet to-blue-green rounded-full"></div>
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Références clients
            </p>
          </div>
          
          {/* Enhanced main title */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-african-violet to-blue-green bg-clip-text text-transparent mb-4">
            Ils nous font confiance
          </h2>
          
          {/* Decorative line */}
          <div className="w-20 h-1 bg-gradient-to-r from-african-violet to-blue-green mx-auto rounded-full opacity-60"></div>
        </div>
      </div>
      
      {/* Enhanced logo carousel */}
      <div ref={containerRef} className="w-full overflow-hidden relative">
        {/* Subtle gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 via-gray-50/60 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex relative animate-scroll">
          <div ref={sliderRef} className="flex items-center py-4 whitespace-nowrap">
            {clientLogos.map((client, index) => (
              <div 
                key={`logo-${index}`} 
                className="mx-10 py-4 group flex-shrink-0"
              >
                {/* Enhanced logo cards with modern styling - increased size by 10% */}
                <div className="w-48 h-32 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-xl hover:border-african-violet/20 group-hover:bg-white relative">
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-african-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Logo container */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-5">
                    <img 
                      src={client.logo} 
                      alt="Client Arkeup IA"
                      className="max-w-full max-h-full object-contain filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out"></div>
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