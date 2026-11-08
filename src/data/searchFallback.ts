import { STATUS_ES, searchResult } from './localeData';
import { allCodes, normalizeQuery } from './diagnosticsData';
import { allGuides } from './diagnosticsData';
import type { Lang } from './localeData';

const DIAGNOSTIC_CODES = allCodes();
const FIELD_GUIDES = allGuides();

/**
 * Search result limit, returns up to 3 most relevant results.
 */
const MAX_RESULTS = 3;

/**
 * Searches the library across codes and guides.
 *
 * For each type, results are scored: exact matches score highest, then prefix
 * matches, then substring matches. Results are capped at MAX_RESULTS per type.
 * If the query has no matches at all, the fallback is an empty results array
 * with a "no exact match" status.
 */
export function searchWithFallback(
  query: string,
  lang: Lang
): { results: searchResult[]; status: string } {
  const q = normalizeQuery(query);

  if (!q) return { results: [], status: '' };

  // Search across the diagnostic code library
  const codeResults: searchResult[] = [];
  for (const code of DIAGNOSTIC_CODES) {
    if (codeResults.length >= MAX_RESULTS) break;

    const haystack = normalizeQuery(
      [code.code, code.symptom, code.category, ...(code.related ?? [])].join(' ')
    );

    let score = 0;
    if (haystack.includes(q)) {
      if (haystack.startsWith(q)) {
        // Full phrase match at the start — highest relevance
        score = haystack === q ? 100 : 80;
      } else {
        score = 50;
      }
    } else if (q.length >= 3 && haystack.includes(q.slice(0, 3))) {
      // Partial trigram match — low relevance fallback
      score = 10;
    }

    if (score > 0) {
      codeResults.push({
        code: code.code,
        title: code.code,
        type: 'code',
        snippet:
          lang === 'es'
            ? code.symptomEs ?? code.symptom
            : code.symptom,
        meta:
          lang === 'es'
            ? 'Código de falla'
            : 'Trouble code',
        score,
      });
    }
  }

  // Search across the field guide library
  const guideResults: searchResult[] = [];
  for (const guide of FIELD_GUIDES) {
    if (guideResults.length >= MAX_RESULTS) break;

    const haystack = normalizeQuery(
      [guide.title, guide.subtitle, guide.category].join(' ')
    );

    let score = 0;
    if (haystack.includes(q)) {
      if (haystack.startsWith(q)) {
        score = haystack === q ? 100 : 80;
      } else {
        score = 50;
      }
    } else if (q.length >= 3 && haystack.includes(q.slice(0, 3))) {
      score = 10;
    }

    if (score > 0) {
      guideResults.push({
        code: guide.id,
        title: guide.title,
        type: 'guide',
        snippet:
          lang === 'es'
            ? guide.subtitleEs ?? guide.subtitle
            : guide.subtitle,
        meta:
          lang === 'es'
            ? 'Guía de campo'
            : 'Field guide',
        score,
      });
    }
  }

  // Merge and sort results by score (descending)
  const merged = [...codeResults, ...guideResults].sort(
    (a, b) => b.score - a.score
  );

  if (merged.length > 0) {
    const count = merged.length;
    return {
      results: merged.slice(0, MAX_RESULTS),
      status:
        lang === 'es'
          ? `${count}${STATUS_ES.found}`
          : `${count}${count === 1 ? ' result found. Open a result to review the guidance.' : ' results found. Open a result to review the guidance.'}`,
    };
  }

  // No matches — try fallback fuzzy match
  const fallback = [...DIAGNOSTIC_CODES, ...FIELD_GUIDES]
    .filter((item) => {
      const text = normalizeQuery(
        'title' in item
          ? item.title
          : [item.code, item.symptom].join(' ')
      );
      return text && q.length >= 3 && text.includes(q.slice(0, 3));
    })
    .slice(0, MAX_RESULTS);

  if (fallback.length > 0) {
    const results: searchResult[] = fallback.map((item) => ({
      code: 'code' in item ? item.code : item.id,
      title: 'title' in item ? item.title : item.code,
      type: 'type' in item ? 'guide' as const : 'code' as const,
      snippet:
        'subtitle' in item
          ? lang === 'es'
            ? (item.subtitleEs ?? item.subtitle)
            : item.subtitle
          : lang === 'es'
            ? (item.symptomEs ?? item.symptom)
            : item.symptom,
      meta:
        'subtitle' in item
          ? lang === 'es'
            ? 'Guía de campo'
            : 'Field guide'
          : lang === 'es'
            ? 'Código de falla'
            : 'Trouble code',
      score: 0,
    }));

    return {
      results,
      status:
        lang === 'es'
          ? STATUS_ES.close
          : 'No exact match - these are the closest topics in the library.',
    };
  }

  return {
    results: [],
    status:
      lang === 'es'
        ? STATUS_ES.none
        : 'No exact match in the library. Try a shorter symptom, a code such as P0300, or browse all guides.',
  };
}
