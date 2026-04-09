import { useState } from 'react';
import { footerConfig } from '../config';

const Footer = () => {
  if (!footerConfig.brandName) return null;

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 md:py-24" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo1.png"
              alt={footerConfig.brandName}
              className="h-[150px] md:h-[170px] lg:h-[185px] w-auto object-contain mb-6"
            />
            <p className="text-white/60 font-normal text-sm leading-relaxed mb-6">
              {footerConfig.brandDescription}
            </p>
            <div className="flex items-center gap-4">
              {footerConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-cls-green hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fa-brands fa-${social.icon.toLowerCase()}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {footerConfig.linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-6 text-white">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white/60 text-base font-normal hover:text-cls-lime transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {footerConfig.newsletterHeading && (
            <div className="lg:col-span-1">
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-6 text-white">{footerConfig.newsletterHeading}</h4>
              <p className="text-white/60 text-sm font-normal mb-4">
                {footerConfig.newsletterDescription}
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder={footerConfig.newsletterPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-white/20 bg-white/5 text-white text-sm focus:outline-none focus:border-cls-green transition-colors rounded-lg placeholder-white/40"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-cls-green text-white text-sm font-medium tracking-wide btn-hover rounded-lg"
                >
                  {isSubscribed ? (
                    <>
                      <i className="fa-solid fa-check"></i>
                      <span>{footerConfig.newsletterSuccessText}</span>
                    </>
                  ) : (
                    <>
                      <span>{footerConfig.newsletterButtonText}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs uppercase tracking-wider font-medium">
              {footerConfig.copyrightText}
            </p>
            <div className="flex items-center gap-6">
              {footerConfig.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/40 text-xs hover:text-cls-lime transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
