import { services } from './services';
import { servicePath, type Lang } from '../i18n/ui';

/** Fachlich sinnvolle Querverweise zwischen den Leistungen */
export const relatedMap: Record<string, string[]> = {
  'wire-edm': ['micro-hole-edm', 'surface-grinding', 'flow-polishing'],
  milling: ['wire-edm', 'surface-grinding', '3d-printing'],
  'micro-hole-edm': ['wire-edm', 'sinker-edm', 'milling'],
  'surface-grinding': ['wire-edm', 'milling', 'flow-polishing'],
  laser: ['powder-coating', 'sandblasting', 'milling'],
  sandblasting: ['powder-coating', 'flow-polishing', 'laser'],
  'flow-polishing': ['wire-edm', 'micro-hole-edm', 'sandblasting'],
  'powder-coating': ['sandblasting', 'laser', 'milling'],
  '3d-printing': ['milling', 'laser', 'wire-edm'],
  'sinker-edm': ['wire-edm', 'micro-hole-edm', 'milling'],
};

export const relatedServices = (id: string) =>
  (relatedMap[id] ?? []).map((r) => services.find((s) => s.id === r)).filter((s): s is NonNullable<typeof s> => !!s);

/** Begriffe im Fließtext, die automatisch auf die jeweilige Leistung verlinkt werden */
const keywords: Record<string, { de: string[]; en: string[] }> = {
  'wire-edm': { de: ['Drahterodieren'], en: ['wire EDM'] },
  milling: { de: ['CNC-Fräsen', 'Fräsen'], en: ['CNC milling', 'milling'] },
  'micro-hole-edm': { de: ['Mikrobohr-Erodieren', 'Startlochbohrungen'], en: ['micro-hole EDM', 'start holes'] },
  'surface-grinding': { de: ['Flachschleifen', 'Schleifen'], en: ['surface grinding', 'grinding'] },
  laser: { de: ['Laserbeschriftung'], en: ['laser marking'] },
  sandblasting: { de: ['Sandstrahlen'], en: ['sandblasting'] },
  'flow-polishing': { de: ['Strömungspolieren'], en: ['abrasive flow polishing'] },
  'powder-coating': { de: ['Pulverbeschichtung', 'Pulverbeschichten'], en: ['powder coating'] },
  '3d-printing': { de: ['3D-Druck'], en: ['3D printing'] },
  'sinker-edm': { de: ['Senkerodieren'], en: ['sinker EDM'] },
};

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Verlinkt in mehreren Absätzen jeweils das erste Vorkommen anderer Leistungen
 * (pro Seite jede Leistung höchstens einmal). Gibt HTML-Strings zurück.
 */
export function linkify(paragraphs: string[], lang: Lang, currentId: string): string[] {
  const done = new Set<string>([currentId]);
  return paragraphs.map((p) => {
    let out = esc(p);
    for (const [id, kw] of Object.entries(keywords)) {
      if (done.has(id)) continue;
      const svc = services.find((s) => s.id === id);
      if (!svc) continue;
      for (const word of kw[lang]) {
        const re = new RegExp(`(^|[\\s(„"])(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?=[\\s,.;:)“"–-]|$)`, 'i');
        if (re.test(out)) {
          out = out.replace(re, `$1<a href="${servicePath(lang, svc.slug[lang])}">$2</a>`);
          done.add(id);
          break;
        }
      }
    }
    return out;
  });
}
