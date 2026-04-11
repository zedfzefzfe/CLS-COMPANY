import { useEffect, useRef, useState } from 'react';
import { heroConfig } from '../config';

const Hero = () => {
  if (!heroConfig.title) return null;

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    videoRef.current?.play().catch(() => {});
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#subhero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleLines = heroConfig.title.split('\n');
  const isMobile = /iPad|iPhone|iPod|Android/i.test(navigator.userAgent);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      {isMobile ? (
        <div
          style={{ backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/video2.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.45)' }} />

      {/* Content */}
      <div className="absolute z-10 left-0 right-0 w-full flex flex-col items-center justify-center text-center text-white px-6" style={{ top: '50%', transform: 'translateY(-50%)', marginTop: '22px' }}>
        <h1
          className={`font-sans max-w-3xl lg:max-w-4xl leading-[1.12] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms', color: '#ffffff', fontWeight: 700, fontSize: 'clamp(30px, 5vw, 56px)' }}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {heroConfig.subtitle && (
          <p
            className={`mt-8 md:mt-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms', color: 'rgba(255, 255, 255, 0.92)', fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: '640px', lineHeight: 1.65 }}
          >
            {heroConfig.subtitle}
          </p>
        )}

        <div
          className={`mt-10 md:mt-14 flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {heroConfig.ctaPrimaryText && (
            <a
              href={heroConfig.ctaPrimaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(heroConfig.ctaPrimaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white font-semibold tracking-wide text-sm flex items-center justify-center gap-2 transition-all duration-300 rounded"
              style={{
                backgroundColor: '#16a34a',
                padding: '14px 32px',
                borderRadius: '6px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#15803d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#16a34a';
              }}
            >
              <span>{heroConfig.ctaPrimaryText}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
          {heroConfig.ctaSecondaryText && (
            <a
              href={heroConfig.ctaSecondaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(heroConfig.ctaSecondaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white font-semibold tracking-wide text-sm transition-all duration-300 rounded"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                padding: '12px 30px',
                borderRadius: '6px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#16a34a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              {heroConfig.ctaSecondaryText}
            </a>
          )}
        </div>

        {/* Stats Bar */}
        {heroConfig.stats && heroConfig.stats.length > 0 && (
          <div
            className={`mt-14 md:mt-18 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 border-t border-b border-white/20 py-6 md:py-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            {heroConfig.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <p className="text-sm md:text-base font-bold" style={{ color: '#c8e86b' }}>
                  {stat.label}
                </p>
                <p className="text-xs md:text-sm mt-2" style={{ color: '#ffffff' }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-cls-lime transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
        aria-label="Scroll down"
      >
        <i className="fa-solid fa-chevron-down text-2xl animate-bounce"></i>
      </button>
    </section>
  );
};

export default Hero;
