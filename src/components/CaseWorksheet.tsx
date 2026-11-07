import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './CaseWorksheet.css';

const OPERATING_CONDITIONS = [
  'Cold start',
  'Hot start',
  'At idle',
  'During acceleration',
  'At steady speed',
  'During braking',
  'While turning',
  'Over bumps',
  'Intermittently',
];

// Spanish mirror of OPERATING_CONDITIONS. Values are what get recorded,
// so the checklist must stay consistent within one language session.
const OPERATING_CONDITIONS_ES = [
  'Arranque en frío',
  'Arranque en caliente',
  'En ralentí',
  'Al acelerar',
  'A velocidad constante',
  'Al frenar',
  'Al girar',
  'En baches',
  'De forma intermitente',
];

const SAFETY_FLAGS = [
  'Flashing check-engine light or severe engine shaking',
  'High temperature warning, overheating, or steam',
  'Oil-pressure warning',
  'Brake or steering problem',
  'Fuel smell or visible fuel leak',
  'Smoke or burning-electrical smell',
];

// Spanish mirror of SAFETY_FLAGS.
const SAFETY_FLAGS_ES = [
  'Luz de check engine parpadeante o sacudidas severas del motor',
  'Advertencia de alta temperatura, sobrecalentamiento o vapor',
  'Advertencia de presión de aceite',
  'Problema de frenos o dirección',
  'Olor a combustible o fuga visible',
  'Humo u olor a electricidad quemada',
];

const CONCERN_OPTIONS = [
  'Will not start',
  'Runs rough or loses power',
  'Warning light or message',
  'Overheating',
  'Noise, smell, or leak',
  'Braking or steering concern',
  'Other / not sure',
];

// Spanish mirror of CONCERN_OPTIONS.
const CONCERN_OPTIONS_ES = [
  'No arranca',
  'Funciona mal o pierde potencia',
  'Luz o mensaje de advertencia',
  'Sobrecalentamiento',
  'Ruido, olor o fuga',
  'Inquietud de frenos o dirección',
  'Otro / no estoy seguro',
];

type CaseDetails = {
  year: string;
  make: string;
  model: string;
  engine: string;
  mileage: string;
  concern: string;
  conditions: string[];
  safetyFlags: string[];
  troubleCodes: string;
  recentWork: string;
  observations: string;
};

const EMPTY_CASE: CaseDetails = {
  year: '',
  make: '',
  model: '',
  engine: '',
  mileage: '',
  concern: '',
  conditions: [],
  safetyFlags: [],
  troubleCodes: '',
  recentWork: '',
  observations: '',
};

/** Returns a new selection with the value appended when checked, or matching values removed when unchecked. */
function toggleSelection(current: string[], value: string, checked: boolean) {
  return checked
    ? [...current, value]
    : current.filter((item) => item !== value);
}

export const CaseWorksheet: React.FC = () => {
  const [details, setDetails] = useState<CaseDetails>(EMPTY_CASE);
  const [reportText, setReportText] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const { t, lang } = useLang();

  const operatingConditions = lang === 'es' ? OPERATING_CONDITIONS_ES : OPERATING_CONDITIONS;
  const safetyFlagsList = lang === 'es' ? SAFETY_FLAGS_ES : SAFETY_FLAGS;
  const concernOptions = lang === 'es' ? CONCERN_OPTIONS_ES : CONCERN_OPTIONS;

  const updateField = (
    field:
      | 'year'
      | 'make'
      | 'model'
      | 'engine'
      | 'mileage'
      | 'concern'
      | 'troubleCodes'
      | 'recentWork'
      | 'observations',
    value: string
  ) => {
    setDetails((current) => ({ ...current, [field]: value }));
    setReportText('');
    setCopyStatus('');
  };

  const updateSelection = (
    field: 'conditions' | 'safetyFlags',
    value: string,
    checked: boolean
  ) => {
    setDetails((current) => ({
      ...current,
      [field]: toggleSelection(current[field], value, checked),
    }));
    setReportText('');
    setCopyStatus('');
  };

  const prepareReport = () => {
    const vehicle = [
      details.year,
      details.make,
      details.model,
      details.engine ? `${t('Engine:')} ${details.engine}` : '',
    ].filter(Boolean);
    const notProvided = t('Not provided');

    const lines = [
      t('DIAGNOSTIC CASE NOTES'),
      t('For discussion with a qualified automotive technician'),
      '',
      `${t('Vehicle:')} ${vehicle.length ? vehicle.join(' · ') : notProvided}`,
      `${t('Odometer:')} ${details.mileage.trim() || notProvided}`,
      `${t('Main concern:')} ${details.concern || notProvided}`,
      `${t('When it happens:')} ${details.conditions.length ? details.conditions.join(', ') : notProvided}`,
      '',
      t('SAFETY WARNINGS REPORTED'),
      ...(details.safetyFlags.length ? details.safetyFlags.map((item) => `- ${item}`) : [`- ${t('None selected / not reported')}`]),
      '',
      t('TROUBLE CODES'),
      details.troubleCodes.trim() || notProvided,
      '',
      t('RECENT REPAIRS OR CHANGES'),
      details.recentWork.trim() || notProvided,
      '',
      t('OBSERVATIONS'),
      details.observations.trim() || notProvided,
      '',
      t('NOTE: These are reported observations, not a confirmed diagnosis. Verify all findings using the correct vehicle-specific service information. No vehicle data was automatically read or verified by this worksheet.'),
    ];

    setReportText(lines.join('\n'));
    setCopyStatus(t('Your case notes are ready. Review them before sharing.'));
  };

  const copyReport = async () => {
    if (!reportText) return;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard access is unavailable in this browser.');
      }
      await navigator.clipboard.writeText(reportText);
      setCopyStatus(t('Case notes copied. You can paste them into a message for your mechanic.'));
    } catch {
      setCopyStatus(t('Copy was unavailable. Select the report text and copy it manually.'));
    }
  };

  const printReport = () => {
    if (reportText) window.print();
  };

  const resetWorksheet = () => {
    setDetails(EMPTY_CASE);
    setReportText('');
    setCopyStatus(t('The worksheet has been cleared.'));
  };

  return (
    <section className="case-worksheet-section" id="case-worksheet">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> {t('BEFORE THE WRENCHES COME OUT')}
            </div>
            <h2>
              {t('Build a better')} <span className="text-gold">{t('case file.')}</span>
            </h2>
          </div>
          <p>
            {t('Give your mechanic a clearer starting point. Record what the vehicle is doing, when it happens, and what you have already observed. This worksheet organizes information; it does not diagnose the vehicle.')}
          </p>
        </div>

        <div className="case-privacy-note">
          <span aria-hidden="true">i</span>
          <p>
            <strong>{t('Local-only worksheet:')}</strong> {t('this version does not create an account, save a history, or send entries to a server. Your information remains in this page until you clear it or leave.')}
          </p>
        </div>

        <div className="case-form">
          <fieldset className="case-fieldset">
            <legend>{t('01 / Vehicle information')}</legend>
            <div className="case-field-grid">
              <label>
                <span>{t('Year')}</span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder={lang === 'es' ? 'p. ej. 2018' : 'e.g. 2018'}
                  value={details.year}
                  onChange={(event) => updateField('year', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Make')}</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={lang === 'es' ? 'p. ej. Ford' : 'e.g. Ford'}
                  value={details.make}
                  onChange={(event) => updateField('make', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Model')}</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={lang === 'es' ? 'p. ej. F-150' : 'e.g. F-150'}
                  value={details.model}
                  onChange={(event) => updateField('model', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Engine (if known)')}</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={lang === 'es' ? 'p. ej. 2.0L turbo' : 'e.g. 2.0L turbo'}
                  value={details.engine}
                  onChange={(event) => updateField('engine', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Odometer reading (optional)')}</span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder={lang === 'es' ? 'p. ej. 124.500 km' : 'e.g. 124,500 miles'}
                  value={details.mileage}
                  onChange={(event) => updateField('mileage', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Main concern')}</span>
                <select
                  value={details.concern}
                  onChange={(event) => updateField('concern', event.target.value)}
                >
                  <option value="">{t('Choose the closest description')}</option>
                  {concernOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="case-fieldset">
            <legend>{t('02 / When does it happen?')}</legend>
            <p className="case-field-help">{t('Select every condition that applies.')}</p>
            <div className="case-check-grid">
              {operatingConditions.map((condition) => (
                <label className="case-check" key={condition}>
                  <input
                    type="checkbox"
                    checked={details.conditions.includes(condition)}
                    onChange={(event) =>
                      updateSelection('conditions', condition, event.target.checked)
                    }
                  />
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="case-fieldset case-fieldset-warning">
            <legend>{t('03 / Safety warning signs')}</legend>
            <p className="case-field-help">
              {t('Select any warning sign you have noticed. Do not approach smoke, fuel leaks, hot coolant, or moving parts to investigate.')}
            </p>
            <div className="case-check-grid">
              {safetyFlagsList.map((flag) => (
                <label className="case-check" key={flag}>
                  <input
                    type="checkbox"
                    checked={details.safetyFlags.includes(flag)}
                    onChange={(event) =>
                      updateSelection('safetyFlags', flag, event.target.checked)
                    }
                  />
                  <span>{flag}</span>
                </label>
              ))}
            </div>
            {details.safetyFlags.length > 0 && (
              <div className="case-stop-alert" role="alert">
                <strong>{t('Pause before driving or inspecting.')}</strong>
                {t("These warning signs can indicate a hazardous condition. Stop safely, follow the owner's manual, and arrange qualified help. Do not drive if braking, steering, overheating, oil pressure, fuel leakage, smoke, or severe misfire makes the vehicle unsafe.")}
              </div>
            )}
          </fieldset>

          <fieldset className="case-fieldset">
            <legend>{t('04 / What have you observed?')}</legend>
            <label className="case-wide-field">
              <span>{t('Trouble codes (write them exactly as displayed)')}</span>
              <textarea
                rows={3}
                placeholder={lang === 'es' ? 'p. ej. P0300, P0171 — incluye el estado pendiente o permanente si lo conoces.' : 'e.g. P0300, P0171 — include pending or permanent status if known.'}
                value={details.troubleCodes}
                onChange={(event) => updateField('troubleCodes', event.target.value)}
              />
            </label>
            <label className="case-wide-field">
              <span>{t('Recent repairs, maintenance, or changes')}</span>
              <textarea
                rows={3}
                placeholder={lang === 'es' ? '¿Qué se reparó, reemplazó, reabasteció o cambió antes de que empezara el problema?' : 'What was repaired, replaced, refueled, or changed before the problem began?'}
                value={details.recentWork}
                onChange={(event) => updateField('recentWork', event.target.value)}
              />
            </label>
            <label className="case-wide-field">
              <span>{t('Other observations')}</span>
              <textarea
                rows={4}
                placeholder={lang === 'es' ? 'Describe sonidos, olores, mensajes de advertencia, cuándo empezó el problema y todo lo que lo mejore o empeore.' : 'Describe sounds, smells, warning messages, when the issue started, and anything that makes it better or worse.'}
                value={details.observations}
                onChange={(event) => updateField('observations', event.target.value)}
              />
            </label>
          </fieldset>

          <div className="case-actions">
            <button className="button button-primary" type="button" onClick={prepareReport}>
              {t('Prepare case notes')} <span aria-hidden="true">↗</span>
            </button>
            <button className="button button-ghost" type="button" onClick={resetWorksheet}>
              {t('Clear worksheet')}
            </button>
          </div>

          {reportText && (
            <div className="case-report">
              <div className="case-report-heading">
                <div>
                  <span className="eyebrow">{t('READY TO SHARE')}</span>
                  <h3>{t('Diagnostic case notes')}</h3>
                </div>
                <div className="case-report-actions">
                  <button className="button button-primary" type="button" onClick={copyReport}>
                    {t('Copy report')}
                  </button>
                  <button className="button button-ghost" type="button" onClick={printReport}>
                    {t('Print / save PDF')}
                  </button>
                </div>
              </div>
              <textarea
                className="case-report-text"
                aria-label={t('Prepared diagnostic case notes')}
                readOnly
                rows={Math.max(16, reportText.split("\n").length + 2)}
                value={reportText}
                onFocus={(event) => event.currentTarget.select()}
              />
              <div className="case-report-print">{reportText}</div>
            </div>
          )}
          <p className="case-status" role="status" aria-live="polite">
            {copyStatus}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseWorksheet;
