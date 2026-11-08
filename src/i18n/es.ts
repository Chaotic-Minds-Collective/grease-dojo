// Spanish UI strings, keyed by the English source text. Anything a
// component wraps in t() and forgets to add here falls back to English,
// so missing keys degrade safely instead of crashing.
export const ES: Record<string, string> = {
  // Header
  'Home': 'Inicio',
  'Diagnostic Lab': 'Laboratorio de diagnóstico',
  'Symptoms': 'Síntomas',
  'Guided Intake': 'Recepción guiada',
  'Fix Database': 'Base de reparaciones',
  'Learning': 'Aprendizaje',
  'Reference': 'Referencias',
  'About': 'Acerca de',
  'Contact': 'Contacto',
  'Start diagnosis': 'Iniciar diagnóstico',
  'Skip to content': 'Saltar al contenido',
  'CONCEPT BUILD': 'VERSIÓN DE CONCEPTO',
  'Educational drafts are under mechanic review. The Greasy Dojo relaunch is in progress.':
    'Los borradores educativos están en revisión mecánica. El relanzamiento de The Greasy Dojo está en marcha.',
  'WE HELP YOU FIND THE FAULT - OR TEACH YOU TO FIND IT':
    'TE AYUDAMOS A ENCONTRAR LA FALLA - O TE ENSEÑAMOS A ENCONTRARLA',
  'The Greasy Dojo home': 'Inicio de The Greasy Dojo',
  'Main navigation': 'Navegación principal',
  'Switch language to English': 'Cambiar el idioma a inglés',
  'Switch language to Spanish': 'Cambiar el idioma a español',

  // Hero
  'EVIDENCE-LED AUTOMOTIVE LEARNING': 'APRENDIZAJE AUTOMOTRIZ BASADO EN EVIDENCIA',
  'Find the fault.': 'Encuentra la falla.',
  'Not just a part.': 'No solo una pieza.',
  'That warning light is a clue, not a verdict. Connect trouble codes, symptoms, and sensible next tests before your wallet becomes a parts cannon.':
    'Esa luz de advertencia es una pista, no un veredicto. Conecta los códigos de falla, los síntomas y las pruebas sensatas siguientes antes de que tu bolsillo se convierta en un cañón de repuestos.',
  'Enter the Diagnostic Lab': 'Entrar al Laboratorio de Diagnóstico',
  'Browse the Fix Database': 'Explorar la Base de Reparaciones',
  'Gather evidence': 'Reúne evidencia',
  'Test before replacing': 'Prueba antes de reemplazar',
  'Know when to stop': 'Sabe cuándo parar',
  'Illustrative garage concept art and diagnostic console; not connected to a vehicle':
    'Arte conceptual ilustrativo de un taller y consola de diagnóstico; no conectado a un vehículo',
  'Garage workshop concept art with warm light over a workbench; illustrative, not connected to a vehicle':
    'Arte conceptual de un taller con luz cálida sobre un banco de trabajo; ilustrativo, no conectado a un vehículo',
  'CONCEPT VISUAL / 001': 'VISUAL CONCEPTUAL / 001',
  "THE SIGNAL ISN'T THE SOLUTION.": 'LA SEÑAL NO ES LA SOLUCIÓN.',
  'DOJO SYSTEM / CONCEPT': 'SISTEMA DOJO / CONCEPTO',
  'DIAGNOSTIC OVERVIEW': 'RESUMEN DIAGNÓSTICO',
  'STANDBY': 'EN ESPERA',
  'CODE SEARCH': 'BÚSQUEDA DE CÓDIGOS',
  'SYMPTOM CHECK': 'CHEQUEO DE SÍNTOMAS',
  'LIVE VEHICLE DATA': 'DATOS DEL VEHÍCULO EN VIVO',
  'READY': 'LISTO',
  'NOT CONNECTED': 'SIN CONEXIÓN',
  'NO GUESSWORK': 'SIN ADIVINANZAS',
  'JUST GOOD TESTS': 'SOLO BUENAS PRUEBAS',
  'EVIDENCE FIRST': 'EVIDENCIA PRIMERO',
  'OBD-II': 'OBD-II',
  'Transmission': 'Transmisión',
  'Language': 'Idioma',
  'FIELD NOTES': 'NOTAS DE CAMPO',
  'FIELD NOTES FOR REAL-WORLD DIAGNOSIS': 'NOTAS DE CAMPO PARA DIAGNÓSTICO REAL',
  'PRE-LAUNCH': 'PRE-LANZAMIENTO',
  'CONTENT REVIEW': 'REVISIÓN DE CONTENIDO',

  // Search section
  'START YOUR INVESTIGATION': 'COMIENZA TU INVESTIGACIÓN',
  'What is the vehicle': '¿Qué te está diciendo',
  'telling you?': 'el vehículo?',
  'Search a trouble code, a symptom, or a guide topic. Results are drawn from a small educational draft library, not live vehicle data.':
    'Busca un código de falla, un síntoma o un tema de guía. Los resultados provienen de una pequeña biblioteca educativa en borrador, no de datos del vehículo en vivo.',
  'Search trouble codes, symptoms, and guides': 'Busca códigos de falla, síntomas y guías',
  'Try P0300, clicking noise, dead battery…': 'Prueba P0300, ruido al dar contacto, batería muerta…',
  'Search': 'Buscar',
  'e.g. 2018': 'p. ej. 2018',
  'e.g. Ford': 'p. ej. Ford',
  'e.g. F-150': 'p. ej. F-150',
  'e.g. 2.0L turbo': 'p. ej. 2.0L turbo',
  'e.g. 124,500 miles': 'p. ej. 124.500 km',
  'e.g. P0300, P0171 — include pending or permanent status if known.': 'p. ej. P0300, P0171 — incluye el estado pendiente o permanente si lo conoces.',
  'What was repaired, replaced, refueled, or changed before the problem began?': '¿Qué se reparó, reemplazó, reabasteció o cambió antes de que empezara el problema?',
  'Describe sounds, smells, warning messages, when the issue started, and anything that makes it better or worse.': 'Describe sonidos, olores, mensajes de advertencia, cuándo empezó el problema y todo lo que lo mejore o empeore.',
  'QUICK LOOKUP': 'BÚSQUEDA RÁPIDA',
  'Popular searches': 'Búsquedas populares',

  // Diagnostic Lab
  'THE DIAGNOSTIC LAB': 'EL LABORATORIO DE DIAGNÓSTICO',
  'A code is a clue.': 'Un código es una pista.',
  'Build the case.': 'Construye el caso.',
  'Browse common OBD-II examples, then open a result for possible causes and next checks. A code never proves a component has failed on its own.':
    'Explora ejemplos comunes de OBD-II y abre un resultado para ver posibles causas y siguientes verificaciones. Un código nunca prueba por sí solo que un componente haya fallado.',
  'Filter trouble codes': 'Filtrar códigos de falla',
  'Draft library · mechanic review pending': 'Biblioteca en borrador · revisión mecánica pendiente',
  'Draft': 'Borrador',
  'read': 'de lectura',
  'Safety first:': 'Primero la seguridad:',
  'a flashing check-engine light, severe shaking, smoke, fuel smell, overheating, or major loss of power can indicate an urgent problem. Stop somewhere safe and seek qualified help rather than continuing to drive.':
    'una luz de check engine parpadeante, sacudidas severas, humo, olor a combustible, sobrecalentamiento o una gran pérdida de potencia pueden indicar un problema urgente. Detente en un lugar seguro y busca ayuda calificada en lugar de seguir manejando.',

  // Guides
  'FIX DATABASE / FIELD GUIDES': 'BASE DE REPARACIONES / GUÍAS DE CAMPO',
  'Follow the trail.': 'Sigue el rastro.',
  'One test at a time.': 'Una prueba a la vez.',
  'Practical starting points for common complaints. These educational drafts need qualified mechanic review and authoritative references before public release.':
    'Puntos de partida prácticos para quejas comunes. Estos borradores educativos necesitan revisión de un mecánico calificado y referencias autoritativas antes del lanzamiento público.',

  // Symptoms
  'SYMPTOM-BASED TROUBLESHOOTING': 'DIAGNÓSTICO POR SÍNTOMAS',
  'Start with what': 'Empieza por lo que',
  'you noticed.': 'notaste.',
  'The same symptom can have several causes. Choose the closest match to explore safe first observations and possible next tests.':
    'El mismo síntoma puede tener varias causas. Elige la coincidencia más cercana para explorar primeras observaciones seguras y posibles pruebas siguientes.',

  // Guided triage
  'GUIDED INTAKE': 'RECEPCIÓN GUIADA',
  'Start with the': 'Empieza con los',
  'symptoms.': 'síntomas.',
  'Organize what you are noticing before choosing a test. This guide helps you record useful observations; it does not diagnose the vehicle or replace service information.':
    'Organiza lo que notas antes de elegir una prueba. Esta guía te ayuda a registrar observaciones útiles; no diagnostica el vehículo ni reemplaza la información de servicio.',
  'Choose the main vehicle concern': 'Elige la principal inquietud del vehículo',
  'OBSERVATION CHECKLIST': 'LISTA DE OBSERVACIÓN',
  'What to record': 'Qué registrar',
  'Stop and get help if:': 'Detente y busca ayuda si:',
  'Safe next step': 'Siguiente paso seguro',
  'General educational guidance only. Vehicle-specific owner and service information takes priority. If the vehicle may be unsafe, do not drive it.':
    'Solo orientación educativa general. La información del propietario y de servicio específica del vehículo tiene prioridad. Si el vehículo puede no ser seguro, no lo manejes.',

  // Detail dialog
  'TROUBLE CODE //': 'CÓDIGO DE FALLA //',
  'FIELD GUIDE //': 'GUÍA DE CAMPO //',
  'FIELD NOTE': 'NOTA DE CAMPO',
  'Close details': 'Cerrar detalles',
  'Common symptoms': 'Síntomas comunes',
  'Possible causes': 'Causas posibles',
  'Sensible next checks': 'Siguientes verificaciones sensatas',
  'Related references': 'Referencias relacionadas',
  'not in this library yet': 'aún no está en esta biblioteca',
  'Review status:': 'Estado de revisión:',
  'Source status:': 'Estado de las fuentes:',
  'Educational draft only. Procedures and specifications vary by year, make, model, engine, and market. Verify with authoritative service information and a qualified technician when appropriate.':
    'Solo un borrador educativo. Los procedimientos y las especificaciones varían según el año, la marca, el modelo, el motor y el mercado. Verifica con información de servicio autoritativa y un técnico calificado cuando corresponda.',
  'Draft content · qualified review pending': 'Contenido en borrador · revisión calificada pendiente',
  'Close': 'Cerrar',
  'Pending': 'Pendiente',
  'References pending': 'Referencias pendientes',

  // Learning + quiz
  'LEARNING PATHS': 'RUTAS DE APRENDIZAJE',
  'Learn the logic.': 'Aprende la lógica.',
  'Not just the lingo.': 'No solo los términos.',
  'Build confidence with the fundamentals behind a good diagnostic process. This preview is educational content, not a personalized training account.':
    'Gana confianza con los fundamentos detrás de un buen proceso de diagnóstico. Esta vista previa es contenido educativo, no una cuenta de formación personalizada.',
  'Start with safety': 'Empieza con la seguridad',
  'Recognize hazards before tools come out.': 'Reconoce los peligros antes de sacar las herramientas.',
  'Understand the signal': 'Entiende la señal',
  'Codes, scan tools, and electrical basics.': 'Códigos, escáneres y conceptos eléctricos básicos.',
  'Practice evidence-led testing': 'Practica pruebas basadas en evidencia',
  'Use observations to choose the next sensible check.': 'Usa las observaciones para elegir la siguiente verificación sensata.',
  'Try the safety knowledge check': 'Prueba la verificación de seguridad',
  'FOUNDATIONS / PREVIEW': 'FUNDAMENTOS / VISTA PREVIA',
  'LEVEL 01': 'NIVEL 01',
  'BEGINNER': 'PRINCIPIANTE',
  'Automotive Safety': 'Seguridad automotriz',
  'Start with stable lifting, electrical precautions, hot components, and knowing when a job needs professional equipment.':
    'Empieza con el levantamiento seguro, las precauciones eléctricas, las piezas calientes y saber cuándo un trabajo necesita equipo profesional.',
  'MODULE PREVIEW': 'VISTA PREVIA DEL MÓDULO',
  'CONTENT IN REVIEW': 'CONTENIDO EN REVISIÓN',
  'Start the knowledge check': 'Comenzar la verificación de conocimientos',
  'KNOWLEDGE CHECK / 01': 'VERIFICACIÓN DE CONOCIMIENTOS / 01',
  'Automotive': 'Fundamentos de',
  'safety basics.': 'seguridad automotriz.',
  'Test your understanding of the safety topics in the supplied lesson drafts. Review the explanation after each answer.':
    'Pon a prueba tu comprensión de los temas de seguridad en los borradores de lecciones proporcionados. Revisa la explicación después de cada respuesta.',
  'Draft preview — 15 of 20 questions available.': 'Vista previa en borrador — 15 de 20 preguntas disponibles.',
  'The remaining five questions have not been supplied. This is a self-check only; it does not unlock another lesson or certify training.':
    'Las cinco preguntas restantes no han sido proporcionadas. Esto es solo una autoevaluación; no desbloquea otra lección ni certifica formación.',
  'KNOWLEDGE CHECK COMPLETE': 'VERIFICACIÓN DE CONOCIMIENTOS COMPLETADA',
  'CORRECT SO FAR': 'CORRECTAS HASTA AHORA',
  'CORRECT': 'CORRECTAS',
  'QUESTION': 'PREGUNTA',
  'Quiz progress': 'Progreso del cuestionario',
  'Answer choices': 'Opciones de respuesta',
  'Correct answer': 'Respuesta correcta',
  'Your answer': 'Tu respuesta',
  'YOUR RESULT': 'TU RESULTADO',
  'correct': 'correctas',
  'of': 'de',
  'This score covers only the 15 questions supplied. It is not the planned 20-question assessment and does not meet or replace the draft\'s stated 19-of-20 (95%) lesson requirement.':
    'Esta puntuación cubre solo las 15 preguntas proporcionadas. No es la evaluación planificada de 20 preguntas y no cumple ni reemplaza el requisito de la lección indicado en el borrador (19 de 20, 95%).',
  'Retake knowledge check': 'Repetir la verificación de conocimientos',
  'Correct.': 'Correcto.',
  'Not quite.': 'Casi.',
  'Choose one answer to see the explanation.': 'Elige una respuesta para ver la explicación.',
  'Draft source: Rounds 1–3': 'Fuente del borrador: Rondas 1–3',
  'See my result': 'Ver mi resultado',
  'Next question': 'Siguiente pregunta',

  // Safety rules section
  'THE NON-NEGOTIABLES': 'LO NO NEGOCIABLE',
  'Some problems': 'Algunos problemas',
  "aren't": 'no son',
  'DIY.': 'para hacerlo tú.',
  'Confidence is useful. Knowing when to stop is a diagnostic skill, too.':
    'La confianza es útil. Saber cuándo parar también es una habilidad de diagnóstico.',

  // About
  'THE RULES OF THE DOJO': 'LAS REGLAS DEL DOJO',
  'Evidence over ego.': 'La evidencia por encima del ego.',
  'Every time.': 'Siempre.',
  'We explain what a code means, what might cause it, and what test can help narrow it down. We separate facts from possibilities, flag hazards, and point out when professional diagnosis is the right move.':
    'Explicamos qué significa un código, qué podría causarlo y qué prueba puede ayudar a acotarlo. Separamos los hechos de las posibilidades, señalamos los peligros y indicamos cuándo el diagnóstico profesional es la jugada correcta.',
  'NO PARTS-CANNON DIAGNOSIS': 'NO AL DIAGNÓSTICO CAÑÓN DE REPUESTOS',
  'SAFETY FIRST': 'SEGURIDAD PRIMERO',
  'VEHICLE-SPECIFIC SPECS': 'ESPECIFICACIONES DEL VEHÍCULO',

  // Site notices
  'BEFORE YOU USE THE DOJO': 'ANTES DE USAR EL DOJO',
  'Clear limits.': 'Límites claros.',
  'No guesswork.': 'Sin adivinanzas.',
  'Important information about the educational content, the tools available in this build, and how information entered on this page is handled.':
    'Información importante sobre el contenido educativo, las herramientas disponibles en esta versión y cómo se maneja la información ingresada en esta página.',
  'EDUCATIONAL USE': 'USO EDUCATIVO',
  'Not a vehicle-specific diagnosis': 'No es un diagnóstico específico del vehículo',
  'The Greasy Dojo provides general educational information and tools for organizing observations. It cannot inspect your vehicle, verify a trouble code, read live data, or confirm a failed component. A trouble code is evidence, not proof of a particular failure.':
    'The Greasy Dojo proporciona información educativa general y herramientas para organizar observaciones. No puede inspeccionar tu vehículo, verificar un código de falla, leer datos en vivo ni confirmar un componente averiado. Un código de falla es evidencia, no prueba de una falla específica.',
  'Always use the owner\'s manual and the manufacturer\'s service information for the exact vehicle. Specifications and procedures vary by year, model, engine, equipment, and market.':
    'Usa siempre el manual del propietario y la información de servicio del fabricante para el vehículo exacto. Las especificaciones y los procedimientos varían según el año, el modelo, el motor, el equipo y el mercado.',
  'Stop when the situation is unsafe': 'Detente cuando la situación no sea segura',
  'Do not use this site as a reason to keep driving or continue a repair when a vehicle may be unsafe. Stop in a safe location and arrange qualified help for severe misfire, overheating, oil pressure warnings, fuel leaks, smoke, brake or steering faults, or loss of vehicle control.':
    'No uses este sitio como razón para seguir manejando o continuar una reparación cuando un vehículo puede no ser seguro. Detente en un lugar seguro y consigue ayuda calificada ante fallos de encendido severos, sobrecalentamiento, avisos de presión de aceite, fugas de combustible, humo, fallas de frenos o dirección, o pérdida de control del vehículo.',
  'Never work under a vehicle supported only by a jack. Do not open a hot pressurized cooling system. Follow vehicle-specific procedures for batteries, electrical systems, fuel systems, and lifting points.':
    'Nunca trabajes debajo de un vehículo sostenido solo por un gato. No abras un sistema de enfriamiento caliente y presurizado. Sigue los procedimientos específicos del vehículo para baterías, sistemas eléctricos, sistemas de combustible y puntos de levantamiento.',
  'CURRENT DATA HANDLING': 'MANEJO ACTUAL DE DATOS',
  'No account or saved case history': 'Sin cuenta ni historial de casos guardado',
  'This build does not provide accounts, saved diagnostic histories, or a backend connection. The Case Worksheet keeps entries in page memory and does not send them to the application server. Leaving the page clears the worksheet.':
    'Esta versión no proporciona cuentas, historiales de diagnóstico guardados ni conexión a un servidor. La Hoja de Trabajo del Caso guarda las entradas en la memoria de la página y no las envía al servidor de la aplicación. Salir de la página borra la hoja de trabajo.',
  'If you copy or print a report, you choose where to share it. Avoid entering names, addresses, contact details, or other personal information that is not needed to describe the vehicle concern.':
    'Si copias o imprimes un reporte, tú eliges dónde compartirlo. Evita ingresar nombres, direcciones, datos de contacto u otra información personal que no sea necesaria para describir la falla del vehículo.',
  'EXTERNAL SERVICES': 'SERVICIOS EXTERNOS',
  'Third-party links have their own rules': 'Los enlaces de terceros tienen sus propias reglas',
  'The Reference Desk links to external organizations. When you open an external site, that organization\'s privacy, access, and service terms apply. Availability and requirements may change.':
    'El Escritorio de Referencias enlaza a organizaciones externas. Al abrir un sitio externo, se aplican los términos de privacidad, acceso y servicio de esa organización. La disponibilidad y los requisitos pueden cambiar.',
  'The website host may process standard connection and access logs under its own policies. The final hosting and privacy notice must be confirmed before public release.':
    'El anfitrión del sitio web puede procesar registros estándar de conexión y acceso bajo sus propias políticas. El aviso final de alojamiento y privacidad debe confirmarse antes del lanzamiento público.',
  'Release status:': 'Estado del lanzamiento:',
  'These notices are implementation drafts, not legal advice or a completed legal review. Final wording, hosting disclosures, applicable terms, and jurisdiction-specific requirements must be reviewed before public launch.':
    'Estos avisos son borradores de implementación, no asesoría legal ni una revisión legal completa. La redacción final, las divulgaciones de alojamiento, los términos aplicables y los requisitos específicos de cada jurisdicción deben revisarse antes del lanzamiento público.',

  // Reference desk
  'THE REFERENCE DESK': 'EL ESCRITORIO DE REFERENCIAS',
  'Find the source.': 'Encuentra la fuente.',
  'Verify the spec.': 'Verifica la especificación.',
  'Good diagnosis depends on the right information for the exact vehicle. Start with primary sources, and use general guides only to understand the system and organize your next questions.':
    'Un buen diagnóstico depende de la información correcta para el vehículo exacto. Empieza con las fuentes primarias y usa las guías generales solo para entender el sistema y organizar tus siguientes preguntas.',
  'Source hierarchy': 'Jerarquía de fuentes',
  'For repair procedures, wiring, connector pinouts, torque values, fluid specifications, and test limits, use the manufacturer\'s service information for the exact vehicle. General OBD-II descriptions cannot replace it.':
    'Para procedimientos de reparación, cableado, pinouts de conectores, valores de torque, especificaciones de fluidos y límites de prueba, usa la información de servicio del fabricante para el vehículo exacto. Las descripciones generales de OBD-II no pueden reemplazarla.',
  'External resources are operated by their respective organizations. Their availability, access requirements, and content may change. Linking to a resource does not mean The Greasy Dojo has reviewed or endorsed every service it offers.':
    'Los recursos externos son operados por sus respectivas organizaciones. Su disponibilidad, requisitos de acceso y contenido pueden cambiar. Enlazar a un recurso no significa que The Greasy Dojo haya revisado o respaldado cada servicio que ofrece.',

  // Contact
  'CONTACT THE DOJO': 'CONTACTA AL DOJO',
  'Questions? Corrections?': '¿Preguntas? ¿Correcciones?',
  'Tell us.': 'Cuéntanos.',
  'Found an error in a guide, have an idea for the platform, or want to know when the full launch happens? Send it over - messages from real DIYers shape what we build next.':
    '¿Encontraste un error en una guía, tienes una idea para la plataforma o quieres saber cuándo es el lanzamiento completo? Envíalo: los mensajes de los verdaderos aficionados dan forma a lo que construimos después.',
  'Contact form': 'Formulario de contacto',
  'FORM IS BEING SET UP': 'EL FORMULARIO ESTÁ EN PREPARACIÓN',
  'The contact form launches shortly. Check back soon.': 'El formulario de contacto se lanza pronto. Vuelve en unos días.',
  'Safety note: this form is not a repair hotline. If a vehicle has a condition that could cause injury - fuel leaks, brake failure, exposed wiring - stop and contact a qualified professional immediately.':
    'Nota de seguridad: este formulario no es una línea directa de reparación. Si un vehículo tiene una condición que podría causar lesiones —fugas de combustible, fallas de frenos, cableado expuesto— detente y contacta de inmediato a un profesional calificado.',

  // Footer
  'A working concept for a clearer, safer way to learn automotive diagnostics.':
    'Un concepto en marcha para una forma más clara y segura de aprender diagnóstico automotriz.',
  'Back to the Dojo': 'Volver al Dojo',
  'Working concept': 'Concepto en marcha',
  'Educational resource · Not a substitute for vehicle-specific service information':
    'Recurso educativo · No sustituye la información de servicio específica del vehículo',

  // Case worksheet
  'BEFORE THE WRENCHES COME OUT': 'ANTES DE SACAR LAS LLAVES',
  'Build a better': 'Construye un mejor',
  'case file.': 'expediente del caso.',
  'Give your mechanic a clearer starting point. Record what the vehicle is doing, when it happens, and what you have already observed. This worksheet organizes information; it does not diagnose the vehicle.':
    'Dale a tu mecánico un punto de partida más claro. Registra qué hace el vehículo, cuándo pasa y qué ya observaste. Esta hoja de trabajo organiza información; no diagnostica el vehículo.',
  'Local-only worksheet:': 'Hoja de trabajo solo local:',
  'this version does not create an account, save a history, or send entries to a server. Your information remains in this page until you clear it or leave.':
    'esta versión no crea una cuenta, no guarda un historial ni envía entradas a un servidor. Tu información permanece en esta página hasta que la borres o salgas.',
  '01 / Vehicle information': '01 / Información del vehículo',
  'Year': 'Año',
  'Make': 'Marca',
  'Model': 'Modelo',
  'Engine (if known)': 'Motor (si lo conoces)',
  'Odometer reading (optional)': 'Lectura del odómetro (opcional)',
  'Main concern': 'Inquietud principal',
  'Choose the closest description': 'Elige la descripción más cercana',
  'Will not start': 'No arranca',
  'Runs rough or loses power': 'Funciona mal o pierde potencia',
  'Warning light or message': 'Luz o mensaje de advertencia',
  'Overheating': 'Sobrecalentamiento',
  'Noise, smell, or leak': 'Ruido, olor o fuga',
  'Braking or steering concern': 'Inquietud de frenos o dirección',
  'Other / not sure': 'Otro / no estoy seguro',
  '02 / When does it happen?': '02 / ¿Cuándo ocurre?',
  'Select every condition that applies.': 'Selecciona todas las condiciones que apliquen.',
  'Cold start': 'Arranque en frío',
  'Hot start': 'Arranque en caliente',
  'At idle': 'En ralentí',
  'During acceleration': 'Al acelerar',
  'At steady speed': 'A velocidad constante',
  'During braking': 'Al frenar',
  'While turning': 'Al girar',
  'Over bumps': 'En baches',
  'Intermittently': 'De forma intermitente',
  '03 / Safety warning signs': '03 / Señales de advertencia de seguridad',
  'Select any warning sign you have noticed. Do not approach smoke, fuel leaks, hot coolant, or moving parts to investigate.':
    'Selecciona cualquier señal de advertencia que hayas notado. No te acerques al humo, las fugas de combustible, el refrigerante caliente ni las piezas móviles para investigar.',
  'Flashing check-engine light or severe engine shaking': 'Luz de check engine parpadeante o sacudidas severas del motor',
  'High temperature warning, overheating, or steam': 'Advertencia de alta temperatura, sobrecalentamiento o vapor',
  'Oil-pressure warning': 'Advertencia de presión de aceite',
  'Brake or steering problem': 'Problema de frenos o dirección',
  'Fuel smell or visible fuel leak': 'Olor a combustible o fuga visible',
  'Smoke or burning-electrical smell': 'Humo u olor a electricidad quemada',
  'Pause before driving or inspecting.': 'Pausa antes de manejar o inspeccionar.',
  'These warning signs can indicate a hazardous condition. Stop safely, follow the owner\'s manual, and arrange qualified help. Do not drive if braking, steering, overheating, oil pressure, fuel leakage, smoke, or severe misfire makes the vehicle unsafe.':
    'Estas señales de advertencia pueden indicar una condición peligrosa. Detente con seguridad, sigue el manual del propietario y consigue ayuda calificada. No manejes si los frenos, la dirección, el sobrecalentamiento, la presión de aceite, la fuga de combustible, el humo o un fallo de encendido severo hacen que el vehículo no sea seguro.',
  '04 / What have you observed?': '04 / ¿Qué has observado?',
  'Trouble codes (write them exactly as displayed)': 'Códigos de falla (escríbelos exactamente como se muestran)',
  'Recent repairs, maintenance, or changes': 'Reparaciones, mantenimiento o cambios recientes',
  'Other observations': 'Otras observaciones',
  'Prepare case notes': 'Preparar notas del caso',
  'Clear worksheet': 'Borrar hoja de trabajo',
  'READY TO SHARE': 'LISTO PARA COMPARTIR',
  'Diagnostic case notes': 'Notas del caso de diagnóstico',
  'Copy report': 'Copiar reporte',
  'Print / save PDF': 'Imprimir / guardar PDF',
  'Prepared diagnostic case notes': 'Notas del caso de diagnóstico preparadas',
  'DIAGNOSTIC CASE NOTES': 'NOTAS DEL CASO DE DIAGNÓSTICO',
  'For discussion with a qualified automotive technician': 'Para comentar con un técnico automotriz calificado',
  'Vehicle:': 'Vehículo:',
  'Odometer:': 'Odómetro:',
  'Main concern:': 'Inquietud principal:',
  'When it happens:': 'Cuándo ocurre:',
  'Not provided': 'No proporcionado',
  'SAFETY WARNINGS REPORTED': 'ADVERTENCIAS DE SEGURIDAD REPORTADAS',
  'None selected / not reported': 'Ninguna seleccionada / no reportada',
  'TROUBLE CODES': 'CÓDIGOS DE FALLA',
  'RECENT REPAIRS OR CHANGES': 'REPARACIONES O CAMBIOS RECIENTES',
  'OBSERVATIONS': 'OBSERVACIONES',
  'NOTE: These are reported observations, not a confirmed diagnosis. Verify all findings using the correct vehicle-specific service information. No vehicle data was automatically read or verified by this worksheet.':
    'NOTA: Estas son observaciones reportadas, no un diagnóstico confirmado. Verifica todos los hallazgos con la información de servicio correcta y específica del vehículo. Esta hoja de trabajo no leyó ni verificó automáticamente ningún dato del vehículo.',
  'Your case notes are ready. Review them before sharing.': 'Tus notas del caso están listas. Revísalas antes de compartirlas.',
  'Case notes copied. You can paste them into a message for your mechanic.': 'Notas del caso copiadas. Puedes pegarlas en un mensaje para tu mecánico.',
  'Copy was unavailable. Select the report text and copy it manually.': 'La copia no estuvo disponible. Selecciona el texto del reporte y cópialo manualmente.',
  'The worksheet has been cleared.': 'La hoja de trabajo se ha borrado.',
  'Engine:': 'Motor:',

  // Search status messages
  'Enter a trouble code, symptom, or guide topic to start investigating.':
    'Ingresa un código de falla, un síntoma o un tema de guía para comenzar a investigar.',
  'No exact match in this draft library. Try a shorter symptom, a code such as P0300, or browse all guides.':
    'Sin coincidencia exacta en esta biblioteca en borrador. Prueba un síntoma más corto, un código como P0300 o explora todas las guías.',
  ' result found. Open a result to review draft guidance.': ' resultado encontrado. Abre un resultado para revisar la guía en borrador.',
  ' results found. Open a result to review draft guidance.': ' resultados encontrados. Abre un resultado para revisar la guía en borrador.',
  'No exact match - these are the closest topics in the draft library.':
    'Sin coincidencia exacta: estos son los temas más cercanos en la biblioteca en borrador.',
  'Trouble code': 'Código de falla',
  'Field guide': 'Guía de campo',
};
