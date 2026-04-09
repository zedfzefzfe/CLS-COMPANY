import { useEffect, useRef, useState } from 'react';
import { featuresConfig } from '../config';

const getIconClass = (iconName: string) => {
  switch (iconName) {
    case 'Leaf':
      return 'fa-solid fa-leaf';
    case 'ShieldCheck':
      // The image shows a blank circle or very subtle mark for "Accompagnement complet"
      // but let's use a subtle shield or user icon.
      return 'fa-solid fa-shield-halved';
    case 'Zap':
      return 'fa-solid fa-bolt';
    case 'Award':
      return 'fa-solid fa-award';
    default:
      return 'fa-solid fa-check';
  }
};

const Features = () => {
  if (featuresConfig.features.length === 0) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Make it appear a tiny bit earlier
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#f4f7f6]" // Extremely subtle light green/gray background
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuresConfig.features.map((feature, index) => {
            const iconClass = getIconClass(feature.icon);
            return (
              <div
                key={feature.title}
                className={`bg-white rounded-xl p-8 lg:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-12px_rgba(26,95,122,0.15)] transition-all duration-500 transform flex flex-col items-start ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Circular Icon Container */}
                {iconClass && (
                  <div className="w-14 h-14 rounded-full bg-[#e8eff2] flex items-center justify-center mb-8 shrink-0 transition-transform duration-500 hover:scale-110">
                    {/* The image for "Accompagnement complet" was almost blank, but we keep it consistent. */}
                    {feature.icon === 'ShieldCheck' ? (
                      <span className="w-full h-full rounded-full bg-[#1a365d]/5"></span> // Fake the blank look from user's image if desired, or just use the icon.
                    ) : (
                      <i className={`${iconClass} text-[#1a365d] text-xl`}></i>
                    )}
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-xl lg:text-[1.35rem] font-bold text-[#1a2e35] mb-4 leading-tight tracking-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-500 text-[0.95rem] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;