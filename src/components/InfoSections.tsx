import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { safetyRulesFor } from '../data/localeData';

export const LearningSection: React.FC = () => {
  const { t } = useLang();
  return (
    <section className="learning-section" id="learning">
      <div className="section-wrap learning-layout">
        <div className="learning-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> {t('LEARNING PATHS')}
          </div>
          <h2>
            {t('Learn the logic.')}
            <br />
            <span className="text-gold">{t('Not just the lingo.')}</span>
          </h2>
          <p>
            {t('Build confidence with the fundamentals behind a good diagnostic process. This preview is educational content, not a personalized training account.')}
          </p>
          <div className="learning-points">
            <div>
              <span>01</span>
              <div>
                <strong>{t('Start with safety')}</strong>
                <small>{t('Recognize hazards before tools come out.')}</small>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <strong>{t('Understand the signal')}</strong>
                <small>{t('Codes, scan tools, and electrical basics.')}</small>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <strong>{t('Practice evidence-led testing')}</strong>
                <small>
                  {t('Use observations to choose the next sensible check.')}
                </small>
              </div>
            </div>
          </div>
          <a className="button button-primary" href="#safety-lesson">
            {t('Try the safety knowledge check')} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <article className="learning-card">
          <div className="learning-card-top">
            <span>{t('FOUNDATIONS / PREVIEW')}</span>
            <span className="learning-bolt">ϟ</span>
          </div>
          <div className="learning-seal">
            <img
              src={`${import.meta.env.BASE_URL}assets/brand-mark.svg`}
              alt=""
              width={88}
              height={88}
            />
          </div>
          <span className="learning-level">
            {t('LEVEL 01')} <i>{t('BEGINNER')}</i>
          </span>
          <h3>{t('Automotive Safety')}</h3>
          <p>
            {t('Start with stable lifting, electrical precautions, hot components, and knowing when a job needs professional equipment.')}
          </p>
          <div className="learning-progress">
            <span>{t('MODULE PREVIEW')}</span>
            <span>{t('CONTENT IN REVIEW')}</span>
          </div>
          <a className="text-link" href="#safety-lesson">
            {t('Start the knowledge check')} <span>↗</span>
          </a>
        </article>
      </div>
    </section>
  );
};

export const SafetySection: React.FC = () => {
  const { t, lang } = useLang();
  return (
    <section className="safety-section" id="safety">
      <div className="section-wrap safety-layout">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> {t('THE NON-NEGOTIABLES')}
          </div>
          <h2>
            {t('Some problems')}
            <br />
            {t("aren't")} <span className="text-red">{t('DIY.')}</span>
          </h2>
          <p className="safety-intro">
            {t('Confidence is useful. Knowing when to stop is a diagnostic skill, too.')}
          </p>
        </div>
        <div className="safety-list">
          {safetyRulesFor(lang).map((rule) => (
            <article key={rule.title}>
              <span className="safety-icon">{rule.icon}</span>
              <div>
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutSection: React.FC = () => {
  const { t } = useLang();
  return (
    <section className="section-wrap about-section" id="about">
      <div className="about-card">
        <div className="about-icon">
          <img
            src={`${import.meta.env.BASE_URL}assets/brand-mark.svg`}
            alt=""
            width={64}
            height={64}
          />
        </div>
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> {t('THE RULES OF THE DOJO')}
          </div>
          <h2>
            {t('Evidence over ego.')}
            <br />
            <span className="text-gold">{t('Every time.')}</span>
          </h2>
          <p>
            {t('We explain what a code means, what might cause it, and what test can help narrow it down. We separate facts from possibilities, flag hazards, and point out when professional diagnosis is the right move.')}
          </p>
          <div className="rule-tags">
            <span>{t('NO PARTS-CANNON DIAGNOSIS')}</span>
            <span>{t('SAFETY FIRST')}</span>
            <span>{t('VEHICLE-SPECIFIC SPECS')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand" href="#/">
          <img
            src={`${import.meta.env.BASE_URL}assets/brand-mark.svg`}
            alt=""
            width={42}
            height={42}
          />
          <span className="brand-copy">
            <strong>
              THE <em>GREASY DOJO</em>
            </strong>
            <small>{t('WE HELP YOU FIND THE FAULT - OR TEACH YOU TO FIND IT')}</small>
          </span>
        </a>
        <p>
          {t('A working concept for a clearer, safer way to learn automotive diagnostics.')}
        </p>
        <a className="back-top" href="#/">
          {t('Back to the Dojo')} ↑
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © <span id="year">{currentYear}</span> Grease Dojo · {t('Working concept')}
        </span>
        <span>
          {t('Educational resource · Not a substitute for vehicle-specific service information')}
        </span>
        <span className="footer-status">
          <i /> {t('PRE-LAUNCH')} / {t('CONTENT REVIEW')}
        </span>
      </div>
    </footer>
  );
};
