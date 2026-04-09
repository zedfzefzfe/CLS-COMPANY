import { useEffect, useRef, useState } from 'react';

const sectorCards = [
  {
    name: 'Résidentiel',
    anchorId: 'secteur-residentiel',
    href: '/secteur-residentiel',
    image: '/images/residentiel.png',
    stat: "Financement jusqu'à 100%",
    description:
      "Isolation, chauffage, PAC collective - solutions financées jusqu'à 100% pour les particuliers et copropriétés",
  },
  {
    name: 'Tertiaire',
    anchorId: 'secteur-tertiaire',
    href: '/secteur-tertiaire',
    image: '/images/tertiaire.png',
    stat: 'Secteur BtoB',
    description:
      'Optimisation énergétique pour bureaux, commerces et bâtiments publics via les CEE',
  },
  {
    name: 'Industriel',
    anchorId: 'secteur-industriel',
    href: '/secteur-industriel',
    image: '/images/industriel.png',
    stat: 'Audit inclus',
    description:
      "Audit et travaux d'efficacité énergétique pour réduire vos coûts de production",
  },
];

const Sectors = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visibleRows, setVisibleRows] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const rows = sectionRef.current?.querySelectorAll<HTMLElement>('[data-sector-row]');
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-sector-row'));
            if (!Number.isNaN(index)) {
              setVisibleRows((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="secteurs" className="bg-white pb-24 md:pb-0 pt-24 md:pt-28 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 mb-14 md:mb-16">
        <div className="text-center">
          <span className="inline-block mb-4 text-sm tracking-[0.2em] text-cls-green font-semibold uppercase">
            NOS SECTEURS
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl text-cls-dark leading-tight font-bold">
            Nos Secteurs d'Intervention
          </h2>
        </div>
      </div>

      <div ref={sectionRef} className="flex flex-col border-t border-[#22c55e]/30">
        {sectorCards.map((sector, index) => {
          const isReversed = index % 2 === 1;
          
          return (
            <div
              key={sector.name}
              id={sector.anchorId}
              data-sector-row={index}
              className="flex flex-col lg:flex-row w-full min-h-[500px] md:min-h-[600px] bg-white border-b border-[#22c55e]/30 overflow-hidden"
            >
              {/* Image Side - 55% */}
              <div
                className={`w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full overflow-hidden ${
                  isReversed ? 'lg:order-2 lg:border-l-4 lg:border-[#22c55e]' : 'lg:order-1 lg:border-r-4 lg:border-[#22c55e]'
                } ${
                  visibleRows[index] 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${isReversed ? 'translate-x-[180px]' : '-translate-x-[180px]'}`
                }`}
                style={{
                  transitionProperty: 'all',
                  transitionDuration: '2.5s',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '0s'
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105"
                  style={{ 
                    backgroundImage: `url(${sector.image})`,
                    transitionDuration: '3s'
                  }}
                />
              </div>

              {/* Text Side - 45% */}
              <div
                className={`w-full lg:w-[45%] relative flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-24 bg-white ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                } ${
                  visibleRows[index] 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${isReversed ? '-translate-x-[180px]' : 'translate-x-[180px]'}`
                }`}
                style={{
                  transitionProperty: 'all',
                  transitionDuration: '2.5s',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '0.4s'
                }}
              >
                <div className="relative z-10 mt-8">
                  <div className="mb-6 inline-flex items-center gap-2 bg-cls-green/10 text-cls-green px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] w-max">
                    {sector.stat}
                  </div>
                  <div className="mb-6">
                    <p className="text-cls-green text-sm uppercase tracking-[0.25em] font-light">Secteur</p>
                    <h3 className="text-cls-dark text-4xl md:text-5xl font-bold leading-tight mt-2">
                      {sector.name}
                    </h3>
                  </div>
                  <p className="text-cls-dark/70 text-lg leading-relaxed max-w-xl mb-10">
                    {sector.description}
                  </p>
                  <a
                    href={sector.href}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cls-green text-white font-semibold tracking-wide btn-hover transition-all duration-300 hover:bg-green-500 w-max"
                  >
                    <span>En savoir plus</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sectors;
