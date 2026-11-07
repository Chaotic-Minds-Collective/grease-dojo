import { CodeCategory, FieldGuide, SymptomItem, TroubleCode } from '../types/diagnostics';

/**
 * Traduccion al espanol de diagnosticsData.ts, organizada a partir de
 * los mismos borradores de revision mecanica de las Rondas 1-3.
 * Estas entradas no son instrucciones de reparacion aprobadas; el
 * contenido en ambos idiomas se marca como borrador pendiente de
 * revision mecanica y referencias autoritativas.
 */
export const TROUBLE_CODES_ES: TroubleCode[] = [
  { code:'P0300', title:'Fallo de encendido aleatorio o en varios cilindros', category:CodeCategory.Engine,
    summary:'La computadora detecta fallos de encendido en más de un cilindro, o un patrón que se mueve entre cilindros.',
    meaning:'La computadora del motor ve que el motor no está encendiendo correctamente. Este código no identifica un componente averiado.',
    symptoms:['Luz de check engine, que puede parpadear durante un fallo de encendido fuerte','Ralentí irregular o sacudidas','Tirones o pérdida de potencia','Mal consumo de combustible','A veces, olor a combustible'],
    causes:['Bujías gastadas','Bobinas o cables de encendido débiles','Fugas de vacío','Problemas de suministro de combustible, como baja presión o inyectores tapados','Problemas de flujo de aire o de sensores','Problemas de recirculación de gases de escape','Compresión baja u otro desgaste mecánico'],
    checks:['Primero lee todos los códigos. Atiende otros códigos que apunten a la misma causa.','Revisa los datos de imagen congelada (freeze frame), incluidas las revoluciones, la carga y la temperatura del motor cuando se guardó el código.','Inspecciona bujías y bobinas de encendido por desgaste o daño.','Revisa si hay fugas de vacío usando un método apropiado.','Compara los ajustes de combustible en ralentí y a régimen alto constante.','Compara la presión de combustible con la especificación exacta del vehículo.','Si las verificaciones anteriores no identifican la causa, sigue el procedimiento de prueba de compresión específico del vehículo.'],
    warning:'Una luz de check engine parpadeante puede indicar un fallo de encendido severo que puede dañar el catalizador. Evita manejar hasta evaluar la condición. Deja enfriar las piezas calientes antes de tocarlas y mantiene chispas y llamas lejos del combustible.',
    related:['P0301–P0306','P0171','P0174','P0420'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0301–P0306', searchTerms:['P0301','P0302','P0303','P0304','P0305','P0306'], title:'Fallo de encendido detectado en el cilindro 1–6', category:CodeCategory.Engine,
    summary:'La computadora detecta un fallo de encendido asociado a un cilindro específico. El último dígito identifica el número de cilindro.',
    meaning:'El código identifica el cilindro asociado al fallo de encendido, no el componente que falló. La numeración y la disposición de los cilindros dependen del motor; consulta el manual de servicio.',
    symptoms:['Ralentí irregular o sacudidas','Tirones o pérdida de potencia','Mal consumo de combustible','Luz de check engine parpadeante durante un fallo de encendido fuerte'],
    causes:['Bujía o bobina de encendido del cilindro afectado','Problema de inyector de combustible en ese cilindro','Fuga de vacío cerca de ese cilindro','Compresión baja por una válvula, anillos, empaque de culata u otro problema mecánico'],
    checks:['Primero lee los códigos relacionados y los datos de imagen congelada.','Inspecciona la bujía y la bobina del cilindro identificado.','En motores con una bobina por cilindro, intercambia la bobina con la de un cilindro vecino y verifica si el fallo de encendido la sigue. Usa el procedimiento de servicio correcto.','Si corresponde para el motor, repite el intercambio con la bujía.','Verifica la operación y la señal del inyector con el procedimiento y las especificaciones específicas del vehículo.','Si las verificaciones de encendido y combustible pasan, realiza una prueba de compresión en el cilindro afectado usando el manual de servicio.'],
    warning:'Un fallo de encendido severo o parpadeante puede dañar el catalizador. Apaga el motor y déjalo enfriar antes de mover bobinas o bujías. Mantén las manos lejos de las piezas móviles.',
    related:['P0300','P0171','P0174'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0171', title:'Mezcla demasiado pobre · Banco 1', category:CodeCategory.AirFuel,
    summary:'La computadora reporta una condición de mezcla pobre en el banco 1.',
    meaning:'La computadora está agregando más combustible de lo normal y aún detecta demasiado aire en la mezcla. El banco 1 es el lado del motor que contiene el cilindro 1. Este código no identifica una pieza averiada.',
    symptoms:['Luz de check engine','Ralentí irregular','Tirones','Mal consumo de combustible','A veces se apaga'],
    causes:['Fuga de vacío o de aire de admisión','Sensor de flujo de aire sucio o fallando','Baja presión de combustible por un filtro restringido o una bomba débil','Inyectores tapados','Fuga de escape antes del sensor de oxígeno','Problemas de ventilación del cárter'],
    checks:['Lee otros códigos. Atiende primero los códigos de fallo de encendido o de sensores.','Compara los ajustes de combustible en ralentí y a régimen alto constante. Una condición peor en ralentí puede apuntar a una fuga de aire; una peor bajo carga puede apuntar al flujo de aire o al suministro de combustible.','Inspecciona las mangueras de admisión y las conexiones por grietas o abrazaderas sueltas.','Realiza una prueba de humo apropiada para fugas de vacío si hay equipo y capacitación disponibles.','Compara la lectura del sensor de flujo de aire con la especificación exacta del vehículo.','Compara la presión de combustible con la especificación exacta del vehículo.','Revisa si hay fugas de escape cerca del sensor.'],
    warning:'El combustible es inflamable. Libera la presión de combustible como lo indica el manual de servicio antes de abrir las líneas. Mantén chispas y llamas lejos, y deja enfriar el escape.',
    related:['P0174','P0172','P0300'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0172', title:'Mezcla demasiado rica · Banco 1', category:CodeCategory.AirFuel,
    summary:'La computadora reporta una mezcla más rica de lo esperado en el banco 1.',
    meaning:'La computadora está quitando combustible y aún detecta demasiado combustible en la mezcla. Este código no identifica el componente averiado.',
    symptoms:['Luz de check engine','Humo negro u olor a combustible','Ralentí irregular','Mal consumo de combustible'],
    causes:['Inyector con fuga','Presión de combustible demasiado alta','Filtro de aire sucio','Lectura incorrecta del sensor de flujo de aire','Lectura incorrecta del sensor de temperatura del refrigerante','Válvula de purga atascada abierta','Problemas de recirculación de gases de escape'],
    checks:['Primero lee otros códigos.','Revisa el filtro de aire y la admisión por restricciones.','Revisa ajustes de combustible, lecturas de flujo de aire y de temperatura del refrigerante en datos en vivo.','Compara la presión de combustible con la especificación exacta del vehículo.','Revisa si hay un inyector con fuga usando el procedimiento específico del vehículo de retención de presión e inspección.','Verifica la operación de la válvula de purga usando el manual de servicio.'],
    warning:'El combustible es inflamable. Si hay olor a combustible crudo o una fuga visible, apaga el vehículo en un lugar seguro y mantiene las fuentes de ignición lejos. Sigue el manual de servicio antes de abrir las líneas de combustible.',
    related:['P0171','P0175','P0300'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0174', title:'Mezcla demasiado pobre · Banco 2', category:CodeCategory.AirFuel,
    summary:'La computadora reporta una condición de mezcla pobre en el banco 2.',
    meaning:'Tiene el mismo significado general y enfoque de diagnóstico que P0171, pero aplica al otro banco de un motor en V o bóxer. Si P0171 y P0174 aparecen juntos, considera una causa que pueda afectar ambos bancos.',
    symptoms:['Luz de check engine','Ralentí irregular','Tirones','Mal consumo de combustible','A veces se apaga'],
    causes:['Fuga de vacío o de aire de admisión','Problema de medición del sensor de flujo de aire','Baja presión de combustible','Inyectores tapados','Fuga de escape antes de un sensor de oxígeno','Problemas de ventilación del cárter'],
    checks:['Lee los códigos relacionados y revisa los datos de imagen congelada.','Compara los ajustes de combustible en ralentí y a régimen alto constante.','Inspecciona las mangueras de admisión y las conexiones por daño o abrazaderas sueltas.','Usa una prueba de humo apropiada si está disponible.','Compara las lecturas de flujo de aire y la presión de combustible con las especificaciones exactas del vehículo.','Si P0171 también está presente, investiga causas compartidas como un problema del sensor de flujo de aire, una fuga de vacío grande o baja presión de combustible.'],
    warning:'El combustible es inflamable. Libera la presión de combustible como lo indica el manual de servicio antes de abrir las líneas. Mantén chispas y llamas lejos, y deja enfriar el escape.',
    related:['P0171','P0172','P0300'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0562', title:'Voltaje del sistema bajo', category:CodeCategory.Electrical,
    summary:'La computadora detecta el voltaje del sistema eléctrico por debajo de su rango esperado.',
    meaning:'La computadora ve un voltaje del sistema más bajo de lo esperado. La causa puede ser la batería, el sistema de carga, las conexiones, las tierras o el cableado.',
    symptoms:['Luces tenues','Arranque lento','Luces de advertencia','Comportamiento electrónico inusual','Luz de advertencia de batería'],
    causes:['Batería débil','Sistema de carga que no da abasto','Terminales de batería sueltos o corroídos','Mala tierra','Correa de transmisión resbalando'],
    checks:['Verifica la condición de la batería y el voltaje en reposo contra la especificación exacta del vehículo y de la batería.','Mide el voltaje de carga con el motor encendido y compáralo con la especificación del vehículo.','Inspecciona la correa de transmisión y el tensor.','Inspecciona terminales de batería, puntas de cables y tierras por flojedad o corrosión.','Prueba la salida del alternador bajo carga como lo describe el manual de servicio.'],
    warning:'Mantén las manos lejos de correas y ventiladores. Quítate anillos y joyas metálicas. Nunca desconectes la batería con el motor encendido. Las baterías pueden liberar gas explosivo y entregar corrientes de cortocircuito altas.',
    related:['P0563','P0620'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0563', title:'Voltaje del sistema alto', category:CodeCategory.Electrical,
    summary:'La computadora detecta el voltaje del sistema eléctrico por encima de su rango esperado.',
    meaning:'La computadora ve un voltaje del sistema más alto de lo esperado. Esto puede dañar la batería y la electrónica del vehículo.',
    symptoms:['Luces muy brillantes o parpadeantes','Luces de advertencia','Batería hinchada o caliente','Olor a huevo podrido cerca de la batería'],
    causes:['Falla del regulador de voltaje o del alternador','Mala conexión en el cable de control de carga','Fallas de cableado'],
    checks:['Mide el voltaje de carga con el motor encendido y compáralo con la especificación exacta del vehículo.','Inspecciona las conexiones y el cableado en el alternador y la batería.','Revisa la batería por daño visible o calor inusual sin tocar una batería caliente o dañada.','Prueba el alternador y el regulador como lo describe el manual de servicio.'],
    warning:'La sobrecarga puede dañar la batería y la electrónica y puede liberar gas peligroso. Si hueles a huevo podrido, ves una batería hinchada o caliente, o notas humo, detente y consigue ayuda calificada.',
    related:['P0562','P0620'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0101', title:'Circuito de flujo de aire masivo: rango / rendimiento', category:CodeCategory.AirFuel,
    summary:'La lectura de flujo de aire no coincide con lo que la computadora espera para las revoluciones y la carga del motor.',
    meaning:'Este código no prueba que el sensor de flujo de aire masivo haya fallado. Las fugas de admisión, las restricciones, el cableado, las fugas de escape y las condiciones del motor pueden afectar la lectura.',
    symptoms:['Luz de check engine','Ralentí irregular','Tirones','Mal consumo de combustible','A veces cuesta arrancar'],
    causes:['Sensor sucio o contaminado','Fuga de aire después del sensor','Filtro de aire sucio o incorrecto','Fuga de escape','Problema de cableado o conector','Sensor fallando'],
    checks:['Primero lee los códigos relacionados y atiéndelos.','Inspecciona el filtro de aire y los ductos de admisión por daño o abrazaderas sueltas.','Revisa el conector y el cableado del sensor.','Compara las lecturas de flujo de aire en ralentí y a régimen alto constante con la especificación exacta del vehículo.','Revisa los ajustes de combustible en datos en vivo.','Si el manual de servicio lo permite, limpia el sensor únicamente con un limpiador hecho para ese sensor.','Revisa si hay fugas de escape si las lecturas aún parecen incorrectas.'],
    warning:'Apaga el motor y déjalo enfriar antes de tocar los componentes. Mantén las manos lejos de correas y ventiladores. Los elementos y cables del sensor son delicados; usa solo el limpiador y el procedimiento especificados.',
    related:['P0102','P0103','P0171','P0172'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0102', title:'Señal baja del circuito de flujo de aire masivo', category:CodeCategory.AirFuel,
    summary:'La señal del sensor de flujo de aire es más baja de lo que la computadora espera.',
    meaning:'Una señal baja puede resultar de problemas de cableado, conector, alimentación, tierra o del sensor. No se debe reemplazar el sensor hasta revisar el circuito.',
    symptoms:['Luz de check engine','Funcionamiento irregular','Se apaga','Cuesta arrancar','Tirones'],
    causes:['Cableado abierto o en cortocircuito','Conector en mal estado','Problema de alimentación o tierra en el sensor','Sensor averiado'],
    checks:['Primero lee los códigos relacionados.','Inspecciona el conector y el cableado. Cualquier prueba de movimiento del arnés debe seguir el procedimiento específico del vehículo y mantenerse lejos de las piezas móviles.','Con el diagrama eléctrico y un multímetro, verifica la alimentación, la tierra y la señal del sensor contra la especificación exacta del vehículo.','Compara las lecturas de datos en vivo con la especificación exacta del vehículo.','Reemplaza el sensor solo después de que las verificaciones de cableado, alimentación y tierra pasen.'],
    warning:'Sigue el manual de servicio al sondear conectores. No hagas cortocircuito entre pines. Mantén las puntas de prueba y las manos lejos de correas, ventiladores y otras piezas móviles.',
    related:['P0101','P0103'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0103', title:'Señal alta del circuito de flujo de aire masivo', category:CodeCategory.AirFuel,
    summary:'La señal del sensor de flujo de aire es más alta de lo que la computadora espera.',
    meaning:'Una señal alta puede involucrar cableado en cortocircuito a la alimentación, una mala tierra del sensor, contaminación o un sensor averiado. El código por sí solo no confirma un sensor averiado.',
    symptoms:['Luz de check engine','Ralentí irregular','Tirones','Humo negro o funcionamiento rico'],
    causes:['Cableado en cortocircuito a la alimentación','Mala tierra del sensor','Sensor contaminado','Sensor averiado'],
    checks:['Primero lee los códigos relacionados.','Inspecciona el conector y el cableado.','Con el diagrama eléctrico y un multímetro, verifica la alimentación, la tierra y la señal del sensor contra la especificación exacta del vehículo.','Compara las lecturas de datos en vivo con la especificación exacta del vehículo.','Confirma la integridad del cableado y del circuito antes de reemplazar el sensor.'],
    warning:'Sigue el manual de servicio al sondear conectores. No hagas cortocircuito entre pines. Los elementos y cables del sensor son delicados.',
    related:['P0101','P0102'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0128', title:'Temperatura del refrigerante por debajo de la temperatura de regulación del termostato', category:CodeCategory.Temperature,
    summary:'El motor no se calienta a la temperatura esperada en el tiempo esperado.',
    meaning:'Un termostato atascado abierto es una causa posible, pero la exactitud del sensor, el nivel de refrigerante, la operación del ventilador, el clima y las condiciones de manejo también importan.',
    symptoms:['Luz de check engine','Calefacción de cabina débil','El indicador de temperatura se queda bajo','Consumo de combustible ligeramente malo'],
    causes:['Termostato atascado abierto','Sensor de temperatura del refrigerante leyendo incorrectamente','Poco refrigerante','Ventilador de enfriamiento funcionando demasiado','Clima muy frío o viajes cortos'],
    checks:['Verifica el nivel de refrigerante solo con el motor frío.','Compara la temperatura del refrigerante del escáner con una segunda lectura de temperatura usando un método apropiado.','Observa el calentamiento en datos en vivo y compáralo con la especificación exacta del vehículo.','Verifica si la calefacción sopla caliente y si el ventilador funciona continuamente.','Prueba el termostato como lo describe el manual de servicio.'],
    warning:'No abras el sistema de enfriamiento cuando está caliente. Mantén las manos y el cabello lejos de los ventiladores, que pueden arrancar inesperadamente.',
    related:['Sobrecalentamiento del motor'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
  { code:'P0133', title:'Respuesta lenta del circuito del sensor de oxígeno · Banco 1, sensor 1', category:CodeCategory.AirFuel,
    summary:'El sensor de oxígeno aguas arriba del banco 1 responde más lento de lo esperado.',
    meaning:'Este código no prueba automáticamente que el sensor de oxígeno haya fallado. Las fugas de escape, el cableado, la contaminación y los problemas de mezcla pueden afectar la respuesta del sensor.',
    symptoms:['Luz de check engine','Consumo de combustible ligeramente malo','A veces ralentí irregular'],
    causes:['Sensor envejecido o contaminado','Fuga de escape','Problema de cableado o conector','Problema de mezcla que afecta la respuesta del sensor'],
    checks:['Lee otros códigos. Atiende primero los códigos de mezcla o de fallo de encendido.','Revisa la señal del sensor en datos en vivo y compárala con la especificación exacta del vehículo.','Inspecciona si hay fugas de escape cerca del sensor.','Inspecciona el cableado y el conector.','Busca posible contaminación por aceite, refrigerante o silicona.','Reemplaza el sensor solo después de que estas verificaciones apoyen esa conclusión.'],
    warning:'Las piezas del escape se ponen muy calientes; déjalas enfriar. El monóxido de carbono es venenoso. Nunca enciendas un motor en un espacio cerrado.',
    related:['P0135','P0171','P0420'], reviewStatus:'Revisión mecánica pendiente', sourceStatus:'Referencias autoritativas aún no proporcionadas' },
];

export const FIELD_GUIDES_ES: FieldGuide[] = [
  { id:'battery', icon:'ϟ', title:'La batería se descarga durante la noche', type:'Eléctrico', summary:'Separa una batería débil, un problema de carga y un consumo parásito antes de reemplazar piezas.', time:'8 min', search:'batería se descarga noche batería muerta consumo parásito alternador carga voltaje',
    sections:[
      {heading:'La lógica',body:'Una batería puede descargarse porque está débil, porque no se está cargando o porque algo consume energía con el vehículo apagado. Prueba en ese orden. Una batería nueva no arregla un problema de carga ni un consumo parásito.'},
      {heading:'Herramientas del borrador',body:'Multímetro, cargador de batería, herramientas básicas de mano, guantes y protección ocular.'},
      {heading:'Secuencia de diagnóstico',items:['Carga la batería por completo con un cargador adecuado. Después de que repose, registra el voltaje en reposo y compáralo con la especificación de la batería.','Deja el vehículo apagado varias horas y mide el voltaje en reposo de nuevo. Una caída grande puede apuntar a una batería débil o a un consumo.','Pide una prueba de carga a la batería.','Mide el voltaje de carga con el motor apagado y encendido, y compáralo con la especificación exacta del vehículo.','Inspecciona terminales, puntas de cables y tierras por flojedad y corrosión.','Si la batería y el sistema de carga pasan, realiza una prueba de consumo parásito usando el manual de servicio. Permite que los módulos del vehículo entren en modo de suspensión antes de tomar la lectura.','Si el consumo está por encima de la especificación, aísla el circuito afectado usando el procedimiento específico del vehículo.']},
      {heading:'Seguridad',body:'Quítate anillos y joyas metálicas. Las baterías pueden chispear y liberar gas, así que mantén las llamas lejos. Nunca desconectes la batería con el motor encendido. No abras las puertas ni gires la llave durante una prueba de consumo parásito si eso despertaría a los módulos.'},
      {heading:'Errores comunes',body:'Reemplazar el alternador sin probarlo, medir el consumo antes de que los módulos entren en suspensión, y pasar por alto accesorios del mercado de accesorios como alarmas o cámaras del tablero.'}
    ]},
  { id:'clicking', icon:'⌁', title:'No arranca, solo hace clics', type:'Arranque', summary:'Distingue los clics rápidos de un solo clic, y revisa la batería y las conexiones antes de sospechar del motor de arranque.', time:'7 min', search:'no arranca no gira solo clics clics rapidos un solo clic motor de arranque batería',
    sections:[
      {heading:'La lógica',body:'Los clics rápidos suelen indicar que no hay suficiente voltaje, comúnmente por una batería débil o una mala conexión. Un solo clic puede involucrar el motor de arranque, el solenoide o una mala conexión. Descarta primero la batería y las conexiones.'},
      {heading:'Herramientas del borrador',body:'Multímetro, cables o equipo de arranque auxiliar, herramientas básicas de mano, guantes y protección ocular.'},
      {heading:'Secuencia de diagnóstico',items:['Activa el freno de estacionamiento y asegúrate de que el vehículo esté en P (Park) o N (Neutral).','Enciende las luces delanteras e intenta arrancar. Observa si se atenúan notablemente o se apagan.','Verifica que los terminales de la batería estén limpios y apretados.','Mide el voltaje de la batería en reposo y mientras alguien intenta arrancar. Compara el resultado con la especificación exacta del vehículo.','Si es apropiado, intenta un arranque auxiliar siguiendo el manual del propietario. Si entonces gira con normalidad, investiga la batería y sus conexiones.','Si sigue haciendo solo clics, revisa los cables de la batería y las tierras por caída de voltaje, y luego verifica el voltaje que llega al motor de arranque durante un intento de arranque usando el procedimiento de servicio.','Si la energía llega al motor de arranque pero no gira, continúa con las pruebas de arranque especificadas antes de reemplazarlo.']},
      {heading:'Seguridad',body:'Mantén las manos, el cabello y la ropa lejos de correas y ventiladores. Sigue el manual del propietario para arrancar con auxilio; no arranques una batería congelada ni dañada. Asegúrate de que el vehículo no pueda rodar.'},
      {heading:'Errores comunes',body:'Reemplazar el motor de arranque antes de probar la batería, ignorar tierras sucias y golpear componentes en lugar de probar el circuito.'}
    ]},
  { id:'overheating', icon:'♨', title:'Sobrecalentamiento del motor', type:'Enfriamiento', summary:'Protege primero a las personas y al motor; investiga refrigerante, flujo de aire, circulación y causas internas solo cuando sea seguro.', time:'8 min', search:'motor sobrecalentado refrigerante temperatura vapor radiador ventilador termostato bomba de agua',
    sections:[
      {heading:'La lógica',body:'El sistema de enfriamiento necesita suficiente refrigerante, una forma de moverlo, una forma de disipar el calor y la temperatura de operación correcta. El borrador proporcionado propone revisar primero el nivel de refrigerante y las fugas, y luego el flujo de aire, la circulación y las posibles causas internas.'},
      {heading:'Causas posibles',body:'Poco refrigerante por una fuga, termostato averiado, ventilador de enfriamiento que no funciona, bomba de agua fallando, radiador tapado, tapa del radiador defectuosa o falla del empaque de culata.'},
      {heading:'Herramientas del borrador',body:'Linterna, guantes, protección ocular y un probador de presión del sistema de enfriamiento si hay uno disponible.'},
      {heading:'Secuencia de diagnóstico',items:['Si el vehículo se está sobrecalentando ahora, detente con seguridad y apaga el motor. No sigas manejando y no abras el radiador ni la tapa del refrigerante mientras esté caliente.','Después de que el motor se haya enfriado por completo, revisa el nivel de refrigerante en el depósito.','Busca fugas, zonas húmedas y residuo costra en las mangueras, el radiador y la bomba de agua.','Verifica que el ventilador de enfriamiento funcione cuando debe, usando la especificación exacta del vehículo.','Revisa las mangueras y la correa por daño.','Prueba la presión del sistema y prueba la tapa usando el procedimiento especificado.','Si el refrigerante no tiene fuga visible, busca señales como refrigerante en el aceite, aceite en el refrigerante o burbujas en el refrigerante. Estas pueden apuntar a un problema interno y requieren diagnóstico calificado.']},
      {heading:'Seguridad',body:'El refrigerante caliente está presurizado y puede causar quemaduras severas. Mantén las manos y el cabello lejos de los ventiladores, que pueden arrancar por su cuenta. Detente con prontitud si el motor se sobrecalienta.'},
      {heading:'Errores comunes',body:'Abrir la tapa mientras está caliente, agregar agua sin encontrar la fuga, y seguir manejando para ver si la condición mejora.'}
    ]},
  { id:'rough-idle', icon:'≈', title:'Ralentí irregular', type:'Motor', summary:'Usa los códigos y las condiciones de operación para revisar las posibilidades de aire, encendido, combustible y mecánica.', time:'8 min', search:'ralenti irregular vibracion sacudidas fallo de encendido fuga de vacio bujias bobinas',
    sections:[
      {heading:'La lógica',body:'Un ralentí suave necesita la mezcla correcta de aire y combustible, buena chispa y piezas selladas del motor. El borrador proporcionado propone revisar primero los códigos, y luego las causas de aire, chispa, combustible y mecánicas.'},
      {heading:'Causas posibles',body:'Fuga de vacío, bujías gastadas o bobinas débiles, cuerpo de aceleración o sensor de flujo de aire sucios, válvula de recirculación de gases de escape atascada, problemas de inyectores, problemas de ventilación del cárter o compresión baja.'},
      {heading:'Herramientas del borrador',body:'Escáner, linterna, herramientas básicas de mano y limpiador de cuerpo de aceleración solo si el manual de servicio lo permite.'},
      {heading:'Secuencia de diagnóstico',items:['Lee los códigos y anota los códigos de fallo de encendido o de ajustes de combustible.','Revisa los ajustes de combustible en ralentí y a revoluciones más altas.','Inspecciona las mangueras y las conexiones por fugas. Usa una prueba de humo si hay una disponible.','Inspecciona las bujías y las bobinas.','Inspecciona y, solo si el manual lo permite, limpia el cuerpo de aceleración y el sensor de flujo de aire con los productos correctos.','Verifica la operación de la ventilación del cárter y de la recirculación de gases de escape.','Si las verificaciones anteriores pasan, prueba el suministro de combustible y realiza una prueba de compresión usando el procedimiento específico del vehículo.']},
      {heading:'Seguridad',body:'Mantén las manos lejos de correas y ventiladores. El combustible es inflamable. Limpia los componentes solo como lo indique el manual de servicio; el limpiador equivocado puede dañar algunos sensores.'},
      {heading:'Errores comunes',body:'Reemplazar bujías y bobinas sin un código o una prueba, e ignorar las fugas de vacío pequeñas.'}
    ]},
  { id:'check-engine', icon:'⚠', title:'Luz de check engine: primeros pasos', type:'Fundamentos', summary:'Decide si es seguro continuar, y luego registra los códigos y los datos de imagen congelada antes de borrar nada.', time:'6 min', search:'luz check engine parpadeante fija advertencia codigo imagen congelada tapa de combustible',
    sections:[
      {heading:'La lógica',body:'La luz significa que la computadora detectó algo fuera de su rango esperado. Por sí sola no te dice qué tan seria es la condición ni qué pieza falló. Primero evalúa si es seguro continuar; luego registra la evidencia antes de borrar los códigos.'},
      {heading:'Primeros pasos',items:['Si la luz parpadea, o el vehículo tiene sacudidas severas, gran pérdida de potencia, humo, olor a combustible o una advertencia de alta temperatura, evita manejar y consigue ayuda.','Si la luz está fija, revisa la tapa del combustible si el vehículo usa una. Una tapa suelta o ausente puede activar un código relacionado con fugas.','Anota cómo se siente y suena el vehículo, y cuándo empezó el problema.','Lee los códigos con un escáner compatible o pide que los lean.','Anota cada código y los datos de imagen congelada antes de borrar nada.','Usa la página de cada código y comienza con las verificaciones simples apropiadas. No reemplaces la pieza que nombra un código sin probarla.','Después de una reparación, completa el procedimiento de verificación específico del vehículo para confirmar el resultado.']},
      {heading:'Seguridad',body:'No uses un escáner mientras manejas. Evita manejar con la luz de check engine parpadeante. Si el vehículo puede no ser seguro, detente en un lugar seguro y consigue ayuda calificada.'},
      {heading:'Errores comunes',body:'Borrar los códigos antes de registrarlos, reemplazar una pieza nombrada en un código sin probarla, e ignorar una luz parpadeante.'}
    ]},
  { id:'scan-tool', icon:'⌕', title:'Cómo usar un escáner OBD-II', type:'Herramientas', summary:'Lee códigos, captura datos de imagen congelada y revisa datos en vivo sin tratar un resultado de escaneo como lista de piezas.', time:'7 min', search:'escaner OBD2 herramienta de escaneo puerto diagnostico codigos almacenados pendientes confirmados imagen congelada datos en vivo',
    sections:[
      {heading:'La lógica',body:'Un escáner es una ventana a lo que la computadora del vehículo ve. Ayuda a identificar dónde investigar; no te dice qué reemplazar.'},
      {heading:'Herramientas del borrador',body:'Un escáner OBD-II o un adaptador Bluetooth con una aplicación compatible.'},
      {heading:'Secuencia de uso seguro',items:['Ubica el puerto de diagnóstico, normalmente debajo del tablero del lado del conductor. Consulta el manual del propietario si es necesario.','Con la llave apagada, conecta el escáner.','Gira la llave a la posición de encendido con el motor apagado, a menos que el manual del vehículo indique otra cosa.','Lee los códigos almacenados. Anota cuáles están pendientes y cuáles confirmados, cuando el escáner lo muestre.','Lee los datos de imagen congelada que muestran las condiciones cuando se activó el código.','Abre los datos en vivo para observar valores como los ajustes de combustible y la temperatura del refrigerante.','Registra la información antes de borrar cualquier código.','Desconecta el adaptador al terminar. Algunos adaptadores pueden drenar la batería lentamente.']},
      {heading:'Seguridad',body:'No uses un escáner mientras manejas. Mantén los cables lejos de los pedales y de las piezas móviles.'},
      {heading:'Errores comunes',body:'Borrar los códigos demasiado pronto, tratar un código como prueba de una pieza averiada, y confundir los códigos genéricos con los específicos del fabricante.'}
    ]}
];

export const QUICK_SEARCHES_ES: { label:string; query:string }[] = [
  { label:'Luz de check engine', query:'luz check engine' },
  { label:'La batería se descarga', query:'bateria se descarga' },
  { label:'Arranque con clics', query:'clics' },
  { label:'Sobrecalentamiento', query:'sobrecalentamiento' },
];

export const FILTER_TABS_ES: { label:string; value:CodeCategory }[] = [
  { label:'Todos los códigos', value:CodeCategory.All },
  { label:'Motor', value:CodeCategory.Engine },
  { label:'Aire y combustible', value:CodeCategory.AirFuel },
  { label:'Eléctrico', value:CodeCategory.Electrical },
  { label:'Temperatura', value:CodeCategory.Temperature },
];

export const SYMPTOM_ITEMS_ES: SymptomItem[] = [
  {index:'SÍNTOMA / 01',icon:'⌁',title:'No arranca',subtitle:'Clics, silencio o arranque lento',query:'clics'},
  {index:'SÍNTOMA / 02',icon:'♨',title:'Se calienta mucho',subtitle:'Advertencia de temperatura o vapor',query:'sobrecalentamiento'},
  {index:'SÍNTOMA / 03',icon:'≈',title:'Vibración o ralentí irregular',subtitle:'Síntomas tipo fallo de encendido y vibración',query:'ralenti irregular'},
  {index:'SÍNTOMA / 04',icon:'ϟ',title:'Problema eléctrico',subtitle:'Consumo de batería o señales de bajo voltaje',query:'bateria'},
];

export const SAFETY_RULES_ES: { icon:string; title:string; body:string }[] = [
  {icon:'⚠',title:'Nunca confíes solo en un gato',body:'Trabaja sobre terreno nivelado y estable con soportes de gato de la capacidad correcta en los puntos de levantamiento aprobados. Si no puedes apoyar el vehículo de forma segura, detente.'},
  {icon:'ϟ',title:'Respeta la electricidad y el combustible',body:'Los cortocircuitos pueden causar quemaduras, incendio o daño a los módulos. Mantén chispas y llamas lejos del combustible y sigue los procedimientos específicos del vehículo.'},
  {icon:'◉',title:'Las piezas calientes se quedan calientes',body:'Deja enfriar el motor y el escape. Nunca abras un sistema de enfriamiento caliente y presurizado. Nunca enciendas un motor en un espacio cerrado.'},
  {icon:'↗',title:'Usa los datos de servicio correctos',body:'Los pinouts, los valores de torque, los umbrales y los procedimientos varían según el vehículo. Este sitio no inventará especificaciones para llenar un vacío.'},
];
