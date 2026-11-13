import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import './SiteNotices.css';

export const SiteNotices: React.FC = () => {
  const { t } = useLang();
  return (
    <section className="site-notices-section" id="site-notices">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> {t('BEFORE YOU USE THE DOJO')}
            </div>
            <h2>
              {t('Clear limits.')} <span className="text-gold">{t('No guesswork.')}</span>
            </h2>
          </div>
          <p>          {t('Important information about the educational content, the tools available in this build, and how information entered on this page is handled.')}
          </p>
        </div>

        <div className="notice-grid">
          <article className="notice-card">
            <span className="notice-label">{t('EDUCATIONAL USE')}</span>
            <h3>{t('Not a vehicle-specific diagnosis')}</h3>
            <p>            {t('Grease Dojo provides general educational information and tools for organizing observations. It cannot inspect your vehicle, verify a trouble code, read live data, or confirm a failed component. A trouble code is evidence, not proof of a particular failure.')}
            </p>
            <p>            {t("Always use the owner's manual and the manufacturer's service information for the exact vehicle. Specifications and procedures vary by year, model, engine, equipment, and market.")}
            </p>
          </article>

          <article className="notice-card notice-card-warning">
            <span className="notice-label">{t('SAFETY FIRST')}</span>
            <h3>{t('Stop when the situation is unsafe')}</h3>
            <p>            {t('Do not use this site as a reason to keep driving or continue a repair when a vehicle may be unsafe. Stop in a safe location and arrange qualified help for severe misfire, overheating, oil pressure warnings, fuel leaks, smoke, brake or steering faults, or loss of vehicle control.')}
            </p>
            <p>            {t('Never work under a vehicle supported only by a jack. Do not open a hot pressurized cooling system. Follow vehicle-specific procedures for batteries, electrical systems, fuel systems, and lifting points.')}
            </p>
          </article>

          <article className="notice-card">
            <span className="notice-label">{t('CURRENT DATA HANDLING')}</span>
            <h3>{t('No account or saved case history')}</h3>
            <p>            {t('This build does not provide accounts, saved diagnostic histories, or a backend connection. The Case Worksheet keeps entries in page memory and does not send them to the application server. Leaving the page clears the worksheet.')}
            </p>
            <p>            {t('If you copy or print a report, you choose where to share it. Avoid entering names, addresses, contact details, or other personal information that is not needed to describe the vehicle concern.')}
            </p>
          </article>

          <article className="notice-card">
            <span className="notice-label">{t('EXTERNAL SERVICES')}</span>
            <h3>{t('External links and the contact form')}</h3>
            <p>            {t('The Reference Desk links to external organizations. When you open an external site, that organization\'s privacy, access, and service terms apply. Availability and requirements may change.')}
            </p>
            <p>            {t('The website host may process standard connection and access logs under its own policies. The final hosting and privacy notice must be confirmed before public release.')}
            </p>
            <p>
              {t('The contact form is embedded from Tally. If you submit it, the information you enter is sent to Tally and processed on behalf of the form owner. Review Tally’s Privacy Notice before submitting. The form owner controls access to and retention of submitted responses. Do not include sensitive personal information.')}{' '}
              <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noreferrer">
                {t('Tally’s Privacy Notice')}
              </a>.
            </p>
          </article>
        </div>

        <p className="notice-review-note">
          <strong>{t('Release status:')}</strong> {t('These notices are implementation drafts, not legal advice or a completed legal review. Final wording, hosting disclosures, applicable terms, and jurisdiction-specific requirements must be reviewed before public launch.')}
        </p>
      </div>
    </section>
  );
};

export default SiteNotices;
