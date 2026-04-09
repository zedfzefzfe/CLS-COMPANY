import { useEffect } from 'react';
import Contact from './sections/Contact';

const Tertiaire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    { title: "Gestion Technique Centralisée (GTC)", desc: "Système de pilotage pour optimiser la consommation (chauffage, éclairage, clim). ", icon: "fa-solid fa-server", image: "images/test.png" },
{ title: "Calorifugeage", desc: "Isolation d'un réseau hydraulique de chauffage ou d'eau chaude sanitaire.", icon: "fa-solid fa-pipe", image: "images/CAR.png" },
    { title: "Isolation des Points Singuliers", desc: "Isolation des points singuliers d'un réseau pour éviter toute déperdition de chaleur à des points précis.", icon: "fa-solid fa-temperature-arrow-up", image: "images/POINT.png" },
    { title: "Isolation des Combles", desc: "Isolation de combles ou de toitures pour empêcher les pertes thermiques par le haut de l'habitat. ", icon: "fa-solid fa-house-chimney", image: "images/ISOLATION.png" },
    { title: "Isolation des Planchers Bas", desc: "Isolation d'un plancher pour bloquer l'air froid et l'humidité provenant du sous-sol ou d'un vide sanitaire.", icon: "fa-solid fa-layer-group", image: "images/PLACHER.png" },
    { title: "Déstratification d'air", desc: "Système de déstratification d’air Fiche ministérielle BAT-TH-142 Cette stratification de l’air peut entraîner une sensation de froid au niveau du sol même si la température globale de la pièce est élevée ; et représente aussi une grande source de déperdition de chaleur.", icon: "fa-solid fa-layer-group", image: "images/air.png" }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#0f172a] pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ter.png"
            alt="Secteur Tertiaire"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <span className="inline-block mb-4 text-sm tracking-[0.3em] text-white/70 font-semibold uppercase">
            BtoB & Établissements Publics
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            Secteur Tertiaire
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Respectez le Décret Tertiaire et optimisez la performance globale de vos bâtiments de bureaux, commerces, santé et enseignement.
          </p>
        </div>
      </section>

      {/* 2. DESCRIPTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight mb-8">
              La conformité aux exigences réglementaires
            </h2>
            <div className="space-y-6 text-lg text-[#0f172a]/70 font-light leading-relaxed">
              <p>
                Le secteur tertiaire (bureaux, commerces, hôtels, hôpitaux, établissements d'enseignement) représente des surfaces considérables avec d'importantes consommations énergétiques pour le chauffage, la climatisation et l'éclairage.
              </p>
              <p>
                Avec l'entrée en vigueur du <strong>Décret Tertiaire (loi ELAN)</strong>, ces professionnels font face à des obligations strictes de réduction de leurs consommations finales d'énergie :
                <br/>-40% d'ici 2030, -50% d'ici 2040 et -60% d'ici 2050 (par rapport à 2010).
              </p>
              <p>
                Face à ces engagements, le dispositif <strong>CEE</strong> constitue le principal levier financier pour entreprendre les rénovations nécessaires tout en absorbant les coûts des gros travaux de relamping ou d'isolation et d'automatisation.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <img 
              src="images/TERTI.png" 
              alt="Bâtiments du Secteur Tertiaire" 
              className="w-full h-[300px] lg:h-[450px] object-cover rounded-xl shadow-md"
            />
            <div className="bg-[#f8fafc] border-l-4 border-[#22c55e] p-8 lg:p-12 shadow-lg rounded-xl">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Financement de vos travaux</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <i className="fa-solid fa-check text-[#22c55e] mt-1"></i>
                  <span className="text-[#0f172a]/80 font-medium">Financement jusqu'à 100% selon l'éligibilité</span>
                </li>
                <li className="flex gap-4">
                  <i className="fa-solid fa-check text-[#22c55e] mt-1"></i>
                  <span className="text-[#0f172a]/80 font-medium">Prise en charge intégrale du montage du dossier</span>
                </li>
                <li className="flex gap-4">
                  <i className="fa-solid fa-check text-[#22c55e] mt-1"></i>
                  <span className="text-[#0f172a]/80 font-medium">Aucune avance de frais avec la délégation à CLS Habitat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-4 leading-tight">
              Nos <span className="text-[#22c55e]">Solutions</span>
            </h2>
            <p className="text-[#0f172a]/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Des interventions complètes adaptées à votre secteur pour maximiser vos économies d'énergie
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22c55e] to-transparent mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {solutions.map((sol, idx) => {
              const ficheMatch = sol.desc.match(/(Fiches?.*)$/);
              const descOnly = sol.desc.replace(/(Fiches?.*)$/, '').trim();
              const ficheText = ficheMatch ? ficheMatch[1] : '';

              return (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-full aspect-[2/1] mb-6 overflow-hidden rounded-[100px] shadow-sm border-b-4 border-[#22c55e] transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#0f172a] group-hover:text-[#22c55e] transition-colors">{sol.title}</h3>
                  <div className="text-gray-500 font-light text-[15px] leading-relaxed text-center flex-1 w-full max-w-[280px]">
                    <p className="mb-2">{descOnly}</p>
                    {ficheText && <p className="text-gray-400 text-sm">{ficheText}</p>}
                  </div>
                  <a 
                    href="#contact" 
                    className="mt-6 px-6 py-2.5 rounded-full text-white font-bold text-sm bg-[#22c55e] hover:bg-white hover:text-[#22c55e] border border-[#22c55e] transition-all duration-300"
                  >
                    En savoir plus
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <Contact />
    </div>
  );
};

export default Tertiaire;