import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-cyan" aria-hidden="true" />
      <div className="hero-glow hero-glow-red" aria-hidden="true" />
      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-line" /> EVIDENCE-LED AUTOMOTIVE LEARNING
        </div>
        <h1>
          Find the fault.
          <br />
          <span className="text-cyan">Not just a part.</span>
        </h1>
        <p className="hero-lede">
          That warning light is a clue, not a verdict. Connect trouble codes,
          symptoms, and sensible next tests before your wallet becomes a parts
          cannon.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#search">
            Enter the Diagnostic Lab <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-ghost" href="#/guides">
            Browse the Fix Database
          </a>
        </div>
        <div className="hero-proof">
          <span><b>01</b> Gather evidence</span>
          <span><b>02</b> Test before replacing</span>
          <span><b>03</b> Know when to stop</span>
        </div>
      </div>

      <div
        className="hero-console"
        aria-label="Illustrative garage concept art and diagnostic console; not connected to a vehicle"
      >
        <div className="hero-portrait">
          <span className="portrait-label">CONCEPT VISUAL / 001</span>
          <img
            className="hero-mascot"
            src={`${import.meta.env.BASE_URL}assets/hero-banner.png`}
            alt="Garage workshop concept art with warm light over a workbench; illustrative, not connected to a vehicle"
            width="560"
            height="580"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <span className="portrait-caption">THE SIGNAL ISN'T THE SOLUTION.</span>
        </div>
        <div className="console-top">
          <span><i className="status-dot" /> DOJO SYSTEM / CONCEPT</span>
          <span className="console-version">SYS. 001</span>
        </div>
        <div className="scan-screen">
          <div className="scan-heading">
            <span>DIAGNOSTIC OVERVIEW</span>
            <span className="scan-live">● STANDBY</span>
          </div>
          <div className="scan-symbol" aria-hidden="true">
            <svg viewBox="0 0 160 120">
              <path d="M25 29h110v62H25z" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M39 45h30m-30 13h17m-17 13h25" stroke="#ff7a18" strokeWidth="3" strokeLinecap="round" />
              <path d="M91 27 74 61h20l-8 32 28-43H95z" fill="#e2bc58" />
              <circle cx="125" cy="44" r="5" fill="#e94b4b" />
            </svg>
          </div>
          <div className="scan-bars">
            <span>CODE SEARCH <b>READY</b></span>
            <span>SYMPTOM CHECK <b>READY</b></span>
            <span>LIVE VEHICLE DATA <b>NOT CONNECTED</b></span>
          </div>
        </div>
        <div className="console-bottom">
          <span>NO GUESSWORK</span>
          <span>JUST GOOD TESTS <b>///</b></span>
        </div>
        <div className="console-chip chip-one"><span className="chip-dot" /> EVIDENCE FIRST</div>
        <div className="console-chip chip-two">OBD-II <b>FIELD NOTES</b></div>
      </div>

      <div className="hero-bottom">
        <span>FIELD NOTES FOR REAL-WORLD DIAGNOSIS</span>
        <span><b>PRE-LAUNCH</b> / CONTENT REVIEW</span>
      </div>
    </section>
  );
};
