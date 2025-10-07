import { useEffect, useRef, useState } from 'react';
import { Users, TrendingUp, Globe2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

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

  const stats = [
    {
      icon: Users,
      value: 1000,
      description: "Collaborateurs",
      color: "text-african-violet"
    },
    {
      icon: TrendingUp,
      value: 600,
      description: "Projets menés à bien",
      color: "text-blue-green"
    },
    {
      icon: Globe2,
      value: 40,
      description: "Technologies maîtrisées",
      color: "text-african-violet"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-african-violet-50/50 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-african-violet/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Priorité 4 : Style épuré et élégant */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Des entreprises leaders qui ont choisi l'excellence IA
          </p>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
        </div>

        {/* Stats Section - apply same hover shine effect as logo carousel, and match text color to icon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            const iconAccent = index % 2 === 0 ? 'bg-african-violet-50 text-african-violet' : 'bg-blue-green-50 text-blue-green';
            const textColor = index % 2 === 0 ? 'text-african-violet' : 'text-blue-green';
            return (
              <div
                key={index}
                className="relative overflow-hidden group text-center p-6 bg-white rounded-xl shadow-sm ring-1 ring-arkeup-gray-100 hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <div className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full ${iconAccent}`}>
                  <StatIcon className="w-7 h-7" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold ${textColor} mb-2`}>
                  <AnimatedNumber end={stat.value} />
                  {stat.value === 95 ? '%' : '+'}
                </div>
                <p className={`${textColor}`}>{stat.description}</p>

                {/* Shine effect same as logo card */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out" />
              </div>
            );
          })}
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
                className="mx-4 md:mx-10 py-4 group flex-shrink-0"
              >
                {/* Enhanced logo cards with modern styling - responsive sizing */}
                <div className="w-32 h-20 md:w-48 md:h-32 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-white/60 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-african-violet/20 group-hover:bg-white relative">
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