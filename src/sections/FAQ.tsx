import { useEffect, useRef, useState } from 'react';
import { faqConfig } from '../config';

const FAQ = () => {
  if (!faqConfig.heading && faqConfig.faqs.length === 0) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

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

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cls-light"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-cls-green font-semibold uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {faqConfig.tag}
          </span>
          <h2
            className={`font-sans text-4xl md:text-5xl text-cls-dark mb-6 transition-all duration-700 font-bold ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {faqConfig.heading}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqConfig.faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`w-full flex items-center justify-between px-6 lg:px-8 py-5 bg-white border border-cls-teal/10 text-left transition-all duration-300 hover:shadow-cls rounded-lg ${
                  openId === faq.id ? 'border-b-0 rounded-b-none' : ''
                }`}
              >
                <span className="font-sans text-lg text-cls-dark font-medium pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center bg-cls-teal/10 rounded-full transition-transform ${
                    openId === faq.id ? 'rotate-45 bg-cls-teal' : ''
                  }`}
                  style={{ transition: 'transform 0.7s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0.3s' }}
                >
                  <i className={`fa-solid fa-plus text-sm ${openId === faq.id ? 'text-white' : 'text-cls-teal'}`}></i>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 lg:px-8 py-6 bg-white border border-t-0 border-cls-teal/10 rounded-b-lg">
                  <p className="text-cls-dark/70 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {faqConfig.ctaText && (
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <a
              href={faqConfig.ctaTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(faqConfig.ctaTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-cls-teal font-semibold tracking-wide hover:gap-4 transition-all duration-300"
            >
              {faqConfig.ctaText}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
