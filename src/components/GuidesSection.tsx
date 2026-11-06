import React from 'react';
import { ALL_GUIDES } from '../data/searchFallback';
import { DetailKind, DetailSelection } from '../types/diagnostics';

interface GuidesSectionProps {
  onOpenDetail: (selection: DetailSelection) => void;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ onOpenDetail }) => {
  return (
    <section className="dark-section" id="guides">
      <div className="section-wrap guides-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> FIX DATABASE / FIELD GUIDES
            </div>
            <h2>
              Follow the trail.
              <br />
              <span className="text-cyan">One test at a time.</span>
            </h2>
          </div>
          <p>
            Practical starting points for common complaints. These educational
            drafts need qualified mechanic review and authoritative references
            before public release.
          </p>
        </div>

        <div className="guide-grid" id="guideGrid">
          {ALL_GUIDES.map((guide) => (
            <button
              key={guide.id}
              type="button"
              className="guide-card"
              aria-haspopup="dialog"
              onClick={() =>
                onOpenDetail({ kind: DetailKind.Guide, id: guide.id })
              }
            >
              <span className="guide-icon">{guide.icon}</span>
              <div className="card-topline">
                <span className="card-type">{guide.type}</span>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{guide.title}</h3>
              <p>{guide.summary}</p>
              <span className="card-meta">{guide.time} read · Draft</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
