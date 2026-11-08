/**
 * Spanish translations for The Greasy Dojo.
 * All entries are keyed by the English string for t(key) lookups.
 */

const ES_TRANSLATIONS: Record<string, string> = {
  // --- Common ---
  'Close': 'Cerrar',
  'All': 'Todos',
  'read': 'lectura',
  'Approved': 'Aprobado',

  // --- Nav ---
  'DIAGNOSTIC TROUBLE CODE LIBRARY': 'BIBLIOTECA DE CÓDIGOS DE FALLA DE DIAGNÓSTICO',
  'THE DIAGNOSTIC LAB': 'EL LABORATORIO DE DIAGNÓSTICO',
  'FIELD GUIDES': 'GUÍAS DE CAMPO',
  'FIX DATABASE / FIELD GUIDES': 'BASE DE DATOS DE REPARACIONES / GUÍAS DE CAMPO',
  'SAFETY LESSON': 'LECCIÓN DE SEGURIDAD',
  'KNOWLEDGE CHECK': 'VERIFICACIÓN DE CONOCIMIENTOS',
  'KNOWLEDGE CHECK / 01': 'VERIFICACIÓN DE CONOCIMIENTOS / 01',
  'CASE WORKSHEET': 'HOJA DE TRABAJO DEL CASO',

  // --- Sections ---
  'Research the': 'Investiga el',
  'code.': 'código.',
  'A code is a clue.': 'Un código es una pista.',
  'Build the case.': 'Construye el caso.',
  'Follow the trail.': 'Sigue el rastro.',
  'One test at a time.': 'Una prueba a la vez.',
  'Practical': 'Prácticos',
  'walks.': 'caminos.',
  'Safety': 'Seguridad',
  'lesson.': 'lección.',
  'Start lesson': 'Comenzar lección',
  'Next question': 'Siguiente pregunta',
  'See results': 'Ver resultados',
  'score': 'puntuación',
  'Retake quiz': 'Repetir cuestionario',
  'Filter trouble codes': 'Filtrar códigos de falla',

  // --- Search ---
  'Search a trouble code, a symptom, or a guide topic. Results are drawn from an educational library, not live vehicle data.':
    'Busca un código de falla, un síntoma o un tema de guía. Los resultados provienen de una biblioteca educativa, no de datos del vehículo en vivo.',

  // --- Quiz ---
  'Quiz — 15 questions available.':
    'Cuestionario — 15 preguntas disponibles.',
  'Test your understanding of automotive safety fundamentals. Review the explanation after each answer.':
    'Pon a prueba tu comprensión de los fundamentos de seguridad automotriz. Revisa la explicación después de cada respuesta.',
  'This score covers the 15 questions available. This is a self-check only; it does not unlock another lesson or certify training.':
    'Esta puntuación cubre las 15 preguntas disponibles. Esto es solo una autoevaluación; no desbloquea otra lección ni certifica capacitación.',

  // --- Dialog ---
  'Review status:': 'Estado de revisión:',
  'Pending': 'Pendiente',
  'Related codes': 'Códigos relacionados',
  'Procedures and specifications vary by year, make, model, engine, and market. Always verify with authoritative service information and a qualified technician when appropriate.':
    'Los procedimientos y las especificaciones varían según el año, la marca, el modelo, el motor y el mercado. Siempre verifica con información de servicio autoritativa y un técnico calificado cuando corresponda.',
  'Approved educational content · always verify with service information':
    'Contenido educativo aprobado · siempre verifica con información de servicio',

  // --- Guides section ---
  'Practical starting points for common complaints. Each guide follows a test-before-replace approach.':
    'Puntos de partida prácticos para quejas comunes. Cada guía sigue un enfoque de probar antes de reemplazar.',

  // --- Diagnostic Lab ---
  'Browse common OBD-II examples, then open a result for possible causes and next checks. A code never proves a component has failed on its own.':
    'Explora ejemplos comunes de OBD-II, luego abre un resultado para ver posibles causas y próximas verificaciones. Un código nunca prueba por sí solo que un componente haya fallado.',
  'Safety first:': 'Seguridad primero:',
  'a flashing check-engine light, severe shaking, smoke, fuel smell, overheating, or major loss of power can indicate an urgent problem. Stop somewhere safe and seek qualified help rather than continuing to drive.':
    'una luz de Check Engine parpadeante, sacudidas fuertes, humo, olor a combustible, sobrecalentamiento o pérdida importante de potencia pueden indicar un problema urgente. Detente en un lugar seguro y busca ayuda calificada en lugar de continuar conduciendo.',

  // --- Quiz source ---
  'Content source: Rounds 1–3': 'Fuente del contenido: Rondas 1–3',

  // --- Search status ---
  'No exact match in this library. Try a shorter symptom, a code such as P0300, or browse all guides.':
    'Sin coincidencia exacta en esta biblioteca. Prueba un síntoma más corto, un código como P0300 o explora todas las guías.',
  'No exact match - these are the closest topics in the library.':
    'Sin coincidencia exacta: estos son los temas más cercanos en la biblioteca.',
  ' result found. Open a result to review the guidance.':
    ' resultado encontrado. Abre un resultado para revisar la guía.',
  ' results found. Open a result to review the guidance.':
    ' resultados encontrados. Abre un resultado para revisar la guía.',

  // --- Case worksheet ---
  'CASE WORKSHEET — BUILD A CASE': 'HOJA DE TRABAJO — CONSTRUYE UN CASO',
  'Vehicle': 'Vehículo',
  'Symptoms': 'Síntomas',
  'Conditions': 'Condiciones',
  'Safety flags': 'Alertas de seguridad',
  'Notes / What you tried': 'Notas / Lo que intentaste',
  'Copy case to clipboard': 'Copiar caso al portapapeles',
  'Copied!': '¡Copiado!',
  'Build a summary you can send to your mechanic. Fill in the fields below, then copy and send it.':
    'Crea un resumen que puedas enviar a tu mecánico. Completa los campos a continuación, luego cópialo y envíalo.',
  'Case copied to clipboard — paste and send it to your mechanic.':
    'Caso copiado al portapapeles — pégalo y envíalo a tu mecánico.',
  'Vehicle info': 'Información del vehículo',
  'e.g. 2015 Honda Civic 1.8L': 'ej. 2015 Honda Civic 1.8L',
  'What is the concern?': '¿Cuál es el problema?',
  'e.g. Check Engine Light on, rough idle, hesitation': 'ej. Luz de Check Engine encendida, ralentí irregular, vacilación',
  'When does it happen?': '¿Cuándo ocurre?',
  'e.g. Cold start, after rain, highway speeds': 'ej. Arranque en frío, después de lluvia, velocidades de autopista',
  'Anything urgent?': '¿Algo urgente?',
  'e.g. Overheating, smoke, fuel smell, shaking': 'ej. Sobrecalentamiento, humo, olor a combustible, vibraciones',
  'Extra notes': 'Notas adicionales',
  'e.g. Already replaced spark plugs, no change': 'ej. Ya reemplacé las bujías, sin cambio',

  // --- Worksheet placeholders ---
  'e.g. P0300, P0171 — include pending or permanent status if known.': 'ej. P0300, P0171 — incluye estado pendiente o permanente si se conoce.',
  'e.g. 2015 Honda Civic': 'ej. 2015 Honda Civic',

  // --- Global info ---
  'Content is reviewed and approved for reference. The Greasy Dojo library is live.':
    'El contenido está revisado y aprobado para referencia. La biblioteca de The Greasy Dojo ya está disponible.',

  // --- Legal notices ---
  'These notices are implementation drafts, not legal advice. Consult a qualified attorney for legal guidance.':
    'Estos avisos son borradores de implementación, no asesoramiento legal. Consulta a un abogado calificado para orientación legal.',
} as const;

/** Spanish translations for Greasy Dojo search status constants. */
export const SEARCH_ES = {
  found: ' resultado encontrado. Abre un resultado para revisar la guía.',
  found_plural: ' resultados encontrados. Abre un resultado para revisar la guía.',
  close: 'Sin coincidencia exacta: estos son los temas más cercanos en la biblioteca.',
  none: 'Sin coincidencia exacta en esta biblioteca. Prueba un síntoma más corto, un código como P0300 o explora todas las guías.',
};

export default ES_TRANSLATIONS;
