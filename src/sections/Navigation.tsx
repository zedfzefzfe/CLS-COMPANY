import { useState, useEffect, useRef } from 'react';
import { navigationConfig } from '../config';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface NavigationProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Navigation = ({ cartItems, onRemoveFromCart, onUpdateQuantity }: NavigationProps) => {
  if (!navigationConfig.brandName) return null;

  const sectorSubLinks = [
    { label: 'Secteur résidentiel', href: '/secteur-residentiel' },
    { label: 'Secteur tertiaire', href: '/secteur-tertiaire' },
    { label: 'Secteur industriel', href: '/secteur-industriel' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSectorsOpen, setIsMobileSectorsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('#hero');
  const prevScrollY = useRef(0);

  // Detect current page and update active link
  useEffect(() => {
    const pathname = window.location.pathname;

    // Map pathname to the corresponding menu link
    const updateActiveLinkByPage = () => {
      if (pathname === '/cee') {
        setActiveLink('/cee');
      } else if (pathname === '/secteur-residentiel') {
        setActiveLink('/secteur-residentiel');
      } else if (pathname === '/secteur-tertiaire') {
        setActiveLink('/secteur-tertiaire');
      } else if (pathname === '/secteur-industriel') {
        setActiveLink('/secteur-industriel');
      } else {
        // On home page, set to #hero as default
        setActiveLink('#hero');
      }
    };

    updateActiveLinkByPage();
  }, []);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY <= 10) {
        setIsNavVisible(true);
      } else if (currentScrollY > prevScrollY.current) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const openQuotePanel = () => {
    scrollToSection('#contact');
  };

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    setIsMobileSectorsOpen(false);

    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    
    if (window.location.pathname !== '/' && href.startsWith('#')) {
      // Store the anchor in sessionStorage and navigate to home
      sessionStorage.setItem('scrollToAnchor', href);
      window.location.href = '/';
      return;
    }
    
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{
          background: isScrolled ? '#0f172a' : 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
        }}
      >
        <div className="flex items-center justify-between h-[150px] md:h-[162px] px-6 md:px-12 lg:px-[170px]">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center h-full"
          >
            <img
              src="/images/logo1.png"
              alt="C.L.S Performance Énergétique"
              className="h-[150px] md:h-[170px] lg:h-[185px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationConfig.menuLinks.slice(0, 5).map((link) => {
              if (link.label === 'Secteurs') {
                return (
                  <div key={link.label} className="relative group">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 px-1 py-2 ${
                        activeLink === link.href
                          ? 'text-white underline decoration-2 decoration-cls-green underline-offset-8'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <i className="fa-solid fa-chevron-down text-[10px] opacity-80" />
                    </a>

                    <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-sm border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                      <div className="py-2">
                        {sectorSubLinks.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            onClick={(e) => {
                              if (subLink.href.startsWith('/')) return;
                              e.preventDefault();
                              scrollToSection(subLink.href);
                            }}
                            className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-cls-green/20 transition-colors duration-200"
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/')) {
                      return; // natural browser navigation for actual pages
                    }
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-medium transition-all duration-300 px-1 py-2 ${
                    activeLink === link.href
                      ? 'text-white underline decoration-2 decoration-cls-green underline-offset-8'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={openQuotePanel}
              className="hidden lg:inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-cls-green text-white font-medium tracking-wide text-sm btn-hover rounded-lg"
              aria-label="Devis Gratuit"
            >
              <span>Devis Gratuit</span>
              <span aria-hidden="true">→</span>
              {totalItems > 0 && (
                <span className="ml-1 w-5 h-5 flex items-center justify-center text-[10px] text-cls-green bg-white rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col gap-1.5 w-7 btn-hover lg:hidden"
              aria-label="Menu"
            >
              <span className="h-[2px] w-full bg-white" />
              <span className="h-[2px] w-full bg-white" />
              <span className="h-[2px] w-3/4 bg-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-700 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-cls-teal" />
        <div className="relative h-full flex">
          <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-20">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileSectorsOpen(false);
              }}
              className="absolute top-6 right-6 lg:right-20 p-2 text-white hover:opacity-60 transition-opacity"
              aria-label="Fermer"
            >
              <i className="fa-solid fa-xmark text-3xl"></i>
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navigationConfig.menuLinks.map((link, index) => {
                if (link.label === 'Secteurs') {
                  return (
                    <div
                      key={link.label}
                      className="flex flex-col items-center"
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 0.5s ease ${index * 0.1}s`,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileSectorsOpen((prev) => !prev);
                        }}
                        className="inline-flex items-center gap-2 font-sans text-2xl md:text-3xl lg:text-4xl text-white hover:text-cls-lime transition-colors duration-300 font-medium"
                      >
                        <span>{link.label}</span>
                        <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${isMobileSectorsOpen ? 'rotate-180' : ''}`} />
                      </a>

                      <div
                        className={`mt-3 flex flex-col items-center gap-2 overflow-hidden transition-all duration-300 ${
                          isMobileSectorsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {sectorSubLinks.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            onClick={(e) => {
                              if (subLink.href.startsWith('/')) return;
                              e.preventDefault();
                              scrollToSection(subLink.href);
                            }}
                            className="text-base md:text-lg text-white/80 hover:text-cls-lime transition-colors duration-300"
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('/')) return;
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-sans text-2xl md:text-3xl lg:text-4xl text-white hover:text-cls-lime transition-colors duration-300 font-medium"
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s ease ${index * 0.1}s`,
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}

              <button
                onClick={openQuotePanel}
                className="mt-4 inline-flex lg:hidden items-center justify-center gap-2 px-9 py-3.5 bg-cls-green text-white font-medium tracking-wide text-sm btn-hover rounded-lg"
              >
                <span>Devis Gratuit</span>
                <span aria-hidden="true">→</span>
                {totalItems > 0 && (
                  <span className="ml-1 w-5 h-5 flex items-center justify-center text-[10px] text-cls-green bg-white rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </nav>

            <div className="flex items-center gap-6 mt-12">
              {navigationConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/70 hover:text-cls-lime transition-colors text-xl"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fa-brands fa-${social.icon.toLowerCase()}`}></i>
                </a>
              ))}
            </div>
          </div>

          {navigationConfig.menuBackgroundImage && (
            <div
              className="hidden lg:block w-[40%] bg-cover bg-center"
              style={{
                backgroundImage: `url(${navigationConfig.menuBackgroundImage})`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'all 0.7s ease 0.2s',
              }}
            />
          )}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsCartOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl transition-transform duration-500 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-cls-light">
              <h3 className="font-sans text-xl font-semibold text-cls-dark">Vos demandes</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:opacity-60 transition-opacity text-cls-dark"
                aria-label="Fermer"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <i className="fa-solid fa-clipboard-list text-5xl text-cls-light mb-4"></i>
                  <p className="text-cls-dark/60 text-lg">{navigationConfig.cartEmptyText}</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 px-8 py-3 bg-cls-teal text-white font-medium tracking-wide btn-hover rounded-lg"
                  >
                    {navigationConfig.continueShoppingText}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-6 border-b border-cls-light">
                      <div className="w-24 h-24 bg-cls-light overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-sans text-lg font-medium text-cls-dark">{item.name}</h4>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center border border-cls-teal/20 hover:border-cls-teal hover:bg-cls-teal hover:text-white transition-colors rounded"
                          >
                            <i className="fa-solid fa-minus text-xs"></i>
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-cls-teal/20 hover:border-cls-teal hover:bg-cls-teal hover:text-white transition-colors rounded"
                          >
                            <i className="fa-solid fa-plus text-xs"></i>
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-cls-dark/40 hover:text-red-500 transition-colors"
                        aria-label="Supprimer"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-cls-light bg-cls-light/50">
                <button className="w-full py-4 bg-cls-teal text-white font-medium tracking-wide btn-hover rounded-lg">
                  {navigationConfig.cartCheckoutText}
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 mt-3 text-cls-dark/60 font-medium hover:text-cls-teal transition-colors"
                >
                  {navigationConfig.continueShoppingText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
