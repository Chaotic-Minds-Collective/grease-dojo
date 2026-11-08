import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { fieldGuidesFor } from '../data/localeData';
import { DetailKind, DetailSelection } from '../types/diagnostics';

interface GuidesSectionProps {
  onOpenDetail: (selection: DetailSelection) => void;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ onOpenDetail }) => {
  const { lang, t } = useLang();
  const guides = fieldGuidesFor(lang);
  return (
    <section className="dark-section" id="guides">
      <div className="section-wrap guides-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> {t('FIX DATABASE / FIELD GUIDES')}
            </div>
            <h2>
              {t('Follow the trail.')}
              <br />
              <span className="text-cyan">{t('One test at a time.')}</span>
            </h2>
          </div>
          <p>
            {t('Practical starting points for common complaints. Each guide follows a test-before-replace approach.')}
          </p>
        </div>

        <div className="guide-grid" id="guideGrid">
          {guides.map((guide) => (
            <button
              key={guide.id}
              type="button"
              className="guide-card"
              aria-haspopup="dialog"
              onClick={() =>
                onOpenDetail({ kind: DetailKind.Guide, id: guide.id })
              }
            >
              <span className="guide-icon">{guide.icon}</span>
              <div className="card-topline">
                <span className="card-type">{guide.type}</span>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{guide.title}</h3>
              <p>{guide.summary}</p>
              <span className="card-meta">{`${guide.time} ${t('read')}`}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
