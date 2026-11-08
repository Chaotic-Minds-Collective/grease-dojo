import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import './ReferenceDesk.css';

const RESOURCES = [
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



// Recursos en espanol. Los titulos de las organizaciones se mantienen
// en ingles por ser nombres propios; las descripciones se traducen.
const RESOURCES_ES = [
  {
    category: 'RETIRADAS DE SEGURIDAD',
    title: 'NHTSA recalls and investigations',
    description:
      'Consulta retiradas de seguridad sin reparar y revisa investigaciones o comunicaciones del fabricante. La búsqueda de retiradas es un recurso de seguridad, no una prueba de diagnóstico.',
    link: 'https://www.nhtsa.gov/recalls',
    linkLabel: 'Verificar retiradas del vehículo',
    note: 'Los resultados de la búsqueda de retiradas tienen límites de cobertura; sigue las indicaciones del fabricante.',
  },
  {
    category: 'INFORMACIÓN DE SERVICIO DE EMISIONES',
    title: 'EPA — Freedom to Fix',
    description:
      'Lee la visión general de la EPA sobre la información de servicio relacionada con emisiones, los datos OBD, los materiales de formación y los recursos de diagnóstico disponibles para los profesionales de la reparación.',
    link: 'https://www.epa.gov/ve-certification/freedom-fix',
    linkLabel: 'Leer la guía de información de reparación de la EPA',
    note: 'Esto explica el acceso a la información; no es un procedimiento de reparación específico del vehículo.',
  },
  {
    category: 'ENCONTRAR AYUDA CALIFICADA',
    title: 'ASE Blue Seal repair-center locator',
    description:
      'Busca negocios de reparación reconocidos con Blue Seal. Pregunta al taller qué técnico realizará el trabajo y pide ver las credenciales vigentes de ese técnico.',
    link: 'https://ase.com/repair-centers/',
    linkLabel: 'Encontrar un centro Blue Seal',
    note: 'ASE certifica técnicos; el reconocimiento del negocio y las credenciales del técnico individual no son lo mismo.',
  },
];

export const ReferenceDesk: React.FC = () => {
  const { t, lang } = useLang();
  const resources = lang === 'es' ? RESOURCES_ES : RESOURCES;
  return (
    <section className="reference-desk-section" id="reference-desk">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> {t('THE REFERENCE DESK')}
            </div>
            <h2>
              {t('Find the source.')} <span className="text-cyan">{t('Verify the spec.')}</span>
            </h2>
          </div>
          <p>
            {t('Good diagnosis depends on the right information for the exact vehicle. Start with primary sources, and use general guides only to understand the system and organize your next questions.')}
          </p>
        </div>

        <div className="reference-principle">
          <strong>{t('Source hierarchy')}</strong>
          <p>
            {t('For repair procedures, wiring, connector pinouts, torque values, fluid specifications, and test limits, use the manufacturer\'s service information for the exact vehicle. General OBD-II descriptions cannot replace it.')}
          </p>
        </div>

        <div className="reference-grid">
          {resources.map((resource) => (
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
          {t('External resources are operated by their respective organizations. Their availability, access requirements, and content may change. Linking to a resource does not mean The Greasy Dojo has reviewed or endorsed every service it offers.')}
        </p>
      </div>
    </section>
  );
};

export default ReferenceDesk;
