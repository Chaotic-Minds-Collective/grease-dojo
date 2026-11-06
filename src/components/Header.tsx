import React, { useEffect, useState } from 'react';

// Always-visible tab navigation. Replaces the previous hamburger menu:
// on a phone every destination is one glance and one tap away, and the
// active tab is highlighted. The strip scrolls sideways when the labels
// do not all fit.
const TABS = [
  { href: '#/', label: 'Home' },
  { href: '#/lab', label: 'Diagnostic Lab' },
  { href: '#/symptoms', label: 'Symptoms' },
  { href: '#/triage', label: 'Guided Intake' },
  { href: '#/guides', label: 'Fix Database' },
  { href: '#/learning', label: 'Learning' },
  { href: '#/reference', label: 'Reference' },
  { href: '#/about', label: 'About' },
  { href: '#/contact', label: 'Contact' },
];

function isTabActive(hash: string, href: string): boolean {
  if (href === '#/') {
    return hash === '' || hash === '#' || hash === '#/';
  }
  return hash === href;
}

export const Header: React.FC = () => {
  const [hash, setHash] = useState<string>(() =>
    typeof window === 'undefined' ? '' : window.location.hash
  );

  // Keep the active tab in sync with hash navigation, including the
  // browser back/forward buttons.
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span className="status-dot" aria-hidden="true" />
        <strong>CONCEPT BUILD</strong>
        <span>
          Educational drafts are under mechanic review. The Greasy Dojo relaunch is in progress.
        </span>
      </div>
      <header className="site-header" id="top">
        <a className="brand" href="#/" aria-label="The Greasy Dojo home">
          <img
            src={`${import.meta.env.BASE_URL}assets/brand-mark.svg`}
            alt=""
            width={46}
            height={46}
          />
          <span className="brand-copy">
            <strong>
              THE <em>GREASY DOJO</em>
            </strong>
            <small>WE HELP YOU FIND THE FAULT - OR TEACH YOU TO FIND IT</small>
          </span>
        </a>
        <nav className="tab-nav" aria-label="Main navigation">
          {TABS.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className={isTabActive(hash, tab.href) ? 'is-active' : undefined}
              aria-current={isTabActive(hash, tab.href) ? 'page' : undefined}
            >
              {tab.label}
            </a>
          ))}
          <a className="tab-cta" href="#/symptoms">
            Start diagnosis <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
    </>
  );
};
