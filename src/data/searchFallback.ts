import { DetailKind, SearchResultItem, TroubleCode, FieldGuide } from '../types/diagnostics';
import { FIELD_GUIDES, TROUBLE_CODES, normalizeQuery } from './diagnosticsData';
import { SHIFT_GUIDES, TRANSMISSION_CODES } from './transmissionData';

// Everyday filler words that should not drive matching, plus single
// characters that match everything.
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'my', 'me', 'you', 'your', 'why', 'how', 'what',
  'when', 'where', 'is', 'are', 'was', 'were', 'be', 'been', 'do',
  'does', 'did', 'it', 'its', 'of', 'and', 'or', 'to', 'in', 'on',
  'for', 'with', 'not', 'there', 'that', 'this', 'if', 'can', 'will',
  'just', 'about', 'get', 'got', 'go', 'goes', 'going', 'into',
]);

// The complete library across both source modules. Exported so every
// view (search, detail dialog, lab grid, guides grid) resolves entries
// from one shared list instead of per-module copies.
export const ALL_CODES: TroubleCode[] = [...TROUBLE_CODES, ...TRANSMISSION_CODES];
export const ALL_GUIDES: FieldGuide[] = [...FIELD_GUIDES, ...SHIFT_GUIDES];

function codeResult(item: TroubleCode): SearchResultItem {
  return {
    kind: DetailKind.Code,
    id: item.code,
    badge: item.code,
    title: item.title,
    summary: item.summary,
    meta: 'Trouble code \u00B7 Draft',
  };
}

function guideResult(item: FieldGuide): SearchResultItem {
  return {
    kind: DetailKind.Guide,
    id: item.id,
    badge: item.type,
    title: item.title,
    summary: item.summary,
    meta: 'Field guide \u00B7 ' + item.time + ' \u00B7 Draft',
  };
}

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
// air-fuel, electrical, temperature, and transmission). Exact matching
// first: the whole phrase, or every word present. When nothing matches
// exactly, rank entries by how many meaningful words they contain and
// return the closest ones, so a natural-language question still lands
// on useful draft content instead of an empty result grid.
export function searchWithFallback(
  rawQuery: string
): { status: string; results: SearchResultItem[] } {
  const q = normalizeQuery(rawQuery);
  if (!q) {
    return {
      status: 'Enter a trouble code, symptom, or guide topic to start investigating.',
      results: [],
    };
  }

  const words = q.split(' ');
  const matches: SearchResultItem[] = [];

  for (const codeItem of ALL_CODES) {
    const hay = codeHaystack(codeItem);
    if (hay.includes(q) || words.every((word) => hay.includes(word))) {
      matches.push(codeResult(codeItem));
    }
  }
  for (const guideItem of ALL_GUIDES) {
    const hay = guideHaystack(guideItem);
    if (hay.includes(q) || words.every((word) => hay.includes(word))) {
      matches.push(guideResult(guideItem));
    }
  }

  if (matches.length) {
    return {
      status: matches.length + (matches.length === 1 ? ' result found. Open a result to review draft guidance.' : ' results found. Open a result to review draft guidance.'),
      results: matches.slice(0, 9),
    };
  }

  const meaningful = words.filter(
    (word) => word.length > 1 && !STOP_WORDS.has(word)
  );
  if (!meaningful.length) {
    return {
      status: 'No exact match in this draft library. Try a shorter symptom, a code such as P0300, or browse all guides.',
      results: [],
    };
  }

  const scoreFor = (haystack: string): number =>
    meaningful.reduce(
      (count, word) => (haystack.includes(word) ? count + 1 : count),
      0
    );

  const scored: { result: SearchResultItem; score: number }[] = [];
  for (const codeItem of ALL_CODES) {
    const score = scoreFor(codeHaystack(codeItem));
    if (score > 0) {
      scored.push({ result: codeResult(codeItem), score });
    }
  }
  for (const guideItem of ALL_GUIDES) {
    const score = scoreFor(guideHaystack(guideItem));
    if (score > 0) {
      scored.push({ result: guideResult(guideItem), score });
    }
  }

  if (!scored.length) {
    return {
      status: 'No exact match in this draft library. Try a shorter symptom, a code such as P0300, or browse all guides.',
      results: [],
    };
  }

  scored.sort((a, b) => b.score - a.score);
  return {
    status: 'No exact match - these are the closest topics in the draft library.',
    results: scored.slice(0, 6).map((entry) => entry.result),
  };
}
