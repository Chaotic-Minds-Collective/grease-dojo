import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span className="status-dot" aria-hidden="true" />
        <strong>CONCEPT BUILD</strong>
        <span>
          Educational drafts are under mechanic review. Brand identity is approved. Site not yet relaunched.
        </span>
      </div>
      <header className="site-header" id="top">
        <a
          className="brand"
          href="#top"
          aria-label="The Diagnostic Bay home"
          onClick={handleLinkClick}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/brand-mark.svg`}
            alt=""
            width={46}
            height={46}
          />
          <span className="brand-copy">
            <strong>
              THE <em>DIAGNOSTIC BAY</em>
            </strong>
            <small>WE HELP YOU FIND THE FAULT - OR TEACH YOU TO FIND IT</small>
          </span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          id="menuToggle"
          aria-expanded={menuOpen}
          aria-controls="mainNav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu <span aria-hidden="true">☰</span>
        </button>
        <nav
          id="mainNav"
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#top" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#diagnostic-lab" onClick={handleLinkClick}>
            Diagnostic Lab
          </a>
          <a href="#symptoms" onClick={handleLinkClick}>
            Symptoms
          </a>
          <a href="#guided-triage" onClick={handleLinkClick}>
            Guided Intake
          </a>
          <a href="#guides" onClick={handleLinkClick}>
            Fix Database
          </a>
          <a href="#learning" onClick={handleLinkClick}>
            Learning
          </a>
          <a href="#/contact" onClick={handleLinkClick}>
            Contact
          </a>
          <a className="nav-cta" href="#search" onClick={handleLinkClick}>
            Start diagnosis <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
    </>
  );
};
