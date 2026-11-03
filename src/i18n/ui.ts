export type Lang = 'de' | 'en';

/** Seiten-IDs → Pfade je Sprache. Wird für Navigation, hreflang und Sprachumschalter genutzt. */
export const routes = {
  home: { de: '/', en: '/en/' },
  services: { de: '/leistungen/', en: '/en/services/' },
  company: { de: '/unternehmen/', en: '/en/company/' },
  contact: { de: '/kontakt/', en: '/en/contact/' },
  imprint: { de: '/impressum/', en: '/en/legal-notice/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
  thanks: { de: '/kontakt/danke/', en: '/en/contact/thank-you/' },
} as const;
export type RouteId = keyof typeof routes;

export const servicePath = (lang: Lang, slug: string) => `${routes.services[lang]}${slug}/`;

export const ui = {
  de: {
    skip: 'Zum Inhalt springen',
    nav: { home: 'Start', services: 'Leistungen', company: 'Unternehmen', contact: 'Kontakt' },
    cta: 'Anfrage senden',
    ctaLong: 'Projekt anfragen',
    call: 'Anrufen',
    menu: 'Menü',
    close: 'Schließen',
    langSwitch: 'English',
    langSwitchLabel: 'Switch to English',
    breadcrumbHome: 'Start',
    learnMore: 'Mehr erfahren',
    allServices: 'Alle Leistungen',
    benefits: 'Ihre Vorteile',
    applications: 'Typische Anwendungen',
    faq: 'Häufige Fragen',
    related: 'Weitere Leistungen',
    footerTagline: 'Präzision, Innovation und Service aus einer Hand – seit 2011 aus Bad Schwartau bei Lübeck.',
    footerNav: 'Navigation',
    footerServices: 'Leistungen',
    footerContact: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    route: 'Route planen',
    ctaBlock: {
      kicker: 'Nächster Schritt',
      title: 'Zeichnung da? Wir rechnen.',
      text: 'Schicken Sie uns Ihre Zeichnung oder Ihr CAD-Modell – wir melden uns schnell mit einem Angebot. Oder rufen Sie einfach an.',
    },
  },
  en: {
    skip: 'Skip to content',
    nav: { home: 'Home', services: 'Services', company: 'Company', contact: 'Contact' },
    cta: 'Send enquiry',
    ctaLong: 'Request a quote',
    call: 'Call',
    menu: 'Menu',
    close: 'Close',
    langSwitch: 'Deutsch',
    langSwitchLabel: 'Auf Deutsch wechseln',
    breadcrumbHome: 'Home',
    learnMore: 'Learn more',
    allServices: 'All services',
    benefits: 'Your benefits',
    applications: 'Typical applications',
    faq: 'Frequently asked questions',
    related: 'More services',
    footerTagline: 'Precision, innovation and service from a single source – since 2011 from Bad Schwartau near Lübeck, Germany.',
    footerNav: 'Navigation',
    footerServices: 'Services',
    footerContact: 'Contact',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    route: 'Get directions',
    ctaBlock: {
      kicker: 'Next step',
      title: 'Got a drawing? We’ll quote.',
      text: 'Send us your drawing or CAD model – we will get back to you quickly with a quotation. Or simply give us a call.',
    },
  },
} as const;
