import { allCodes, allGuides, QUICK_SEARCHES, FILTER_TABS, SYMPTOM_ITEMS, SAFETY_RULES } from './diagnosticsData';
import { TROUBLE_CODES_ES, FIELD_GUIDES_ES, QUICK_SEARCHES_ES, FILTER_TABS_ES, SYMPTOM_ITEMS_ES, SAFETY_RULES_ES } from './diagnosticsData.es';
import { transmissionCodesEs, transmissionGuidesEs } from './transmissionData.es';
import type { Lang } from '../i18n/LanguageContext';
import type { DiagnosticCode } from '../types/diagnostics';

export { QUICK_SEARCHES, QUICK_SEARCHES_ES, FILTER_TABS, FILTER_TABS_ES, SAFETY_RULES, SAFETY_RULES_ES };

/** Display labels for code categories in Spanish (English derives
 *  them from the category value itself). */
export const CATEGORY_LABELS_ES: Record<string, string> = {
  engine: 'motor',
  'air-fuel': 'aire y combustible',
  electrical: 'eléctrico',
  temperature: 'temperatura',
  transmission: 'transmisión',
};

/** Returns the trouble-code library for the active language. */
export function troubleCodesFor(lang: Lang): DiagnosticCode[] {
  if (lang === 'en') return allCodes();
  const localized = new Map(TROUBLE_CODES_ES.map((code) => [code.code, code]));
  // Preserve the full library and stable identifiers when a translation is absent.
  return [
    ...allCodes().filter((code) => code.category !== 'transmission').map((code) => {
      const translation = localized.get(code.code);
      if (!translation) return code;
      return {
        ...code,
        title: translation.title,
        summary: translation.summary,
        symptom: translation.symptoms?.join('; ') ?? code.symptomEs ?? code.symptom,
        sections: [
          { heading: 'Significado', body: translation.meaning },
          { heading: 'Posibles causas', items: translation.causes },
          { heading: 'Qué comprobar', items: translation.checks },
          { heading: 'Seguridad', body: translation.warning },
        ],
      };
    }),
    ...transmissionCodesEs(),
  ];
}

/** Returns the field-guide library for the active language. */
export function fieldGuidesFor(lang: Lang) {
  if (lang === 'en') return allGuides();
  const localized = new Map([...FIELD_GUIDES_ES, ...transmissionGuidesEs()].map((guide) => [guide.id, guide]));
  return allGuides().map((guide) => localized.get(guide.id) ?? guide);
}

/** Returns the symptom shortcuts for the active language. */
export function symptomItemsFor(lang: Lang) {
  return lang === 'es' ? SYMPTOM_ITEMS_ES : SYMPTOM_ITEMS;
}

/** Returns the safety rules for the active language. */
export function safetyRulesFor(lang: Lang) {
  return lang === 'es' ? SAFETY_RULES_ES : SAFETY_RULES;
}
