const steps = [
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Audit gratuit',
    description: 'Un expert analyse vos installations gratuitement.',
    image: '/images/audit.jpg',
  },
  {
    icon: 'fa-solid fa-helmet-safety',
    title: 'Travaux',
    description: 'Nos équipes réalisent les travaux sans avance de frais.',
    image: '/images/Travaux.jpg',
  },
  {
    icon: 'fa-solid fa-file-lines',
    title: 'Dossier CEE',
    description: 'Nous constituons et déposons votre dossier CEE complet.',
    image: '/images/a.jpg',
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Financement',
    description: 'Vous recevez votre prime directement sur votre compte.',
    image: '/images/finan.png',
  },
];

import { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (cardIndex !== -1) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[cardIndex] = entry.isIntersecting;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((cardEl) => {
      if (cardEl) observer.observe(cardEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cee" className="bg-white pt-10 pb-20 md:pb-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-4">
            Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-0">
            Financer vos travaux en 4 étapes
          </h2>
        </div>

        {/* Description */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}
        >
          De l'audit initial jusqu'au versement de votre prime — CLS Habitat prend en charge chaque étape pour vous. Aucune avance de frais, aucune démarche administrative, juste des résultats.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const delays = [0, 150, 300, 450];

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="relative rounded-lg p-8 overflow-hidden"
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url('${step.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: visibleCards[index] ? 1 : 0,
                  transform: visibleCards[index]
                    ? 'translateX(0)'
                    : isEven
                    ? 'translateX(-60px)'
                    : 'translateX(60px)',
                  transition: `all 0.7s ease ${delays[index]}ms`,
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center mb-6">
                    <i className={`${step.icon} text-white text-lg`}></i>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
