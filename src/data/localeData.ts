import {
  TROUBLE_CODES, FIELD_GUIDES, QUICK_SEARCHES, FILTER_TABS, SYMPTOM_ITEMS, SAFETY_RULES,
} from './diagnosticsData';
import {
  TROUBLE_CODES_ES, FIELD_GUIDES_ES, QUICK_SEARCHES_ES, FILTER_TABS_ES, SYMPTOM_ITEMS_ES, SAFETY_RULES_ES,
} from './diagnosticsData.es';
import { TRANSMISSION_CODES, SHIFT_GUIDES } from './transmissionData';
import { TRANSMISSION_CODES_ES, SHIFT_GUIDES_ES } from './transmissionData.es';
import { Lang } from '../i18n/LanguageContext';

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

export function troubleCodesFor(lang: Lang) {
  return lang === 'es' ? [...TROUBLE_CODES_ES, ...TRANSMISSION_CODES_ES] : [...TROUBLE_CODES, ...TRANSMISSION_CODES];
}

export function fieldGuidesFor(lang: Lang) {
  return lang === 'es' ? [...FIELD_GUIDES_ES, ...SHIFT_GUIDES_ES] : [...FIELD_GUIDES, ...SHIFT_GUIDES];
}

export function symptomItemsFor(lang: Lang) {
  return lang === 'es' ? SYMPTOM_ITEMS_ES : SYMPTOM_ITEMS;
}

export function safetyRulesFor(lang: Lang) {
  return lang === 'es' ? SAFETY_RULES_ES : SAFETY_RULES;
}
