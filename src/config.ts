// ═══════════════════════════════════════════════════════════════════════════════
// C.L.S PERFORMANCE ÉNERGÉTIQUE - Configuration
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "C.L.S Performance Énergétique - Spécialistes en CEE",
  description: "C.L.S Performance Énergétique - Vos spécialistes en Certificats d'Économies d'Énergie (CEE). Accompagnement complet pour vos projets d'efficacité énergétique.",
  language: "fr",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "C.L.S Performance Énergétique",
  menuLinks: [
    { label: "Accueil", href: "#hero" },
    { label: "Qui sommes-nous?", href: "#subhero" },
    { label: "Secteurs", href: "#secteurs" },
    { label: "CEE", href: "/cee" },
    { label: "Contact", href: "#contact" },
 
  ],
  socialLinks: [
    { icon: "LinkedIn", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
  ],
  searchPlaceholder: "Rechercher...",
  cartEmptyText: "Votre panier est vide",
  cartCheckoutText: "Demander un devis",
  continueShoppingText: "Continuer",
  menuBackgroundImage: "/images/energy-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  subtitle?: string;
  stats?: Array<{ label: string; value: string }>;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "EXPERTS EN EFFICACITÉ ÉNERGÉTIQUE",
  title: "L'expert CEE qui finance vos travaux énergétiques",
  subtitle: "Résidentiel, Tertiaire, Industriel — solutions clé en main financées jusqu'à 100% via les Certificats d'Économies d'Énergie.",
  stats: [
    
  ],
  ctaPrimaryText: "Nos Services",
  ctaPrimaryTarget: "#services",
  ctaSecondaryText: "En savoir plus",
  ctaSecondaryTarget: "#cee",
  backgroundImage: "/images/hero-energy.jpg",
};

// ─── SubHero (Stats Section) ─────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "QUI SOMMES NOUS",
  heading: "CLS Habitat, votre expert CEE depuis 2017",
  bodyParagraphs: [
    "Fondée en février 2017 à Vaulx-en-Velin, CLS Habitat est née d'une conviction simple : chaque particulier et chaque entreprise mérite d'accéder aux aides énergétiques sans se perdre dans la complexité administrative.",
    "En 9 ans, nous avons accompagné plus de 350 clients et réalisé plus de 1 000 chantiers — toujours avec la même rigueur et le même engagement. Notre équipe de 15 collaborateurs experts prend en charge l'intégralité de votre parcours CEE : de l'audit initial jusqu'au versement de votre prime, sans avance de frais de votre côté.",
    "Résidentiel, tertiaire ou industriel — nous intervenons dans tous les secteurs avec une approche sur mesure, adaptée à vos besoins réels."
  ],
  linkText: "En savoir plus",
  linkTarget: "#about",
  image1: "/images/ci.png",
  image2: "/images/TERTI.png",
  stats: [
    { value: 15, suffix: "+", label: "collaborateurs" },
    { value: 350, suffix: "+", label: "Clients accompagnés" },
    { value: 1000, suffix: "+", label: " chantiers réalisés" },
    { value: 100, suffix: "%", label: "Clients satisfaits" },
  ],
};

// ─── Video Section (CEE Explanation) ─────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "LES CERTIFICATS CEE",
  heading: "Comprendre le dispositif des CEE",
  bodyParagraphs: [
    "Les Certificats d'Économies d'Énergie (CEE) sont un dispositif gouvernemental qui encourage les économies d'énergie. Les obligés (fournisseurs d'énergie) doivent réaliser des économies d'énergie et achètent des CEE aux entreprises ayant réalisé des travaux d'efficacité énergétique.",
    "En tant qu'entreprise ou particulier, vous pouvez bénéficier d'une prime CEE pour financer vos travaux d'isolation, de chauffage, de ventilation ou d'éclairage. Cette prime est versée en complément des aides de l'État et des collectivités territoriales.",
    "Notre mission est de vous accompagner dans l'obtention de ces certificats, en vous aidant à identifier les opérations éligibles et en constituant votre dossier auprès des obligés.",
  ],
  ctaText: "Évaluer mon éligibilité",
  ctaTarget: "#contact",
  backgroundImage: "/images/cee-documents.jpg",
};

// ─── Products (Services) ─────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "NOS SERVICES",
  heading: "Solutions d'efficacité énergétique",
  description: "Découvrez nos prestations pour optimiser votre consommation énergétique et bénéficier des primes CEE.",
  viewAllText: "Voir tous les services",
  addToCartText: "Demander info",
  addedToCartText: "Demande envoyée !",
  categories: ["Tous", "Audit", "Isolation", "Chauffage", "Éclairage"],
  products: [
    { 
      id: 1, 
      name: "Audit énergétique complet", 
      price: 0, 
      category: "Audit", 
      image: "/images/service-audit.jpg" 
    },
    { 
      id: 2, 
      name: "Isolation des combles", 
      price: 0, 
      category: "Isolation", 
      image: "/images/service-isolation.jpg" 
    },
    { 
      id: 3, 
      name: "Isolation des murs", 
      price: 0, 
      category: "Isolation", 
      image: "/images/service-murs.jpg" 
    },
    { 
      id: 4, 
      name: "Pompe à chaleur", 
      price: 0, 
      category: "Chauffage", 
      image: "/images/service-pac.jpg" 
    },
    { 
      id: 5, 
      name: "Chaudière à condensation", 
      price: 0, 
      category: "Chauffage", 
      image: "/images/service-chaudiere.jpg" 
    },
    { 
      id: 6, 
      name: "LED et éclairage intelligent", 
      price: 0, 
      category: "Éclairage", 
      image: "/images/service-led.jpg" 
    },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Leaf" | "ShieldCheck" | "Zap" | "Award";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Leaf",
      title: "Transition écologique",
      description: "Réduisez votre empreinte carbone et contribuez à la préservation de l'environnement.",
    },
    {
      icon: "ShieldCheck",
      title: "Accompagnement complet",
      description: "De l'étude initiale à la finalisation des travaux, nous gérons l'intégralité de votre projet.",
    },
    {
      icon: "Zap",
      title: "Expertise CEE",
      description: "Maîtrise parfaite du dispositif des Certificats d'Économies d'Énergie pour maximiser vos primes.",
    },
    {
      icon: "Award",
      title: "Qualité certifiée",
      description: "Interventions réalisées par des professionnels certifiés RGE et Qualibat.",
    },
  ],
};

// ─── Blog (Actualités) ───────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "ACTUALITÉS",
  heading: "Les dernières nouvelles de l'énergie",
  viewAllText: "Voir toutes les actualités",
  readMoreText: "Lire la suite",
  posts: [
    {
      id: 1,
      title: "Nouveau barème CEE 2024 : ce qui change",
      date: "15 Mars 2024",
      image: "/images/blog-barème.jpg",
      excerpt: "Découvrez les évolutions du dispositif des CEE pour cette année et comment en bénéficier.",
    },
    {
      id: 2,
      title: "Rénovation énergétique : les aides disponibles",
      date: "28 Février 2024",
      image: "/images/blog-aides.jpg",
      excerpt: "Panorama complet des aides 2024 pour votre projet de rénovation énergétique.",
    },
    {
      id: 3,
      title: "Pompe à chaleur : guide d'achat 2024",
      date: "10 Février 2024",
      image: "/images/blog-pac.jpg",
      excerpt: "Tout savoir pour choisir la pompe à chaleur adaptée à votre logement.",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "FOIRE AUX QUESTIONS",
  heading: "Questions fréquentes sur les CEE",
  ctaText: "Vous avez d'autres questions ? Contactez-nous",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "Qu'est-ce qu'un Certificat d'Économies d'Énergie (CEE) ?",
      answer: "Les CEE sont des certificats qui prouvent qu'une économie d'énergie a été réalisée. Ils sont émis par l'administration et peuvent être revendus aux obligés (fournisseurs d'énergie) qui doivent atteindre des objectifs d'économies d'énergie. En tant que particulier ou entreprise, vous pouvez bénéficier d'une prime CEE lors de travaux d'efficacité énergétique.",
    },
    {
      id: 2,
      question: "Qui peut bénéficier des primes CEE ?",
      answer: "Les primes CEE sont accessibles aux particuliers, aux entreprises, aux collectivités territoriales et aux bailleurs sociaux, sous réserve de réaliser des travaux éligibles. Les conditions d'éligibilité varient selon le type de bâtiment et les travaux effectués. Notre équipe évalue gratuitement votre éligibilité.",
    },
    {
      id: 3,
      question: "Quels travaux sont éligibles aux CEE ?",
      answer: "De nombreux travaux sont éligibles : isolation thermique (combles, murs, planchers), installation de chauffage performant (pompe à chaleur, chaudière à condensation), ventilation mécanique contrôlée, remplacement de fenêtres, installation de régulation de chauffage, éclairage LED, etc. Chaque opération donne droit à un nombre de CEE calculé selon des barèmes officiels.",
    },
    {
      id: 4,
      question: "Comment calculer le montant de ma prime CEE ?",
      answer: "Le montant de la prime CEE dépend du type de travaux réalisés, de la surface concernée, de la localisation géographique et des caractéristiques du bâtiment. Les barèmes sont fixés par la réglementation et actualisés régulièrement. Nous réalisons une étude personnalisée pour estimer précisément le montant de vos primes.",
    },
    {
      id: 5,
      question: "Quel est le délai pour recevoir ma prime CEE ?",
      answer: "Le délai de versement de la prime CEE varie généralement entre 2 et 6 mois après la finalisation des travaux et la validation du dossier complet. Ce délai peut varier selon l'obligé CEE choisi et la complexité du dossier. Nous vous accompagnons pour optimiser les délais de traitement.",
    },
    {
      id: 6,
      question: "Les CEE sont-ils cumulables avec d'autres aides ?",
      answer: "Oui, les primes CEE sont cumulables avec d'autres aides comme MaPrimeRénov', l'éco-prêt à taux zéro, les aides des collectivités territoriales et les aides des fournisseurs d'énergie (Coups de pouce Chauffage, etc.). Cette cumulativité permet de financer une grande partie de vos travaux de rénovation énergétique.",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "NOTRE HISTOIRE",
      heading: "12 ans d'engagement pour la transition énergétique",
      paragraphs: [
        "Fondée en 2012, C.L.S Performance Énergétique est née d'une conviction : l'efficacité énergétique est un levier essentiel pour la transition écologique et la réduction des factures énergétiques.",
        "Au fil des années, nous avons accompagné plus de 500 clients dans leurs projets d'économies d'énergie, obtenant plus de 15 millions d'euros de primes CEE. Notre expertise reconnue nous a valu la confiance de particuliers, d'entreprises et de collectivités territoriales.",
      ],
      quote: "",
      attribution: "",
      image: "/images/about-history.jpg",
      backgroundColor: "#1a5f7a",
      textColor: "#ffffff",
    },
    {
      tag: "NOTRE MISSION",
      heading: "Rendre l'efficacité énergétique accessible à tous",
      paragraphs: [],
      quote: "Notre ambition est de démocratiser l'accès aux solutions d'économies d'énergie en simplifiant les démarches administratives et en maximisant les aides financières pour nos clients.",
      attribution: "— L'équipe C.L.S Performance Énergétique",
      image: "/images/about-mission.jpg",
      backgroundColor: "#3aab6d",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Contactez-nous",
  description: "Vous avez un projet d'économies d'énergie ? Nos experts sont à votre écoute pour vous accompagner dans l'obtention de vos primes CEE.",
  locationLabel: "Adresse",
  location: "15 Rue de l'Énergie, 75008 Paris, France",
  emailLabel: "Email",
  email: "contact@cls-performance.fr",
  phoneLabel: "Téléphone",
  phone: "+33 1 23 45 67 89",
  formFields: {
    nameLabel: "Nom complet",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Décrivez votre projet...",
  },
  submitText: "Envoyer ma demande",
  submittingText: "Envoi en cours...",
  submittedText: "Message envoyé !",
  successMessage: "Merci pour votre message ! Notre équipe vous contactera dans les 48 heures.",
  backgroundImage: "/images/sunset-sky-powers-wind-solar-energy-generated-by-ai.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "C.L.S Performance Énergétique",
  brandDescription: "Votre expert en Certificats d'Économies d'Énergie. Accompagnement complet pour vos projets d'efficacité énergétique.",
  newsletterHeading: "Restez informé",
  newsletterDescription: "Inscrivez-vous à notre newsletter pour recevoir les dernières actualités sur les CEE et les aides à la rénovation énergétique.",
  newsletterPlaceholder: "Votre email",
  newsletterButtonText: "S'inscrire",
  newsletterSuccessText: "Inscription confirmée !",
  linkGroups: [
    {
      title: "Services",
      links: [
        { label: "Audit énergétique", href: "#services" },
        { label: "Isolation", href: "#services" },
        { label: "Chauffage", href: "#services" },
        { label: "Éclairage LED", href: "#services" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Guide CEE", href: "#cee" },
        { label: "Actualités", href: "#actualites" },
        { label: "FAQ", href: "#faq" },
        { label: "Simulateur", href: "#contact" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#about" },
        { label: "Nos équipes", href: "#about" },
        { label: "Carrières", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGU", href: "#" },
  ],
  copyrightText: "© 2024 C.L.S Performance Énergétique. Tous droits réservés.",
  socialLinks: [
    { icon: "LinkedIn", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
  ],
};
