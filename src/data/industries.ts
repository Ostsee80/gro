import automobil from '../assets/img/automobil.jpeg';
import pharma from '../assets/img/pharma-bauteil.jpg';
import luftfahrt from '../assets/img/luftfahrt.jpeg';
import maschinenbau from '../assets/img/maschinenbau.jpeg';
import medizin from '../assets/img/medizintechnik.jpeg';
import sonstige from '../assets/img/teile-erodiert.jpg';

export const industries = [
  { id: 'auto', image: automobil, de: 'Automobilindustrie', en: 'Automotive', alt: { de: 'Motorraum eines Fahrzeugs', en: 'Car engine bay' } },
  { id: 'pharma', image: pharma, de: 'Pharma- & Lebensmittelindustrie', en: 'Pharma & Food', alt: { de: 'Präzisionsbauteil mit Sechskant-Durchbruch für die Pharmaindustrie', en: 'Precision part with hexagon cut-out for the pharmaceutical industry' } },
  { id: 'aero', image: luftfahrt, de: 'Luft- & Raumfahrt', en: 'Aerospace', alt: { de: 'Strahltriebwerk in Schwarz-Weiß', en: 'Jet engine in black and white' } },
  { id: 'mech', image: maschinenbau, de: 'Maschinenbau', en: 'Mechanical Engineering', alt: { de: 'Präzisionsbohrer aus Edelstahl', en: 'Stainless steel precision drill' } },
  { id: 'med', image: medizin, de: 'Medizintechnik', en: 'Medical Technology', alt: { de: 'Bedienung eines Ultraschallgeräts', en: 'Operating an ultrasound device' } },
  { id: 'other', image: sonstige, de: 'und viele weitere', en: 'and many more', alt: { de: 'Erodierte Präzisionsteile', en: 'EDM precision parts' } },
] as const;
