import React from 'react';
import { SAFETY_RULES } from '../data/diagnosticsData';

export const LearningSection: React.FC = () => {
  return (
    <section className="learning-section" id="learning">
      <div className="section-wrap learning-layout">
        <div className="learning-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> LEARNING PATHS
          </div>
          <h2>
            Learn the logic.
            <br />
            <span className="text-gold">Not just the lingo.</span>
          </h2>
          <p>
            Build confidence with the fundamentals behind a good diagnostic
            process. This preview is educational content, not a personalized
            training account.
          </p>
          <div className="learning-points">
            <div>
              <span>01</span>
              <div>
                <strong>Start with safety</strong>
                <small>Recognize hazards before tools come out.</small>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <strong>Understand the signal</strong>
                <small>Codes, scan tools, and electrical basics.</small>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <strong>Practice evidence-led testing</strong>
                <small>
                  Use observations to choose the next sensible check.
                </small>
              </div>
            </div>
          </div>
          <a className="button button-primary" href="#safety-lesson">
            Try the safety knowledge check <span aria-hidden="true">↗</span>
          </a>
        </div>

        <article className="learning-card">
          <div className="learning-card-top">
            <span>FOUNDATIONS / PREVIEW</span>
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
            LEVEL 01 <i>BEGINNER</i>
          </span>
          <h3>Automotive Safety</h3>
          <p>
            Start with stable lifting, electrical precautions, hot components,
            and knowing when a job needs professional equipment.
          </p>
          <div className="learning-progress">
            <span>MODULE PREVIEW</span>
            <span>CONTENT IN REVIEW</span>
          </div>
          <a className="text-link" href="#safety-lesson">
            Start the knowledge check <span>↗</span>
          </a>
        </article>
      </div>
    </section>
  );
};

export const SafetySection: React.FC = () => {
  return (
    <section className="safety-section" id="safety">
      <div className="section-wrap safety-layout">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> THE NON-NEGOTIABLES
          </div>
          <h2>
            Some problems
            <br />
            aren&apos;t <span className="text-red">DIY.</span>
          </h2>
          <p className="safety-intro">
            Confidence is useful. Knowing when to stop is a diagnostic skill,
            too.
          </p>
        </div>
        <div className="safety-list">
          {SAFETY_RULES.map((rule) => (
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
            <span className="eyebrow-line" /> THE RULES OF THE DOJO
          </div>
          <h2>
            Evidence over ego.
            <br />
            <span className="text-gold">Every time.</span>
          </h2>
          <p>
            We explain what a code means, what might cause it, and what test can
            help narrow it down. We separate facts from possibilities, flag
            hazards, and point out when professional diagnosis is the right
            move.
          </p>
          <div className="rule-tags">
            <span>NO PARTS-CANNON DIAGNOSIS</span>
            <span>SAFETY FIRST</span>
            <span>VEHICLE-SPECIFIC SPECS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
            <small>WE HELP YOU FIND THE FAULT - OR TEACH YOU TO FIND IT</small>
          </span>
        </a>
        <p>
          A working concept for a clearer, safer way to learn automotive
          diagnostics.
        </p>
        <a className="back-top" href="#/">
          Back to the Dojo ↑
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © <span id="year">{currentYear}</span> The Greasy Dojo · Working
          concept
        </span>
        <span>
          Educational resource · Not a substitute for vehicle-specific service
          information
        </span>
        <span className="footer-status">
          <i /> PRE-LAUNCH / CONTENT REVIEW
        </span>
      </div>
    </footer>
  );
};
