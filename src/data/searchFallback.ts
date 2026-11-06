import { DetailKind, SearchResultItem } from '../types/diagnostics';
import {
  FIELD_GUIDES,
  TROUBLE_CODES,
  normalizeQuery,
  searchDiagnosticLibrary,
} from './diagnosticsData';

// Everyday filler words that should not drive matching when the exact
// phrase search finds nothing. For the query: why wont my car start -
// only car and start carry meaning here.
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'my', 'me', 'you', 'your', 'why', 'how', 'what',
  'when', 'where', 'is', 'are', 'was', 'were', 'be', 'been', 'do',
  'does', 'did', 'it', 'its', 'of', 'and', 'or', 'to', 'in', 'on',
  'for', 'with', 'not', 'there', 'that', 'this', 'if', 'can', 'will',
  'just', 'about',
]);

// Wraps searchDiagnosticLibrary with a forgiving fallback: when no entry
// matches every word, rank entries by how many meaningful words they
// contain and return the closest ones, so a natural-language question
// still lands on useful draft content instead of an empty result grid.
export function searchWithFallback(
  rawQuery: string
): { status: string; results: SearchResultItem[] } {
  const primary = searchDiagnosticLibrary(rawQuery);
  if (primary.results.length > 0 || !rawQuery) {
    return primary;
  }

  const words = normalizeQuery(rawQuery)
    .split(' ')
    .filter((word) => word && !STOP_WORDS.has(word));
  if (!words.length) {
    return primary;
  }

  const scoreFor = (haystack: string): number =>
    words.reduce(
      (count, word) => (haystack.includes(word) ? count + 1 : count),
      0
    );

  const scored: { result: SearchResultItem; score: number }[] = [];

  for (const codeItem of TROUBLE_CODES) {
    const haystack = normalizeQuery(
      [
        codeItem.code,
        ...(codeItem.searchTerms ?? []),
        codeItem.title,
        codeItem.summary,
        codeItem.meaning,
        codeItem.category,
        ...(codeItem.symptoms ?? []),
        ...codeItem.causes,
      ].join(' ')
    );
    const score = scoreFor(haystack);
    if (score > 0) {
      scored.push({
        result: {
          kind: DetailKind.Code,
          id: codeItem.code,
          badge: codeItem.code,
          title: codeItem.title,
          summary: codeItem.summary,
          meta: 'Trouble code | Draft',
        },
        score,
      });
    }
  }

  for (const guideItem of FIELD_GUIDES) {
    const haystack = normalizeQuery(
      [
        guideItem.title,
        guideItem.summary,
        guideItem.search,
        guideItem.type,
        ...guideItem.sections.map((section) => section.body ?? ''),
        ...guideItem.sections.flatMap((section) => section.items ?? []),
      ].join(' ')
    );
    const score = scoreFor(haystack);
    if (score > 0) {
      scored.push({
        result: {
          kind: DetailKind.Guide,
          id: guideItem.id,
          badge: guideItem.type,
          title: guideItem.title,
          summary: guideItem.summary,
          meta: 'Field guide | ' + guideItem.time + ' | Draft',
        },
        score,
      });
    }
  }

  if (!scored.length) {
    return primary;
  }

  scored.sort((a, b) => b.score - a.score);
  return {
    status:
      'No exact match - these are the closest topics in the draft library.',
    results: scored.slice(0, 6).map((entry) => entry.result),
  };
}
