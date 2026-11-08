/**
 * Spanish transmission diagnostic codes, engine, and TCM codes.
 * Todo el contenido está revisado y aprobado para referencia.
 */

import { CodeCategory, DiagnosticCode, FieldGuide } from '../types/diagnostics';

const TRANSMISSION_CODES_ES: DiagnosticCode[] = [
  {
    code: 'P0700',
    category: CodeCategory.Transmission,
    title: 'Sistema de control de transmisión (solicitud MIL)',
    summary: 'El Módulo de Control de Transmisión (TCM) ha detectado una falla y solicita que la ECM ilumine la luz MIL.',
    symptom: 'Luz de Check Engine encendida, posibles problemas de calidad de cambio, la transmisión puede entrar en modo de emergencia',
    symptomEs: 'Luz de Check Engine encendida, posibles problemas de calidad de cambio, la transmisión puede entrar en modo de emergencia',
    sections: [
      {heading:'Cómo funciona',body:'P0700 es una solicitud genérica del módulo de control de transmisión para iluminar la luz MIL. Siempre acompaña a un código específico del fabricante que identifica la falla real.'},
      {heading:'Qué revisar',body:'Recupera el código(s) específico(s) del fabricante asociado para determinar la falla real. Inspecciona el nivel y condición del fluido de la transmisión. Revisa si hay daños en el cableado en el conector del TCM y el arnés de la transmisión.'},
      {heading:'Causas comunes',body:'Nivel bajo o fluido degradado de la transmisión, solenoide de cambio defectuoso, TCM averiado, arnés de cables dañado o falla interna de la transmisión.'},
    ],
    related:['P0705–P0715','P0730','P0740','P0750','P0760','P0770','P0780'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0705',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del circuito del sensor de rango de transmisión (entrada PRNDL)',
    summary: 'El TCM detecta una señal inválida o intermitente del sensor de rango de transmisión.',
    symptom: 'Visualización incorrecta de la marcha, no arranca en Park/Neutral, cambios erráticos, modo de seguridad',
    symptomEs: 'Visualización incorrecta de la marcha, no arranca en Park/Neutral, cambios erráticos, modo de seguridad',
    sections: [
      {heading:'Cómo funciona',body:'El sensor de rango de transmisión le indica al TCM qué posición de marcha ha seleccionado el conductor (P/R/N/D/L). Generalmente es parte del eje de cambio manual o está montado externamente en la carcasa de la transmisión.'},
      {heading:'Qué revisar',body:'Verifica que el indicador de posición de marcha en el tablero coincida con la posición real de la palanca. Revisa si hay corrosión en el conector del sensor. Prueba el voltaje de la señal del sensor en cada posición. Inspecciona el ajuste del cable de cambio.'},
      {heading:'Causas comunes',body:'Sensor de rango defectuoso, varillaje de cambio desajustado, conector corroído, cable roto en el arnés o residuos bloqueando el mecanismo del sensor.'},
    ],
    related:['P0700','P0715','P0720','P0730'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0715',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del circuito del sensor de velocidad de entrada/turbina',
    summary: 'El TCM detecta una señal nula o errática del sensor de velocidad de entrada.',
    symptom: 'Cambios bruscos o retrasados, sin acoplamiento del convertidor de par, modo de seguridad',
    symptomEs: 'Cambios bruscos o retrasados, sin acoplamiento del convertidor de par, modo de seguridad',
    sections: [
      {heading:'Cómo funciona',body:'El sensor de velocidad de entrada monitorea la velocidad de rotación del eje de entrada de la transmisión (lado de la turbina del convertidor de par). El TCM lo usa para calcular la sincronización de cambios y el bloqueo del TCC.'},
      {heading:'Qué revisar',body:'Mide la resistencia del sensor y el voltaje de salida CA mientras giras. Inspecciona la rueda dentada por daños. Revisa el cableado entre el sensor y el TCM por roturas o cortocircuitos.'},
      {heading:'Causas comunes',body:'Sensor de velocidad de entrada averiado, rueda dentada dañada, falla de cableado, nivel bajo de fluido que causa pérdida intermitente de señal o daño interno de la transmisión.'},
    ],
    related:['P0700','P0720','P0730','P0740'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0720',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del circuito del sensor de velocidad de salida',
    summary: 'El TCM detecta una señal nula o errática del sensor de velocidad de salida.',
    symptom: 'El velocímetro puede no funcionar, cambios bruscos, sincronización incorrecta de cambios, modo de seguridad',
    symptomEs: 'El velocímetro puede no funcionar, cambios bruscos, sincronización incorrecta de cambios, modo de seguridad',
    sections: [
      {heading:'Cómo funciona',body:'El sensor de velocidad de salida monitorea la velocidad de rotación del eje de salida de la transmisión. El TCM compara la velocidad de entrada vs. salida para detectar deslizamiento del embrague y determinar la sincronización de cambios.'},
      {heading:'Qué revisar',body:'Revisa la resistencia del sensor y la salida CA mientras giras las ruedas motrices. Inspecciona el anillo reluctor. Verifica la integridad del cableado desde el sensor hasta el TCM. Revisa los datos del sensor de velocidad de rueda ABS si están compartidos.'},
      {heading:'Causas comunes',body:'Sensor de velocidad de salida averiado, anillo reluctor dañado, falla de cableado, nivel bajo de fluido o falla mecánica interna de la transmisión que causa que no haya rotación de salida.'},
    ],
    related:['P0700','P0715','P0730','P0725'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0730',
    category: CodeCategory.Transmission,
    title: 'Relación de marcha incorrecta',
    summary: 'El TCM detecta una relación de marcha que no coincide con la relación esperada para la marcha seleccionada.',
    symptom: 'Patina, se revoluciona en los cambios, aceleración pobre, luz de Check Engine, posible modo de seguridad',
    symptomEs: 'Patina, se revoluciona en los cambios, aceleración pobre, luz de Check Engine, posible modo de seguridad',
    sections: [
      {heading:'Cómo funciona',body:'El TCM compara la relación de velocidad de entrada a salida con la relación conocida para cada marcha comandada. Una discrepancia indica deslizamiento del paquete de embragues o banda, o un embrague unidireccional atascado.'},
      {heading:'Qué revisar',body:'Realiza una prueba de estallido para aislar el componente que patina. Revisa el nivel, color y olor del fluido. Inspecciona el cuerpo de válvulas por válvulas pegadas. Mide la presión de línea en ralentí y en estallido.'},
      {heading:'Causas comunes',body:'Paquete de embrague desgastado, banda averiada, cuerpo de válvulas atascado, presión de fluido baja, falla del convertidor de par o daño mecánico interno.'},
    ],
    related:['P0700','P0715','P0720','P0731–P0736','P0740','P0780'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0740',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del circuito del embrague del convertidor de par',
    summary: 'El TCM detecta una falla en el solenoide del embrague del convertidor de par o en el circuito de bloqueo.',
    symptom: 'TCC se queda desacoplado (RPM altas en carretera), vibración al acoplar, se cala en paradas, modo de seguridad',
    symptomEs: 'TCC se queda desacoplado (RPM altas en carretera), vibración al acoplar, se cala en paradas, modo de seguridad',
    sections: [
      {heading:'Cómo funciona',body:'El TCM comanda el solenoide del TCC para bloquear el convertidor de par a velocidad de crucero, mejorando el consumo de combustible. Monitorea las RPM del motor vs. la velocidad del eje de entrada para verificar el bloqueo.'},
      {heading:'Qué revisar',body:'Revisa la resistencia del solenoide TCC y su funcionamiento con control bidireccional del escáner. Inspecciona el fluido de transmisión por signos de sobrecalentamiento (olor a quemado, color oscuro). Verifica el funcionamiento del interruptor de freno (el TCC se desacopla al frenar).'},
      {heading:'Causas comunes',body:'Solenoide TCC averiado, válvula TCC pegada en el cuerpo de válvulas, convertidor de par desgastado, nivel bajo de fluido o falla de cableado al solenoide.'},
    ],
    related:['P0700','P0715','P0720','P0730','P0743','P0748','P0750'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0750',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del solenoide de cambio A',
    summary: 'El TCM detecta una falla eléctrica o funcional en el solenoide de cambio A.',
    symptom: 'Marcha faltante (generalmente 2da o 3ra), cambios bruscos, modo de emergencia, luz de Check Engine',
    symptomEs: 'Marcha faltante (generalmente 2da o 3ra), cambios bruscos, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'Cómo funciona',body:'Los solenoides de cambio controlan el flujo hidráulico hacia las válvulas de cambio, dirigiendo el fluido a los paquetes de embrague apropiados. El TCM monitorea la resistencia del solenoide y verifica que el cambio de relación ocurra cuando se comanda.'},
      {heading:'Qué revisar',body:'Mide la resistencia del solenoide en el conector de la transmisión. Realiza una prueba de alimentación/tierra del solenoide. Usa un escáner para comandar el solenoide encendido/apagado mientras escuchas un clic. Inspecciona el cuerpo de válvulas por residuos.'},
      {heading:'Causas comunes',body:'Solenoide de cambio averiado, válvula pegada en el cuerpo de válvulas, circuito abierto/corto en el circuito del solenoide, nivel bajo de fluido o residuos internos bloqueando el solenoide.'},
    ],
    related:['P0700','P0755','P0760','P0765','P0770','P0780'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0755',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del solenoide de cambio B',
    summary: 'El TCM detecta una falla eléctrica o funcional en el solenoide de cambio B.',
    symptom: 'Marcha faltante, patrón de cambio incorrecto, acoplamientos bruscos, modo de emergencia',
    symptomEs: 'Marcha faltante, patrón de cambio incorrecto, acoplamientos bruscos, modo de emergencia',
    sections: [
      {heading:'Cómo funciona',body:'El solenoide de cambio B típicamente controla un conjunto de marchas diferente al solenoide A. Juntos, A y B se energizan en patrones específicos para acoplar 1ra a 4ta marcha.'},
      {heading:'Qué revisar',body:'Igual que P0750 — mide la resistencia, prueba la respuesta al comando, inspecciona el cableado y el cuerpo de válvulas. El rango de resistencia debe coincidir con la especificación del fabricante.'},
      {heading:'Causas comunes',body:'Solenoide averiado, problema en el cuerpo de válvulas, falla eléctrica o fluido de transmisión contaminado.'},
    ],
    related:['P0700','P0750','P0760','P0765','P0780'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0760',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del solenoide de cambio C',
    summary: 'El TCM detecta una falla eléctrica o funcional en el solenoide de cambio C.',
    symptom: 'Marcha faltante, patrón de cambio incorrecto, modo de emergencia, luz de Check Engine',
    symptomEs: 'Marcha faltante, patrón de cambio incorrecto, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'Cómo funciona',body:'El solenoide de cambio C se usa típicamente en transmisiones de 5 y 6 velocidades para controlar conjuntos de marchas adicionales más allá de lo que manejan los solenoides A y B.'},
      {heading:'Qué revisar',body:'El enfoque de diagnóstico es similar al de P0750. Consulta el diagrama de cableado específico del vehículo para confirmar qué solenoide es C y su función en esa transmisión.'},
      {heading:'Causas comunes',body:'Falla del solenoide, falla de cableado, residuos en el cuerpo de válvulas o presión de fluido baja.'},
    ],
    related:['P0700','P0750','P0755','P0765','P0770','P0780'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0765',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del solenoide de cambio D',
    summary: 'El TCM detecta una falla eléctrica o funcional en el solenoide de cambio D.',
    symptom: 'Vacilación en el cambio, selección incorrecta de marcha, modo de emergencia, luz de Check Engine',
    symptomEs: 'Vacilación en el cambio, selección incorrecta de marcha, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'Cómo funciona',body:'El solenoide de cambio D se usa en transmisiones con 6 o más velocidades para manejar estados de marcha adicionales más allá de los solenoides A a C.'},
      {heading:'Qué revisar',body:'Sigue los mismos pasos de diagnóstico que P0750. Consulta la información de servicio del fabricante para la función exacta del solenoide en ese modelo de transmisión.'},
      {heading:'Causas comunes',body:'Falla eléctrica del solenoide, problema de cableado, contaminación del cuerpo de válvulas o desgaste interno de la transmisión.'},
    ],
    related:['P0700','P0750','P0755','P0760','P0770','P0780'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0770',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del solenoide de cambio E',
    summary: 'El TCM detecta una falla eléctrica o funcional en el solenoide de cambio E.',
    symptom: 'Cambios erráticos, marcha faltante, modo de emergencia, luz de Check Engine',
    symptomEs: 'Cambios erráticos, marcha faltante, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'Cómo funciona',body:'El solenoide de cambio E puede controlar una marcha específica, el bloqueo del TCC o la regulación de presión dependiendo del diseño de la transmisión.'},
      {heading:'Qué revisar',body:'Identifica la función del solenoide a partir de la información de servicio específica del vehículo. Prueba la resistencia, la respuesta al comando y la integridad del circuito.'},
      {heading:'Causas comunes',body:'Falla del solenoide, falla de cableado, problema en el cuerpo de válvulas o nivel/presión de fluido bajo.'},
    ],
    related:['P0700','P0750','P0755','P0760','P0765','P0780'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
  {
    code: 'P0780',
    category: CodeCategory.Transmission,
    title: 'Mal funcionamiento del cambio',
    summary: 'El TCM detecta una falla general del sistema de cambios que no se aísla a un solenoide específico.',
    symptom: 'Transmisión atascada en una marcha, sin cambios ascendentes o descendentes, modo de emergencia, MIL encendida',
    symptomEs: 'Transmisión atascada en una marcha, sin cambios ascendentes o descendentes, modo de emergencia, MIL encendida',
    sections: [
      {heading:'Cómo funciona',body:'P0780 es un código general que el TCM establece cuando la sincronización de cambios, la relación o la respuesta del solenoide caen fuera de los parámetros esperados pero no aplica ningún código de solenoide específico.'},
      {heading:'Qué revisar',body:'Revisa primero el nivel y condición del fluido. Recupera cualquier código pendiente para obtener una dirección más específica. Realiza una prueba de presión de línea. Inspecciona la varillaje de cambios y el ajuste del cable. Usa un escáner para ver los datos en vivo de la transmisión.'},
      {heading:'Causas comunes',body:'Fluido bajo, filtro obstruido, desgaste del cuerpo de válvulas, bomba averiada, daño mecánico interno o falla de software del TCM.'},
    ],
    related:['P0700','P0730','P0740','P0750','P0755','P0760','P0765','P0770'],
    reviewStatus:'Revisado y aprobado',sourceStatus:'Revisado' },
];

const TRANSMISSION_GUIDES_ES: FieldGuide[] = [
  {
    id: 'transmission-fluid-check',
    category: CodeCategory.Transmission,
    icon: '🔧',
    type: 'Procedimiento',
    title: 'Verificación del fluido de la transmisión',
    summary: 'Cómo revisar el nivel y la condición del fluido en transmisiones automáticas y manuales.',
    time: '5 min',
  },
  {
    id: 'transmission-slip-diagnosis',
    category: CodeCategory.Transmission,
    icon: '⚡',
    type: 'Flujo de diagnóstico',
    title: 'Diagnóstico de deslizamiento de la transmisión',
    summary: 'Enfoque paso a paso para identificar qué componente está patinando.',
    time: '15 min',
  },
];

export function transmissionCodesEs(): DiagnosticCode[] {
  return TRANSMISSION_CODES_ES;
}

export function transmissionGuidesEs(): FieldGuide[] {
  return TRANSMISSION_GUIDES_ES;
}
