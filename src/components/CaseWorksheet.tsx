import React, { useState } from 'react';
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

const SAFETY_FLAGS = [
  'Flashing check-engine light or severe engine shaking',
  'High temperature warning, overheating, or steam',
  'Oil-pressure warning',
  'Brake or steering problem',
  'Fuel smell or visible fuel leak',
  'Smoke or burning-electrical smell',
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

function toggleSelection(current: string[], value: string, checked: boolean) {
  return checked
    ? [...current, value]
    : current.filter((item) => item !== value);
}

export const CaseWorksheet: React.FC = () => {
  const [details, setDetails] = useState<CaseDetails>(EMPTY_CASE);
  const [reportText, setReportText] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

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
      details.engine ? `Engine: ${details.engine}` : '',
    ].filter(Boolean);

    const lines = [
      'DIAGNOSTIC CASE NOTES',
      'For discussion with a qualified automotive technician',
      '',
      `Vehicle: ${vehicle.length ? vehicle.join(' · ') : 'Not provided'}`,
      `Odometer: ${details.mileage.trim() || 'Not provided'}`,
      `Main concern: ${details.concern || 'Not provided'}`,
      `When it happens: ${details.conditions.length ? details.conditions.join(', ') : 'Not provided'}`,
      '',
      'SAFETY WARNINGS REPORTED',
      ...(details.safetyFlags.length ? details.safetyFlags.map((item) => `- ${item}`) : ['- None selected / not reported']),
      '',
      'TROUBLE CODES',
      details.troubleCodes.trim() || 'Not provided',
      '',
      'RECENT REPAIRS OR CHANGES',
      details.recentWork.trim() || 'Not provided',
      '',
      'OBSERVATIONS',
      details.observations.trim() || 'Not provided',
      '',
      'NOTE: These are reported observations, not a confirmed diagnosis. Verify all findings using the correct vehicle-specific service information. No vehicle data was automatically read or verified by this worksheet.',
    ];

    setReportText(lines.join('\n'));
    setCopyStatus('Your case notes are ready. Review them before sharing.');
  };

  const copyReport = async () => {
    if (!reportText) return;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard access is unavailable in this browser.');
      }
      await navigator.clipboard.writeText(reportText);
      setCopyStatus('Case notes copied. You can paste them into a message for your mechanic.');
    } catch {
      setCopyStatus('Copy was unavailable. Select the report text and copy it manually.');
    }
  };

  const printReport = () => {
    if (reportText) window.print();
  };

  const resetWorksheet = () => {
    setDetails(EMPTY_CASE);
    setReportText('');
    setCopyStatus('The worksheet has been cleared.');
  };

  return (
    <section className="case-worksheet-section" id="case-worksheet">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> BEFORE THE WRENCHES COME OUT
            </div>
            <h2>
              Build a better <span className="text-gold">case file.</span>
            </h2>
          </div>
          <p>
            Give your mechanic a clearer starting point. Record what the
            vehicle is doing, when it happens, and what you have already
            observed. This worksheet organizes information; it does not
            diagnose the vehicle.
          </p>
        </div>

        <div className="case-privacy-note">
          <span aria-hidden="true">i</span>
          <p>
            <strong>Local-only worksheet:</strong> this version does not create an
            account, save a history, or send entries to a server. Your
            information remains in this page until you clear it or leave.
          </p>
        </div>

        <div className="case-form">
          <fieldset className="case-fieldset">
            <legend>01 / Vehicle information</legend>
            <div className="case-field-grid">
              <label>
                <span>Year</span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="e.g. 2018"
                  value={details.year}
                  onChange={(event) => updateField('year', event.target.value)}
                />
              </label>
              <label>
                <span>Make</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. Ford"
                  value={details.make}
                  onChange={(event) => updateField('make', event.target.value)}
                />
              </label>
              <label>
                <span>Model</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. F-150"
                  value={details.model}
                  onChange={(event) => updateField('model', event.target.value)}
                />
              </label>
              <label>
                <span>Engine (if known)</span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. 2.0L turbo"
                  value={details.engine}
                  onChange={(event) => updateField('engine', event.target.value)}
                />
              </label>
              <label>
                <span>Odometer reading (optional)</span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="e.g. 124,500 miles"
                  value={details.mileage}
                  onChange={(event) => updateField('mileage', event.target.value)}
                />
              </label>
              <label>
                <span>Main concern</span>
                <select
                  value={details.concern}
                  onChange={(event) => updateField('concern', event.target.value)}
                >
                  <option value="">Choose the closest description</option>
                  <option>Will not start</option>
                  <option>Runs rough or loses power</option>
                  <option>Warning light or message</option>
                  <option>Overheating</option>
                  <option>Noise, smell, or leak</option>
                  <option>Braking or steering concern</option>
                  <option>Other / not sure</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="case-fieldset">
            <legend>02 / When does it happen?</legend>
            <p className="case-field-help">Select every condition that applies.</p>
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
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="case-fieldset case-fieldset-warning">
            <legend>03 / Safety warning signs</legend>
            <p className="case-field-help">
              Select any warning sign you have noticed. Do not approach smoke,
              fuel leaks, hot coolant, or moving parts to investigate.
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
                  <span>{flag}</span>
                </label>
              ))}
            </div>
            {details.safetyFlags.length > 0 && (
              <div className="case-stop-alert" role="alert">
                <strong>Pause before driving or inspecting.</strong>
                These warning signs can indicate a hazardous condition. Stop
                safely, follow the owner&apos;s manual, and arrange qualified
                help. Do not drive if braking, steering, overheating, oil
                pressure, fuel leakage, smoke, or severe misfire makes the
                vehicle unsafe.
              </div>
            )}
          </fieldset>

          <fieldset className="case-fieldset">
            <legend>04 / What have you observed?</legend>
            <label className="case-wide-field">
              <span>Trouble codes (write them exactly as displayed)</span>
              <textarea
                rows={3}
                placeholder="e.g. P0300, P0171 — include pending or permanent status if known."
                value={details.troubleCodes}
                onChange={(event) => updateField('troubleCodes', event.target.value)}
              />
            </label>
            <label className="case-wide-field">
              <span>Recent repairs, maintenance, or changes</span>
              <textarea
                rows={3}
                placeholder="What was repaired, replaced, refueled, or changed before the problem began?"
                value={details.recentWork}
                onChange={(event) => updateField('recentWork', event.target.value)}
              />
            </label>
            <label className="case-wide-field">
              <span>Other observations</span>
              <textarea
                rows={4}
                placeholder="Describe sounds, smells, warning messages, when the issue started, and anything that makes it better or worse."
                value={details.observations}
                onChange={(event) => updateField('observations', event.target.value)}
              />
            </label>
          </fieldset>

          <div className="case-actions">
            <button className="button button-primary" type="button" onClick={prepareReport}>
              Prepare case notes <span aria-hidden="true">↗</span>
            </button>
            <button className="button button-ghost" type="button" onClick={resetWorksheet}>
              Clear worksheet
            </button>
          </div>

          {reportText && (
            <div className="case-report">
              <div className="case-report-heading">
                <div>
                  <span className="eyebrow">READY TO SHARE</span>
                  <h3>Diagnostic case notes</h3>
                </div>
                <div className="case-report-actions">
                  <button className="button button-primary" type="button" onClick={copyReport}>
                    Copy report
                  </button>
                  <button className="button button-ghost" type="button" onClick={printReport}>
                    Print / save PDF
                  </button>
                </div>
              </div>
              <textarea
                className="case-report-text"
                aria-label="Prepared diagnostic case notes"
                readOnly
                rows={Math.max(16, reportText.split("\n").length + 2)}
                value={reportText}
                onFocus={(event) => event.currentTarget.select()}
              />
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
