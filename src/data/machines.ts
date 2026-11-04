/**
 * Maschinenpark der GRO-Erodiertechnik.
 * Kenndaten oberflächlich aus Hersteller- bzw. Händlerangaben recherchiert –
 * bewusst nur robuste, eindeutig belegte Werte. Vor dem Livegang vom Betrieb prüfen lassen.
 */
type L<T = string> = { de: T; en: T };

export interface Machine {
  maker: string;
  model: string;
  type: L;
  facts: L<string[]>;
}

export interface MachineGroup {
  id: string;
  /** Verknüpfte Leistung (id aus services.ts) */
  serviceId?: string;
  title: L;
  intro: L;
  machines: Machine[];
}

export const machineGroups: MachineGroup[] = [
  {
    id: 'wire',
    serviceId: 'wire-edm',
    title: { de: 'Drahterodieren', en: 'Wire EDM' },
    intro: {
      de: 'Drei Sodick-Drahterodiermaschinen – vom großformatigen Werkstück bis zur feinen Präzisionskontur.',
      en: 'Three Sodick wire EDM machines – from large workpieces to fine precision contours.',
    },
    machines: [
      {
        maker: 'Sodick',
        model: 'ALC 800 G',
        type: { de: 'CNC-Drahterodiermaschine', en: 'CNC wire EDM machine' },
        facts: {
          de: ['Verfahrweg X × Y × Z: 800 × 600 × 500 mm', 'Für großformatige und hohe Werkstücke'],
          en: ['Travel X × Y × Z: 800 × 600 × 500 mm', 'For large and tall workpieces'],
        },
      },
      {
        maker: 'Sodick',
        model: 'SLC 600 G',
        type: { de: 'CNC-Drahterodiermaschine', en: 'CNC wire EDM machine' },
        facts: {
          de: ['Verfahrweg X × Y × Z: 600 × 400 × 350 mm', 'U/V-Achsen für Konikschnitte'],
          en: ['Travel X × Y × Z: 600 × 400 × 350 mm', 'U/V axes for taper cutting'],
        },
      },
      {
        maker: 'Sodick',
        model: 'AG 600 L',
        type: { de: 'Linearmotor-Drahterodiermaschine', en: 'Linear-motor wire EDM machine' },
        facts: {
          de: ['Linearantriebe für hohe Positioniergenauigkeit', 'Für Präzisionskonturen und feine Oberflächen'],
          en: ['Linear drives for high positioning accuracy', 'For precision contours and fine surfaces'],
        },
      },
    ],
  },
  {
    id: 'drill',
    serviceId: 'micro-hole-edm',
    title: { de: 'Mikrobohr-Erodieren', en: 'Micro-hole EDM drilling' },
    intro: {
      de: 'Feinste Bohrungen und Startlöcher – berührungslos und gratfrei.',
      en: 'The finest holes and start holes – contact-free and burr-free.',
    },
    machines: [
      {
        maker: 'AgieCharmilles',
        model: 'DRILL 20',
        type: { de: 'Bohrerodiermaschine', en: 'EDM hole drilling machine' },
        facts: {
          de: ['Elektroden ab Ø 0,1 mm', 'Bohrtiefe bis ca. 200 mm', 'Verfahrweg X × Y × Z: 300 × 200 × 300 mm'],
          en: ['Electrodes from Ø 0.1 mm', 'Drilling depth up to approx. 200 mm', 'Travel X × Y × Z: 300 × 200 × 300 mm'],
        },
      },
    ],
  },
  {
    id: 'mill',
    serviceId: 'milling',
    title: { de: 'CNC-Fräsen', en: 'CNC milling' },
    intro: {
      de: 'Vertikale Bearbeitungszentren für große Bauteile und präzise Mehrseitenbearbeitung – inklusive 5-Achs-Bearbeitung.',
      en: 'Vertical machining centres for large components and precise multi-sided machining – including 5-axis machining.',
    },
    machines: [
      {
        maker: '',
        model: 'VF-MILL ECO 1100',
        type: { de: 'Vertikales Bearbeitungszentrum', en: 'Vertical machining centre' },
        facts: {
          de: ['Großer Arbeitsraum für Platten und lange Bauteile', 'Teil unseres Fräs-Verfahrwegs bis ca. 1.100 × 600 × 650 mm'],
          en: ['Large working area for plates and long components', 'Part of our milling capacity up to approx. 1,100 × 600 × 650 mm'],
        },
      },
      {
        maker: 'DMG (Deckel Maho)',
        model: 'DMC 63 V',
        type: { de: 'Vertikales Bearbeitungszentrum', en: 'Vertical machining centre' },
        facts: {
          de: ['Verfahrweg X × Y × Z: ca. 630 × 500 × 500 mm', 'Bewährte Präzision für Formeinsätze und Vorrichtungen'],
          en: ['Travel X × Y × Z: approx. 630 × 500 × 500 mm', 'Proven precision for mould inserts and fixtures'],
        },
      },
    ],
  },
  {
    id: 'grind',
    serviceId: 'surface-grinding',
    title: { de: 'Flachschleifen', en: 'Surface grinding' },
    intro: {
      de: 'Japanische Präzisions-Schleiftechnik für ebene, parallele Flächen.',
      en: 'Japanese precision grinding technology for flat, parallel surfaces.',
    },
    machines: [
      {
        maker: 'Kuroda',
        model: 'GS-DH',
        type: { de: 'Präzisions-Flachschleifmaschine', en: 'Precision surface grinder' },
        facts: {
          de: ['Verfahrweg ca. 300 × 500 × 300 mm', 'Für höchste Ebenheit und Oberflächengüte'],
          en: ['Travel approx. 300 × 500 × 300 mm', 'For maximum flatness and surface quality'],
        },
      },
    ],
  },
  {
    id: 'flow',
    serviceId: 'flow-polishing',
    title: { de: 'Strömungspolieren', en: 'Abrasive flow polishing' },
    intro: {
      de: 'Strömungsschleifen mit Technik vom Pionier des Abrasive Flow Machining.',
      en: 'Abrasive flow machining with technology from the pioneer of the process.',
    },
    machines: [
      {
        maker: 'Extrude Hone',
        model: '77B',
        type: { de: 'Strömungsschleif-/AFM-Anlage', en: 'Abrasive flow machining (AFM) system' },
        facts: {
          de: ['Entgraten, Verrunden und Polieren von Innenkonturen', 'Ideal für Bohrungen, Kanäle und Matrizen'],
          en: ['Deburring, rounding and polishing of internal contours', 'Ideal for bores, channels and dies'],
        },
      },
    ],
  },
  {
    id: 'coat',
    serviceId: 'powder-coating',
    title: { de: 'Pulverbeschichten', en: 'Powder coating' },
    intro: {
      de: 'Pulverbeschichtung im eigenen Haus – vom Auftrag bis zum Einbrennen.',
      en: 'In-house powder coating – from application to curing.',
    },
    machines: [
      {
        maker: 'Romer',
        model: 'AP-300 Exclusive',
        type: { de: 'Handpulveranlage (elektrostatisch)', en: 'Manual powder coating unit (electrostatic)' },
        facts: {
          de: ['Elektrostatischer Pulverauftrag', 'Flexibel für Einzelteile und Serien'],
          en: ['Electrostatic powder application', 'Flexible for single parts and series'],
        },
      },
      {
        maker: 'Romer',
        model: 'SLS-150',
        type: { de: 'Einbrennofen', en: 'Curing oven' },
        facts: {
          de: ['Einbrennen der Pulverschicht', 'Für eine robuste, gleichmäßige Beschichtung'],
          en: ['Curing of the powder coat', 'For a durable, uniform coating'],
        },
      },
    ],
  },
  {
    id: 'print',
    serviceId: '3d-printing',
    title: { de: '3D-Druck', en: '3D printing' },
    intro: {
      de: 'Additive Fertigung für Prototypen, Vorrichtungen und Kunststoffteile.',
      en: 'Additive manufacturing for prototypes, fixtures and plastic parts.',
    },
    machines: [
      {
        maker: 'Bambu Lab',
        model: 'H2D',
        type: { de: '3D-Drucker mit zwei Düsen (FDM)', en: 'Dual-nozzle 3D printer (FDM)' },
        facts: {
          de: ['Bauraum bis ca. 325 × 320 × 325 mm', 'Zwei Düsen für Mehrmaterial- und Stützmaterialdruck', 'Beheizter Bauraum für technische Kunststoffe'],
          en: ['Build volume up to approx. 325 × 320 × 325 mm', 'Two nozzles for multi-material and support printing', 'Heated chamber for engineering plastics'],
        },
      },
    ],
  },
  {
    id: 'qa',
    title: { de: 'Messtechnik & Qualitätssicherung', en: 'Metrology & quality assurance' },
    intro: {
      de: 'Wir messen, was wir fertigen – und dokumentieren die Ergebnisse auf Wunsch mit Messprotokoll.',
      en: 'We measure what we make – and document the results with an inspection report on request.',
    },
    machines: [
      {
        maker: 'Keyence',
        model: 'IM-8000',
        type: { de: 'Bildverarbeitungs-Messsystem', en: 'Image dimension measurement system' },
        facts: {
          de: ['Berührungslose 2D-Messung vieler Merkmale auf Knopfdruck', 'Anzeigeauflösung 0,1 µm'],
          en: ['Contact-free 2D measurement of many features at the push of a button', 'Display resolution 0.1 µm'],
        },
      },
      {
        maker: 'Keyence',
        model: 'XM-P1000',
        type: { de: 'Handmesstaster-Koordinatenmessgerät (XM-Serie)', en: 'Handheld probe CMM (XM series)' },
        facts: {
          de: ['3D-Messungen direkt am Bauteil', 'Auch für große und schwere Werkstücke'],
          en: ['3D measurement directly on the component', 'Also for large and heavy workpieces'],
        },
      },
      {
        maker: 'Mitutoyo',
        model: 'Linear Height LH-600E',
        type: { de: 'Höhenmessgerät', en: 'Height gauge' },
        facts: {
          de: ['Messbereich bis 972 mm', 'Präzise Höhen-, Abstands- und 2D-Messungen'],
          en: ['Measuring range up to 972 mm', 'Precise height, distance and 2D measurements'],
        },
      },
      {
        maker: 'Mitutoyo',
        model: 'Surftest SJ-210',
        type: { de: 'Rauheitsmessgerät', en: 'Surface roughness tester' },
        facts: {
          de: ['Messung von Oberflächenkennwerten wie Ra und Rz', 'Mobil einsetzbar – direkt an der Maschine'],
          en: ['Measures surface parameters such as Ra and Rz', 'Portable – directly at the machine'],
        },
      },
    ],
  },
];

export const machinesForService = (serviceId: string) => machineGroups.find((g) => g.serviceId === serviceId);
export const machineCount = machineGroups.reduce((n, g) => n + g.machines.length, 0);
