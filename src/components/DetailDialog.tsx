import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import type { DiagnosticCode, FieldGuide } from '../types/diagnostics';
import './DetailDialog.css';

type DetailDialogProps = {
  code: DiagnosticCode | FieldGuide | null;
  onClose: () => void;
};

export const DetailDialog: React.FC<DetailDialogProps> = ({ code, onClose }) => {
  const { t } = useLang();

  if (!code) return null;

  const isDiagnosticCode = 'code' in code;
  const heading = isDiagnosticCode ? code.code : code.title;
  const description = isDiagnosticCode ? code.symptom : code.summary;

  const renderSections = () => {
    if (!code.sections) return null;

    return code.sections.map((section, index) => (
      <div key={index} className="dialog-section">
        <h3>{section.heading}</h3>
        {section.body && <p>{section.body}</p>}
        {section.details && section.details.length > 0 && (
          <ul>
            {section.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
        {section.items && section.items.length > 0 && (
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <dialog className="detail-dialog-overlay" onClick={onClose}>
      <div
        className="detail-dialog-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${heading}: ${description}`}
      >
        <div className="dialog-header">
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>

        <div className="dialog-body">
          {isDiagnosticCode && (
            <div className="dialog-info">
              <p><strong>{t('Review status:')}</strong> {code.reviewStatus ?? t('Pending')}.</p>
            </div>
          )}
          <p>
            {t('Procedures and specifications vary by year, make, model, engine, and market. Always verify with authoritative service information and a qualified technician when appropriate.')}
          </p>
          {renderSections()}
          {isDiagnosticCode && code.related && code.related.length > 0 && (
            <div className="dialog-related">
              <h3>{t('Related codes')}</h3>
              <p>{code.related.join(', ')}</p>
            </div>
          )}
        </div>

        <div className="dialog-footer">
          <span>{t('Approved educational content · always verify with service information')}</span>
          <button className="button button-ghost" type="button" onClick={onClose}>
            {t('Close')}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DetailDialog;
