import { CodeCategory, FieldGuide, TroubleCode } from '../types/diagnostics';

/**
 * Traduccion al espanol de transmissionData.ts. Mismo criterio de
 * borrador: sin especificaciones inventadas, verificaciones prudentes
 * y escalamiento explicito a servicio profesional. Ambos idiomas
 * quedan marcados como pendientes de revision mecanica.
 */
export const TRANSMISSION_CODES_ES: TroubleCode[] = [
  {
    code: 'P0700', title: 'Falla del sistema de control de la transmisión', category: CodeCategory.Transmission,
    summary: 'La computadora de la transmisión reportó una falla. Este código es una señal para leer más a fondo, no un diagnóstico.',
    meaning: 'La computadora del motor activa P0700 para reportar que el módulo de control de la transmisión marcó una falla propia. El problema específico lo describen los códigos del módulo de transmisión, que muchos escáneres básicos no pueden leer.',
    symptoms: ['Luz de check engine', 'Cambios bruscos, tardíos o erráticos', 'Modo de emergencia (limp) con marchas limitadas', 'A veces ningún cambio noticeable'],
    causes: ['Lo que sea que el módulo de transmisión detectó: solenoides de cambio, sensores de velocidad, control de presión, cableado o el propio módulo'],
    checks: ['Lee todos los códigos con un escáner que pueda comunicarse con el módulo de transmisión. P0700 por sí solo no identifica la falla.', 'Registra los datos de imagen congelada y cualquier código del módulo de transmisión que el escáner pueda leer.', 'Revisa el nivel y el estado del fluido usando el procedimiento exacto del vehículo. Algunos vehículos requieren el motor caliente; otros no tienen varilla y usan un tapón de nivel.', 'Inspecciona el cableado y los conectores en la transmisión por daño, corrosión o aislamiento roído.', 'No reemplaces piezas basándote solo en P0700; los códigos del módulo de transmisión identifican el circuito a investigar.'],
    warning: 'El modo de emergencia restringe los cambios a propósito para proteger la transmisión. El fluido a temperatura de operación puede quemar la piel. Las transmisiones automáticas se dañan rápidamente con el tipo de fluido equivocado.',
    related: ['P0715', 'P0730', 'No cambia bien o patina'],
    reviewStatus: 'Revisión mecánica pendiente', sourceStatus: 'Referencias autoritativas aún no proporcionadas',
  },
  {
    code: 'P0715', title: 'Circuito del sensor de velocidad de entrada / turbina', category: CodeCategory.Transmission,
    summary: 'La computadora no puede obtener una señal de velocidad limpia del eje de entrada de la transmisión.',
    meaning: 'La computadora de la transmisión observa qué tan rápido gira el eje de entrada para sincronizar los cambios. Una señal ausente o ruidosa altera la calidad de los cambios y puede activar el modo de emergencia.',
    symptoms: ['Cambios bruscos o tardíos', 'Los cambios se sienten mal a ciertas velocidades', 'El velocímetro o el control de crucero cambian de comportamiento en algunos vehículos', 'Modo de emergencia'],
    causes: ['Sensor de velocidad de entrada averiado', 'Daño en el cableado o el conector', 'Residuo o desgaste que afecta el anillo tonal del sensor', 'Falla interna de la transmisión que altera la señal'],
    checks: ['Lee todos los códigos; los códigos relacionados de sensores de velocidad apuntan a un circuito o arnés compartido.', 'Inspecciona el conector y el cableado del sensor por daño por calor, rozadura y corrosión.', 'Compara las lecturas de los sensores de velocidad de entrada y salida en datos en vivo cuando el escáner lo permita.', 'Sigue el manual de servicio para la prueba de resistencia o salida del sensor antes de reemplazarlo.'],
    warning: 'Las verificaciones debajo del vehículo requieren que el vehículo esté apoyado con seguridad sobre terreno nivelado con soportes de gato con capacidad nominal. Deja enfriar primero el escape y los fluidos calientes.',
    related: ['P0700', 'P0730'],
    reviewStatus: 'Revisión mecánica pendiente', sourceStatus: 'Referencias autoritativas aún no proporcionadas',
  },
  {
    code: 'P0730', title: 'Relación de marchas incorrecta', category: CodeCategory.Transmission,
    summary: 'La computadora ordenó una marcha y los sensores de velocidad indican que la transmisión no la está entregando.',
    meaning: 'La computadora de la transmisión compara la velocidad del motor con las velocidades de las ruedas y los ejes para confirmar cada cambio. Cuando la relación medida no coincide con la marcha ordenada, la computadora reporta P0730. Esto puede significar patinaje, o controles que no pueden aplicar la marcha.',
    symptoms: ['Patinaje o sobreregímenes entre marchas', 'Acoplamiento brusco', 'Motor que sube de revoluciones sin aceleración', 'Modo de emergencia'],
    causes: ['Fluido bajo o deteriorado', 'Embragues o bandas internos gastados', 'Bomba débil o problema de presión', 'Solenoides de cambio o fallas de control', 'Errores de datos de los sensores de velocidad'],
    checks: ['Revisa primero el nivel y el estado del fluido, usando el procedimiento exacto del vehículo y el fluido especificado.', 'Evalúa el fluido: color oscuro u olor a quemado apunta a desgaste interno; aspecto lechoso significa entrada de refrigerante.', 'Busca fugas en las líneas del enfriador y en el cárter.', 'Lee todos los códigos; la familia P0715-P0755 acota el circuito involucrado.', 'Revisa los datos en vivo (velocidades, comandos de solenoides) si el escáner lo permite.'],
    warning: 'Seguir manejando con una transmisión que patina puede destruirla. La reparación interna de una transmisión es trabajo de especialista; esta biblioteca no cubre procedimientos de desarme.',
    related: ['P0700', 'P0715'],
    reviewStatus: 'Revisión mecánica pendiente', sourceStatus: 'Referencias autoritativas aún no proporcionadas',
  },
];

export const SHIFT_GUIDES_ES: FieldGuide[] = [
  {
    id: 'shifting', icon: '\u2699', title: 'No cambia bien o patina', type: 'Transmisión',
    summary: 'Primero el fluido, luego los códigos, luego límites honestos: algunas fallas de cambio son reparables, y otras son trabajo de especialista.',
    time: '9 min',
    search: 'no cambia transmision patina engranajes cambios bruscos acoplamiento tardio no mete marcha carro no cambia p0700 fluido de transmision',
    sections: [
      { heading: 'La lógica', body: 'Una transmisión automática necesita el nivel y el estado correctos del fluido, presión hidráulica, controles que funcionen (sensores, solenoides, módulo) y partes internas en buen estado. Un problema de cambio vive en una de esas capas. Prueba de afuera hacia adentro - fluido, luego códigos y cableado - antes de asumir lo peor, y sabe dónde termina el trabajo casero.' },
      { heading: 'Herramientas del borrador', body: 'Un escáner que pueda leer códigos de transmisión, la verificación de nivel de fluido que el vehículo especifica (varilla o tapón de nivel), herramientas básicas de mano, guantes y protección ocular.' },
      { heading: 'Secuencia de diagnóstico', items: ['Describe la falla con precisión: patinaje, cambios bruscos, acoplamiento tardío, sin reversa o modo de emergencia. Cada una apunta de forma distinta.', 'Lee todos los códigos, incluidos los códigos de transmisión específicos del fabricante, y anota los datos de imagen congelada.', 'Revisa el nivel y el estado del fluido con el procedimiento exacto del vehículo - el tipo de fluido, la temperatura y el estado del motor importan.', 'Evalúa el fluido: oscuro y con olor a quemado sugiere desgaste interno; lechoso sugiere entrada de refrigerante; textura arenosa sugiere material de embrague.', 'Busca fugas en las líneas del enfriador, el empaque del cárter y los sellos de los ejes.', 'Inspecciona el cableado y los conectores hacia los sensores y solenoides de la transmisión.', 'Revisa los datos en vivo - velocidades de entrada y salida, comandos de solenoides - si el escáner lo permite.', 'Si el fluido, el cableado y los códigos básicos están bien pero la falla persiste, las causas restantes suelen ser internas o del módulo. Ese es territorio de especialista.'] },
      { heading: 'Seguridad', body: 'El fluido a temperatura de operación puede quemar. Apoya el vehículo sobre terreno nivelado con soportes de gato con capacidad nominal y calza las ruedas. Usa exactamente la especificación de fluido que el vehículo requiere - el fluido equivocado puede arruinar una transmisión automática. Mantén el motor apagado para el trabajo debajo del vehículo.' },
      { heading: 'Errores comunes', body: 'Reponer con el fluido equivocado, leer el nivel con el motor apagado en vehículos que lo requieren encendido, reemplazar piezas por un P0700 sin leer los códigos del módulo de transmisión, y manejar una unidad que patina hasta que falle por completo.' },
    ],
  },
];
