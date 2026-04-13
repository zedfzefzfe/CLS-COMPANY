import React, { useEffect, useState, useRef } from 'react';
import Contact from './sections/Contact';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
};

// Scroll Detection Hook
const useIntersection = (ref: React.RefObject<HTMLDivElement | null>, threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return isVisible;
};

const CEE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const updatesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  
  const statsVisible = useIntersection(statsRef);
  const processVisible = useIntersection(processRef);
  const updatesVisible = useIntersection(updatesRef);
  const faqVisible = useIntersection(faqRef);
  const introVisible = useIntersection(introRef);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    { q: "Qui est mandataire CEE ?", a: "Un mandataire CEE est une entreprise autorisée à agir au nom d'un obligé pour collecter, déposer et valoriser les CEE. CLS Habitat est mandataire agréé." },
    { q: "Quelle différence entre mandataire et délégataire ?", a: "Le mandataire agit au nom de l'obligé sans prendre d'obligation propre. Le délégataire reçoit une partie de l'obligation et en devient responsable." },
    { q: "Qui peut bénéficier des CEE ?", a: "Particuliers, entreprises, collectivités et copropriétés qui réalisent des travaux d'économies d'énergie éligibles." },
    { q: "Comment devenir bénéficiaire ?", a: "Contactez CLS Habitat avant de signer votre devis — la demande CEE doit obligatoirement être faite avant le début des travaux." },
    { q: "Combien de temps prend le traitement ?", a: "Entre 4 et 8 semaines selon la complexité du dossier. CLS Habitat gère l'intégralité du suivi." },
    { q: "Faut-il avancer les frais ?", a: "Non. CLS Habitat prend en charge l'intégralité du montage dossier sans avance de frais de votre côté." },
    { q: "Dans quels secteurs intervenez-vous ?", a: "Résidentiel, tertiaire et industriel. Nous adaptons notre approche à chaque profil de client." },
    { q: "CLS Habitat est-il certifié ?", a: "Oui. CLS Habitat est certifié RGE et partenaire agréé du dispositif CEE auprès des obligés." }
  ];


  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. HERO SECTION — KEEP AS IS */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0f172a] pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Energy Audit"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        </div>

        <div className={`relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center flex flex-col items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
            CLS Habitat, votre <br className="hidden md:block"/>Mandataire CEE
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Nous agissons pour le compte des obligés et gérons l'intégralité de votre dossier CEE — sans avance de frais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="inline-flex items-center justify-center gap-4 px-8 py-5 bg-[#22c55e] text-white hover:bg-white hover:text-[#0f172a] font-bold tracking-[0.1em] transition-colors duration-500 uppercase text-sm w-full sm:w-auto rounded-sm">
              <span>Démarrer mon audit gratuit</span>
              <span aria-hidden="true" className="text-lg leading-none">→</span>
            </a>
            <a href="#fonctionnement" className="inline-flex items-center justify-center gap-4 px-8 py-5 bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#0f172a] font-bold tracking-[0.1em] transition-colors duration-500 uppercase text-sm w-full sm:w-auto rounded-sm">
              <span>En savoir plus</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Introduction */}
      <section 
        ref={introRef}
        id="fonctionnement" 
        className="py-16 md:py-24 bg-white w-full"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className={`transition-all duration-700 transform ${introVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <span className="inline-block mb-6 text-sm tracking-[0.4em] text-[#22c55e] font-bold uppercase border border-[#22c55e]/40 px-6 py-3 bg-[#22c55e]/5 rounded-sm w-max">
                LE DISPOSITIF CEE
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight mb-8">
                Qu'est-ce qu'un Mandataire CEE ?
              </h2>
              <p className="text-[#0f172a]/70 text-lg md:text-xl font-light leading-relaxed">
                Le dispositif des Certificats d'Économies d'Énergie, mis en place par la loi POPE en 2005, vise à encourager les économies d'énergie. CLS Habitat agit en tant que mandataire — un intermédiaire spécialisé qui optimise l'obtention et la valorisation des certificats pour votre compte.
              </p>
            </div>
            <div className={`flex flex-col gap-6 transition-all duration-700 transform ${introVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              {[
                { title: "Obligé", desc: "Fournisseur d'énergie soumis à obligation" },
                { title: "Mandataire CLS Habitat", desc: "Intermédiaire qui gère votre dossier CEE" },
                { title: "Bénéficiaire", desc: "Vous, qui recevez la prime" }
              ].map((row, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row md:items-center bg-[#f8fafc] border-l-4 border-[#22c55e] p-6 shadow-sm transition-all duration-500 transform hover:shadow-lg hover:-translate-y-1 ${introVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: introVisible ? `${200 + idx * 100}ms` : '0ms' }}
                >
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <span className="font-bold text-[#0f172a] text-lg">{row.title}</span>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#0f172a]/70">{row.desc}</p>
                  </div>
                </div>
              ))}

              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">Nos 4 missions spécifiques :</h3>
                <ul className="space-y-3">
                  {[
                    "L'analyse des besoins énergétiques",
                    "L'identification des gisements d'économies d'énergie",
                    "L'assistance dans le montage des dossiers CEE",
                    "Le suivi et la valorisation des certificats obtenus"
                  ].map((mission, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] flex-shrink-0">
                        <i className="fa-solid fa-check text-[10px]"></i>
                      </div>
                      <span className="text-[#0f172a]/80 font-medium">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Avantages (SIMPLIFIED) */}
      <section className="bg-white py-16 md:py-24 w-full">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <span className="inline-block mb-6 text-sm tracking-[0.3em] text-[#22c55e] font-semibold uppercase">POURQUOI NOUS CHOISIR</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight mb-8">
                Pourquoi faire appel à CLS Habitat ?
              </h2>
              <p className="text-lg text-[#0f172a]/70 font-light leading-relaxed mb-12">
                Depuis 9 ans, CLS Habitat accompagne particuliers, entreprises et collectivités dans l'obtention de leurs primes CEE. Notre force ? Une équipe de 15 experts qui maîtrise chaque étape du dispositif — de l'audit initial jusqu'au versement de votre prime, sans que vous ayez à lever le petit doigt.
              </p>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-check text-[#22c55e] text-sm"></i>
                  </div>
                  <span className="text-[#0f172a]/80 font-medium">Expertise technique et réglementaire complète</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-check text-[#22c55e] text-sm"></i>
                  </div>
                  <span className="text-[#0f172a]/80 font-medium">Zéro démarche administrative de votre côté</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-check text-[#22c55e] text-sm"></i>
                  </div>
                  <span className="text-[#0f172a]/80 font-medium">Primes 100% maximisées — sans avance de frais</span>
                </li>
              </ul>

              <a href="#contact" className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#22c55e] text-white hover:bg-white hover:text-[#0f172a] hover:border hover:border-[#22c55e] font-bold tracking-[0.1em] transition-all duration-300 uppercase text-sm rounded-sm">
                Démarrer mon audit gratuit &rarr;
              </a>
            </div>

            {/* Right Column - Stats & Icons */}
            <div 
              ref={statsRef}
              className={`relative bg-gradient-to-br from-[#0f172a] to-[#1a2135] p-12 md:p-16 rounded-lg shadow-xl overflow-hidden transition-all duration-1000 transform ${statsVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              style={{ backgroundImage: 'url(/images/civil.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Very light overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/45 to-[#1a2135]/45 rounded-lg"></div>
              <div className="relative z-10 grid grid-cols-1 gap-8">
                {/* Stat 1 */}
                <div className={`border-l-4 border-[#22c55e] pl-6 transition-all duration-700 transform ${statsVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
                  <div className="text-4xl font-black text-[#22c55e] mb-2">
                    {statsVisible ? <AnimatedCounter end={1000} /> : '0+'}
                  </div>
                  <p className="text-white/70 text-lg font-light">Chantiers réussis</p>
                </div>

                {/* Stat 2 */}
                <div className={`border-l-4 border-[#22c55e] pl-6 transition-all duration-700 transform ${statsVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="text-4xl font-black text-[#22c55e] mb-2">9 ans</div>
                  <p className="text-white/70 text-lg font-light">D'expertise reconnue</p>
                </div>

                {/* Stat 3 */}
                <div className={`border-l-4 border-[#22c55e] pl-6 transition-all duration-700 transform ${statsVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                  <div className="text-4xl font-black text-[#22c55e] mb-2">
                    {statsVisible ? <AnimatedCounter end={100} /> : '0+'}
                  </div>
                  <p className="text-white/70 text-lg font-light">Clients satisfaits</p>
                </div>

                {/* Feature Icons */}
                <div className={`pt-6 border-t border-white/10 flex justify-around transition-all duration-700 transform ${statsVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                  <div className="text-center hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <i className="fa-solid fa-shield text-[#22c55e] text-lg"></i>
                    </div>
                    <p className="text-white/60 text-xs font-light">Certifié RGE</p>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <i className="fa-solid fa-handshake text-[#22c55e] text-lg"></i>
                    </div>
                    <p className="text-white/60 text-xs font-light">Transparent</p>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <i className="fa-solid fa-rocket text-[#22c55e] text-lg"></i>
                    </div>
                    <p className="text-white/60 text-xs font-light">Rapide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Processus (ENHANCED) */}
      <section 
        ref={processRef}
        className="py-16 md:py-24 relative overflow-hidden w-full" 
        style={{ backgroundImage: 'url(/images/cl.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 to-[#1a2135]/50"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center relative z-10">
          <span className={`inline-block mb-4 text-sm tracking-[0.3em] text-white/70 font-semibold uppercase transition-all duration-700 transform ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>ÉTAPES CLÉS</span>
          <h2 className={`text-3xl md:text-5xl font-black text-white leading-tight mb-20 transition-all duration-700 transform ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Notre processus d'accompagnement
          </h2>
          <div className="flex flex-col lg:flex-row relative justify-between items-stretch gap-6">
            {[
              { title: "Analyse de vos besoins énergétiques", desc: "Évaluation complète de votre situation énergétique sur site.", icon: "fa-search" },
              { title: "Identification des gisements", desc: "Recherche des opérations standardisées les plus rentables.", icon: "fa-target" },
              { title: "Élaboration d'un plan d'action", desc: "Conception d'une stratégie sur mesure adaptée à vos contraintes.", icon: "fa-pen-to-square" },
              { title: "Montage et dépôt du dossier", desc: "Constitution et dépôt conforme aux exigences du PNCEE.", icon: "fa-folder-open" },
              { title: "Suivi et versement de la prime", desc: "Suivi complet jusqu'au versement et valorisation maximale.", icon: "fa-hand-holding-dollar" }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex-1 relative z-10 flex flex-col bg-gradient-to-br from-[#f8fafc] to-[#e8ecf1] p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group text-center lg:text-left border-l-4 border-[#22c55e] overflow-hidden transform ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: processVisible ? `${idx * 100}ms` : '0ms' }}>
                  {/* Decorative top accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#22c55e]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#22c55e]/15 transition-all"></div>
                  
                  <div className="relative z-10 flex-1">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all text-2xl">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        {step.icon === "fa-search" && <path d="M10 2a8 8 0 105.293 14.293l5.707 5.707a1 1 0 001.414-1.414l-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>}
                        {step.icon === "fa-target" && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>}
                        {step.icon === "fa-pen-to-square" && <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>}
                        {step.icon === "fa-folder-open" && <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"/>}
                        {step.icon === "fa-hand-holding-dollar" && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>}
                      </svg>
                    </div>

                    {/* Step number */}
                    <span className="inline-block text-[#22c55e] text-sm font-black mb-3 tracking-widest">
                      ÉTAPE {idx + 1}
                    </span>

                    {/* Title */}
                    <h3 className="text-[#0f172a] text-lg font-bold leading-snug mb-4 group-hover:text-[#22c55e] transition-colors">{step.title}</h3>

                    {/* Description */}
                    <p className="text-[#0f172a]/70 text-sm leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
                {idx < 4 && (
                  <div className="hidden lg:flex self-center px-1 transform translate-y-[20px]">
                    <i className="fa-solid fa-arrow-right text-[#22c55e] text-2xl opacity-60"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3.5 — Évolutions 2025 (ENHANCED) */}
      <section 
        ref={updatesRef}
        className="py-16 md:py-24 bg-white border-t border-gray-100 w-full"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <p className={`text-lg text-[#0f172a]/70 font-light max-w-3xl mx-auto mb-8 transition-all duration-700 transform ${updatesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              La 6ème période CEE débute en janvier 2026 avec des obligations en hausse de 27%. Voici ce que ça change pour vous.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Renforcement des contrôles", text: "Les dossiers doivent être encore plus rigoureux. CLS Habitat assure une conformité totale.", icon: "fa-solid fa-shield", color: "border-[#22c55e]" },
              { title: "Nouvelles fiches standardisées", text: "De nouvelles opérations éligibles sont disponibles. Nous les intégrons immédiatement.", icon: "fa-solid fa-file-contract", color: "border-blue-500" },
              { title: "Accent sur la rénovation globale", text: "Les approches holistiques sont privilégiées. Nous proposons des audits complets multi-postes.", icon: "fa-solid fa-triangle-exclamation", color: "border-orange-500" }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-10 border-t-4 ${card.color} rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform ${updatesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: updatesVisible ? `${idx * 100}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <i className={`${card.icon} text-2xl ${idx === 0 ? 'text-[#22c55e]' : idx === 1 ? 'text-blue-500' : 'text-orange-500'}`}></i>
                  <h3 className="text-xl font-bold text-[#0f172a]">{card.title}</h3>
                </div>
                <p className="text-[#0f172a]/70 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Choisir CLS Habitat (ENHANCED) */}
      <section className="py-16 md:py-24 bg-white w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight mb-10">
                Comment choisir le bon mandataire ?
              </h2>
              <ul className="space-y-6">
                {[
                  { main: "9 ans d'expérience", sub: "Fondée en 2017, CLS Habitat maîtrise chaque période du dispositif." },
                  { main: "Réseau RGE", sub: "Tous nos installateurs sont certifiés et contrôlés." },
                  { main: "Transparence totale", sub: "Vous êtes informé à chaque étape, de l'audit au versement." },
                  { main: "Expertise multi-secteurs", sub: "Résidentiel, tertiaire, industriel — nous maîtrisons tous les domaines." },
                  { main: "Suivi personnalisé", sub: "Un conseiller dédié pour chaque dossier du début à la fin." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]">
                      <i className="fa-solid fa-check text-[12px]"></i>
                    </div>
                    <div>
                      <span className="text-[#0f172a]/80 text-lg font-bold block">{item.main}</span>
                      <p className="text-[#0f172a]/50 text-sm italic font-light mt-1">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-[#0f172a] p-10 md:p-16 rounded-md text-center shadow-xl border-t-4 border-[#22c55e] flex flex-col justify-center min-h-[450px] overflow-hidden" style={{ backgroundImage: 'url(/images/fin.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/55 to-[#0f172a]/55 rounded-md"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-3">Prêt à démarrer ?</h3>
                <p className="text-white/70 text-sm font-light mb-8">Sans engagement — réponse sous 24h</p>
                <a href="#contact" className="inline-flex items-center justify-center gap-4 px-8 py-5 bg-[#22c55e] text-white hover:bg-white hover:text-[#0f172a] font-bold tracking-[0.1em] transition-colors duration-500 uppercase text-sm w-full sm:w-auto rounded-sm">
                  <span>Audit gratuit</span>
                  <span aria-hidden="true" className="text-lg leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ (ENHANCED) */}
      <section 
        ref={faqRef}
        className="py-16 md:py-24 bg-[#0f172a] w-full"
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-black text-white leading-tight transition-all duration-700 transform ${faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`border border-white/10 rounded-md overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform ${faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: faqVisible ? `${idx * 50}ms` : '0ms' }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors focus:outline-none border-l-4 border-transparent hover:border-[#22c55e]"
                  >
                    <span className="font-bold text-white text-lg pr-8">{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-[#22c55e] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-white/80 leading-relaxed bg-white/5 border-t border-white/10">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
    </div>
  );
};

export default CEE;
