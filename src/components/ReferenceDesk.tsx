import React from 'react';
import './ReferenceDesk.css';

const RESOURCES = [
  {
    category: 'VEHICLE-SPECIFIC REPAIR INFORMATION',
    title: 'Manufacturer service information',
    description:
      'Find participating automakers’ official repair-information portals. Procedures, wiring diagrams, technical service bulletins, and specifications vary by vehicle and may require a separate account or paid access.',
    link: 'https://oem1stop.com/node/2',
    linkLabel: 'Find OEM service portals',
    note: 'Use the exact year, make, model, engine, and configuration.',
  },
  {
    category: 'SAFETY RECALLS',
    title: 'NHTSA recalls and investigations',
    description:
      'Check for unrepaired safety recalls and review investigations or manufacturer communications. A recall lookup is a safety resource, not a diagnostic test.',
    link: 'https://www.nhtsa.gov/recalls',
    linkLabel: 'Check vehicle recalls',
    note: 'Recall search results have coverage limits; follow manufacturer guidance.',
  },
  {
    category: 'EMISSIONS SERVICE INFORMATION',
    title: 'EPA — Freedom to Fix',
    description:
      'Read the EPA overview of emissions-related service information, OBD data, training materials, and diagnostic resources available to repair professionals.',
    link: 'https://www.epa.gov/ve-certification/freedom-fix',
    linkLabel: 'Read EPA repair-information guidance',
    note: 'This explains access to information; it is not a vehicle-specific repair procedure.',
  },
  {
    category: 'FINDING QUALIFIED HELP',
    title: 'ASE Blue Seal repair-center locator',
    description:
      'Search for participating Blue Seal recognized repair businesses. Ask the shop which technician will perform the work and to see that technician’s current credentials.',
    link: 'https://ase.com/repair-centers/',
    linkLabel: 'Find a Blue Seal repair center',
    note: 'ASE certifies technicians; business recognition and individual technician credentials are not the same thing.',
  },
];

export const ReferenceDesk: React.FC = () => {
  return (
    <section className="reference-desk-section" id="reference-desk">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> THE REFERENCE DESK
            </div>
            <h2>
              Find the source. <span className="text-cyan">Verify the spec.</span>
            </h2>
          </div>
          <p>
            Good diagnosis depends on the right information for the exact
            vehicle. Start with primary sources, and use general guides only
            to understand the system and organize your next questions.
          </p>
        </div>

        <div className="reference-principle">
          <strong>Source hierarchy</strong>
          <p>
            For repair procedures, wiring, connector pinouts, torque values,
            fluid specifications, and test limits, use the manufacturer&apos;s
            service information for the exact vehicle. General OBD-II
            descriptions cannot replace it.
          </p>
        </div>

        <div className="reference-grid">
          {RESOURCES.map((resource) => (
            <article className="reference-card" key={resource.title}>
              <span className="reference-category">{resource.category}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.linkLabel} <span aria-hidden="true">↗</span>
              </a>
              <small>{resource.note}</small>
            </article>
          ))}
        </div>

        <p className="reference-disclaimer">
          External resources are operated by their respective organizations.
          Their availability, access requirements, and content may change.
          Linking to a resource does not mean The Diagnostic Bay has reviewed
          or endorsed every service it offers.
        </p>
      </div>
    </section>
  );
};

export default ReferenceDesk;
