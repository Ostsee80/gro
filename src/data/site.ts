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
  areaServed: ['Bad Schwartau', 'Lübeck', 'Hamburg', 'Kiel', 'Schleswig-Holstein', 'Norddeutschland', 'Deutschland', 'Europa'],
};

export const mapsLink = `https://www.openstreetmap.org/?mlat=${site.geo.lat}&mlon=${site.geo.lng}#map=16/${site.geo.lat}/${site.geo.lng}`;
