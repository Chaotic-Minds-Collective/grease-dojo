import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './GuidedTriage.css';

type TriagePath = {
  id: string;
  label: string;
  summary: string;
  record: string[];
  stopSigns: string[];
  nextStep: string;
};

const PATHS: TriagePath[] = [
  {
    id: 'no-start',
    label: 'It will not start',
    summary: 'The engine does not start, or it cranks without running.',
    record: [
      'Does the engine crank, click, or stay completely silent?',
      'Do the dashboard lights behave normally?',
      'Did the problem begin suddenly or develop over time?',
      'Are there warning messages or stored trouble codes?',
    ],
    stopSigns: [
      'Fuel odor, visible fuel leakage, smoke, or signs of an electrical fire.',
      'A damaged, swollen, leaking, or unusually hot battery.',
    ],
    nextStep: 'Record the exact starting behavior and scan for codes if you have the correct equipment. Do not bridge terminals or bypass safety interlocks. Battery and starting-system tests should follow vehicle-specific procedures.',
  },
  {
    id: 'runs-poorly',
    label: 'It runs rough or loses power',
    summary: 'The engine shakes, misfires, stalls, or feels unusually weak.',
    record: [
      'Does it happen at idle, while accelerating, or all the time?',
      'Is the check-engine light steady or flashing?',
      'Are there unusual smells, noises, or visible smoke?',
      'Record all stored and pending codes before clearing anything.',
    ],
    stopSigns: [
      'A flashing check-engine light with severe shaking or major power loss.',
      'Smoke, raw-fuel odor, overheating, or an oil-pressure warning.',
    ],
    nextStep: 'Avoid heavy acceleration. A flashing warning light or severe misfire can cause further damage; stop safely and arrange qualified diagnosis. Do not replace ignition or fuel parts based on a code alone.',
  },
  {
    id: 'warning-light',
    label: 'A warning light is on',
    summary: 'A dashboard warning appeared, but the vehicle may still run normally.',
    record: [
      'Identify the exact warning symbol or message.',
      'Note whether the light is steady, flashing, or accompanied by a chime.',
      'Record when it appeared and what the vehicle was doing.',
      'Retrieve codes with a compatible scan tool when appropriate.',
    ],
    stopSigns: [
      'Oil-pressure, brake-system, or high-temperature warnings.',
      'A flashing check-engine light, charging-system failure with unsafe operation, or any warning paired with smoke or loss of control.',
    ],
    nextStep: 'Check the owner manual for the exact warning. Red warnings and safety-system warnings may require stopping immediately. A generic code reader may not access every vehicle module.',
  },
  {
    id: 'overheating',
    label: 'It is overheating',
    summary: 'The temperature gauge is high, a temperature warning appears, or steam is visible.',
    record: [
      'Note the temperature warning and whether steam or coolant is visible.',
      'Record whether the cabin heater changed behavior.',
      'Look for a puddle only from a safe position, without touching hot parts.',
      'Note recent cooling-system work or coolant loss.',
    ],
    stopSigns: [
      'A high-temperature warning, rising gauge, steam, or coolant discharge.',
      'Any need to open a hot pressurized cooling system.',
    ],
    nextStep: 'Pull over safely, switch off the engine, and allow it to cool. Never remove a hot radiator or expansion-tank cap. Arrange professional inspection if overheating or coolant loss occurred.',
  },
  {
    id: 'noise-leak',
    label: 'There is a new noise, smell, or leak',
    summary: 'Something sounds, smells, or looks different from normal.',
    record: [
      'Describe the sound or smell without putting yourself near moving parts.',
      'Note whether it occurs during startup, braking, turning, or driving.',
      'Record the fluid color and approximate location only if visible from a safe distance.',
      'Take a photo from a safe position if it helps document the condition.',
    ],
    stopSigns: [
      'Fuel odor or visible fuel leak, smoke, burning-electrical smell, or a rapidly growing leak.',
      'Grinding brakes, steering problems, or a noise accompanied by loss of control.',
    ],
    nextStep: 'Do not crawl under a vehicle to investigate a leak. Keep ignition sources away from fuel vapors. If braking, steering, or vehicle control may be affected, do not continue driving.',
  },
];



// Espejo en espanol de PATHS. El borrador de origen son las mismas
// notas educativas de las rondas 1-3; ambos idiomas quedan marcados
// como pendientes de revision mecanica.
const PATHS_ES: TriagePath[] = [
  {
    id: 'no-start',
    label: 'No arranca',
    summary: 'El motor no arranca, o gira pero no enciende.',
    record: [
      '¿Gira el motor, hace clics o se queda completamente en silencio?',
      '¿Las luces del tablero se comportan con normalidad?',
      '¿El problema empezó de repente o se desarrolló con el tiempo?',
      '¿Hay mensajes de advertencia o códigos de falla almacenados?',
    ],
    stopSigns: [
      'Olor a combustible, fuga visible, humo o señales de un incendio eléctrico.',
      'Una batería dañada, hinchada, con fuga o inusualmente caliente.',
    ],
    nextStep: 'Registra el comportamiento exacto del arranque y escanea los códigos si tienes el equipo correcto. No puentes los terminales ni evites los enclavamientos de seguridad. Las pruebas de batería y del sistema de arranque deben seguir procedimientos específicos del vehículo.',
  },
  {
    id: 'runs-poorly',
    label: 'Funciona mal o pierde potencia',
    summary: 'El motor tiembla, falla, se apaga o se siente inusualmente débil.',
    record: [
      '¿Ocurre en ralentí, al acelerar o todo el tiempo?',
      '¿La luz de check engine está fija o parpadeante?',
      '¿Hay olores, ruidos o humo visibles inusuales?',
      'Registra todos los códigos almacenados y pendientes antes de borrar nada.',
    ],
    stopSigns: [
      'Una luz de check engine parpadeante con sacudidas severas o gran pérdida de potencia.',
      'Humo, olor a combustible crudo, sobrecalentamiento o advertencia de presión de aceite.',
    ],
    nextStep: 'Evita acelerar fuerte. Una luz parpadeante o un fallo de encendido severo puede causar más daño; detente con seguridad y consigue diagnóstico calificado. No reemplaces piezas de encendido o combustible basándote solo en un código.',
  },
  {
    id: 'warning-light',
    label: 'Una luz de advertencia está encendida',
    summary: 'Apareció una advertencia en el tablero, pero el vehículo puede seguir funcionando con normalidad.',
    record: [
      'Identifica el símbolo o mensaje exacto de la advertencia.',
      'Anota si la luz está fija, parpadeante o acompañada de un aviso sonoro.',
      'Registra cuándo apareció y qué estaba haciendo el vehículo.',
      'Recupera los códigos con una herramienta de escaneo compatible cuando corresponda.',
    ],
    stopSigns: [
      'Advertencias de presión de aceite, sistema de frenos o alta temperatura.',
      'Una luz de check engine parpadeante, falla del sistema de carga con operación insegura, o cualquier advertencia acompañada de humo o pérdida de control.',
    ],
    nextStep: 'Consulta el manual del propietario para la advertencia exacta. Las advertencias rojas y las de sistemas de seguridad pueden requerir detenerse de inmediato. Un lector de códigos genérico puede no acceder a todos los módulos del vehículo.',
  },
  {
    id: 'overheating',
    label: 'Se está sobrecalentando',
    summary: 'El indicador de temperatura está alto, aparece una advertencia de temperatura o se ve vapor.',
    record: [
      'Anota la advertencia de temperatura y si se ve vapor o refrigerante.',
      'Registra si la calefacción de la cabina cambió de comportamiento.',
      'Busca un charco solo desde una posición segura, sin tocar piezas calientes.',
      'Anota trabajo reciente del sistema de enfriamiento o pérdida de refrigerante.',
    ],
    stopSigns: [
      'Una advertencia de alta temperatura, el indicador subiendo, vapor o descarga de refrigerante.',
      'Cualquier necesidad de abrir un sistema de enfriamiento caliente y presurizado.',
    ],
    nextStep: 'Detente con seguridad, apaga el motor y déjalo enfriar. Nunca abras una tapa caliente del radiador o del depósito de expansión. Consigue una inspección profesional si hubo sobrecalentamiento o pérdida de refrigerante.',
  },
  {
    id: 'noise-leak',
    label: 'Hay un ruido, olor o fuga nuevo',
    summary: 'Algo suena, huele o se ve diferente de lo normal.',
    record: [
      'Describe el sonido o el olor sin ponerte cerca de las piezas móviles.',
      'Anota si ocurre al arrancar, frenar, girar o conducir.',
      'Registra el color del fluido y la ubicación aproximada solo si se ve desde una distancia segura.',
      'Toma una foto desde una posición segura si ayuda a documentar la condición.',
    ],
    stopSigns: [
      'Olor a combustible o fuga visible, humo, olor a electricidad quemada, o una fuga que crece rápidamente.',
      'Frenos que rechinan, problemas de dirección, o un ruido acompañado de pérdida de control.',
    ],
    nextStep: 'No te metas debajo del vehículo para investigar una fuga. Mantén las fuentes de ignición lejos de los vapores de combustible. Si el frenado, la dirección o el control del vehículo pueden verse afectados, no sigas manejando.',
  },
];

export const GuidedTriage: React.FC = () => {
  const { t, lang } = useLang();
  const paths = lang === 'es' ? PATHS_ES : PATHS;
  const [selectedId, setSelectedId] = useState(PATHS[0].id);
  const selected = paths.find((path) => path.id === selectedId) ?? paths[0];

  return (
    <section className="triage-section" id="guided-triage">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> {t('GUIDED INTAKE')}
            </div>
            <h2>
              {t('Start with the')} <span className="text-cyan">{t('symptoms.')}</span>
            </h2>
          </div>
          <p>
            {t('Organize what you are noticing before choosing a test. This guide helps you record useful observations; it does not diagnose the vehicle or replace service information.')}
          </p>
        </div>

        <div className="triage-layout">
          <div className="triage-choices" role="group" aria-label={t('Choose the main vehicle concern')}>
            {paths.map((path) => (
              <button
                className={`triage-choice${selectedId === path.id ? ' is-active' : ''}`}
                type="button"
                key={path.id}
                aria-pressed={selectedId === path.id}
                onClick={() => setSelectedId(path.id)}
              >
                <span>{path.label}</span>
                <small>{path.summary}</small>
              </button>
            ))}
          </div>

          <article className="triage-detail" aria-live="polite">
            <div className="triage-kicker">{t('OBSERVATION CHECKLIST')}</div>
            <h3>{selected.label}</h3>
            <p>{selected.summary}</p>

            <h4>{t('What to record')}</h4>
            <ul>
              {selected.record.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <div className="triage-stop">
              <strong>{t('Stop and get help if:')}</strong>
              <ul>
                {selected.stopSigns.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <h4>{t('Safe next step')}</h4>
            <p>{selected.nextStep}</p>
            <p className="triage-disclaimer">
              {t('General educational guidance only. Vehicle-specific owner and service information takes priority. If the vehicle may be unsafe, do not drive it.')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default GuidedTriage;
