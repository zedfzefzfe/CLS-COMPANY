import React, { useEffect, useState } from 'react';
import Contact from './sections/Contact';

const CEE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  const faqs = [
    { q: "Qui est mandataire CEE ?", a: "Un mandataire CEE est une entreprise autorisée à agir au nom d'un obligé pour collecter, déposer et valoriser les CEE. CLS Habitat est mandataire agréé." },
    { q: "Quelle différence entre mandataire et délégataire ?", a: "Le mandataire agit au nom de l'obligé sans prendre d'obligation propre. Le délégataire reçoit une partie de l'obligation et en devient responsable." },
    { q: "Qui peut bénéficier des CEE ?", a: "Particuliers, entreprises, collectivités et copropriétés qui réalisent des travaux d'économies d'énergie éligibles." },
    { q: "Comment devenir bénéficiaire ?", a: "Contactez CLS Habitat avant de signer votre devis — la demande CEE doit obligatoirement être faite avant le début des travaux." },
    { q: "Combien de temps prend le traitement ?", a: "Entre 4 et 8 semaines selon la complexité du dossier. CLS Habitat gère l'intégralité du suivi." }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0f172a] pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Energy Audit"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        </div>

        <div className={`relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 text-center flex flex-col items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
     
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
            CLS Habitat, votre <br className="hidden md:block"/>Mandataire CEE
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Nous agissons pour le compte des obligés et gérons l'intégralité de votre dossier CEE — sans avance de frais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/#contact" className="inline-flex items-center justify-center gap-4 px-8 py-5 bg-[#22c55e] text-white hover:bg-white hover:text-[#0f172a] font-bold tracking-[0.1em] transition-colors duration-500 uppercase text-sm w-full sm:w-auto rounded-sm">
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
      <section id="fonctionnement" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
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
            <div className="flex flex-col gap-6">
              {[
                { title: "Obligé", desc: "Fournisseur d'énergie soumis à obligation" },
                { title: "Mandataire CLS Habitat", desc: "Intermédiaire qui gère votre dossier CEE" },
                { title: "Bénéficiaire", desc: "Vous, qui recevez la prime" }
              ].map((row, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center bg-[#f8fafc] border-l-4 border-[#22c55e] p-6 shadow-sm">
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

      {/* SECTION 2 — Avantages (Redesigned) */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Column - 50% */}
          <div className="w-full lg:w-1/2 bg-[#0f172a] text-white p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="inline-block mb-6 text-sm tracking-[0.4em] text-[#22c55e] font-bold uppercase border border-[#22c55e]/40 px-6 py-3 bg-[#22c55e]/10 rounded-sm w-max">
              POURQUOI NOUS CHOISIR
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
              Pourquoi faire appel à CLS Habitat ?
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10">
              Depuis 9 ans, CLS Habitat accompagne particuliers, entreprises et collectivités dans l'obtention de leurs primes CEE. Notre force ? Une équipe de 15 experts qui maîtrise chaque étape du dispositif — de l'audit initial jusqu'au versement de votre prime, sans que vous ayez à lever le petit doigt.
            </p>
            
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-lg text-white">
                <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-[#22c55e]"></i>
                </div>
                <span>Expertise technique et réglementaire complète</span>
              </li>
              <li className="flex items-center gap-4 text-lg text-white">
                <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-[#22c55e]"></i>
                </div>
                <span>Zéro démarche administrative de votre côté</span>
              </li>
              <li className="flex items-center gap-4 text-lg text-white">
                <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-[#22c55e]"></i>
                </div>
                <span>Primes 100% maximisées — sans avance de frais</span>
              </li>
            </ul>

            <a href="#contact" className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#22c55e] text-white hover:bg-white hover:text-[#0f172a] font-bold tracking-[0.1em] transition-colors duration-500 uppercase text-sm rounded-sm w-max mt-4">
              Démarrer mon audit gratuit &rarr;
            </a>
          </div>

          {/* Right Column - 50% (Video) */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative bg-[#0f172a] overflow-hidden">
            {/* Local video file from the public folder */}
            <video 
              src="images/videocee.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/10" /> {/* Extremely slight overlay so colors are vivid */}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Processus */}
      <section className="py-16 md:py-24 bg-[#f8fafc] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <span className="inline-block mb-4 text-sm tracking-[0.2em] text-gray-500 font-bold uppercase">ÉTAPES CLÉS</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight mb-20">
            Notre processus d'accompagnement
          </h2>
          <div className="flex flex-col lg:flex-row relative justify-between items-stretch gap-6">
            {[
              { title: "Analyse de vos besoins énergétiques", desc: "Évaluation complète de votre situation énergétique sur site." },
              { title: "Identification des gisements", desc: "Recherche des opérations standardisées les plus rentables." },
              { title: "Élaboration d'un plan d'action", desc: "Conception d'une stratégie sur mesure adaptée à vos contraintes." },
              { title: "Montage et dépôt du dossier", desc: "Constitution et dépôt conforme aux exigences du PNCEE." },
              { title: "Suivi et versement de la prime", desc: "Suivi complet jusqu'au versement et valorisation maximale." }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Process Card */}
                <div className="flex-1 relative z-10 flex flex-col bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center lg:text-left">
                  <div className="flex-1">
                    <span className="block text-gray-100 text-6xl font-black leading-none mb-6 transition-colors group-hover:text-[#22c55e]/20">
                      0{idx + 1}
                    </span>
                    <h3 className="text-[#0f172a] text-lg font-bold leading-snug mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {/* Arrow Connector (Hidden on Mobile) */}
                {idx < 4 && (
                  <div className="hidden lg:flex self-center px-1 transform translate-y-[-10px]">
                    <i className="fa-solid fa-chevron-right text-gray-300 text-2xl"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3.5 — Évolutions 2025 */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-block mb-6 text-sm tracking-[0.4em] text-[#22c55e] font-bold uppercase border border-[#22c55e]/40 px-6 py-3 bg-[#22c55e]/5 rounded-sm w-max">
              CHOISIR CLS HABITAT EN 2025
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight">
              Les évolutions du dispositif CEE en 2025
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Renforcement des contrôles", text: "Les dossiers doivent être encore plus rigoureux. CLS Habitat assure une conformité totale." },
              { title: "Nouvelles fiches standardisées", text: "De nouvelles opérations éligibles sont disponibles. Nous les intégrons immédiatement." },
              { title: "Accent sur la rénovation globale", text: "Les approches holistiques sont privilégiées. Nous proposons des audits complets multi-postes." }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-10 border border-[#0f172a] rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">{card.title}</h3>
                <p className="text-[#0f172a]/70 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Choisir CLS Habitat */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight mb-10">
                Comment choisir le bon mandataire ?
              </h2>
              <ul className="space-y-6">
                {[
                  "9 ans d'expérience dans le dispositif CEE",
                  "Connaissance de tous les secteurs (résidentiel, tertiaire, industriel)",
                  "Réseau d'installateurs certifiés RGE",
                  "Suivi personnalisé de chaque dossier",
                  "Transparence totale sur les démarches"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]">
                      <i className="fa-solid fa-check text-[12px]"></i>
                    </div>
                    <span className="text-[#0f172a]/80 text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0f172a] p-10 md:p-16 rounded-sm text-center shadow-xl border-t-4 border-[#22c55e]">
              <h3 className="text-3xl font-black text-white mb-8">Prêt à démarrer ?</h3>
              <a href="#contact" className="inline-flex items-center justify-center gap-4 px-8 py-5 bg-[#22c55e] text-white hover:bg-white hover:text-[#0f172a] font-bold tracking-[0.1em] transition-colors duration-500 uppercase text-sm w-full sm:w-auto rounded-sm">
                <span>Audit gratuit</span>
                <span aria-hidden="true" className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 6 — FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-gray-200 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-[#0f172a] text-lg pr-8">{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-[#22c55e] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-[#0f172a]/70 leading-relaxed bg-gray-50 border-t border-gray-100">
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