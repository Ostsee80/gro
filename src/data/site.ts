export const site = {
  url: 'https://gro-erodiertechnik.com',
  name: 'GRO-Erodiertechnik GmbH',
  shortName: 'GRO-Erodiertechnik',
  founded: '2011',
  ceo: 'Gregor Prill',
  street: 'Langenfelde 18',
  zip: '23611',
  city: 'Bad Schwartau',
  region: 'Schleswig-Holstein',
  country: 'DE',
  phone: '+49 451 530 954 12',
  phoneHref: 'tel:+4945153095412',
  email: 'info@gro-erodiertechnik.de',
  geo: { lat: 53.9185442, lng: 10.6675111 },
  register: { court: 'Amtsgericht Lübeck', number: 'HRB 11389' },
  vatId: 'DE 279228632',
  /** Regionen, die für lokale Suchanfragen relevant sind */
  areaServed: ['Deutschland', 'Europa', 'Schleswig-Holstein', 'Hamburg', 'Lübeck', 'Kiel', 'Bad Schwartau'],
};

const mapsAddress = encodeURIComponent(`${site.name}, ${site.street}, ${site.zip} ${site.city}`);
/** Google-Maps-Routenplaner mit der Firma als Ziel (reiner Link, keine Einbettung) */
export const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${mapsAddress}`;
/** Startet auf dem Smartphone direkt die Navigation in Google Maps */
export const mapsNavigate = `${mapsLink}&travelmode=driving&dir_action=navigate`;
/** Eingebettete Karte (wird erst nach Klick geladen – Zwei-Klick-Lösung) */
export const mapsEmbed = (lang: 'de' | 'en') => `https://maps.google.com/maps?q=${mapsAddress}&hl=${lang}&z=15&output=embed`;
/** Google-Maps-Ortsansicht (für strukturierte Daten) */
export const mapsPlace = `https://www.google.com/maps/search/?api=1&query=${mapsAddress}`;
