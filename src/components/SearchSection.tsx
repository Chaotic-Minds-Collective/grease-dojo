import React, { useRef } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { QUICK_SEARCHES, QUICK_SEARCHES_ES } from '../data/localeData';
import { DetailKind, DetailSelection, SearchResultItem } from '../types/diagnostics';

interface SearchSectionProps {
  query: string;
  onQueryChange: (value: string) => void;
  onRunSearch: (queryValue: string, resultsEl?: HTMLDivElement | null) => void;
  statusMessage: string;
  results: SearchResultItem[];
  onOpenDetail: (selection: DetailSelection) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  query,
  onQueryChange,
  onRunSearch,
  statusMessage,
  results,
  onOpenDetail,
}) => {
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const { t, lang } = useLang();
  const quickSearches = lang === 'es' ? QUICK_SEARCHES_ES : QUICK_SEARCHES;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRunSearch(query, resultsRef.current);
  };

  const handleQuickLookup = (quickQuery: string) => {
    onQueryChange(quickQuery);
    onRunSearch(quickQuery, resultsRef.current);
  };

  return (
    <section className="section-wrap search-section" id="search">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> {t('START YOUR INVESTIGATION')}
          </div>
          <h2>
            {t('What is the vehicle')} <span className="text-cyan">{t('telling you?')}</span>
          </h2>
        </div>
        <p>
          {t('Search a trouble code, a symptom, or a guide topic. Results are drawn from an educational library, not live vehicle data.')}
        </p>
      </div>

      <form className="search-box" id="searchForm" role="search" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="siteSearch">
          {t('Search trouble codes, symptoms, and guides')}
        </label>
        <span className="search-icon" aria-hidden="true">
          ⌕
        </span>
        <input
          id="siteSearch"
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={t('Try P0300, clicking noise, dead battery…')}
          autoComplete="off"
        />
        <button className="button button-primary" type="submit">
          {t('Search')} <span aria-hidden="true">↗</span>
        </button>
      </form>

      <div className="quick-searches" aria-label={t('Popular searches')}>
        <span>{t('QUICK LOOKUP')}</span>
        {quickSearches.map((item) => (
          <button
            key={item.query}
            type="button"
            onClick={() => handleQuickLookup(item.query)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div id="searchStatus" className="search-status" aria-live="polite">
        {statusMessage}
      </div>

      <div
        id="searchResults"
        ref={resultsRef}
        className="result-grid"
        aria-live="polite"
      >
        {results.map((item) => (
          <button
            key={`${item.kind}-${item.id}`}
            type="button"
            className="result-card"
            aria-haspopup="dialog"
            onClick={() => onOpenDetail({ kind: item.kind, id: item.id })}
          >
            <div className="card-topline">
              <span
                className={
                  item.kind === DetailKind.Code ? 'code-badge' : 'card-type'
                }
              >
                {item.badge}
              </span>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span className="card-meta">{item.meta}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
