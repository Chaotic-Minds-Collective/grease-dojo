import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { symptomItemsFor } from '../data/localeData';

interface SymptomsSectionProps {
  onSelectSymptom: (symptomQuery: string) => void;
}

export const SymptomsSection: React.FC<SymptomsSectionProps> = ({
  onSelectSymptom,
}) => {
  const { t, lang } = useLang();
  const symptoms = symptomItemsFor(lang);
  const handleSymptomClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    symptomQuery: string
  ) => {
    event.preventDefault();
    onSelectSymptom(symptomQuery);
  };

  return (
    <section className="section-wrap symptoms-section" id="symptoms">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> {t('SYMPTOM-BASED TROUBLESHOOTING')}
          </div>
          <h2>
            {t('Start with what')} <span className="text-cyan">{t('you noticed.')}</span>
          </h2>
        </div>
        <p>
          {t('The same symptom can have several causes. Choose the closest match to explore safe first observations and possible next tests.')}
        </p>
      </div>

      <div className="symptom-grid">
        {symptoms.map((item) => (
          <a
            key={item.index}
            className="symptom-card"
            href="#search"
            onClick={(e) => handleSymptomClick(e, item.query)}
          >
            <span className="symptom-icon">{item.icon}</span>
            <span className="symptom-index">{item.index}</span>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
            <span className="symptom-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};
