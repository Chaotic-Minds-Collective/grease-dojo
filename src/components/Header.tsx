import React from 'react';

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

// Same page-route contract App uses: routes under "#/" are pages; any
// other fragment is an in-page anchor or legacy hash.
function isPageRoute(route: string): boolean {
  return route.startsWith('#/');
}

/**
 * Resolve App's committed route to the page whose tab should be active.
 * Page routes map to themselves; the legacy section fragments App still
 * renders content for ("#guides", "#learning", "#safety-lesson") map to
 * their matching page tabs; every other fragment (in-page anchors such
 * as "#search", unknown routes) falls back to the home tab, matching
 * App's home fallback render.
 */
function resolvePage(route: string): string {
  if (isPageRoute(route)) {
    return route;
  }
  if (route === '#guides') {
    return '#/guides';
  }
  if (route === '#learning' || route === '#safety-lesson') {
    return '#/learning';
  }
  return '#/';
}

/**
 * Decide whether a tab matches the resolved page.
 */
function isTabActive(resolvedPage: string, href: string): boolean {
  return resolvedPage === href;
}

interface HeaderProps {
  /** App's committed route state, shared with the page-render logic. */
  route: string;
}

/**
 * Sticky site header: brand, announcement bar, and the always-visible
 * tab navigation. The active tab is derived from the route App passes
 * down, so the highlight always agrees with the rendered page.
 */
export const Header: React.FC<HeaderProps> = ({ route }) => {
  const resolvedPage = resolvePage(route);

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
              className={isTabActive(resolvedPage, tab.href) ? 'is-active' : undefined}
              aria-current={isTabActive(resolvedPage, tab.href) ? 'page' : undefined}
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
