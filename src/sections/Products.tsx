import { useEffect, useRef, useState } from 'react';
import type { Product } from '../config';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const servicesCards = [
  { id: 101, name: "Audit énergétique complet", desc: "Nous analysons l'ensemble de vos installations pour identifier les postes de consommation à optimiser. Un diagnostic précis pour maximiser vos primes CEE.", icon: "fa-solid fa-chart-pie" },
  { id: 102, name: "Isolation des combles", desc: "L'isolation des combles réduit jusqu'à 30% de vos pertes thermiques. Solution financée à 100% via les certificats d'économies d'énergie.", icon: "fa-solid fa-house" },
  { id: 103, name: "Isolation des points singuliers", desc: "Calorifugeage des réseaux de chaleur et isolation ciblée des zones sensibles. Intervention rapide avec dossier CEE pris en charge.", icon: "fa-solid fa-temperature-arrow-down" },
  { id: 104, name: "Équilibrage des vannes TA", desc: "Optimisation hydraulique de votre réseau de chauffage pour une distribution uniforme. Réduit les consommations sans travaux lourds.", icon: "fa-solid fa-wrench" },
  { id: 105, name: "Optimiseur de relance chaudière", desc: "Régulation intelligente du démarrage chaudière selon les conditions réelles. Économies immédiates sans remplacement d'équipement.", icon: "fa-solid fa-fire-burner" },
  { id: 106, name: "Pompe à chaleur collective", desc: "Installation de PAC performantes pour le chauffage des bâtiments collectifs. Éligible aux primes CEE et aux aides de l'État.", icon: "fa-solid fa-fan" },
  { id: 107, name: "Éclairage LED", desc: "Remplacement complet de votre parc lumineux par des solutions LED basse consommation. Retour sur investissement en moins de 2 ans.", icon: "fa-regular fa-lightbulb" },
  { id: 108, name: "Montage dossier CEE", desc: "Nous gérons l'intégralité de votre dossier administratif jusqu'au versement de la prime. Zéro démarche de votre côté.", icon: "fa-solid fa-folder-open" },
];

const Products = ({ onAddToCart: _onAddToCart }: ProductsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCardIds, setVisibleCardIds] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const idAttr = entry.target.getAttribute('data-card-id');
          if (!idAttr) return;

          const cardId = Number(idAttr);
          setVisibleCardIds((prev) => (prev.includes(cardId) ? prev : [...prev, cardId]));
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -15% 0px' }
    );

    cardRefs.current.forEach((cardEl) => {
      if (cardEl) cardObserver.observe(cardEl);
    });

    return () => cardObserver.disconnect();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerHeight(entry.target.clientHeight);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on container position relative to viewport
      const start = windowHeight / 2; // Start filling when top reaches middle of screen
      const end = -height + windowHeight / 2; // End when bottom reaches middle
      
      let progress = (start - top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const strokeDasharray = containerHeight;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * scrollProgress);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative pt-24 pb-10 bg-white overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="relative z-10 flex flex-col items-center text-center mb-24">
          <div 
            className={`inline-block px-5 py-2 mb-4 rounded-full transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#22c55e]">
              NOS SERVICES
            </span>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Nos Services
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative z-10">
          
          {/* Central SVG Line Background (Gray) */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 transform md:-translate-x-1/2 rounded-full overflow-hidden" />
          
          {/* Central SVG Line Foreground (Green fill on scroll) */}
          <svg 
            className="absolute left-[28px] md:left-1/2 top-4 bottom-0 w-[2px] h-[calc(100%-2rem)] transform md:-translate-x-1/2 z-0"
            preserveAspectRatio="none"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
            />
          </svg>

          <div className="flex flex-col gap-8 md:gap-11">
            {servicesCards.map((svc, index) => {
              const isEven = index % 2 === 1; // 0-indexed, so 1 is 2nd item (even)
              const flexRowDirection = isEven ? 'md:flex-row-reverse' : 'md:flex-row';
              const textAlignment = isEven ? 'md:text-right' : 'md:text-left';
              
              return (
                <div
                  key={svc.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  data-card-id={svc.id}
                  className={`group relative flex flex-col md:flex-row ${flexRowDirection} items-start md:items-center justify-center w-full transition-all duration-700 ${
                    visibleCardIds.includes(svc.id) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-16 scale-95'
                  }`}
                >
                  
                  {/* Left/Right Text Content (Closer to circle -> w-[calc(50%-40px)]) */}
                  <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${textAlignment}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#22c55e] transition-colors duration-300">
                      {svc.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-0 md:static flex justify-center mt-1 md:mt-0 shrink-0 mx-auto md:w-[80px]">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] ${
                      visibleCardIds.includes(svc.id) ? 'bg-[#22c55e]' : 'bg-slate-200'
                    }`}>
                      <i className={`${svc.icon} ${visibleCardIds.includes(svc.id) ? 'text-white' : 'text-slate-400'} text-xl transition-colors duration-500`}></i>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]"></div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
