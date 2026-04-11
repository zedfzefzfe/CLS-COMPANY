const steps = [
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Audit gratuit',
    description: 'Un expert analyse vos installations gratuitement.',
    image: '/images/service-audit.jpg',
  },
  {
    icon: 'fa-solid fa-helmet-safety',
    title: 'Travaux',
    description: 'Nos équipes réalisent les travaux sans avance de frais.',
    image: '/images/service-isolation.jpg',
  },
  {
    icon: 'fa-solid fa-file-lines',
    title: 'Dossier CEE',
    description: 'Nous constituons et déposons votre dossier CEE complet.',
    image: '/images/service-murs.jpg',
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Financement',
    description: 'Vous recevez votre prime directement sur votre compte.',
    image: '/images/service-pac.jpg',
  },
];

const VideoSection = () => {
  return (
    <section id="cee" className="bg-white pt-10 pb-20 md:pb-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-4">
            Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Financer vos travaux en 4 étapes
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg p-8 overflow-hidden"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('${step.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
