import React from 'react';

// Tally embed URL for the contact form (free plan, unlimited responses).
// Form: "Contact The Greasy Dojo" at https://tally.so/r/M1Xj4p
// To swap forms later, replace the URL with the new Tally share link.
const TALLY_FORM_URL = 'https://tally.so/r/M1Xj4p';

// Scrolling for the contact route is handled centrally in App (scroll to
// top on navigation, browser-restored position on back/forward), so this
// component only renders the page.
export const ContactPage: React.FC = () => {
  return (
    <div className="contact-main">
      <div className="contact-inner">
        <div className="eyebrow">
          <span className="eyebrow-line" /> CONTACT THE DOJO
        </div>
        <h1 className="contact-title">
          Questions? Corrections?
          <br />
          <span className="text-gold">Tell us.</span>
        </h1>
        <p className="contact-intro">
          Found an error in a guide, have an idea for the platform, or want to
          know when the full launch happens? Send it over - messages from real
          DIYers shape what we build next.
        </p>
        <div className="contact-panel">
          {TALLY_FORM_URL ? (
            <iframe
              className="contact-iframe"
              src={`${TALLY_FORM_URL}?transparentBackground=true`}
              title="Contact form"
              loading="lazy"
            />
          ) : (
            <div className="contact-pending">
              <strong>FORM IS BEING SET UP</strong>
              <span>
                The contact form launches shortly. Check back soon.
              </span>
            </div>
          )}
        </div>
        <p className="contact-safety-note">
          Safety note: this form is not a repair hotline. If a vehicle has a
          condition that could cause injury - fuel leaks, brake failure,
          exposed wiring - stop and contact a qualified professional
          immediately.
        </p>
      </div>
    </div>
  );
};
