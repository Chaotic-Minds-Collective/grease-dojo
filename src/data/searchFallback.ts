import { DetailKind, SearchResultItem, TroubleCode, FieldGuide } from '../types/diagnostics';
import { normalizeQuery } from './diagnosticsData';
import type { Lang } from '../i18n/LanguageContext';
import { troubleCodesFor, fieldGuidesFor } from './localeData';

// Everyday filler words that should not drive matching, plus single
// characters that match everything.
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'my', 'me', 'you', 'your', 'why', 'how', 'what',
  'when', 'where', 'is', 'are', 'was', 'were', 'be', 'been', 'do',
  'does', 'did', 'it', 'its', 'of', 'and', 'or', 'to', 'in', 'on',
  'for', 'with', 'not', 'there', 'that', 'this', 'if', 'can', 'will',
  'just', 'about', 'get', 'got', 'go', 'goes', 'going', 'into',
]);

// Spanish filler words. Note: "no" is deliberately NOT a stop word in
// Spanish - "no arranca" (it does not crank) loses its meaning without
// it, unlike English "not".
const STOP_WORDS_ES = new Set([
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'mi', 'me',
  'tu', 'tus', 'por', 'que', 'como', 'cuando', 'donde', 'es', 'son',
  'era', 'ser', 'sido', 'hacer', 'hace', 'hizo', 'lo', 'se', 'de',
  'y', 'o', 'en', 'con', 'si', 'puede', 'van', 'a', 'del', 'al',
  'sobre', 'esta', 'este', 'esto', 'para', 'pero', 'muy', 'ya',
]);

const STATUS_ES = {
  empty: 'Ingresa un código de falla, un síntoma o un tema de guía para comenzar a investigar.',
  none: 'Sin coincidencia exacta en esta biblioteca en borrador. Prueba un síntoma más corto, un código como P0300 o explora todas las guías.',
  one: ' resultado encontrado. Abre un resultado para revisar la guía en borrador.',
  many: ' resultados encontrados. Abre un resultado para revisar la guía en borrador.',
  close: 'Sin coincidencia exacta: estos son los temas más cercanos en la biblioteca en borrador.',
};

// The complete library for a language, resolved from one shared list so
// every view (search, detail dialog, lab grid, guides grid) stays in
// sync instead of holding per-module copies.
export function allCodes(lang: Lang): TroubleCode[] {
  return troubleCodesFor(lang);
}

export function allGuides(lang: Lang): FieldGuide[] {
  return fieldGuidesFor(lang);
}

/** Builds a search result card for one trouble code. */
function codeResult(item: TroubleCode, lang: Lang): SearchResultItem {
  return {
    kind: DetailKind.Code,
    id: item.code,
    badge: item.code,
    title: item.title,
    summary: item.summary,
    meta: lang === 'es' ? 'Código de falla \u00B7 Borrador' : 'Trouble code \u00B7 Draft',
  };
}

/** Builds a search result card for one field guide. */
function guideResult(item: FieldGuide, lang: Lang): SearchResultItem {
  const meta = lang === 'es'
    ? 'Guía de campo \u00B7 ' + item.time + ' \u00B7 Borrador'
    : 'Field guide \u00B7 ' + item.time + ' \u00B7 Draft';
  return {
    kind: DetailKind.Guide,
    id: item.id,
    badge: item.type,
    title: item.title,
    summary: item.summary,
    meta,
  };
}

/** Concatenates every searchable field of a code into one normalized haystack. */
function codeHaystack(item: TroubleCode): string {
  return normalizeQuery(
    [
      item.code,
      ...(item.searchTerms ?? []),
      item.title,
      item.summary,
      item.meaning,
      item.category,
      ...(item.symptoms ?? []),
      ...item.causes,
    ].join(' ')
  );
}

/** Concatenates every searchable field of a guide into one normalized haystack. */
function guideHaystack(item: FieldGuide): string {
  return normalizeQuery(
    [
      item.title,
      item.summary,
      item.search,
      item.type,
      ...item.sections.map((section) => section.body ?? ''),
      ...item.sections.flatMap((section) => section.items ?? []),
    ].join(' ')
  );
}

// Single search entry point over the whole draft library (engine,
// air-fuel, electrical, temperature, and transmission) for the active
// language. Exact matching first: the whole phrase, or every word
// present. When nothing matches exactly, rank entries by how many
// meaningful words they contain and return the closest ones, so a
// natural-language question still lands on useful draft content instead
// of an empty result grid.
export function searchWithFallback(
  rawQuery: string,
  lang: Lang = 'en'
): { status: string; results: SearchResultItem[] } {
  const codes = allCodes(lang);
  const guides = allGuides(lang);
  const stopWords = lang === 'es' ? STOP_WORDS_ES : STOP_WORDS;
  const q = normalizeQuery(rawQuery);
  if (!q) {
    return {
      status: lang === 'es' ? STATUS_ES.empty : 'Enter a trouble code, symptom, or guide topic to start investigating.',
      results: [],
    };
  }

  const words = q.split(' ');
  const matches: SearchResultItem[] = [];

  for (const codeItem of codes) {
    const hay = codeHaystack(codeItem);
    if (hay.includes(q) || words.every((word) => hay.includes(word))) {
      matches.push(codeResult(codeItem, lang));
    }
  }
  for (const guideItem of guides) {
    const hay = guideHaystack(guideItem);
    if (hay.includes(q) || words.every((word) => hay.includes(word))) {
      matches.push(guideResult(guideItem, lang));
    }
  }

  if (matches.length) {
    const suffix =
      lang === 'es'
        ? matches.length === 1
          ? STATUS_ES.one
          : STATUS_ES.many
        : matches.length === 1
          ? ' result found. Open a result to review draft guidance.'
          : ' results found. Open a result to review draft guidance.';
    return {
      status: matches.length + suffix,
      results: matches.slice(0, 9),
    };
  }

  const meaningful = words.filter(
    (word) => word.length > 1 && !stopWords.has(word)
  );
  if (!meaningful.length) {
    return {
      status: lang === 'es' ? STATUS_ES.none : 'No exact match in this draft library. Try a shorter symptom, a code such as P0300, or browse all guides.',
      results: [],
    };
  }

  const scoreFor = (haystack: string): number =>
    meaningful.reduce(
      (count, word) => (haystack.includes(word) ? count + 1 : count),
      0
    );

  const scored: { result: SearchResultItem; score: number }[] = [];
  for (const codeItem of codes) {
    const score = scoreFor(codeHaystack(codeItem));
    if (score > 0) {
      scored.push({ result: codeResult(codeItem, lang), score });
    }
  }
  for (const guideItem of guides) {
    const score = scoreFor(guideHaystack(guideItem));
    if (score > 0) {
      scored.push({ result: guideResult(guideItem, lang), score });
    }
  }

  if (!scored.length) {
    return {
      status: lang === 'es' ? STATUS_ES.none : 'No exact match in this draft library. Try a shorter symptom, a code such as P0300, or browse all guides.',
      results: [],
    };
  }

  scored.sort((a, b) => b.score - a.score);
  return {
    status: lang === 'es' ? STATUS_ES.close : 'No exact match - these are the closest topics in the draft library.',
    results: scored.slice(0, 6).map((entry) => entry.result),
  };
}
