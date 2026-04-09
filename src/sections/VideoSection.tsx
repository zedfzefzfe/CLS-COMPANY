import { useEffect, useRef } from 'react';
import { videoSectionConfig } from '../config';

const processSteps = [
  {
    number: '01',
    title: 'Audit gratuit',
    description: "Diagnostic complet de vos infrastructures. Un expert évalue in-situ vos postes de consommation pour identifier les gisements d'économies existants.",
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    title: 'Travaux',
    description: "Ingénierie financière et technique. Nous modélisons les opérations conformes au dispositif CEE pour maximiser votre rentabilité globale.",
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    title: 'Constitution',
    description: "Prise en charge intégrale. Nos équipes pilotent la complexité administrative et constituent un dossier parfaitement conforme aux exigences de l'État.",
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    title: 'Financement',
    description: "Déblocage des primes garanti. Vos travaux sont financés rapidement, sécurisant ainsi votre trésorerie tout en accélérant votre transition.",
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
];

const VideoSection = () => {
  if (!videoSectionConfig.heading) return null;

  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Rate-limit requestAnimationFrame so it never queues up multiple calls per frame
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!targetRef.current || !trackRef.current) {
            ticking = false;
            return;
          }
          
          const { top, height } = targetRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          const scrolled = -top;
          const scrollableDistance = height - windowHeight;
          
          const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
          
          // Mutate DOM perfectly synced with hardware, skipping React pipeline entirely
          trackRef.current.style.transform = `translate3d(calc(-${progress} * (100% - 100vw)), 0, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="cee" 
      ref={targetRef} 
      className="relative bg-[#020617] text-white h-[400vh] selection:bg-[#22c55e] selection:text-white pb-32"
    >
      {/* Sticky Container - Follows you down the entire 400vh height */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#020617]">
        
        {/* Cinematic Ambient Glow (Zero-Lag Radial Gradient) */}
        <div 
          className="absolute top-1/2 left-1/2 w-full max-w-[100vw] h-[50vh] xl:h-[80vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.12) 0%, transparent 70%)' }} 
        />

        {/* The Giant Horizontal Track */}
        <div 
          ref={trackRef}
          className="flex h-full items-center pl-[10vw] will-change-transform transform-gpu"
        >
          {/* 1. INTRO SCREEN - Takes up initial view */}
          <div className="w-[90vw] shrink-0 pr-12 md:pr-24 relative z-10 flex flex-col justify-center h-full pt-12">
            <div className="flex flex-col items-start">
              <span className="inline-block mb-10 text-xs md:text-sm tracking-[0.3em] text-white/70 font-semibold uppercase">
                COMMENT ÇA MARCHE
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] md:leading-[0.95] font-black tracking-tighter uppercase break-words max-w-[90vw]">
                <span className="block">FINANCER VOS TRAVAUX</span>
                <span className="block text-transparent mt-2 md:mt-4" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)' }}>
                  EN 4 ÉTAPES.
                </span>
              </h2>
              <div className="mt-14 h-[2px] w-[20vw] bg-gradient-to-r from-[#22c55e] to-transparent" />
              <p className="mt-12 max-w-xl text-white/50 text-xl md:text-2xl font-light leading-relaxed">
                Simple, rapide et sans avance de frais — CLS Habitat gère tout pour vous.
              </p>
            </div>
          </div>

          {/* 2. THE PROCESS CARDS */}
          <div className="flex gap-8 lg:gap-16 shrink-0 h-[60vh] md:h-[65vh] items-center">
            {processSteps.map((step) => (
              <article 
                key={step.number}
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] h-full shrink-0 flex flex-col justify-between border-t border-b border-l border-white/10 bg-[#0a0f1d] p-12 md:p-16 relative group overflow-hidden"
              >
                {/* Background Image */}
                <img 
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 transition-colors duration-700 group-hover:bg-black/60" />

                {/* Thick Right Edge Border */}
                <div className="absolute top-0 right-0 w-[6px] h-full bg-[#22c55e]/20 group-hover:bg-[#22c55e] transition-colors duration-700 z-10" />

                <div className="relative z-10">
                  <div className="text-[#22c55e] font-black text-7xl md:text-8xl mb-8 leading-none tracking-tighter">
                    {step.number}
                    <span className="text-white/40 text-3xl ml-2">/ 04</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
                    {step.title}
                  </h3>
                </div>

                <div className="relative z-10 flex flex-col gap-10">
                  <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                  
                  {/* Decorative expanding line */}
                  <div className="w-16 h-[2px] bg-white/40 group-hover:bg-[#22c55e] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full max-w-[200px]" />
                </div>
              </article>
            ))}
          </div>

          {/* 3. OUTRO CTA SCREEN */}
          <div className="w-[80vw] shrink-0 h-[60vh] flex flex-col justify-center pl-16 md:pl-32 lg:pl-48">
            <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[0.9] uppercase tracking-tighter mb-10">
              PRÊT À <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #22c55e' }}>OPTIMISER ?</span>
            </h3>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-6 px-12 py-6 bg-[#22c55e] text-white hover:bg-white hover:text-[#020617] font-bold tracking-[0.2em] transition-colors duration-500 uppercase text-sm md:text-lg border-none w-max"
            >
              <span>Lancer l'audit gratuit</span>
              <span aria-hidden="true" className="text-2xl leading-none">→</span>
            </a>
          </div>

          {/* Buffer to ensure exact reaching of the right edge */}
          <div className="w-[10vw] shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
