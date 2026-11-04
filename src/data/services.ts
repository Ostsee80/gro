import type { ImageMetadata } from 'astro';
import drahterodieren from '../assets/img/drahterodieren.jpg';
import senkerodieren from '../assets/img/teile-erodiert.jpg';
import fraesen from '../assets/img/fraesen.jpg';
import schleifen from '../assets/img/drehen-schleifen.jpg';
import werkzeugbau from '../assets/img/werkzeugbau.jpeg';
import bohren from '../assets/img/cnc.jpeg';
import werkstatt from '../assets/img/sonderloesungen.jpg';
import pulver from '../assets/img/bauteil-blau.jpg';
import laser from '../assets/img/lasergravur.jpeg';
import druck from '../assets/img/3d-druck.jpg';

type L<T = string> = { de: T; en: T };
export type Faq = { q: string; a: string };

export interface Service {
  id: string;
  slug: L;
  code: string; // technisches Kürzel für die Optik
  title: L;
  /** Kapazität / Kennwert, z. B. Verfahrweg – erscheint in Karten, Tabelle und Detailseite */
  spec?: { label: L; value: L };
  /** SEO-Title (≤ 60 Zeichen inkl. Marke) */
  seoTitle: L;
  /** Meta-Description (≤ 155 Zeichen) */
  seoDescription: L;
  teaser: L;
  intro: L;
  body: L<string[]>;
  benefits: L<string[]>;
  applications: L<string[]>;
  faq: L<Faq[]>;
  image: ImageMetadata;
  imageAlt: L;
  featured?: boolean;
}

const travel = { de: 'Verfahrweg X × Y × Z', en: 'Travel X × Y × Z' };

export const services: Service[] = [
  // ------------------------------------------------------------------ Draht
  {
    id: 'wire-edm',
    code: 'EDM-W',
    featured: true,
    slug: { de: 'drahterodieren', en: 'wire-edm' },
    title: { de: 'Drahterodieren', en: 'Wire EDM' },
    spec: { label: travel, value: { de: 'ca. 800 × 600 × 500 mm', en: 'approx. 800 × 600 × 500 mm' } },
    seoTitle: {
      de: 'Drahterodieren bis 500 mm Höhe – Lohnfertigung | GRO',
      en: 'Wire EDM up to 500 mm Height – Worldwide | GRO',
    },
    seoDescription: {
      de: 'Drahterodieren im Lohnauftrag: Verfahrweg ca. 800 × 600 × 500 mm, enge Toleranzen, schwer zerspanbare Werkstoffe – für Deutschland, Europa & weltweit.',
      en: 'Contract wire EDM: travel approx. 800 × 600 × 500 mm, tight tolerances, hard-to-machine materials – for customers across Germany, Europe and worldwide.',
    },
    teaser: {
      de: 'Verfahrweg ca. 800 × 600 × 500 mm – präzise Konturen, enge Toleranzen, schwer zerspanbare Werkstoffe.',
      en: 'Travel approx. 800 × 600 × 500 mm – precise contours, tight tolerances, hard-to-machine materials.',
    },
    intro: {
      de: 'Beim Drahterodieren schneidet ein dünner, elektrisch geladener Draht berührungslos durch leitfähige Werkstoffe. Funkenentladungen tragen das Material ab – ohne mechanische Kräfte, ohne Verzug und unabhängig von der Härte des Werkstücks.',
      en: 'In wire EDM, a thin, electrically charged wire cuts through conductive materials without contact. Spark discharges remove the material – with no mechanical force, no distortion and regardless of the hardness of the workpiece.',
    },
    body: {
      de: [
        'Mit einem Verfahrweg von ca. 800 × 600 × 500 mm (X × Y × Z) schneiden wir auch hohe und großformatige Werkstücke – etwa hohe Stempel, Matrizen, Formplatten und massive Bauteile, die viele Lohnfertiger nicht mehr bearbeiten können.',
        'Das Drahterodieren ist ideal für präzise Konturen, enge Toleranzen und schwer zerspanbare Werkstoffe: filigrane Geometrien, enge Innenradien, scharfkantige Durchbrüche und bereits gehärtete Bauteile. Wir fertigen als Einzelteil, Prototyp oder Serie – auf Wunsch mit Messprotokoll.',
      ],
      en: [
        'With a travel of approx. 800 × 600 × 500 mm (X × Y × Z) we also cut tall and large-format workpieces – such as tall punches, dies, mould plates and massive components that many contract shops can no longer machine.',
        'Wire EDM is ideal for precise contours, tight tolerances and hard-to-machine materials: delicate geometries, tight inner radii, sharp-edged cut-outs and pre-hardened parts. We manufacture single parts, prototypes or series – with an inspection report on request.',
      ],
    },
    benefits: {
      de: ['Werkstückhöhen bis 500 mm (Z)', '5-Achs-Drahterodieren für Konik- und Freiformschnitte', 'Präzise Konturen und enge Toleranzen', 'Schwer zerspanbare und gehärtete Werkstoffe ohne Verzug', 'Gratfreie Schnittkanten'],
      en: ['Workpiece heights up to 500 mm (Z)', '5-axis wire EDM for taper and freeform cuts', 'Precise contours and tight tolerances', 'Hard-to-machine and hardened materials without distortion', 'Burr-free cutting edges'],
    },
    applications: {
      de: ['Stanz- und Schnittwerkzeuge', 'Stempel, Matrizen und Formplatten', 'Zahnräder und Profile', 'Bauteile für Medizintechnik und Luftfahrt'],
      en: ['Stamping and cutting tools', 'Punches, dies and mould plates', 'Gears and profiles', 'Components for medical and aerospace'],
    },
    faq: {
      de: [
        { q: 'Wie groß dürfen Werkstücke beim Drahterodieren sein?', a: 'Unser Verfahrweg beträgt ca. 800 × 600 × 500 mm (X × Y × Z). Damit bearbeiten wir Werkstücke bis 500 mm Höhe – auch hohe Stempel, Matrizen und Formplatten in einem Durchgang.' },
        { q: 'Welche Werkstoffe können drahterodiert werden?', a: 'Alle elektrisch leitfähigen Werkstoffe – zum Beispiel gehärteter Werkzeugstahl, Edelstahl, Hartmetall, Titan, Kupfer, Aluminium und Graphit. Die Härte spielt dabei keine Rolle.' },
      ],
      en: [
        { q: 'How large can workpieces be for wire EDM?', a: 'Our travel is approx. 800 × 600 × 500 mm (X × Y × Z). This lets us machine workpieces up to 500 mm tall – including tall punches, dies and mould plates in a single pass.' },
        { q: 'Which materials can be wire-cut?', a: 'All electrically conductive materials – e.g. hardened tool steel, stainless steel, carbide, titanium, copper, aluminium and graphite. Hardness is irrelevant.' },
      ],
    },
    image: drahterodieren,
    imageAlt: { de: 'Erodierdraht beim Schneiden einer Kontur in einem Stahlwerkstück', en: 'EDM wire cutting a contour in a steel workpiece' },
  },

  // ------------------------------------------------------------------ Fräsen
  {
    id: 'milling',
    code: 'CNC-5X',
    featured: true,
    slug: { de: 'cnc-fraesen', en: 'cnc-milling' },
    title: { de: 'CNC-Fräsen & 5-Achs-Bearbeitung', en: 'CNC Milling & 5-Axis Machining' },
    spec: { label: travel, value: { de: 'ca. 1.100 × 650 × 600 mm', en: 'approx. 1,100 × 650 × 600 mm' } },
    seoTitle: {
      de: 'CNC-Fräsen & 5-Achs-Bearbeitung – Lohnfertigung | GRO',
      en: 'CNC Milling & 5-Axis Machining – Contract Shop | GRO',
    },
    seoDescription: {
      de: 'CNC-Fräsen mit Verfahrweg ca. 1.100 × 650 × 600 mm inkl. 5-Achs-Bearbeitung für komplexe Geometrien und Mehrseitenfertigung – Lohnfertigung deutschlandweit.',
      en: 'CNC milling with approx. 1,100 × 650 × 600 mm travel incl. 5-axis machining for complex geometries and multi-sided parts – contract manufacturing in Germany.',
    },
    teaser: {
      de: 'Verfahrweg ca. 1.100 × 650 × 600 mm – inklusive 5-Achs-Bearbeitung für komplexe Geometrien.',
      en: 'Travel approx. 1,100 × 650 × 600 mm – including 5-axis machining for complex geometries.',
    },
    intro: {
      de: 'Beim CNC-Fräsen tragen rotierende Werkzeuge computergesteuert Material ab und bringen Rohteile in ihre exakte Form. Mit der 5-Achs-Bearbeitung erreichen wir dabei auch schräge Flächen, Hinterschnitte und Freiformen – in einer Aufspannung.',
      en: 'In CNC milling, rotating tools remove material under computer control and bring raw parts into their exact shape. With 5-axis machining we also reach inclined faces, undercuts and freeform surfaces – in a single setup.',
    },
    body: {
      de: [
        'Unser Verfahrweg von ca. 1.100 × 650 × 600 mm (X × Y × Z) bietet Platz für große Bauteile, Formplatten und Vorrichtungen. Die 5-Achs-Bearbeitung ermöglicht komplexe Geometrien und eine effiziente Mehrseitenfertigung: Weniger Umspannen bedeutet höhere Genauigkeit und kürzere Durchlaufzeiten.',
        'Wir bearbeiten Stahl, Edelstahl, Aluminium, Buntmetalle und technische Kunststoffe – vom Prototyp bis zur Serie und in Kombination mit Drahterodieren, Schleifen und Oberflächenveredelung.',
      ],
      en: [
        'Our travel of approx. 1,100 × 650 × 600 mm (X × Y × Z) accommodates large components, mould plates and fixtures. 5-axis machining enables complex geometries and efficient multi-sided production: fewer re-clamping operations mean higher accuracy and shorter lead times.',
        'We machine steel, stainless steel, aluminium, non-ferrous metals and technical plastics – from prototype to series and in combination with wire EDM, grinding and surface finishing.',
      ],
    },
    benefits: {
      de: ['Großer Arbeitsraum: ca. 1.100 × 650 × 600 mm', '5-Achs-Bearbeitung für komplexe Geometrien', 'Mehrseitenfertigung in einer Aufspannung', 'Vom Prototyp bis zur Serie'],
      en: ['Large working envelope: approx. 1,100 × 650 × 600 mm', '5-axis machining for complex geometries', 'Multi-sided machining in a single setup', 'From prototype to series'],
    },
    applications: {
      de: ['Formplatten und Formeinsätze', 'Vorrichtungen und Maschinenteile', 'Komplexe 3D-Freiformflächen', 'Gehäuse und Baugruppen-Komponenten'],
      en: ['Mould plates and inserts', 'Fixtures and machine parts', 'Complex 3D freeform surfaces', 'Housings and assembly components'],
    },
    faq: {
      de: [
        { q: 'Welche Bauteilgrößen können Sie fräsen?', a: 'Unser Verfahrweg beträgt ca. 1.100 × 650 × 600 mm (X × Y × Z). Für komplexe Geometrien steht die 5-Achs-Bearbeitung zur Verfügung.' },
        { q: 'Welche Daten benötigen Sie für einen Fräsauftrag?', a: 'Idealerweise ein 3D-Modell (z. B. STEP oder IGES) und eine Zeichnung mit Toleranzangaben (PDF oder DXF), dazu Material und Stückzahl.' },
      ],
      en: [
        { q: 'What component sizes can you mill?', a: 'Our travel is approx. 1,100 × 650 × 600 mm (X × Y × Z). 5-axis machining is available for complex geometries.' },
        { q: 'What data do you need for a milling job?', a: 'Ideally a 3D model (e.g. STEP or IGES) and a drawing with tolerances (PDF or DXF), plus material and quantity.' },
      ],
    },
    image: fraesen,
    imageAlt: { de: 'Gefrästes Aluminiumbauteil eingespannt in einer Fräsmaschine', en: 'Milled aluminium part clamped in a milling machine' },
  },

  // ------------------------------------------------------------------ Mikrobohren
  {
    id: 'micro-hole-edm',
    code: 'EDM-Ø',
    featured: true,
    slug: { de: 'mikrobohr-erodieren', en: 'micro-hole-edm' },
    title: { de: 'Mikrobohr-Erodieren', en: 'Micro-Hole EDM Drilling' },
    spec: { label: { de: 'Bohrungsdurchmesser', en: 'Hole diameter' }, value: { de: 'ab Ø 0,1 mm', en: 'from Ø 0.1 mm' } },
    seoTitle: {
      de: 'Mikrobohr-Erodieren ab Ø 0,1 mm – Startlochbohren | GRO',
      en: 'Micro-Hole EDM Drilling from Ø 0.1 mm | GRO',
    },
    seoDescription: {
      de: 'Mikrobohr-Erodieren ab Ø 0,1 mm: feinste Bohrungen und Startlöcher in gehärteten und schwer zerspanbaren Werkstoffen – Lohnfertigung für ganz Deutschland.',
      en: 'Micro-hole EDM drilling from Ø 0.1 mm: fine holes and start holes in hardened and hard-to-machine materials – contract work for customers worldwide.',
    },
    teaser: {
      de: 'Bohrungen ab Ø 0,1 mm – für feinste Bohrungen, Startlöcher und anspruchsvolle Detailarbeit.',
      en: 'Holes from Ø 0.1 mm – for the finest bores, start holes and demanding detail work.',
    },
    intro: {
      de: 'Beim Mikrobohr-Erodieren (Bohrerodieren) arbeitet sich eine rotierende Röhrchenelektrode per Funkenerosion durch das Werkstück. So entstehen feinste Bohrungen ab einem Durchmesser von 0,1 mm – auch in gehärtetem Stahl und Hartmetall.',
      en: 'In micro-hole EDM drilling, a rotating tube electrode works its way through the workpiece by spark erosion. This produces the finest holes from a diameter of 0.1 mm – even in hardened steel and carbide.',
    },
    body: {
      de: [
        'Typische Einsätze sind Startlochbohrungen für das Drahterodieren, Kühl- und Entlüftungsbohrungen, Düsen sowie feine Bohrungen an Stellen, an denen ein Spiralbohrer an seine Grenzen kommt.',
        'Da das Verfahren berührungslos arbeitet, entstehen keine Grate und keine mechanische Belastung – ideal für filigrane Bauteile und anspruchsvolle Detailarbeit.',
      ],
      en: [
        'Typical uses are start holes for wire EDM, cooling and venting holes, nozzles and fine holes where a twist drill reaches its limits.',
        'Because the process is contact-free, there are no burrs and no mechanical stress – ideal for delicate components and demanding detail work.',
      ],
    },
    benefits: {
      de: ['Bohrungen ab Ø 0,1 mm', 'Auch in gehärteten Werkstoffen und Hartmetall', 'Gratfrei und ohne mechanische Belastung', 'Startlöcher direkt für das Drahterodieren'],
      en: ['Holes from Ø 0.1 mm', 'Also in hardened materials and carbide', 'Burr-free with no mechanical stress', 'Start holes directly for wire EDM'],
    },
    applications: {
      de: ['Startlochbohrungen', 'Kühl- und Entlüftungsbohrungen', 'Düsen und Spritzbohrungen', 'Feinbohrungen in Medizintechnik und Werkzeugbau'],
      en: ['Start holes', 'Cooling and venting holes', 'Nozzles and spray holes', 'Fine holes for medical and tooling applications'],
    },
    faq: {
      de: [
        { q: 'Welchen kleinsten Bohrungsdurchmesser erreichen Sie?', a: 'Wir erodieren Bohrungen ab einem Durchmesser von 0,1 mm. Sprechen Sie uns zu Tiefe und Werkstoff Ihres Bauteils an.' },
      ],
      en: [
        { q: 'What is the smallest hole diameter you can achieve?', a: 'We EDM-drill holes from a diameter of 0.1 mm. Get in touch about the depth and material of your component.' },
      ],
    },
    image: bohren,
    imageAlt: { de: 'Feines Bohrwerkzeug in Nahaufnahme', en: 'Close-up of a fine drilling tool' },
  },

  // ------------------------------------------------------------------ Flachschleifen
  {
    id: 'surface-grinding',
    code: 'GRIND',
    slug: { de: 'flachschleifen', en: 'surface-grinding' },
    title: { de: 'Flachschleifen', en: 'Surface Grinding' },
    spec: { label: travel, value: { de: 'ca. 300 × 500 × 300 mm', en: 'approx. 300 × 500 × 300 mm' } },
    seoTitle: {
      de: 'Flachschleifen – Ebenheit & Oberflächengüte | GRO',
      en: 'Surface Grinding – Flatness & Surface Quality | GRO',
    },
    seoDescription: {
      de: 'Flachschleifen mit Verfahrweg ca. 300 × 500 × 300 mm für höchste Ebenheit, Parallelität und Oberflächengüte – Lohnfertigung für Kunden deutschlandweit.',
      en: 'Surface grinding with approx. 300 × 500 × 300 mm travel for maximum flatness, parallelism and surface quality – contract work for customers worldwide.',
    },
    teaser: {
      de: 'Verfahrweg ca. 300 × 500 × 300 mm – für höchste Ebenheit und Oberflächengüte.',
      en: 'Travel approx. 300 × 500 × 300 mm – for maximum flatness and surface quality.',
    },
    intro: {
      de: 'Beim Flachschleifen trägt eine rotierende Schleifscheibe feinste Materialschichten ab. Das Ergebnis sind plane, parallele Flächen mit hoher Oberflächengüte – oft die Voraussetzung für präzise Passungen und Folgebearbeitungen.',
      en: 'In surface grinding, a rotating grinding wheel removes the finest layers of material. The result is flat, parallel faces with high surface quality – often the prerequisite for precise fits and subsequent operations.',
    },
    body: {
      de: [
        'Mit einem Verfahrweg von ca. 300 × 500 × 300 mm schleifen wir Platten, Leisten, Einsätze und Funktionsflächen – auch im gehärteten Zustand.',
        'In Kombination mit Fräsen und Drahterodieren entstehen so maßhaltige Bauteile, deren Flächen sofort weiterverwendet werden können.',
      ],
      en: [
        'With a travel of approx. 300 × 500 × 300 mm we grind plates, strips, inserts and functional surfaces – also in the hardened state.',
        'Combined with milling and wire EDM, this produces dimensionally accurate components whose surfaces are ready for immediate use.',
      ],
    },
    benefits: {
      de: ['Höchste Ebenheit und Parallelität', 'Hohe Oberflächengüte', 'Auch gehärtete Werkstücke', 'Ideal als Vor- oder Nacharbeit zum Erodieren'],
      en: ['Maximum flatness and parallelism', 'High surface quality', 'Hardened workpieces too', 'Ideal before or after EDM'],
    },
    applications: {
      de: ['Platten und Leisten', 'Formeinsätze und Stempel', 'Führungs- und Funktionsflächen', 'Vorbereitung für das Drahterodieren'],
      en: ['Plates and strips', 'Mould inserts and punches', 'Guide and functional surfaces', 'Preparation for wire EDM'],
    },
    faq: {
      de: [
        { q: 'Welche Bauteilgrößen können Sie flachschleifen?', a: 'Unser Verfahrweg beträgt ca. 300 × 500 × 300 mm (X × Y × Z). Für größere Teile sprechen Sie uns gerne an.' },
      ],
      en: [
        { q: 'What component sizes can you surface-grind?', a: 'Our travel is approx. 300 × 500 × 300 mm (X × Y × Z). For larger parts, please get in touch.' },
      ],
    },
    image: schleifen,
    imageAlt: { de: 'Eingespanntes Werkstück in einer Bearbeitungsmaschine', en: 'Workpiece clamped in a machine tool' },
  },

  // ------------------------------------------------------------------ Laser
  {
    id: 'laser',
    code: 'LASER',
    slug: { de: 'laserbeschriftung-gravieren', en: 'laser-marking-engraving' },
    title: { de: 'Laserbeschriftung & Gravieren', en: 'Laser Marking & Engraving' },
    seoTitle: {
      de: 'Laserbeschriftung & Gravieren von Bauteilen | GRO',
      en: 'Laser Marking & Engraving of Components | GRO',
    },
    seoDescription: {
      de: 'Laserbeschriftung und Gravieren: dauerhafte Markierungen, Seriennummern, Logos und technische Angaben auf Ihren Bauteilen – für Kunden deutschlandweit.',
      en: 'Laser marking and engraving: permanent markings, serial numbers, logos and technical data on your components – for customers worldwide.',
    },
    teaser: {
      de: 'Dauerhafte Markierungen, Seriennummern, Logos und technische Angaben – gestochen scharf.',
      en: 'Permanent markings, serial numbers, logos and technical data – razor sharp.',
    },
    intro: {
      de: 'Mit Laserbeschriftung und Gravieren bringen wir dauerhafte, abriebfeste Kennzeichnungen auf Ihre Bauteile. Feinste Details werden präzise abgebildet – ideal für die industrielle Kennzeichnung und Rückverfolgbarkeit.',
      en: 'With laser marking and engraving we apply permanent, abrasion-resistant markings to your components. The finest details are reproduced precisely – ideal for industrial marking and traceability.',
    },
    body: {
      de: [
        'Typisch sind Seriennummern, Chargenkennzeichnungen, Typenschilder, Logos, technische Angaben und maschinenlesbare Codes.',
        'Als letzter Schritt in unserer Prozesskette erhalten Sie Ihre Bauteile direkt gekennzeichnet – ohne zusätzlichen Dienstleister.',
      ],
      en: [
        'Typical applications are serial numbers, batch markings, type plates, logos, technical data and machine-readable codes.',
        'As the final step in our process chain, you receive your components directly marked – without an additional supplier.',
      ],
    },
    benefits: {
      de: ['Dauerhaft und abriebfest', 'Feinste Details', 'Rückverfolgbarkeit Ihrer Bauteile', 'Für Einzelstücke und Serien'],
      en: ['Permanent and abrasion-resistant', 'Finest details', 'Traceability of your components', 'For single pieces and series'],
    },
    applications: {
      de: ['Seriennummern und Chargen', 'DataMatrix- und QR-Codes', 'Typenschilder und technische Angaben', 'Logos und Personalisierung'],
      en: ['Serial and batch numbers', 'DataMatrix and QR codes', 'Type plates and technical data', 'Logos and personalisation'],
    },
    faq: {
      de: [{ q: 'Welche Materialien können gelasert werden?', a: 'Vor allem Metalle wie Stahl, Edelstahl und Aluminium, aber auch viele Kunststoffe. Wir beraten Sie gerne zu Ihrem Bauteil.' }],
      en: [{ q: 'Which materials can be laser marked?', a: 'Mainly metals such as steel, stainless steel and aluminium, but also many plastics. We are happy to advise on your component.' }],
    },
    image: laser,
    imageAlt: { de: 'Lasergravurmaschine bei der Bearbeitung eines Werkstücks', en: 'Laser engraving machine processing a workpiece' },
  },

  // ------------------------------------------------------------------ Sandstrahlen
  {
    id: 'sandblasting',
    code: 'BLAST',
    slug: { de: 'sandstrahlen', en: 'sandblasting' },
    title: { de: 'Sandstrahlen', en: 'Sandblasting' },
    seoTitle: {
      de: 'Sandstrahlen von Metallbauteilen – Lohnfertigung | GRO',
      en: 'Sandblasting of Metal Components | GRO',
    },
    seoDescription: {
      de: 'Sandstrahlen zur Reinigung, Entzunderung und Vorbereitung von Bauteilen für Beschichtungen – als Teil unserer Prozesskette aus einer Hand, deutschlandweit.',
      en: 'Sandblasting for cleaning, descaling and preparing components for coating – part of our single-source process chain, for customers worldwide.',
    },
    teaser: {
      de: 'Reinigen, entzundern und Oberflächen gezielt vorbereiten – z. B. für die Pulverbeschichtung.',
      en: 'Cleaning, descaling and preparing surfaces – e.g. for powder coating.',
    },
    intro: {
      de: 'Beim Sandstrahlen trifft ein Strahlmittel mit hoher Geschwindigkeit auf die Bauteiloberfläche. So entfernen wir Rost, Zunder, Farbreste und Verschmutzungen und erzeugen eine gleichmäßige, matte Oberfläche.',
      en: 'In sandblasting, an abrasive medium strikes the component surface at high speed. This removes rust, scale, paint residues and dirt and creates a uniform, matt surface.',
    },
    body: {
      de: [
        'Gestrahlte Oberflächen bieten den idealen Haftgrund für Beschichtungen – deshalb ist das Sandstrahlen bei uns oft der Schritt vor der Pulverbeschichtung.',
        'Auch als eigenständige Oberflächenbehandlung eignet es sich, etwa für eine einheitliche, matte Optik von Sichtteilen.',
      ],
      en: [
        'Blasted surfaces provide the ideal key for coatings – which is why sandblasting is often the step before powder coating at our facility.',
        'It is also suitable as a stand-alone surface treatment, for example to give visible parts a uniform matt finish.',
      ],
    },
    benefits: {
      de: ['Entfernt Rost, Zunder und Rückstände', 'Optimaler Haftgrund für Beschichtungen', 'Gleichmäßig matte Oberfläche', 'Direkt kombinierbar mit Pulverbeschichtung'],
      en: ['Removes rust, scale and residues', 'Optimal key for coatings', 'Uniform matt surface', 'Directly combinable with powder coating'],
    },
    applications: {
      de: ['Vorbehandlung vor dem Beschichten', 'Reinigung und Entzunderung', 'Mattieren von Sichtteilen', 'Aufbereitung gebrauchter Bauteile'],
      en: ['Pre-treatment before coating', 'Cleaning and descaling', 'Matting visible parts', 'Refurbishing used components'],
    },
    faq: {
      de: [{ q: 'Können Sie Bauteile strahlen und anschließend beschichten?', a: 'Ja. Sandstrahlen und Pulverbeschichten bieten wir aus einer Hand an – das spart Transportwege und sorgt für eine optimale Haftung der Beschichtung.' }],
      en: [{ q: 'Can you blast components and then coat them?', a: 'Yes. We offer sandblasting and powder coating from a single source – saving transport and ensuring optimal coating adhesion.' }],
    },
    image: werkstatt,
    imageAlt: { de: 'Bauteilbearbeitung in der Werkstatt', en: 'Component processing in the workshop' },
  },

  // ------------------------------------------------------------------ Strömungspolieren
  {
    id: 'flow-polishing',
    code: 'FLOW',
    featured: true,
    slug: { de: 'stroemungspolieren', en: 'abrasive-flow-polishing' },
    title: { de: 'Strömungspolieren', en: 'Abrasive Flow Polishing' },
    seoTitle: {
      de: 'Strömungspolieren & Strömungsschleifen – Entgraten | GRO',
      en: 'Abrasive Flow Polishing & Deburring | GRO',
    },
    seoDescription: {
      de: 'Strömungspolieren (Strömungsschleifen): Entgraten, Kantenverrunden und Polieren von Innenkonturen, Bohrungen und Kanälen – Lohnfertigung deutschlandweit.',
      en: 'Abrasive flow polishing: deburring, edge rounding and polishing of internal contours, bores and channels – contract work for customers worldwide.',
    },
    teaser: {
      de: 'Entgraten, Verrunden und Polieren dort, wo kein Werkzeug hinkommt – auch in Bohrungen und Kanälen.',
      en: 'Deburring, rounding and polishing where no tool can reach – including bores and channels.',
    },
    intro: {
      de: 'Beim Strömungspolieren – auch Strömungsschleifen genannt – wird ein abrasives Medium unter Druck durch oder entlang des Werkstücks bewegt. Es trägt gezielt Material ab und erreicht auch Innenkonturen, Bohrungen und Kanäle, an die kein Schleifwerkzeug herankommt.',
      en: 'In abrasive flow polishing, an abrasive medium is forced through or along the workpiece under pressure. It removes material in a controlled way and reaches internal contours, bores and channels that no grinding tool can access.',
    },
    body: {
      de: [
        'So entfernen wir Grate an Bohrungsverschneidungen, verrunden Kanten definiert und polieren Oberflächen – etwa nach dem Drahterodieren, um die Erodierschicht zu glätten.',
        'In Kombination mit unseren übrigen Verfahren erhalten Sie Bauteile, die nicht nur maßhaltig, sondern auch funktionsfertig sind.',
      ],
      en: [
        'This allows us to remove burrs at intersecting bores, round edges in a defined way and polish surfaces – for example after wire EDM, to smooth the recast layer.',
        'Combined with our other processes, you receive components that are not only dimensionally accurate but ready to function.',
      ],
    },
    benefits: {
      de: ['Bearbeitung unzugänglicher Innenkonturen', 'Gleichmäßiges Entgraten und Kantenverrunden', 'Verbesserte Oberflächengüte', 'Ideal als Finish nach dem Drahterodieren'],
      en: ['Machining of inaccessible internal contours', 'Uniform deburring and edge rounding', 'Improved surface quality', 'Ideal finish after wire EDM'],
    },
    applications: {
      de: ['Bohrungen und Bohrungsverschneidungen', 'Kanäle und Düsen', 'Matrizen und Formwerkzeuge', 'Hydraulik- und Präzisionsbauteile'],
      en: ['Bores and intersecting bores', 'Channels and nozzles', 'Dies and moulding tools', 'Hydraulic and precision components'],
    },
    faq: {
      de: [{ q: 'Wofür eignet sich das Strömungspolieren besonders?', a: 'Überall dort, wo Innenkonturen, Bohrungen oder Kanäle entgratet, verrundet oder poliert werden müssen und herkömmliche Werkzeuge nicht hinkommen. Sprechen Sie uns zu Ihrem Bauteil an.' }],
      en: [{ q: 'What is abrasive flow polishing particularly suited for?', a: 'Wherever internal contours, bores or channels need deburring, rounding or polishing and conventional tools cannot reach. Get in touch about your component.' }],
    },
    image: werkzeugbau,
    imageAlt: { de: 'Präzisionswerkzeug mit polierter Oberfläche', en: 'Precision tool with polished surface' },
  },

  // ------------------------------------------------------------------ Pulver
  {
    id: 'powder-coating',
    code: 'COAT',
    featured: true,
    slug: { de: 'pulverbeschichtung', en: 'powder-coating' },
    title: { de: 'Pulverbeschichten', en: 'Powder Coating' },
    seoTitle: {
      de: 'Pulverbeschichten von Metallbauteilen | GRO',
      en: 'Powder Coating for Metal Components | GRO',
    },
    seoDescription: {
      de: 'Pulverbeschichten Ihrer Bauteile: robust, korrosionsbeständig und in vielen Farben – auf Wunsch mit Sandstrahlen als Vorbehandlung, alles aus einer Hand.',
      en: 'Powder coating for your components: durable, corrosion-resistant and in many colours – with sandblasting as pre-treatment on request, all from one source.',
    },
    teaser: {
      de: 'Robuste, korrosionsbeständige Oberflächen in vielen Farben – zum Schutz Ihrer Bauteile.',
      en: 'Durable, corrosion-resistant surfaces in many colours – to protect your components.',
    },
    intro: {
      de: 'Beim Pulverbeschichten wird ein trockenes Pulver aufgetragen und anschließend eingebrannt. Es entsteht eine widerstandsfähige Schutzschicht, die Bauteile vor Korrosion, Abplatzungen und Ausbleichen schützt.',
      en: 'In powder coating, a dry powder is applied and then cured. This creates a tough protective layer that shields components from corrosion, chipping and fading.',
    },
    body: {
      de: [
        'Zusammen mit dem Sandstrahlen als Vorbehandlung erhalten Sie eine optimal haftende, langlebige Beschichtung. Das Verfahren ist umweltfreundlich, da es nahezu ohne Lösungsmittel auskommt.',
        'So erhalten Sie Ihre Bauteile gefertigt, vorbehandelt und beschichtet aus einer Hand – ohne zusätzliche Logistik zu externen Dienstleistern.',
      ],
      en: [
        'Combined with sandblasting as pre-treatment, you receive an optimally adhering, long-lasting coating. The process is environmentally friendly, as it requires almost no solvents.',
        'This way you receive your components manufactured, pre-treated and coated from a single source – without additional logistics to external suppliers.',
      ],
    },
    benefits: {
      de: ['Hoher Korrosionsschutz', 'Große Farb- und Strukturauswahl', 'Sandstrahlen als Vorbehandlung im Haus', 'Fertigung und Beschichtung aus einer Hand'],
      en: ['High corrosion protection', 'Wide choice of colours and textures', 'In-house sandblasting pre-treatment', 'Manufacturing and coating from one source'],
    },
    applications: {
      de: ['Maschinenkomponenten', 'Gehäuse und Abdeckungen', 'Flansche und Halterungen', 'Einzelstücke und Serien'],
      en: ['Machine components', 'Housings and covers', 'Flanges and brackets', 'Single pieces and series'],
    },
    faq: {
      de: [{ q: 'Beschichten Sie auch Teile, die Sie nicht selbst gefertigt haben?', a: 'Sprechen Sie uns an – wir prüfen gerne, ob Ihre Bauteile für das Pulverbeschichten bei uns geeignet sind.' }],
      en: [{ q: 'Do you also coat parts you did not manufacture?', a: 'Get in touch – we will gladly check whether your components are suitable for powder coating with us.' }],
    },
    image: pulver,
    imageAlt: { de: 'Blau pulverbeschichtetes Metallbauteil mit Flansch', en: 'Blue powder-coated metal component with flange' },
  },

  // ------------------------------------------------------------------ 3D-Druck
  {
    id: '3d-printing',
    code: '3D',
    slug: { de: '3d-druck', en: '3d-printing' },
    title: { de: '3D-Druck', en: '3D Printing' },
    spec: { label: { de: 'Bauraum', en: 'Build volume' }, value: { de: 'bis ca. 325 × 320 × 325 mm', en: 'up to approx. 325 × 320 × 325 mm' } },
    seoTitle: {
      de: '3D-Druck für Prototypen & Vorrichtungen | GRO',
      en: '3D Printing for Prototypes & Fixtures | GRO',
    },
    seoDescription: {
      de: '3D-Druck bis ca. 325 × 320 × 325 mm: Prototypen, Vorrichtungen und Kunststoffteile – viele Farben, auch UV-beständige Filamente. Aus einer Hand.',
      en: '3D printing up to approx. 325 × 320 × 325 mm: prototypes, fixtures and plastic parts – many colours, UV-resistant filaments too. All from one source.',
    },
    teaser: {
      de: 'Prototypen, Vorrichtungen und Kunststoffteile – viele Farben, auch UV-beständige Filamente.',
      en: 'Prototypes, fixtures and plastic parts – many colours, UV-resistant filaments too.',
    },
    intro: {
      de: 'Mit dem 3D-Druck (FDM-Verfahren) entstehen Bauteile Schicht für Schicht direkt aus Ihren CAD-Daten – ohne Werkzeug und ohne lange Rüstzeiten. Ideal, wenn es schnell gehen muss oder Geometrien gefragt sind, die sich spanend nur aufwendig herstellen lassen.',
      en: 'With 3D printing (FDM), components are built layer by layer directly from your CAD data – with no tooling and no long set-up times. Ideal when speed matters or geometries are needed that would be costly to machine.',
    },
    body: {
      de: [
        'Wir drucken Funktionsprototypen, Vorrichtungen, Prüflehren, Montagehilfen, Abdeckungen und Ersatzteile aus Kunststoff. Dank zwei Düsen sind auch Mehrmaterial-Bauteile, mehrfarbige Teile und lösliche Stützstrukturen möglich.',
        'Uns steht eine große Auswahl an Filamenten zur Verfügung – in vielen Farben und für unterschiedlichste Anforderungen, zum Beispiel UV- und witterungsbeständige Materialien für den Außeneinsatz, schlagzähe oder temperaturbeständige Kunststoffe. Wir beraten Sie, welches Material zu Ihrem Einsatz passt.',
        'Der Vorteil bei uns: Gedruckte Vorrichtungen und Lehren passen exakt zu den Metallteilen, die wir für Sie fertigen – alles aus einer Hand.',
      ],
      en: [
        'We print functional prototypes, fixtures, inspection gauges, assembly aids, covers and plastic spare parts. With two nozzles, multi-material parts, multi-colour parts and soluble supports are also possible.',
        'We have a wide range of filaments available – in many colours and for all kinds of requirements, such as UV- and weather-resistant materials for outdoor use, impact-resistant or heat-resistant plastics. We will advise you on the right material for your application.',
        'The advantage with us: printed fixtures and gauges match the metal parts we manufacture for you exactly – all from one source.',
      ],
    },
    benefits: {
      de: ['Große Filament-Auswahl in vielen Farben', 'Auch UV- und witterungsbeständige Materialien', 'Ohne Werkzeugkosten – ideal für Einzelteile', 'Komplexe Geometrien und Mehrmaterial-Druck', 'Passend zu Ihren Metallteilen aus unserer Fertigung'],
      en: ['Wide choice of filaments in many colours', 'UV- and weather-resistant materials too', 'No tooling costs – ideal for single parts', 'Complex geometries and multi-material printing', 'Matched to your metal parts from our production'],
    },
    applications: {
      de: ['Funktionsprototypen', 'Vorrichtungen und Montagehilfen', 'Prüf- und Einstelllehren', 'Ersatz- und Kleinteile aus Kunststoff'],
      en: ['Functional prototypes', 'Fixtures and assembly aids', 'Inspection and setting gauges', 'Plastic spare and small parts'],
    },
    faq: {
      de: [{ q: 'Welche Materialien und Farben stehen zur Verfügung?', a: 'Wir haben unterschiedlichste Filamente vorrätig – in vielen Farben, darunter auch UV- und witterungsbeständige Materialien für den Außeneinsatz. Nennen Sie uns Einsatzzweck und Wunschfarbe, wir empfehlen das passende Material.' },
        { q: 'Welche Daten brauchen Sie für den 3D-Druck?', a: 'Am besten ein 3D-Modell, z. B. als STEP, STL oder 3MF. Wenn Sie nur eine Zeichnung oder ein Musterteil haben, sprechen Sie uns an.' }],
      en: [{ q: 'Which materials and colours are available?', a: 'We stock a wide range of filaments – in many colours, including UV- and weather-resistant materials for outdoor use. Tell us the application and desired colour and we will recommend the right material.' },
        { q: 'What data do you need for 3D printing?', a: 'Ideally a 3D model, e.g. as STEP, STL or 3MF. If you only have a drawing or a sample part, get in touch.' }],
    },
    image: druck,
    imageAlt: { de: 'Illustration: Bauteil entsteht Schicht für Schicht im 3D-Drucker', en: 'Illustration: part being built layer by layer in a 3D printer' },
  },

  // ------------------------------------------------------------------ Senk (ergänzend)
  {
    id: 'sinker-edm',
    code: 'EDM-S',
    slug: { de: 'senkerodieren', en: 'sinker-edm' },
    title: { de: 'Senkerodieren', en: 'Sinker EDM' },
    seoTitle: {
      de: 'Senkerodieren – ergänzend zum Drahterodieren | GRO',
      en: 'Sinker EDM – Complementing Wire EDM | GRO',
    },
    seoDescription: {
      de: 'Senkerodieren als Ergänzung zum Drahterodieren: Kavitäten, Rippen und Gravuren in gehärteten Werkstoffen – sprechen Sie uns zu Ihrem Bauteil an.',
      en: 'Sinker EDM complementing wire EDM: cavities, ribs and engravings in hardened materials – get in touch about your component.',
    },
    teaser: {
      de: 'Ergänzend zum Drahterodieren: Kavitäten, Rippen und Gravuren im Senkverfahren.',
      en: 'Complementing wire EDM: cavities, ribs and engravings by sinker EDM.',
    },
    intro: {
      de: 'Beim Senkerodieren bildet sich eine formgebende Elektrode durch Funkenerosion in das Werkstück ab. So entstehen Kavitäten, Rippen und Strukturen, die sich spanend kaum herstellen lassen.',
      en: 'In sinker EDM, a shaping electrode is reproduced in the workpiece by spark erosion. This creates cavities, ribs and structures that can hardly be produced by machining.',
    },
    body: {
      de: ['Das Senkerodieren setzen wir ergänzend zu unseren Hauptverfahren ein – etwa für einzelne Kavitäten, Beschriftungen oder Detailarbeiten an Bauteilen, die wir ohnehin bearbeiten. Sprechen Sie uns zu Ihrem konkreten Bauteil an.'],
      en: ['We use sinker EDM to complement our main processes – for example for individual cavities, lettering or detail work on components we are already machining. Get in touch about your specific part.'],
    },
    benefits: {
      de: ['Ergänzt Drahterodieren und Fräsen', 'Kavitäten und Rippen', 'Bearbeitung im gehärteten Zustand'],
      en: ['Complements wire EDM and milling', 'Cavities and ribs', 'Machining in the hardened state'],
    },
    applications: {
      de: ['Einzelne Kavitäten', 'Gravuren und Beschriftungen', 'Detailarbeiten'],
      en: ['Individual cavities', 'Engravings and lettering', 'Detail work'],
    },
    faq: {
      de: [{ q: 'Bieten Sie Senkerodieren auch für größere Aufträge an?', a: 'Das Senkerodieren ist bei uns eine Ergänzung zum Drahterodieren. Sprechen Sie uns an – wir sagen Ihnen ehrlich, ob Ihr Bauteil bei uns richtig ist.' }],
      en: [{ q: 'Do you offer sinker EDM for larger orders?', a: 'Sinker EDM complements our wire EDM. Get in touch – we will tell you honestly whether your part is a good fit for us.' }],
    },
    image: senkerodieren,
    imageAlt: { de: 'Erodierte Präzisionsteile aus Stahl', en: 'Precision steel parts produced by EDM' },
  },
];

export const featuredServices = services.filter((s) => s.featured);
