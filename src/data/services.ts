import type { ImageMetadata } from 'astro';
import drahterodieren from '../assets/img/drahterodieren.jpg';
import senkerodieren from '../assets/img/teile-erodiert.jpg';
import fraesen from '../assets/img/fraesen.jpg';
import drehen from '../assets/img/drehen-schleifen.jpg';
import werkzeugbau from '../assets/img/werkzeugbau.jpeg';
import cnc from '../assets/img/cnc.jpeg';
import sonder from '../assets/img/sonderloesungen.jpg';
import pulver from '../assets/img/bauteil-blau.jpg';
import laser from '../assets/img/lasergravur.jpeg';

type L<T = string> = { de: T; en: T };
export type Faq = { q: string; a: string };

export interface Service {
  id: string;
  slug: L;
  code: string; // technisches Kürzel für die Optik
  title: L;
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

const all: Service[] = [
  {
    id: 'wire-edm',
    code: 'EDM-W',
    featured: true,
    slug: { de: 'drahterodieren', en: 'wire-edm' },
    title: { de: 'Drahterodieren', en: 'Wire EDM' },
    seoTitle: {
      de: 'Drahterodieren bis 500 mm Höhe – Lohnfertigung | GRO',
      en: 'Wire EDM up to 500 mm Height – Germany & Europe | GRO',
    },
    seoDescription: {
      de: 'Drahterodieren im Lohnauftrag mit bis zu 500 mm Schnitthöhe (Z): komplexe Konturen in gehärteten Werkstoffen, gratfrei – für ganz Deutschland & Europa.',
      en: 'Contract wire EDM with up to 500 mm cutting height (Z): complex contours in hardened materials, burr-free – for customers across Germany and Europe.',
    },
    teaser: {
      de: 'Schnitthöhen bis 500 mm (Z) – feinste Konturen in gehärtetem Stahl, Hartmetall und Sonderwerkstoffen.',
      en: 'Cutting heights up to 500 mm (Z) – the finest contours in hardened steel, carbide and special alloys.',
    },
    intro: {
      de: 'Beim Drahterodieren schneidet ein dünner, elektrisch geladener Draht berührungslos durch leitfähige Werkstoffe. Funkenentladungen tragen das Material ab – ohne mechanische Kräfte, ohne Verzug und unabhängig von der Härte des Werkstücks.',
      en: 'In wire EDM, a thin, electrically charged wire cuts through conductive materials without contact. Spark discharges remove the material – with no mechanical force, no distortion and regardless of the hardness of the workpiece.',
    },
    body: {
      de: [
        'Unsere Drahterodiertechnik schneidet Werkstücke mit einer Höhe von bis zu 500 mm in der Z-Achse – ideal für hohe Stempel, Matrizen, Formplatten und massive Bauteile, die viele Lohnfertiger nicht mehr bearbeiten können. Das Drahterodieren ist außerdem das Verfahren der Wahl bei filigranen Geometrien, engen Innenradien, scharfkantigen Durchbrüchen und bereits gehärteten Werkstücken.',
        'Mit unserem digitalisierten Maschinenpark fertigen wir Stempel, Matrizen, Schnittwerkzeuge, Profile und Präzisionsbauteile im Lohnauftrag – als Einzelteil, Prototyp oder Serie. Auf Wunsch dokumentieren wir die Ergebnisse mit moderner Messtechnik.',
      ],
      en: [
        'Our wire EDM capacity handles workpieces up to 500 mm in height on the Z axis – ideal for tall punches, dies, mould plates and massive components that many contract shops can no longer machine. Wire EDM is also the method of choice for delicate geometries, tight inner radii, sharp-edged cut-outs and pre-hardened workpieces.',
        'With our digitalised machinery we manufacture punches, dies, cutting tools, profiles and precision components on a contract basis – as single parts, prototypes or series. On request, we document the results with state-of-the-art measuring technology.',
      ],
    },
    benefits: {
      de: [
        'Schnitthöhen bis 500 mm in der Z-Achse',
        'Bearbeitung gehärteter Werkstoffe ohne Verzug',
        'Gratfreie Schnittkanten und hohe Oberflächengüte',
        'Komplexe 2D- und Konik-Konturen',
        'Wirtschaftlich vom Einzelteil bis zur Serie',
      ],
      en: [
        'Cutting heights up to 500 mm on the Z axis',
        'Machining of hardened materials without distortion',
        'Burr-free cutting edges and high surface quality',
        'Complex 2D and taper contours',
        'Cost-effective from single parts to series',
      ],
    },
    applications: {
      de: ['Stanz- und Schnittwerkzeuge', 'Stempel und Matrizen', 'Zahnräder und Profile', 'Bauteile für Medizintechnik und Luftfahrt'],
      en: ['Stamping and cutting tools', 'Punches and dies', 'Gears and profiles', 'Components for medical and aerospace'],
    },
    faq: {
      de: [
        {
          q: 'Wie hoch dürfen Werkstücke beim Drahterodieren sein?',
          a: 'Wir schneiden Werkstücke mit einer Höhe von bis zu 500 mm in der Z-Achse. Damit lassen sich auch hohe Stempel, Matrizen, Formplatten und massive Bauteile in einem Durchgang drahterodieren.',
        },
        {
          q: 'Welche Werkstoffe können drahterodiert werden?',
          a: 'Grundsätzlich alle elektrisch leitfähigen Werkstoffe – zum Beispiel gehärteter Werkzeugstahl, Edelstahl, Hartmetall, Titan, Kupfer, Aluminium und Graphit. Die Härte des Materials spielt dabei keine Rolle.',
        },
        {
          q: 'Fertigen Sie auch Einzelteile und Prototypen?',
          a: 'Ja. Wir fertigen vom einzelnen Prototyp über Kleinserien bis zur Serienfertigung. Senden Sie uns einfach Ihre Zeichnung oder Ihr CAD-Modell für ein Angebot.',
        },
      ],
      en: [
        {
          q: 'How tall can workpieces be for wire EDM?',
          a: 'We cut workpieces up to 500 mm in height on the Z axis. This means even tall punches, dies, mould plates and massive components can be wire-cut in a single pass.',
        },
        {
          q: 'Which materials can be machined by wire EDM?',
          a: 'In principle, all electrically conductive materials – for example hardened tool steel, stainless steel, carbide, titanium, copper, aluminium and graphite. The hardness of the material is irrelevant.',
        },
        {
          q: 'Do you also manufacture single parts and prototypes?',
          a: 'Yes. We produce everything from single prototypes and small batches to series production. Simply send us your drawing or CAD model for a quotation.',
        },
      ],
    },
    image: drahterodieren,
    imageAlt: {
      de: 'Erodierdraht beim Schneiden einer Kontur in einem Stahlwerkstück',
      en: 'EDM wire cutting a contour in a steel workpiece',
    },
  },
  {
    id: 'sinker-edm',
    code: 'EDM-S',
    slug: { de: 'senkerodieren', en: 'sinker-edm' },
    title: { de: 'Senkerodieren', en: 'Sinker EDM' },
    seoTitle: {
      de: 'Senkerodieren & Elektroden – Lohnfertigung | GRO',
      en: 'Sinker EDM & Electrodes – Contract EDM Germany | GRO',
    },
    seoDescription: {
      de: 'Senkerodieren im Lohnauftrag inklusive eigener Elektrodenfertigung auf HSC-Fräsmaschinen. Für Formen- und Werkzeugbau in ganz Deutschland & Europa.',
      en: 'Contract sinker EDM including in-house electrode manufacturing on HSC milling machines. For mould and tool makers across Germany and Europe.',
    },
    teaser: {
      de: 'Ergänzend zum Drahterodieren: Kavitäten, Rippen und Gravuren im Senkverfahren.',
      en: 'Complementing wire EDM: cavities, ribs and engravings by sinker EDM.',
    },
    intro: {
      de: 'Beim Senkerodieren bildet sich eine formgebende Elektrode durch Funkenerosion in das Werkstück ab. So entstehen tiefe Kavitäten, schmale Rippen und feine Strukturen, die sich spanend kaum oder gar nicht herstellen lassen.',
      en: 'In sinker EDM, a shaping electrode is reproduced in the workpiece by spark erosion. This creates deep cavities, narrow ribs and fine structures that can hardly, if at all, be produced by machining.',
    },
    body: {
      de: [
        'Der entscheidende Vorteil bei uns: Die Elektroden fertigen wir selbst auf HSC-Fräsmaschinen. Konstruktion, Elektrodenfertigung und Erodieren liegen damit in einer Hand – das spart Abstimmungsaufwand und verkürzt Ihre Durchlaufzeit.',
        'Typische Einsatzgebiete sind Spritzgussformen, Druckgussformen und Stanzwerkzeuge, aber auch Beschriftungen und Strukturen in gehärteten Bauteilen.',
      ],
      en: [
        'The decisive advantage: we manufacture the electrodes ourselves on HSC milling machines. Design, electrode production and EDM are in one hand – which saves coordination effort and shortens your lead time.',
        'Typical applications are injection moulds, die-casting moulds and stamping tools, but also lettering and structures in hardened components.',
      ],
    },
    benefits: {
      de: ['Elektrodenfertigung im eigenen Haus', 'Tiefe Kavitäten und schmale Rippen', 'Definierte Oberflächenstrukturen', 'Bearbeitung im gehärteten Zustand'],
      en: ['In-house electrode manufacturing', 'Deep cavities and narrow ribs', 'Defined surface textures', 'Machining in the hardened state'],
    },
    applications: {
      de: ['Spritzguss- und Druckgussformen', 'Kavitäten und Formeinsätze', 'Gravuren und Beschriftungen', 'Reparatur von Werkzeugen'],
      en: ['Injection and die-casting moulds', 'Cavities and mould inserts', 'Engravings and lettering', 'Tool repair'],
    },
    faq: {
      de: [
        {
          q: 'Muss ich die Elektroden selbst liefern?',
          a: 'Nein. Wir fertigen die benötigten Elektroden auf Basis Ihrer Daten selbst. Selbstverständlich können Sie aber auch eigene Elektroden beistellen.',
        },
      ],
      en: [
        {
          q: 'Do I have to supply the electrodes myself?',
          a: 'No. We manufacture the required electrodes ourselves based on your data. Of course, you can also supply your own electrodes.',
        },
      ],
    },
    image: senkerodieren,
    imageAlt: {
      de: 'Erodierte Präzisionsteile aus Stahl',
      en: 'Precision steel parts produced by EDM',
    },
  },
  {
    id: 'milling',
    code: 'HSC',
    featured: true,
    slug: { de: 'hsc-fraesen', en: 'hsc-milling' },
    title: { de: 'HSC-Fräsen', en: 'HSC Milling' },
    seoTitle: {
      de: 'HSC-Fräsen & CNC-Fräsen Lohnfertigung | GRO',
      en: 'HSC & CNC Milling – Contract Manufacturing | GRO',
    },
    seoDescription: {
      de: 'HSC-Fräsen für Elektroden, Formeinsätze und Präzisionsbauteile. Hohe Oberflächengüte – Lohnfertigung für Kunden deutschlandweit.',
      en: 'HSC milling for electrodes, mould inserts and precision components. High surface quality – contract manufacturing for customers across Europe.',
    },
    teaser: {
      de: 'Hochgeschwindigkeitsfräsen für Elektroden, Formeinsätze und Präzisionsbauteile.',
      en: 'High-speed milling for electrodes, mould inserts and precision components.',
    },
    intro: {
      de: 'Beim Fräsen tragen rotierende Schneidwerkzeuge Material ab und bringen Rohteile in die exakte Form. Mit Hochgeschwindigkeitsfräsen (HSC) erreichen wir dabei besonders feine Oberflächen und hohe Maßgenauigkeit.',
      en: 'In milling, rotating cutting tools remove material and bring raw parts into their exact shape. With high-speed cutting (HSC) we achieve particularly fine surfaces and high dimensional accuracy.',
    },
    body: {
      de: [
        'Unsere HSC-Fräsmaschinen setzen wir für Graphit- und Kupferelektroden ebenso ein wie für Formeinsätze, Vorrichtungen und Präzisionsbauteile aus Stahl, Aluminium und Kunststoff.',
        'In Kombination mit dem Erodieren entsteht so eine durchgängige Prozesskette – vom Rohmaterial bis zum fertigen Bauteil, alles aus einer Hand.',
      ],
      en: [
        'We use our HSC milling machines for graphite and copper electrodes as well as for mould inserts, fixtures and precision components made of steel, aluminium and plastics.',
        'Combined with EDM, this creates a seamless process chain – from raw material to finished component, all from a single source.',
      ],
    },
    benefits: {
      de: ['Hohe Oberflächengüte', 'Präzise 3D-Freiformflächen', 'Kurze Bearbeitungszeiten', 'Durchgängige Prozesskette mit dem Erodieren'],
      en: ['High surface quality', 'Precise 3D freeform surfaces', 'Short machining times', 'Seamless process chain with EDM'],
    },
    applications: {
      de: ['Graphit- und Kupferelektroden', 'Formeinsätze', 'Vorrichtungen', 'Präzisionsbauteile'],
      en: ['Graphite and copper electrodes', 'Mould inserts', 'Fixtures', 'Precision components'],
    },
    faq: {
      de: [
        {
          q: 'Welche Daten benötigen Sie für einen Fräsauftrag?',
          a: 'Idealerweise ein 3D-Modell (z. B. STEP) und eine Zeichnung mit Toleranzangaben. Wir beraten Sie aber auch gerne, wenn Sie nur eine Skizze oder ein Musterteil haben.',
        },
      ],
      en: [
        {
          q: 'What data do you need for a milling job?',
          a: 'Ideally a 3D model (e.g. STEP) and a drawing with tolerances. We are also happy to advise you if you only have a sketch or a sample part.',
        },
      ],
    },
    image: fraesen,
    imageAlt: {
      de: 'Gefrästes Aluminiumbauteil eingespannt in einer Fräsmaschine',
      en: 'Milled aluminium part clamped in a milling machine',
    },
  },
  {
    id: 'cnc',
    code: 'CNC',
    slug: { de: 'cnc-bearbeitung', en: 'cnc-machining' },
    title: { de: 'CNC-Bearbeitung', en: 'CNC Machining' },
    seoTitle: {
      de: 'CNC-Bearbeitung – Lohnfertigung deutschlandweit | GRO',
      en: 'CNC Machining & Contract Manufacturing | GRO',
    },
    seoDescription: {
      de: 'CNC-Bearbeitung von Metall und Kunststoff: präzise, wiederholgenau und automatisiert. Prototypen, Einzelteile und Serien für ganz Deutschland.',
      en: 'CNC machining of metal and plastics: precise, repeatable and automated. Prototypes, single parts and series from Germany.',
    },
    teaser: {
      de: 'Computergesteuerte Fertigung – präzise, wiederholgenau und automatisiert.',
      en: 'Computer-controlled manufacturing – precise, repeatable and automated.',
    },
    intro: {
      de: 'Bei der CNC-Bearbeitung steuern Computerprogramme die Werkzeugmaschinen. So entstehen komplexe Geometrien mit hoher Genauigkeit und Wiederholgenauigkeit – vom ersten Teil bis zum letzten einer Serie.',
      en: 'In CNC machining, computer programs control the machine tools. This produces complex geometries with high accuracy and repeatability – from the first to the last part of a series.',
    },
    body: {
      de: [
        'Unser automatisierter Maschinenpark ermöglicht es uns, flexibel und schnell auf Ihre Anforderungen zu reagieren. Wir bearbeiten Metalle ebenso wie technische Kunststoffe.',
        'Die Automatisierung steigert die Effizienz, reduziert Ausschuss und senkt Ihre Stückkosten – besonders bei wiederkehrenden Aufträgen.',
      ],
      en: [
        'Our automated machinery enables us to respond flexibly and quickly to your requirements. We machine metals as well as technical plastics.',
        'Automation increases efficiency, reduces scrap and lowers your unit costs – especially for recurring orders.',
      ],
    },
    benefits: {
      de: ['Hohe Wiederholgenauigkeit', 'Metalle und technische Kunststoffe', 'Automatisierte Fertigung', 'Kurze Lieferzeiten'],
      en: ['High repeatability', 'Metals and technical plastics', 'Automated production', 'Short lead times'],
    },
    applications: {
      de: ['Prototypen', 'Klein- und Mittelserien', 'Ersatzteile', 'Baugruppen-Komponenten'],
      en: ['Prototypes', 'Small and medium series', 'Spare parts', 'Assembly components'],
    },
    faq: {
      de: [
        {
          q: 'Lohnt sich CNC-Fertigung auch für kleine Stückzahlen?',
          a: 'Ja. Gerade für Prototypen und Kleinserien ist die CNC-Bearbeitung ideal, weil keine teuren Formen oder Spezialwerkzeuge benötigt werden.',
        },
      ],
      en: [
        {
          q: 'Is CNC manufacturing worthwhile for small quantities?',
          a: 'Yes. CNC machining is ideal for prototypes and small batches in particular, because no expensive moulds or special tools are required.',
        },
      ],
    },
    image: cnc,
    imageAlt: {
      de: 'CNC-Bohrer im Einsatz mit Kühlschmierstoff',
      en: 'CNC drill in operation with coolant',
    },
  },
  {
    id: 'turning',
    code: 'T/G/D',
    slug: { de: 'drehen-schleifen-bohren', en: 'turning-grinding-drilling' },
    title: { de: 'Drehen, Schleifen & Bohren', en: 'Turning, Grinding & Drilling' },
    seoTitle: {
      de: 'Drehen, Schleifen & Bohren – Präzisionsteile | GRO',
      en: 'Turning, Grinding & Drilling Services | GRO',
    },
    seoDescription: {
      de: 'Drehen, Schleifen und Bohren nach Zeichnung: präzise Oberflächen und enge Toleranzen für Prototypen und Serien. Lohnfertigung deutschlandweit.',
      en: 'Turning, grinding and drilling to drawing: precise surfaces and tight tolerances for prototypes and series. Contract manufacturing in Germany.',
    },
    teaser: {
      de: 'Rotationsteile, Passungen und Bohrungen – präzise nach Ihrer Zeichnung.',
      en: 'Rotational parts, fits and bores – precisely to your drawing.',
    },
    intro: {
      de: 'Drehen, Schleifen und Bohren ergänzen unser Leistungsspektrum. So erhalten Sie komplette Bauteile inklusive Passungen, Bohrungen und geschliffener Funktionsflächen aus einer Hand.',
      en: 'Turning, grinding and drilling complement our range of services. This way you receive complete components, including fits, bores and ground functional surfaces, from a single source.',
    },
    body: {
      de: [
        'Unser erfahrenes Team bearbeitet eine große Bandbreite an Werkstoffen und Komplexitäten. Wir fertigen effizient und halten dabei strenge Qualitätsstandards ein.',
        'Ob Prototyp oder Serie – wir liefern zuverlässig, termintreu und zu fairen Konditionen.',
      ],
      en: [
        'Our experienced team handles a wide range of materials and complexities. We work efficiently while maintaining strict quality standards.',
        'Whether prototype or series – we deliver reliably, on time and at fair conditions.',
      ],
    },
    benefits: {
      de: ['Komplettbearbeitung aus einer Hand', 'Geschliffene Funktionsflächen', 'Enge Toleranzen', 'Faire Konditionen'],
      en: ['Complete machining from one source', 'Ground functional surfaces', 'Tight tolerances', 'Fair conditions'],
    },
    applications: {
      de: ['Wellen und Bolzen', 'Führungselemente', 'Passungen und Bohrungen', 'Vorrichtungsbau'],
      en: ['Shafts and pins', 'Guide elements', 'Fits and bores', 'Fixture construction'],
    },
    faq: {
      de: [
        {
          q: 'Können Sie Bauteile komplett fertigen?',
          a: 'Ja. Durch die Kombination aus Erodieren, Fräsen, Drehen, Schleifen und Bohren liefern wir einbaufertige Bauteile – auf Wunsch inklusive Beschichtung und Lasergravur.',
        },
      ],
      en: [
        {
          q: 'Can you manufacture components completely?',
          a: 'Yes. By combining EDM, milling, turning, grinding and drilling we deliver ready-to-install components – on request including coating and laser engraving.',
        },
      ],
    },
    image: drehen,
    imageAlt: {
      de: 'Werkstück im Spannfutter einer Drehmaschine',
      en: 'Workpiece in the chuck of a lathe',
    },
  },
  {
    id: 'toolmaking',
    code: 'TOOL',
    slug: { de: 'formenbau-werkzeugbau', en: 'mould-tool-making' },
    title: { de: 'Formenbau & Werkzeugbau', en: 'Mould & Tool Making' },
    seoTitle: {
      de: 'Formenbau & Werkzeugbau – Präzision aus Norddeutschland | GRO',
      en: 'Mould & Tool Making – Precision from Germany | GRO',
    },
    seoDescription: {
      de: 'Formenbau, Werkzeugbau und Schalungsbau: Präzisionsformen und Werkzeuge aus einer Hand – von der Konstruktion bis zum Finish. Deutschlandweit.',
      en: 'Mould making, tool making and formwork construction: precision moulds and tools from a single source – from design to finish. Made in Germany.',
    },
    teaser: {
      de: 'Präzisionsformen, Werkzeuge und Schalungsbau – von der Konstruktion bis zum Finish.',
      en: 'Precision moulds, tools and formwork – from design to finish.',
    },
    intro: {
      de: 'Formen und Werkzeuge entscheiden über die Qualität Ihrer Serienteile. Wir verbinden Erodieren, HSC-Fräsen und klassische Zerspanung, um Präzisionsformen und Werkzeuge zu fertigen, die dauerhaft zuverlässig arbeiten.',
      en: 'Moulds and tools determine the quality of your series parts. We combine EDM, HSC milling and conventional machining to manufacture precision moulds and tools that work reliably for the long term.',
    },
    body: {
      de: [
        'Neben Neuanfertigungen übernehmen wir Änderungen und Reparaturen an bestehenden Werkzeugen. Außerdem fertigen wir Komponenten für den Schalungsbau.',
        'Durch kurze Wege und eine Fertigung unter einem Dach bleiben Sie flexibel – auch wenn es einmal schnell gehen muss.',
      ],
      en: [
        'In addition to new builds, we carry out modifications and repairs on existing tools. We also manufacture components for formwork construction.',
        'Short distances and production under one roof keep you flexible – even when things need to happen fast.',
      ],
    },
    benefits: {
      de: ['Alle Fertigungsschritte unter einem Dach', 'Neubau, Änderung und Reparatur', 'Kurze Reaktionszeiten', 'Dokumentierte Qualität'],
      en: ['All production steps under one roof', 'New builds, modifications and repairs', 'Short response times', 'Documented quality'],
    },
    applications: {
      de: ['Spritzgussformen', 'Stanz- und Biegewerkzeuge', 'Formeinsätze', 'Schalungsbau-Komponenten'],
      en: ['Injection moulds', 'Stamping and bending tools', 'Mould inserts', 'Formwork components'],
    },
    faq: {
      de: [
        {
          q: 'Reparieren Sie auch fremdgefertigte Werkzeuge?',
          a: 'Ja. Wir übernehmen Änderungen und Reparaturen an bestehenden Formen und Werkzeugen – unabhängig davon, wo sie ursprünglich gefertigt wurden.',
        },
      ],
      en: [
        {
          q: 'Do you also repair tools made by other manufacturers?',
          a: 'Yes. We carry out modifications and repairs on existing moulds and tools – regardless of where they were originally made.',
        },
      ],
    },
    image: werkzeugbau,
    imageAlt: {
      de: 'Spiralbohrer aus Hartmetall in Nahaufnahme',
      en: 'Close-up of a carbide twist drill',
    },
  },
  {
    id: 'powder-coating',
    code: 'COAT',
    featured: true,
    slug: { de: 'pulverbeschichtung', en: 'powder-coating' },
    title: { de: 'Pulverbeschichtung', en: 'Powder Coating' },
    seoTitle: {
      de: 'Pulverbeschichtung für Metallbauteile | GRO-Erodiertechnik',
      en: 'Powder Coating for Metal Components | GRO',
    },
    seoDescription: {
      de: 'Pulverbeschichtung für Ihre Bauteile: robust, korrosionsbeständig und in vielen Farben. Als Abschluss Ihrer Fertigung – alles aus einer Hand.',
      en: 'Powder coating for your components: durable, corrosion-resistant and available in many colours. The final step of your production – all from one source.',
    },
    teaser: {
      de: 'Robuste, korrosionsbeständige Oberflächen in vielen Farben – als Abschluss Ihrer Fertigung.',
      en: 'Durable, corrosion-resistant surfaces in many colours – as the final step of your production.',
    },
    intro: {
      de: 'Bei der Pulverbeschichtung wird ein trockenes Pulver aufgetragen und anschließend eingebrannt. Es entsteht eine widerstandsfähige Schutzschicht, die Bauteile vor Korrosion, Abplatzungen und Ausbleichen schützt.',
      en: 'In powder coating, a dry powder is applied and then cured. This creates a tough protective layer that shields components from corrosion, chipping and fading.',
    },
    body: {
      de: [
        'Das Verfahren ist umweltfreundlich, da es nahezu ohne Lösungsmittel auskommt und kaum Abfall erzeugt. Eine große Auswahl an Farben und Strukturen ermöglicht individuelle Oberflächen.',
        'So erhalten Sie Ihre Bauteile gefertigt und beschichtet aus einer Hand – ohne zusätzliche Logistik zu einem externen Dienstleister.',
      ],
      en: [
        'The process is environmentally friendly, as it requires almost no solvents and produces very little waste. A wide choice of colours and textures allows for individual surfaces.',
        'This way you receive your components manufactured and coated from a single source – without additional logistics to an external supplier.',
      ],
    },
    benefits: {
      de: ['Hoher Korrosionsschutz', 'Große Farb- und Strukturauswahl', 'Umweltfreundliches Verfahren', 'Fertigung und Beschichtung aus einer Hand'],
      en: ['High corrosion protection', 'Wide choice of colours and textures', 'Environmentally friendly process', 'Manufacturing and coating from one source'],
    },
    applications: {
      de: ['Maschinenkomponenten', 'Gehäuse und Abdeckungen', 'Flansche und Halterungen', 'Einzelstücke und Serien'],
      en: ['Machine components', 'Housings and covers', 'Flanges and brackets', 'Single pieces and series'],
    },
    faq: {
      de: [
        {
          q: 'Beschichten Sie auch Teile, die Sie nicht selbst gefertigt haben?',
          a: 'Sprechen Sie uns an – wir prüfen gerne, ob Ihre Bauteile für die Pulverbeschichtung bei uns geeignet sind.',
        },
      ],
      en: [
        {
          q: 'Do you also coat parts you did not manufacture yourselves?',
          a: 'Get in touch – we will gladly check whether your components are suitable for powder coating with us.',
        },
      ],
    },
    image: pulver,
    imageAlt: {
      de: 'Blau pulverbeschichtetes Metallbauteil mit Flansch',
      en: 'Blue powder-coated metal component with flange',
    },
  },
  {
    id: 'laser',
    code: 'LASER',
    slug: { de: 'lasergravur', en: 'laser-engraving' },
    title: { de: 'Lasergravur', en: 'Laser Engraving' },
    seoTitle: {
      de: 'Lasergravur & Laserbeschriftung von Metall | GRO',
      en: 'Laser Engraving & Marking of Metal | GRO',
    },
    seoDescription: {
      de: 'Lasergravur und Laserbeschriftung: dauerhafte Kennzeichnung von Bauteilen mit Seriennummern, Logos und DataMatrix-Codes – für Kunden deutschlandweit.',
      en: 'Laser engraving and marking: permanent marking of components with serial numbers, logos and DataMatrix codes – for customers across Europe.',
    },
    teaser: {
      de: 'Dauerhafte Kennzeichnung mit Seriennummern, Logos und Codes – gestochen scharf.',
      en: 'Permanent marking with serial numbers, logos and codes – razor sharp.',
    },
    intro: {
      de: 'Mit der Lasergravur bringen wir dauerhafte, abriebfeste Markierungen auf unterschiedlichste Werkstoffe. Feinste Details werden präzise abgebildet – ideal für die industrielle Kennzeichnung.',
      en: 'With laser engraving we apply permanent, abrasion-resistant markings to a wide range of materials. The finest details are reproduced precisely – ideal for industrial marking.',
    },
    body: {
      de: [
        'Typisch sind Seriennummern, Chargenkennzeichnungen, Typenschilder, Logos und maschinenlesbare Codes. Auch individuelle Einzelstücke und Werbeartikel lassen sich veredeln.',
        'Als letzter Schritt in unserer Prozesskette erhalten Sie Ihre Bauteile direkt gekennzeichnet und rückverfolgbar.',
      ],
      en: [
        'Typical applications are serial numbers, batch markings, type plates, logos and machine-readable codes. Individual pieces and promotional items can also be refined.',
        'As the final step of our process chain, you receive your components directly marked and traceable.',
      ],
    },
    benefits: {
      de: ['Dauerhaft und abriebfest', 'Feinste Details', 'Rückverfolgbarkeit Ihrer Bauteile', 'Für Einzelstücke und Serien'],
      en: ['Permanent and abrasion-resistant', 'Finest details', 'Traceability of your components', 'For single pieces and series'],
    },
    applications: {
      de: ['Seriennummern und Chargen', 'DataMatrix- und QR-Codes', 'Typenschilder', 'Logos und Personalisierung'],
      en: ['Serial and batch numbers', 'DataMatrix and QR codes', 'Type plates', 'Logos and personalisation'],
    },
    faq: {
      de: [
        {
          q: 'Welche Materialien können gelasert werden?',
          a: 'Vor allem Metalle wie Stahl, Edelstahl und Aluminium, aber auch viele Kunststoffe. Wir beraten Sie gerne zu Ihrem konkreten Bauteil.',
        },
      ],
      en: [
        {
          q: 'Which materials can be laser engraved?',
          a: 'Mainly metals such as steel, stainless steel and aluminium, but also many plastics. We are happy to advise you on your specific component.',
        },
      ],
    },
    image: laser,
    imageAlt: {
      de: 'Lasergravurmaschine bei der Bearbeitung eines Werkstücks',
      en: 'Laser engraving machine processing a workpiece',
    },
  },
  {
    id: 'custom',
    code: 'CUSTOM',
    slug: { de: 'sonderloesungen', en: 'custom-solutions' },
    title: { de: 'Sonderlösungen', en: 'Custom Solutions' },
    seoTitle: {
      de: 'Sonderlösungen & Sonderteile nach Maß | GRO',
      en: 'Custom Solutions & Special Parts | GRO',
    },
    seoDescription: {
      de: 'Sonderlösungen für Ihre Fertigung: Wir entwickeln gemeinsam mit Ihnen Bauteile und Vorrichtungen für Aufgaben, für die es keine Standardlösung gibt.',
      en: 'Custom solutions for your production: together with you we develop components and fixtures for tasks that have no off-the-shelf solution.',
    },
    teaser: {
      de: 'Wenn es keine Standardlösung gibt: Wir entwickeln sie gemeinsam mit Ihnen.',
      en: 'When there is no standard solution: we develop it together with you.',
    },
    intro: {
      de: 'Manche Aufgaben passen in keine Schublade. Für diese Fälle entwickeln wir gemeinsam mit Ihnen individuelle Lösungen – von der ersten Idee über den Prototyp bis zur Serie.',
      en: 'Some tasks do not fit into any category. For these cases, we work with you to develop individual solutions – from the first idea through the prototype to series production.',
    },
    body: {
      de: [
        'Dank unserer breiten Fertigungstiefe können wir Verfahren frei kombinieren und so auch ungewöhnliche Anforderungen wirtschaftlich umsetzen.',
        'Wir arbeiten eng mit Ihnen zusammen, kommunizieren transparent und liefern dokumentierte, nachvollziehbare Ergebnisse.',
      ],
      en: [
        'Thanks to our broad manufacturing depth, we can freely combine processes and implement even unusual requirements cost-effectively.',
        'We work closely with you, communicate transparently and deliver documented, traceable results.',
      ],
    },
    benefits: {
      de: ['Gemeinsame Entwicklung', 'Freie Kombination aller Verfahren', 'Vom Prototyp bis zur Serie', 'Transparente Kommunikation'],
      en: ['Joint development', 'Free combination of all processes', 'From prototype to series', 'Transparent communication'],
    },
    applications: {
      de: ['Vorrichtungen und Lehren', 'Sonderbauteile', 'Ersatzteile ohne Zeichnung (Reverse Engineering)', 'Prozessoptimierung'],
      en: ['Fixtures and gauges', 'Special components', 'Spare parts without drawings (reverse engineering)', 'Process optimisation'],
    },
    faq: {
      de: [
        {
          q: 'Ich habe nur ein Musterteil und keine Zeichnung – geht das?',
          a: 'In vielen Fällen ja. Sprechen Sie uns an, wir prüfen gemeinsam mit Ihnen den besten Weg zum Nachbau.',
        },
      ],
      en: [
        {
          q: 'I only have a sample part and no drawing – is that possible?',
          a: 'In many cases, yes. Get in touch and we will work out the best way to reproduce it together with you.',
        },
      ],
    },
    image: sonder,
    imageAlt: {
      de: 'Messung eines Bauteils auf einer Werkzeugmaschine',
      en: 'Measuring a component on a machine tool',
    },
  },
  {
    id: 'flow-grinding',
    code: 'FLOW',
    featured: true,
    slug: { de: 'stroemungsschleifen', en: 'abrasive-flow-machining' },
    title: { de: 'Strömungsschleifen', en: 'Abrasive Flow Machining' },
    seoTitle: {
      de: 'Strömungsschleifen – Entgraten & Polieren | GRO',
      en: 'Abrasive Flow Machining – Deburring & Polishing | GRO',
    },
    seoDescription: {
      de: 'Strömungsschleifen im Lohnauftrag: Entgraten, Kantenverrunden und Polieren von Innenkonturen, Bohrungen und Kanälen – für Kunden deutschlandweit.',
      en: 'Contract abrasive flow machining: deburring, edge rounding and polishing of internal contours, bores and channels – for customers across Europe.',
    },
    teaser: {
      de: 'Entgraten, Verrunden und Polieren dort, wo kein Werkzeug hinkommt – auch in Bohrungen und Kanälen.',
      en: 'Deburring, rounding and polishing where no tool can reach – including bores and channels.',
    },
    intro: {
      de: 'Beim Strömungsschleifen wird ein abrasives Medium unter Druck durch oder entlang des Werkstücks bewegt. Es trägt dabei gezielt Material ab – und erreicht auch Innenkonturen, Bohrungen und Kanäle, an die kein Schleifwerkzeug herankommt.',
      en: 'In abrasive flow machining, an abrasive medium is forced through or along the workpiece under pressure. It removes material in a controlled way – reaching internal contours, bores and channels that no grinding tool can access.',
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
      de: [
        {
          q: 'Wofür eignet sich das Strömungsschleifen besonders?',
          a: 'Überall dort, wo Innenkonturen, Bohrungen oder Kanäle entgratet, verrundet oder poliert werden müssen und herkömmliche Werkzeuge nicht hinkommen. Sprechen Sie uns zu Ihrem Bauteil an.',
        },
      ],
      en: [
        {
          q: 'What is abrasive flow machining particularly suited for?',
          a: 'Wherever internal contours, bores or channels need deburring, rounding or polishing and conventional tools cannot reach. Get in touch about your component.',
        },
      ],
    },
    image: werkzeugbau,
    imageAlt: {
      de: 'Präzisionswerkzeug mit polierter Oberfläche',
      en: 'Precision tool with polished surface',
    },
  },
];

/** Reihenfolge auf der Website: Schwerpunkte zuerst, Senkerodieren als Ergänzung zuletzt */
const order = ['wire-edm', 'milling', 'flow-grinding', 'powder-coating', 'laser', 'cnc', 'turning', 'toolmaking', 'custom', 'sinker-edm'];
export const services: Service[] = order.map((id) => all.find((s) => s.id === id)!);
export const featuredServices = services.filter((s) => s.featured);