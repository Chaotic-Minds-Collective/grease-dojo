import React from 'react';
import { useLang } from '../i18n/LanguageContext';

// Tally embed URL for the contact form (free plan, unlimited responses).
// Form: "Contact The Greasy Dojo" at https://tally.so/r/M1Xj4p
// To swap forms later, replace the URL with the new Tally share link.
const TALLY_FORM_URL = 'https://tally.so/r/M1Xj4p';

// Scrolling for the contact route is handled centrally in App (scroll to
// top on navigation, browser-restored position on back/forward), so this
// component only renders the page.
export const ContactPage: React.FC = () => {
  const { t } = useLang();
  return (
    <div className="contact-main">
      <div className="contact-inner">
        <div className="eyebrow">
          <span className="eyebrow-line" /> {t('CONTACT THE DOJO')}
        </div>
        <h1 className="contact-title">
          {t('Questions? Corrections?')}
          <br />
          <span className="text-gold">{t('Tell us.')}</span>
        </h1>
        <p className="contact-intro">
          {t('Found an error in a guide, have an idea for the platform, or want to know when the full launch happens? Send it over - messages from real DIYers shape what we build next.')}
        </p>
        <div className="contact-panel">
          {TALLY_FORM_URL ? (
            <iframe
              className="contact-iframe"
              src={`${TALLY_FORM_URL}?transparentBackground=true`}
              title={t('Contact form')}
              loading="lazy"
            />
          ) : (
            <div className="contact-pending">
              <strong>{t('FORM IS BEING SET UP')}</strong>
              <span>
                {t('The contact form launches shortly. Check back soon.')}
              </span>
            </div>
          )}
        </div>
        <p className="contact-privacy-note">
          {t('The contact form is embedded from Tally. If you submit it, the information you enter is sent to Tally and processed on behalf of the form owner. Review Tally’s Privacy Notice before submitting. The form owner controls access to and retention of submitted responses. Do not include sensitive personal information.')}{' '}
          <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noreferrer">
            {t('Tally’s Privacy Notice')}
          </a>.
        </p>
        <p className="contact-safety-note">
          {t('Safety note: this form is not a repair hotline. If a vehicle has a condition that could cause injury - fuel leaks, brake failure, exposed wiring - stop and contact a qualified professional immediately.')}
        </p>
      </div>
    </div>
  );
};
