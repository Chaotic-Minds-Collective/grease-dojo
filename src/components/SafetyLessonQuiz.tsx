import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './SafetyLessonQuiz.css';

interface Question {
  id: number;
  question: string;
  questionEs: string;
  options: string[];
  optionsEs: string[];
  correct: number;
  explanation: string;
  explanationEs: string;
  category: string;
  categoryEs: string;
  source: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What is the minimum number of contact points a vehicle must have on lift pads before raising?',
    questionEs: '¿Cuál es el número mínimo de puntos de contacto que un vehículo debe tener en las almohadillas del elevador antes de levantarlo?',
    options: ['Two', 'Four', 'Six', 'Depends on vehicle weight'],
    optionsEs: ['Dos', 'Cuatro', 'Seis', 'Depende del peso del vehículo'],
    correct: 1,
    explanation: 'Most manufacturers require all four lift pads to contact the vehicle\'s designated lift points before raising. This ensures the vehicle is stable and the weight is evenly distributed.',
    explanationEs: 'La mayoría de los fabricantes requieren que las cuatro almohadillas del elevador toquen los puntos de elevación designados del vehículo antes de levantarlo. Esto asegura que el vehículo esté estable y que el peso esté distribuido uniformemente.',
    category: 'Lift Safety',
    categoryEs: 'Seguridad del elevador',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 2,
    question: 'After raising the vehicle, what should you do before walking under it?',
    questionEs: 'Después de levantar el vehículo, ¿qué debes hacer antes de caminar debajo de él?',
    options: ['Give it a gentle shake to test stability', 'Immediately start working', 'Check that the lift locks are engaged', 'Both A and C'],
    optionsEs: ['Darle un suave movimiento para probar la estabilidad', 'Comenzar a trabajar inmediatamente', 'Verificar que los seguros del elevador estén activados', 'Ambas A y C'],
    correct: 3,
    explanation: 'You should test stability with a gentle shake AND verify the lift locks are engaged. Never rely on hydraulic pressure alone — the mechanical locks are your primary safety backup.',
    explanationEs: 'Debes probar la estabilidad con un suave movimiento Y verificar que los seguros del elevador estén activados. Nunca confíes solo en la presión hidráulica: los seguros mecánicos son tu respaldo de seguridad principal.',
    category: 'Lift Safety',
    categoryEs: 'Seguridad del elevador',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 3,
    question: 'What type of PPE is considered the minimum for shop work?',
    questionEs: '¿Qué tipo de EPP se considera el mínimo para el trabajo en el taller?',
    options: ['Safety glasses and steel-toe boots', 'Gloves and a bump cap', 'Hearing protection and a respirator', 'Coveralls and a face shield'],
    optionsEs: ['Gafas de seguridad y botas con punta de acero', 'Guantes y un casco ligero', 'Protección auditiva y un respirador', 'Overoles y una careta'],
    correct: 0,
    explanation: 'Safety glasses and steel-toe (or composite-toe) boots are the minimum required PPE in almost every shop. Additional protection depends on the specific task.',
    explanationEs: 'Las gafas de seguridad y las botas con punta de acero (o punta compuesta) son el EPP mínimo requerido en casi todos los talleres. La protección adicional depende de la tarea específica.',
    category: 'PPE',
    categoryEs: 'EPP',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 4,
    question: 'How should you handle brake dust before removing wheels?',
    questionEs: '¿Cómo debes manejar el polvo de frenos antes de quitar las ruedas?',
    options: ['Spray with water to keep dust down', 'Use a dedicated brake dust vacuum or wet cleaner', 'Brush it off with a stiff bristle brush', 'It is harmless — just proceed carefully'],
    optionsEs: ['Rociar con agua para mantener el polvo bajo control', 'Usar una aspiradora dedicada para polvo de frenos o un limpiador húmedo', 'Cepillarlo con un cepillo de cerdas duras', 'Es inofensivo, solo procede con cuidado'],
    correct: 1,
    explanation: 'Brake dust can contain asbestos or other hazardous materials. Use a dedicated brake dust vacuum or wet cleaner to avoid airborne particles. Never use compressed air on brake assemblies.',
    explanationEs: 'El polvo de frenos puede contener asbesto u otros materiales peligrosos. Usa una aspiradora dedicada para polvo de frenos o un limpiador húmedo para evitar partículas en el aire. Nunca uses aire comprimido en los conjuntos de frenos.',
    category: 'Brake Dust Safety',
    categoryEs: 'Seguridad del polvo de frenos',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 5,
    question: 'When working with a vehicle that has a known fuel leak, what is the first action?',
    questionEs: 'Cuando trabajas con un vehículo que tiene una fuga de combustible conocida, ¿cuál es la primera acción?',
    options: ['Locate the source of the leak', 'Shut off the engine and eliminate ignition sources', 'Place a drip pan under the leak', 'Call your supervisor'],
    optionsEs: ['Localizar la fuente de la fuga', 'Apagar el motor y eliminar las fuentes de ignición', 'Colocar una bandeja de goteo debajo de la fuga', 'Llamar a tu supervisor'],
    correct: 1,
    explanation: 'The immediate priority is shutting off the engine and eliminating any ignition sources (pilot lights, electrical equipment, open flames). Fuel vapor is highly flammable.',
    explanationEs: 'La prioridad inmediata es apagar el motor y eliminar cualquier fuente de ignición (luces piloto, equipos eléctricos, llamas abiertas). El vapor de combustible es altamente inflamable.',
    category: 'Fuel System Safety',
    categoryEs: 'Seguridad del sistema de combustible',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 6,
    question: 'What is the proper way to disconnect a high-voltage hybrid battery service plug?',
    questionEs: '¿Cuál es la forma correcta de desconectar un enchufe de servicio de batería híbrida de alto voltaje?',
    options: ['Pull it quickly to avoid arcing', 'Follow the vehicle-specific service manual procedure', 'Disconnect the 12V battery first', 'Spray the connector with dielectric grease first'],
    optionsEs: ['Tirar rápidamente para evitar arcos eléctricos', 'Seguir el procedimiento del manual de servicio específico del vehículo', 'Desconectar la batería de 12V primero', 'Rociar el conector con grasa dieléctrica primero'],
    correct: 1,
    explanation: 'High-voltage systems vary by manufacturer. Always follow the vehicle-specific service manual procedure, which typically involves powering down the system, verifying zero voltage, and using insulated tools.',
    explanationEs: 'Los sistemas de alto voltaje varían según el fabricante. Siempre sigue el procedimiento del manual de servicio específico del vehículo, que típicamente implica apagar el sistema, verificar voltaje cero y usar herramientas aisladas.',
    category: 'Electrical Safety',
    categoryEs: 'Seguridad eléctrica',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 7,
    question: 'How often should fire extinguishers be inspected in a shop?',
    questionEs: '¿Con qué frecuencia deben inspeccionarse los extintores en un taller?',
    options: ['Weekly', 'Monthly', 'Every 6 months', 'Annually'],
    optionsEs: ['Semanalmente', 'Mensualmente', 'Cada 6 meses', 'Anualmente'],
    correct: 1,
    explanation: 'OSHA requires monthly visual inspections of fire extinguishers. Annual maintenance checks by a certified professional are also required, and hydrostatic testing follows a separate schedule.',
    explanationEs: 'OSHA requiere inspecciones visuales mensuales de los extintores. También se requieren revisiones de mantenimiento anuales por un profesional certificado, y las pruebas hidrostáticas siguen un cronograma separado.',
    category: 'Fire Safety',
    categoryEs: 'Seguridad contra incendios',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 8,
    question: 'What should you do if a vehicle begins to slip off the jack stands?',
    questionEs: '¿Qué debes hacer si un vehículo comienza a deslizarse de los soportes de gato?',
    options: ['Try to catch it and push it back onto the stands', 'Get clear immediately', 'Quickly lower the jack stands', 'Shout a warning to others'],
    optionsEs: ['Intentar atraparlo y empujarlo de vuelta a los soportes', 'Alejarse inmediatamente', 'Bajar rápidamente los soportes de gato', 'Gritar una advertencia a los demás'],
    correct: 1,
    explanation: 'Get clear immediately. Do not attempt to catch or redirect a falling vehicle — it is extremely heavy and can cause fatal injuries. The area should be cleared and the situation reassessed.',
    explanationEs: 'Aléjate inmediatamente. No intentes atrapar o redirigir un vehículo que cae: es extremadamente pesado y puede causar lesiones fatales. El área debe despejarse y la situación debe reevaluarse.',
    category: 'Lift Safety',
    categoryEs: 'Seguridad del elevador',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 9,
    question: 'What does the acronym PASS stand for when using a fire extinguisher?',
    questionEs: '¿Qué significa el acrónimo PASS al usar un extintor?',
    options: ['Pull, Aim, Squeeze, Sweep', 'Point, Activate, Spray, Stop', 'Press, Aim, Squeeze, Spray', 'Pull, Adjust, Squeeze, Sweep'],
    optionsEs: ['Tirar, Apuntar, Apretar, Barrer', 'Apuntar, Activar, Rociar, Detener', 'Presionar, Apuntar, Apretar, Rociar', 'Tirar, Ajustar, Apretar, Barrer'],
    correct: 0,
    explanation: 'PASS stands for Pull the pin, Aim at the base of the fire, Squeeze the handle, and Sweep from side to side. Memorize this — it works under pressure.',
    explanationEs: 'PASS significa Tirar (Pull) el pasador, Apuntar (Aim) a la base del fuego, Apretar (Squeeze) el mango y Barrer (Sweep) de lado a lado. Memoriza esto: funciona bajo presión.',
    category: 'Fire Safety',
    categoryEs: 'Seguridad contra incendios',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 10,
    question: 'Why should you never wear loose clothing or jewelry near running engines?',
    questionEs: '¿Por qué nunca debes usar ropa holgada o joyas cerca de motores en funcionamiento?',
    options: ['They can get caught in belts, pulleys, or fans', 'They can conduct electricity', 'They can scratch paint', 'They can be a distraction to other technicians'],
    optionsEs: ['Pueden engancharse en correas, poleas o ventiladores', 'Pueden conducir electricidad', 'Pueden rayar la pintura', 'Pueden ser una distracción para otros técnicos'],
    correct: 0,
    explanation: 'Rotating components like belts, pulleys, and cooling fans can grab loose clothing or jewelry in an instant, pulling you into the engine bay before you can react.',
    explanationEs: 'Los componentes giratorios como correas, poleas y ventiladores de enfriamiento pueden enganchar ropa holgada o joyas en un instante, tirándote hacia el compartimiento del motor antes de que puedas reaccionar.',
    category: 'PPE',
    categoryEs: 'EPP',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 11,
    question: 'What is the correct procedure for removing a radiator cap on a hot engine?',
    questionEs: '¿Cuál es el procedimiento correcto para quitar la tapa del radiador en un motor caliente?',
    options: ['Use a rag and turn slowly to release pressure gradually', 'Wait for the engine to cool completely', 'Remove it quickly to release pressure fast', 'Loosen it halfway and stand back'],
    optionsEs: ['Usar un trapo y girar lentamente para liberar la presión gradualmente', 'Esperar a que el motor se enfríe completamente', 'Quitarla rápidamente para liberar la presión rápido', 'Aflojarla hasta la mitad y alejarse'],
    correct: 1,
    explanation: 'Never remove a radiator cap on a hot engine — pressurized coolant can spray out at over 200°F and cause severe burns. Always wait for the engine to cool completely.',
    explanationEs: 'Nunca quites la tapa del radiador en un motor caliente: el refrigerante presurizado puede rociar a más de 200°F y causar quemaduras graves. Siempre espera a que el motor se enfríe completamente.',
    category: 'Cooling System Safety',
    categoryEs: 'Seguridad del sistema de enfriamiento',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 12,
    question: 'What type of fire extinguisher is appropriate for an electrical fire?',
    questionEs: '¿Qué tipo de extintor es apropiado para un incendio eléctrico?',
    options: ['Water (Class A)', 'CO2 (Class B/C)', 'Foam (Class A/B)', 'Wet chemical (Class K)'],
    optionsEs: ['Agua (Clase A)', 'CO2 (Clase B/C)', 'Espuma (Clase A/B)', 'Químico húmedo (Clase K)'],
    correct: 1,
    explanation: 'CO2 extinguishers (Class B/C) are safe for electrical fires because CO2 does not conduct electricity and leaves no residue. Never use water on electrical fires.',
    explanationEs: 'Los extintores de CO2 (Clase B/C) son seguros para incendios eléctricos porque el CO2 no conduce electricidad y no deja residuos. Nunca uses agua en incendios eléctricos.',
    category: 'Fire Safety',
    categoryEs: 'Seguridad contra incendios',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 13,
    question: 'When using a floor jack, where should you position the saddle?',
    questionEs: 'Al usar un gato de piso, ¿dónde debes posicionar la montura?',
    options: ['Any flat spot under the vehicle', 'The manufacturer\'s designated jacking point', 'The frame rail', 'The center of the bumper'],
    optionsEs: ['Cualquier punto plano debajo del vehículo', 'El punto de elevación designado por el fabricante', 'El larguero del chasis', 'El centro del parachoques'],
    correct: 1,
    explanation: 'Always use the manufacturer\'s designated jacking point. Jacking at the wrong spot can bend the vehicle\'s structure, damage components, or cause the vehicle to slip.',
    explanationEs: 'Siempre usa el punto de elevación designado por el fabricante. Elevar en el lugar incorrecto puede doblar la estructura del vehículo, dañar componentes o hacer que el vehículo se deslice.',
    category: 'Lift Safety',
    categoryEs: 'Seguridad del elevador',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 14,
    question: 'What should you do if you smell gasoline in the shop?',
    questionEs: '¿Qué debes hacer si hueles gasolina en el taller?',
    options: ['Open the bay doors and continue working', 'Evacuate the area and eliminate ignition sources', 'Find and fix the leak', 'Ignore it — gasoline smell is normal in a shop'],
    optionsEs: ['Abrir las puertas del taller y continuar trabajando', 'Evacuar el área y eliminar las fuentes de ignición', 'Encontrar y reparar la fuga', 'Ignorarlo: el olor a gasolina es normal en un taller'],
    correct: 1,
    explanation: 'A gasoline smell means fuel vapor is present. Evacuate, eliminate ignition sources, and ventilate the area before investigating. Gasoline vapor is heavier than air and can travel to ignition sources.',
    explanationEs: 'El olor a gasolina significa que hay vapor de combustible presente. Evacúa, elimina las fuentes de ignición y ventila el área antes de investigar. El vapor de gasolina es más pesado que el aire y puede viajar a fuentes de ignición.',
    category: 'Fuel System Safety',
    categoryEs: 'Seguridad del sistema de combustible',
    source: 'Content source: Rounds 1–3'
  },
  {
    id: 15,
    question: 'When is it safe to work on a vehicle\'s airbag system?',
    questionEs: '¿Cuándo es seguro trabajar en el sistema de airbag de un vehículo?',
    options: ['After disconnecting the battery', 'After following the manufacturer\'s depowering procedure', 'After waiting 10 minutes', 'After removing the airbag fuse'],
    optionsEs: ['Después de desconectar la batería', 'Después de seguir el procedimiento de desactivación del fabricante', 'Después de esperar 10 minutos', 'Después de quitar el fusible del airbag'],
    correct: 1,
    explanation: 'Airbag systems have backup power supplies (capacitors) that can deploy the airbag even with the battery disconnected. Always follow the manufacturer\'s specific depowering procedure, which may include waiting for capacitor discharge.',
    explanationEs: 'Los sistemas de airbag tienen fuentes de alimentación de respaldo (condensadores) que pueden desplegar el airbag incluso con la batería desconectada. Siempre sigue el procedimiento de desactivación específico del fabricante, que puede incluir esperar la descarga del condensador.',
    category: 'Electrical Safety',
    categoryEs: 'Seguridad eléctrica',
    source: 'Content source: Rounds 1–3'
  },
];

type QuizState = 'idle' | 'active' | 'complete';

export const SafetyLessonQuiz: React.FC = () => {
  const [state, setState] = useState<QuizState>('idle');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { t, lang } = useLang();

  const startQuiz = () => {
    setState('active');
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswer = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(optionIndex);
    setAnswers((prev) => [...prev, optionIndex]);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setState('complete');
    }
  };

  const calculateScore = () => {
    return QUIZ_QUESTIONS.reduce((correct, q, index) => {
      return answers[index] === q.correct ? correct + 1 : correct;
    }, 0);
  };

  const restartQuiz = () => {
    setState('idle');
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <section className="quiz-section" id="safety-quiz">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />{' '}
              {state === 'active'
                ? `${t('KNOWLEDGE CHECK')} / ${String(currentQuestion + 1).padStart(2, '0')}`
                : t('KNOWLEDGE CHECK / 01')}
            </div>
            <h2>
              {t('Safety')} <span className="text-gold">{t('lesson.')}</span>
            </h2>
          </div>
          <p>
            {t('Test your understanding of automotive safety fundamentals. Review the explanation after each answer.')}
          </p>
        </div>

        {state === 'idle' && (
          <div className="quiz-start">
            <p className="quiz-start-info">
              {t('Quiz — 15 questions available.')}
            </p>
            <button className="button button-primary" type="button" onClick={startQuiz}>
              {t('Start lesson')}
            </button>
          </div>
        )}

        {state === 'active' && (
          <div className="quiz-active">
            <div className="quiz-question">
              <p className="quiz-question-text">
                {lang === 'es'
                  ? QUIZ_QUESTIONS[currentQuestion].questionEs
                  : QUIZ_QUESTIONS[currentQuestion].question}
              </p>
              <div className="quiz-options">
                {(lang === 'es'
                  ? QUIZ_QUESTIONS[currentQuestion].optionsEs
                  : QUIZ_QUESTIONS[currentQuestion].options
                ).map((option, index) => {
                  const isCorrect = index === QUIZ_QUESTIONS[currentQuestion].correct;
                  const isSelected = selectedAnswer === index;
                  let className = 'quiz-option';
                  if (showExplanation) {
                    className += isCorrect
                      ? ' quiz-option-correct'
                      : isSelected
                        ? ' quiz-option-incorrect'
                        : '';
                  }
                  return (
                    <button
                      key={index}
                      className={className}
                      type="button"
                      onClick={() => handleAnswer(index)}
                      disabled={showExplanation}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {showExplanation && (
              <div className="quiz-explanation">
                <p>
                  {lang === 'es'
                    ? QUIZ_QUESTIONS[currentQuestion].explanationEs
                    : QUIZ_QUESTIONS[currentQuestion].explanation}
                </p>
                <p className="quiz-source">
                  {lang === 'es'
                    ? 'Fuente del contenido: Rondas 1–3'
                    : QUIZ_QUESTIONS[currentQuestion].source}
                </p>
                <button
                  className="button button-primary"
                  type="button"
                  onClick={nextQuestion}
                >
                  {currentQuestion < QUIZ_QUESTIONS.length - 1
                    ? t('Next question')
                    : t('See results')}
                </button>
              </div>
            )}

            <p className="quiz-progress">
              {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
            </p>
          </div>
        )}

        {state === 'complete' && (
          <div className="quiz-complete">
            <div className="quiz-score">
              <span className="quiz-score-number">
                {calculateScore()} / {QUIZ_QUESTIONS.length}
              </span>
              <span className="quiz-score-label">{t('score')}</span>
            </div>
            <p>
              {t('This score covers the 15 questions available. This is a self-check only; it does not unlock another lesson or certify training.')}
            </p>
            <button className="button button-ghost" type="button" onClick={restartQuiz}>
              {t('Retake quiz')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SafetyLessonQuiz;
