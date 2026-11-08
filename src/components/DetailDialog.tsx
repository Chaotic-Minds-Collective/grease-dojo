import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import type { DiagnosticCode } from '../data/diagnosticsData';
import './DetailDialog.css';

type DetailDialogProps = {
  code: DiagnosticCode | null;
  onClose: () => void;
};

export const DetailDialog: React.FC<DetailDialogProps> = ({ code, onClose }) => {
  const { t } = useLang();

  if (!code) return null;

  const selectedCode = code;

  // Build the diagnosis body from the structured sections
  const renderSections = () => {
    if (!selectedCode.sections) return null;

    return selectedCode.sections.map((section, index) => (
      <div key={index} className="dialog-section">
        <h3>{section.heading}</h3>
        <p>{section.body}</p>
        {section.details && section.details.length > 0 && (
          <ul>
            {section.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
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
        aria-label={`${selectedCode.code}: ${selectedCode.symptom}`}
      >
        <div className="dialog-header">
          <h2>
            {selectedCode.code}
          </h2>
          <p>{selectedCode.symptom}</p>
        </div>

        <div className="dialog-body">
          <div className="dialog-info">
            <p><strong>{t('Review status:')}</strong> {selectedCode.reviewStatus ?? t('Pending')}.</p>
          </div>
          <p>
            {t('Procedures and specifications vary by year, make, model, engine, and market. Always verify with authoritative service information and a qualified technician when appropriate.')}
          </p>
          {renderSections()}
          {selectedCode.related && selectedCode.related.length > 0 && (
            <div className="dialog-related">
              <h3>{t('Related codes')}</h3>
              <p>{selectedCode.related.join(', ')}</p>
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
