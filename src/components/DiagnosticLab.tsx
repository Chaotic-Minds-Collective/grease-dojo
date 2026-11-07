import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { CATEGORY_LABELS_ES, FILTER_TABS, FILTER_TABS_ES, troubleCodesFor } from '../data/localeData';
import { CodeCategory, DetailKind, DetailSelection } from '../types/diagnostics';

interface DiagnosticLabProps {
  onOpenDetail: (selection: DetailSelection) => void;
}

export const DiagnosticLab: React.FC<DiagnosticLabProps> = ({ onOpenDetail }) => {
  const [activeFilter, setActiveFilter] = useState<CodeCategory>(CodeCategory.All);
  const { lang, t } = useLang();
  const codes = troubleCodesFor(lang);
  // FILTER_TABS predates the transmission library; extend it here so
  // the new codes are filterable without touching the shared module.
  const filterTabsExtended = [
    ...(lang === 'es' ? FILTER_TABS_ES : FILTER_TABS),
    { label: t('Transmission'), value: CodeCategory.Transmission },
  ];

  const visibleCodes =
    activeFilter === CodeCategory.All
      ? codes
      : codes.filter((item) => item.category === activeFilter);

  return (
    <section className="dark-section" id="diagnostic-lab">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> {t('THE DIAGNOSTIC LAB')}
            </div>
            <h2>
              {t('A code is a clue.')}
              <br />
              <span className="text-gold">{t('Build the case.')}</span>
            </h2>
          </div>
          <p>
            {t('Browse common OBD-II examples, then open a result for possible causes and next checks. A code never proves a component has failed on its own.')}
          </p>
        </div>

        <div className="lab-toolbar">
          <div
            className="filter-tabs"
            role="group"
            aria-label={t('Filter trouble codes')}
          >
            {filterTabsExtended.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  className={`filter-tab${isActive ? ' is-active' : ''}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(tab.value)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span className="draft-note">
            <span className="status-dot" /> {t('Draft library · mechanic review pending')}
          </span>
        </div>

        <div className="code-grid" id="codeGrid">
          {visibleCodes.map((codeItem) => (
            <button
              key={codeItem.code}
              type="button"
              className="code-card"
              aria-haspopup="dialog"
              onClick={() =>
                onOpenDetail({ kind: DetailKind.Code, id: codeItem.code })
              }
            >
              <div className="card-topline">
                <span className="code-badge">{codeItem.code}</span>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{codeItem.title}</h3>
              <p>{codeItem.summary}</p>
              <span className="card-meta">
                {lang === 'es'
                  ? `${CATEGORY_LABELS_ES[codeItem.category] ?? codeItem.category} · ${t('Draft')}`
                  : `${codeItem.category.replace('-', ' & ')} · Draft`}
              </span>
            </button>
          ))}
        </div>

        <div className="section-footnote">
          <span className="footnote-mark">!</span>
          <p>
            <strong>{t('Safety first:')}</strong> {t('a flashing check-engine light, severe shaking, smoke, fuel smell, overheating, or major loss of power can indicate an urgent problem. Stop somewhere safe and seek qualified help rather than continuing to drive.')}
          </p>
        </div>
      </div>
    </section>
  );
};
