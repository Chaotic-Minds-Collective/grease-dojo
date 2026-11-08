import React, { useEffect, useState } from 'react';
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

// Spanish labels keyed by the language-neutral OPERATING_CONDITIONS ids.
const OPERATING_CONDITIONS_ES: Record<string, string> = {
  'Cold start': 'Arranque en frío',
  'Hot start': 'Arranque en caliente',
  'At idle': 'En ralentí',
  'During acceleration': 'Al acelerar',
  'At steady speed': 'A velocidad constante',
  'During braking': 'Al frenar',
  'While turning': 'Al girar',
  'Over bumps': 'En baches',
  'Intermittently': 'De forma intermitente',
};

const SAFETY_FLAGS = [
  'Flashing check-engine light or severe engine shaking',
  'High temperature warning, overheating, or steam',
  'Oil-pressure warning',
  'Brake or steering problem',
  'Fuel smell or visible fuel leak',
  'Smoke or burning-electrical smell',
];

// Spanish labels keyed by the language-neutral SAFETY_FLAGS ids.
const SAFETY_FLAGS_ES: Record<string, string> = {
  'Flashing check-engine light or severe engine shaking': 'Luz de check engine parpadeante o sacudidas severas del motor',
  'High temperature warning, overheating, or steam': 'Advertencia de alta temperatura, sobrecalentamiento o vapor',
  'Oil-pressure warning': 'Advertencia de presión de aceite',
  'Brake or steering problem': 'Problema de frenos o dirección',
  'Fuel smell or visible fuel leak': 'Olor a combustible o fuga visible',
  'Smoke or burning-electrical smell': 'Humo u olor a electricidad quemada',
};

const CONCERN_OPTIONS = [
  'Will not start',
  'Runs rough or loses power',
  'Warning light or message',
  'Overheating',
  'Noise, smell, or leak',
  'Braking or steering concern',
  'Other / not sure',
];

// Spanish labels keyed by the language-neutral CONCERN_OPTIONS ids.
const CONCERN_OPTIONS_ES: Record<string, string> = {
  'Will not start': 'No arranca',
  'Runs rough or loses power': 'Funciona mal o pierde potencia',
  'Warning light or message': 'Luz o mensaje de advertencia',
  'Overheating': 'Sobrecalentamiento',
  'Noise, smell, or leak': 'Ruido, olor o fuga',
  'Braking or steering concern': 'Inquietud de frenos o dirección',
  'Other / not sure': 'Otro / no estoy seguro',
};

/** All Spanish labels keyed by their language-neutral selection id. */
const LABELS_ES: Record<string, string> = {
  ...OPERATING_CONDITIONS_ES,
  ...SAFETY_FLAGS_ES,
  ...CONCERN_OPTIONS_ES,
};

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

  /** Resolves a language-neutral selection id to the active language's label. */
  const labelFor = (id: string) => (lang === 'es' ? LABELS_ES[id] ?? id : id);

  // Selections are language-neutral ids, so they survive a language
  // switch. Only the prepared report is language-bound: drop it on a
  // language change so a stale-language report is never shared.
  useEffect(() => {
    setReportText('');
    setCopyStatus('');
  }, [lang]);

/** Updates one text field and invalidates any prepared report. */
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

/** Updates one checkbox list and invalidates any prepared report. */
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

/** Builds the shareable case report in the active language. */
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
      `${t('Main concern:')} ${details.concern ? labelFor(details.concern) : notProvided}`,
      `${t('When it happens:')} ${details.conditions.length ? details.conditions.map(labelFor).join(', ') : notProvided}`,
      '',
      t('SAFETY WARNINGS REPORTED'),
      ...(details.safetyFlags.length ? details.safetyFlags.map((item) => `- ${labelFor(item)}`) : [`- ${t('None selected / not reported')}`]),
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

/** Copies the prepared report to the clipboard when the browser allows it. */
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

/** Opens the browser print dialog for the prepared report. */
  const printReport = () => {
    if (reportText) window.print();
  };

/** Clears every field, selection, and prepared report. */
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
                  placeholder={t('e.g. 2018')}
                  value={details.year}
                  onChange={(event) => updateField('year', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Make')}</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={t('e.g. Ford')}
                  value={details.make}
                  onChange={(event) => updateField('make', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Model')}</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={t('e.g. F-150')}
                  value={details.model}
                  onChange={(event) => updateField('model', event.target.value)}
                />
              </label>
              <label>
                <span>{t('Engine (if known)')}</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={t('e.g. 2.0L turbo')}
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
                  placeholder={t('e.g. 124,500 miles')}
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
                  {CONCERN_OPTIONS.map((option) => (
                    <option key={option} value={option}>{labelFor(option)}</option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="case-fieldset">
            <legend>{t('02 / When does it happen?')}</legend>
            <p className="case-field-help">{t('Select every condition that applies.')}</p>
            <div className="case-check-grid">
              {OPERATING_CONDITIONS.map((condition) => (
                <label className="case-check" key={condition}>
                  <input
                    type="checkbox"
                    checked={details.conditions.includes(condition)}
                    onChange={(event) =>
                      updateSelection('conditions', condition, event.target.checked)
                    }
                  />
                  <span>{labelFor(condition)}</span>
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
              {SAFETY_FLAGS.map((flag) => (
                <label className="case-check" key={flag}>
                  <input
                    type="checkbox"
                    checked={details.safetyFlags.includes(flag)}
                    onChange={(event) =>
                      updateSelection('safetyFlags', flag, event.target.checked)
                    }
                  />
                  <span>{labelFor(flag)}</span>
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
                placeholder={t('e.g. P0300, P0171 — include pending or permanent status if known.')}
                value={details.troubleCodes}
                onChange={(event) => updateField('troubleCodes', event.target.value)}
              />
            </label>
            <label className="case-wide-field">
              <span>{t('Recent repairs, maintenance, or changes')}</span>
              <textarea
                rows={3}
                placeholder={t('What was repaired, replaced, refueled, or changed before the problem began?')}
                value={details.recentWork}
                onChange={(event) => updateField('recentWork', event.target.value)}
              />
            </label>
            <label className="case-wide-field">
              <span>{t('Other observations')}</span>
              <textarea
                rows={4}
                placeholder={t('Describe sounds, smells, warning messages, when the issue started, and anything that makes it better or worse.')}
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