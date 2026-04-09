import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactConfig } from '../config';

// Initialize EmailJS
const EMAILJS_SERVICE_ID = 'service_ug24wki';
const EMAILJS_TEMPLATE_ID = 'template_spo55eo';
const EMAILJS_PUBLIC_KEY = 'X6VzaYLSuLrBDAZL1';

emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  if (!contactConfig.heading) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sendEmail = async (data: typeof formData) => {
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: contactConfig.email,
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Email send error:', error);
      return false;
    }
  };

  const sendWhatsApp = (data: typeof formData) => {
    try {
      const message = `${data.name} - ${data.email} - ${data.phone} - Message: ${data.message}`;
      const encodedMessage = encodeURIComponent(message);
      // WhatsApp number for C.L.S Performance Énergétique
      const whatsappNumber = '41782443479';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      return true;
    } catch (error) {
      console.error('WhatsApp error:', error);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setErrorMessage('Veuillez remplir tous les champs requis.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Send email
    sendEmail(formData).then((emailSent) => {
      if (emailSent) {
        console.log('Email sent successfully');
      }
      
      // Send WhatsApp
      sendWhatsApp(formData);

      // Reset form
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', phone: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      {contactConfig.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactConfig.backgroundImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-cls-dark/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Left Side - Info */}
          <div
            className={`lg:w-1/2 text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Logo */}
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl mb-8 leading-none font-bold">
              {contactConfig.heading}
            </h2>

            <p className="text-xl font-normal leading-relaxed opacity-90 mb-12 max-w-md">
              {contactConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {contactConfig.location && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cls-green/20 flex items-center justify-center">
                    <i className="fa-solid fa-location-dot text-cls-lime"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">{contactConfig.locationLabel}</span>
                    <span className="font-normal">{contactConfig.location}</span>
                  </div>
                </div>
              )}

              {contactConfig.email && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cls-green/20 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-cls-lime"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">{contactConfig.emailLabel}</span>
                    <a href={`mailto:${contactConfig.email}`} className="font-normal hover:text-cls-lime transition-colors">
                      {contactConfig.email}
                    </a>
                  </div>
                </div>
              )}

              {contactConfig.phone && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cls-green/20 flex items-center justify-center">
                    <i className="fa-solid fa-phone text-cls-lime"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-60 mb-1">{contactConfig.phoneLabel}</span>
                    <a href={`tel:${contactConfig.phone}`} className="font-normal hover:text-cls-lime transition-colors">
                      {contactConfig.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`lg:w-1/2 max-w-md w-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {errorMessage && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded text-red-200 text-sm">
                  {errorMessage}
                </div>
              )}

              <div>
                <input
                  type="text"
                  placeholder={contactConfig.formFields.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 py-4 focus:outline-none focus:border-cls-lime transition-colors font-normal text-lg"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder={contactConfig.formFields.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 py-4 focus:outline-none focus:border-cls-lime transition-colors font-normal text-lg"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 py-4 focus:outline-none focus:border-cls-lime transition-colors font-normal text-lg"
                />
              </div>

              <div>
                <textarea
                  placeholder={contactConfig.formFields.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/50 py-4 focus:outline-none focus:border-cls-lime transition-colors font-normal text-lg resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-5 bg-cls-teal text-white font-medium tracking-wide text-sm btn-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">{contactConfig.submittingText}</span>
                ) : isSubmitted ? (
                  <>
                    <i className="fa-solid fa-check"></i>
                    <span>{contactConfig.submittedText}</span>
                  </>
                ) : (
                  <>
                    <span>{contactConfig.submitText}</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>

            {isSubmitted && (
              <p className="mt-6 text-cls-lime text-center font-normal">
                {contactConfig.successMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
