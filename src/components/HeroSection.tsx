import React from 'react';
import { useLang } from '../i18n/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-cyan" aria-hidden="true" />
      <div className="hero-glow hero-glow-red" aria-hidden="true" />
      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-line" /> {t('EVIDENCE-LED AUTOMOTIVE LEARNING')}
        </div>
        <h1>
          {t('Find the fault.')}
          <br />
          <span className="text-cyan">{t('Not just a part.')}</span>
        </h1>
        <p className="hero-lede">
          {t('That warning light is a clue, not a verdict. Connect trouble codes, symptoms, and sensible next tests before your wallet becomes a parts cannon.')}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#search">
            {t('Enter the Diagnostic Lab')} <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-ghost" href="#/guides">
            {t('Browse the Fix Database')}
          </a>
        </div>
        <div className="hero-proof">
          <span><b>01</b> {t('Gather evidence')}</span>
          <span><b>02</b> {t('Test before replacing')}</span>
          <span><b>03</b> {t('Know when to stop')}</span>
        </div>
      </div>

      <div
        className="hero-console"
        aria-label={t('Illustrative garage concept art and diagnostic console; not connected to a vehicle')}
      >
        <div className="hero-portrait">
          <span className="portrait-label">{t('CONCEPT VISUAL / 001')}</span>
          <img
            className="hero-mascot"
            src={`${import.meta.env.BASE_URL}assets/hero-banner.png`}
            alt={t('Garage workshop concept art with warm light over a workbench; illustrative, not connected to a vehicle')}
            width="560"
            height="580"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <span className="portrait-caption">{t("THE SIGNAL ISN'T THE SOLUTION.")}</span>
        </div>
        <div className="console-top">
          <span><i className="status-dot" /> {t('DOJO SYSTEM / CONCEPT')}</span>
          <span className="console-version">SYS. 001</span>
        </div>
        <div className="scan-screen">
          <div className="scan-heading">
            <span>{t('DIAGNOSTIC OVERVIEW')}</span>
            <span className="scan-live">● {t('STANDBY')}</span>
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
            <span>{t('CODE SEARCH')} <b>{t('READY')}</b></span>
            <span>{t('SYMPTOM CHECK')} <b>{t('READY')}</b></span>
            <span>{t('LIVE VEHICLE DATA')} <b>{t('NOT CONNECTED')}</b></span>
          </div>
        </div>
        <div className="console-bottom">
          <span>{t('NO GUESSWORK')}</span>
          <span>{t('JUST GOOD TESTS')} <b>///</b></span>
        </div>
        <div className="console-chip chip-one"><span className="chip-dot" /> {t('EVIDENCE FIRST')}</div>
        <div className="console-chip chip-two">{t('OBD-II')} <b>{t('FIELD NOTES')}</b></div>
      </div>

      <div className="hero-bottom">
        <span>{t('FIELD NOTES FOR REAL-WORLD DIAGNOSIS')}</span>
        <span><b>{t('PRE-LAUNCH')}</b> / {t('CONTENT REVIEW')}</span>
      </div>
    </section>
  );
};
