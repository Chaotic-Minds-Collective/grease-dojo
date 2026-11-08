/**
 * Diagnostic trouble code data and field guide content.
 * Organized from the supplied Rounds 1–3 content. All entries are reviewed and approved for educational reference.
 */

import { CodeCategory, DiagnosticCode, FieldGuide } from '../types/diagnostics';

// ---------------------------------------------------------------------------
//  CATEGORY LABELS
// ---------------------------------------------------------------------------

/** Display labels for each CodeCategory value (English). */
export const CATEGORY_LABELS: Record<string, string> = {
  [CodeCategory.Engine]:      'Engine',
  [CodeCategory.Fuel]:        'Fuel',
  [CodeCategory.Ignition]:    'Ignition',
  [CodeCategory.Emissions]:   'Emissions',
  [CodeCategory.Electrical]:  'Electrical',
  [CodeCategory.Transmission]:'Transmission',
  [CodeCategory.Cooling]:     'Cooling',
  [CodeCategory.Brake]:       'Brake',
};

/** Display labels for each CodeCategory value (Spanish). */
export const CATEGORY_LABELS_ES: Record<string, string> = {
  [CodeCategory.Engine]:      'Motor',
  [CodeCategory.Fuel]:        'Combustible',
  [CodeCategory.Ignition]:    'Encendido',
  [CodeCategory.Emissions]:   'Emisiones',
  [CodeCategory.Electrical]:  'Eléctrico',
  [CodeCategory.Transmission]:'Transmisión',
  [CodeCategory.Cooling]:     'Enfriamiento',
  [CodeCategory.Brake]:       'Freno',
};

// ---------------------------------------------------------------------------
//  DIAGNOSTIC CODES
// ---------------------------------------------------------------------------

const DIAGNOSTIC_CODES: DiagnosticCode[] = [
  {
    code: 'P0010',
    category: CodeCategory.Engine,
    title: 'Variable Valve Timing (VVT) Oil Control Solenoid Circuit',
    summary: 'The PCM detects a circuit fault in the VVT oil control solenoid (Bank 1).',
    symptom: 'Rough idle, reduced fuel economy, hesitation on acceleration, Check Engine Light',
    symptomEs: 'Ralentí irregular, menor economía de combustible, vacilación al acelerar, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'The VVT solenoid controls oil flow to the camshaft phaser, adjusting valve timing for performance and emissions. The PCM monitors the solenoid circuit for opens, shorts, or excessive current draw.'},
      {heading:'What to check',body:'Check oil level and condition first — low or dirty oil is a common cause. Measure solenoid resistance (typically 6–14 ohms). Test for power and ground at the solenoid connector with the engine running. Inspect the wiring harness near the camshaft position sensor for chafing.'},
      {heading:'Common causes',body:'Low oil level, contaminated oil, failed VVT solenoid, wiring damage, or a faulty PCM.'},
    ],
    related:['P0011','P0013','P0014','P0020','P0021','P0022'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0011',
    category: CodeCategory.Engine,
    title: 'Variable Valve Timing (VVT) System Performance (Bank 1)',
    summary: 'The PCM detects that the camshaft timing is over-advanced or stuck.',
    symptom: 'Rough idle, lack of power, pinging under load, reduced fuel economy, MIL on',
    symptomEs: 'Ralentí irregular, falta de potencia, cascabeleo bajo carga, menor economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM commands the VVT solenoid to advance or retard cam timing. If the actual timing does not match the commanded timing within a tolerance range, P0011 sets.'},
      {heading:'What to check',body:'Verify oil level and pressure. Check for mechanical binding in the cam phaser. Perform a VVT solenoid functional test. Inspect the timing chain tension and alignment.'},
      {heading:'Common causes',body:'Worn timing chain, failed cam phaser, clogged VVT oil passages, low oil pressure, or a stuck VVT solenoid.'},
    ],
    related:['P0010','P0013','P0014','P0020','P0021','P0022'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0013',
    category: CodeCategory.Engine,
    title: 'Variable Valve Timing (VVT) Oil Control Solenoid Circuit (Bank 1, Exhaust)',
    summary: 'The PCM detects a circuit fault in the exhaust-side VVT oil control solenoid (Bank 1).',
    symptom: 'Rough idle, reduced engine performance, Check Engine Light',
    symptomEs: 'Ralentí irregular, rendimiento reducido del motor, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'Similar to P0010 but on the exhaust camshaft. The exhaust VVT solenoid controls the exhaust cam timing, affecting scavenging and EGR operation.'},
      {heading:'What to check',body:'Same approach as P0010 — check oil, measure solenoid resistance, test power/ground, inspect wiring.'},
      {heading:'Common causes',body:'Oil issues, failed solenoid, wiring fault, or PCM failure.'},
    ],
    related:['P0010','P0011','P0014','P0020','P0021','P0022'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0014',
    category: CodeCategory.Engine,
    title: 'Variable Valve Timing (VVT) System Performance (Bank 1, Exhaust)',
    summary: 'The PCM detects that the exhaust camshaft timing is over-advanced or stuck.',
    symptom: 'Rough idle, lack of power, pinging under load, reduced fuel economy, MIL on',
    symptomEs: 'Ralentí irregular, falta de potencia, cascabeleo bajo carga, menor economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'The exhaust cam phaser is commanded by the PCM to optimize scavenging. When actual timing deviates from the target, P0014 sets.'},
      {heading:'What to check',body:'Verify oil condition and pressure. Test the exhaust VVT solenoid. Check for mechanical binding in the exhaust cam phaser. Inspect the timing chain.'},
      {heading:'Common causes',body:'Worn timing chain, failed exhaust cam phaser, clogged oil passages, low oil pressure, or stuck solenoid.'},
    ],
    related:['P0010','P0011','P0013','P0020','P0021','P0022'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0020',
    category: CodeCategory.Engine,
    title: 'Variable Valve Timing (VVT) Oil Control Solenoid Circuit (Bank 2)',
    summary: 'The PCM detects a circuit fault in the intake VVT oil control solenoid (Bank 2).',
    symptom: 'Rough idle, reduced performance, Check Engine Light',
    symptomEs: 'Ralentí irregular, rendimiento reducido, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'Same as P0010 but for Bank 2 (the cylinder bank that does not contain cylinder 1). Bank 2 VVT operation mirrors Bank 1.'},
      {heading:'What to check',body:'Same diagnostic steps as P0010. Identify which bank is Bank 2 for your engine configuration.'},
      {heading:'Common causes',body:'Low oil, contaminated oil, failed VVT solenoid, wiring damage.'},
    ],
    related:['P0010','P0011','P0021','P0022'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0021',
    category: CodeCategory.Engine,
    title: 'Variable Valve Timing (VVT) System Performance (Bank 2)',
    summary: 'The PCM detects that the Bank 2 intake camshaft timing is over-advanced or stuck.',
    symptom: 'Rough idle, lack of power, pinging under load, reduced fuel economy, MIL on',
    symptomEs: 'Ralentí irregular, falta de potencia, cascabeleo bajo carga, menor economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0011 but for Bank 2. The PCM compares actual vs. commanded cam timing on the Bank 2 intake cam.'},
      {heading:'What to check',body:'Same steps as P0011. Confirm Bank 2 location for your engine. Check oil pressure and VVT solenoid function on Bank 2.'},
      {heading:'Common causes',body:'Worn timing chain, failed cam phaser, clogged oil passages, low oil pressure, or stuck VVT solenoid.'},
    ],
    related:['P0010','P0011','P0020','P0022'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0022',
    category: CodeCategory.Engine,
    title: 'Variable Valve Timing (VVT) System Performance (Bank 2, Exhaust)',
    summary: 'The PCM detects that the Bank 2 exhaust camshaft timing is over-advanced or stuck.',
    symptom: 'Rough idle, lack of power, pinging under load, reduced fuel economy, MIL on',
    symptomEs: 'Ralentí irregular, falta de potencia, cascabeleo bajo carga, menor economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0014 but for Bank 2 exhaust cam. The PCM monitors Bank 2 exhaust cam phaser position against the commanded value.'},
      {heading:'What to check',body:'Same steps as P0014. Verify Bank 2 identification. Check the exhaust VVT solenoid and oil passages on Bank 2.'},
      {heading:'Common causes',body:'Worn timing chain, failed exhaust cam phaser, clogged oil passages, low oil pressure, or stuck solenoid.'},
    ],
    related:['P0010','P0011','P0020','P0021'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0030',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit (Bank 1, Sensor 1)',
    summary: 'The PCM detects an electrical fault in the HO2S heater circuit before the catalytic converter.',
    symptom: 'Longer time to reach closed-loop operation, increased fuel consumption, Check Engine Light',
    symptomEs: 'Mayor tiempo para alcanzar operación de lazo cerrado, mayor consumo de combustible, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'The oxygen sensor heater brings the sensor up to operating temperature quickly after cold start. The PCM monitors the heater circuit current draw and reports a fault if it falls outside the expected range.'},
      {heading:'What to check',body:'Measure heater resistance at the sensor connector (typically 3–20 ohms). Check for battery voltage at the heater power wire with the engine running. Test the ground circuit. Inspect the connector for corrosion.'},
      {heading:'Common causes',body:'Failed O2 sensor heater element, blown fuse, wiring fault (open or short), corroded connector, or PCM driver failure.'},
    ],
    related:['P0031','P0032','P0036','P0037','P0038','P0050','P0051','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0031',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit Low (Bank 1, Sensor 1)',
    summary: 'The PCM detects low voltage or low current in the HO2S heater circuit.',
    symptom: 'Same as P0030 — extended warm-up time, MIL on',
    symptomEs: 'Igual que P0030 — mayor tiempo de calentamiento, MIL encendida',
    sections: [
      {heading:'How it works',body:'A low voltage/current condition in the heater circuit suggests high resistance or an open circuit. The PCM expects a minimum current draw when the heater is commanded on.'},
      {heading:'What to check',body:'Check the O2 sensor fuse first. Measure heater resistance — infinite resistance indicates an open. Inspect the harness for breaks, especially near the exhaust where heat damage is common.'},
      {heading:'Common causes',body:'Open heater element in the sensor, blown fuse, broken wire in the harness, or corroded connector terminals.'},
    ],
    related:['P0030','P0032','P0036','P0037','P0038','P0050','P0051','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0032',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit High (Bank 1, Sensor 1)',
    summary: 'The PCM detects high voltage or high current in the HO2S heater circuit.',
    symptom: 'Same as P0030 — extended warm-up time, MIL on',
    symptomEs: 'Igual que P0030 — mayor tiempo de calentamiento, MIL encendida',
    sections: [
      {heading:'How it works',body:'A high voltage/current condition typically indicates a short to power or a shorted heater element drawing excessive current.'},
      {heading:'What to check',body:'Check for a short to battery voltage in the heater circuit. Measure heater resistance — very low resistance indicates a shorted heater. Test the PCM driver output with a test light.'},
      {heading:'Common causes',body:'Short to power in the harness, internally shorted heater element, or a failed PCM driver.'},
    ],
    related:['P0030','P0031','P0036','P0037','P0038','P0050','P0051','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0036',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit (Bank 1, Sensor 2)',
    summary: 'The PCM detects an electrical fault in the downstream HO2S heater circuit.',
    symptom: 'Extended warm-up time for the downstream sensor, potential emissions impact, MIL on',
    symptomEs: 'Mayor tiempo de calentamiento para el sensor posterior, posible impacto en emisiones, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0030 but for the post-catalyst oxygen sensor (Sensor 2). The downstream sensor monitors catalyst efficiency and also needs a heater for cold-start readiness.'},
      {heading:'What to check',body:'Same approach as P0030 but on the downstream sensor circuit. Identify the correct sensor location (Bank 1, Sensor 2 is after the catalytic converter).'},
      {heading:'Common causes',body:'Failed downstream O2 sensor heater, wiring fault, fuse, or connector corrosion.'},
    ],
    related:['P0030','P0031','P0032','P0037','P0038','P0050','P0051','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0037',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit Low (Bank 1, Sensor 2)',
    summary: 'The PCM detects low voltage/current in the downstream HO2S heater circuit.',
    symptom: 'Extended warm-up time for downstream sensor, MIL on',
    symptomEs: 'Mayor tiempo de calentamiento para el sensor posterior, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0031 but for the downstream sensor. Low current = high resistance or open circuit.'},
      {heading:'What to check',body:'Measure downstream O2 sensor heater resistance. Check fuses and wiring. Same diagnostic approach as P0031.'},
      {heading:'Common causes',body:'Open heater, blown fuse, broken wire, or corroded connector.'},
    ],
    related:['P0030','P0031','P0032','P0036','P0038','P0050','P0051','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0038',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit High (Bank 1, Sensor 2)',
    summary: 'The PCM detects high voltage/current in the downstream HO2S heater circuit.',
    symptom: 'Extended warm-up time for downstream sensor, MIL on',
    symptomEs: 'Mayor tiempo de calentamiento para el sensor posterior, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0032 but for the downstream sensor. High current = short to power or shorted heater.'},
      {heading:'What to check',body:'Same approach as P0032. Check for shorts in the downstream O2 sensor wiring.'},
      {heading:'Common causes',body:'Short to power, shorted heater element, or PCM driver fault.'},
    ],
    related:['P0030','P0031','P0032','P0036','P0037','P0050','P0051','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0050',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit (Bank 2, Sensor 1)',
    summary: 'The PCM detects an electrical fault in the Bank 2 upstream HO2S heater circuit.',
    symptom: 'Extended warm-up, poor fuel economy, MIL on',
    symptomEs: 'Mayor calentamiento, mala economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0030 but on Bank 2, Sensor 1 (the upstream sensor on the cylinder bank that does not contain cylinder 1).'},
      {heading:'What to check',body:'Identify Bank 2 for your engine. Same diagnostic steps as P0030.'},
      {heading:'Common causes',body:'Failed heater, wiring fault, fuse, or connector corrosion.'},
    ],
    related:['P0030','P0031','P0032','P0036','P0037','P0038','P0051','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0051',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit Low (Bank 2, Sensor 1)',
    summary: 'The PCM detects low voltage/current in the Bank 2 upstream HO2S heater circuit.',
    symptom: 'Extended warm-up, poor fuel economy, MIL on',
    symptomEs: 'Mayor calentamiento, mala economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0031 but on Bank 2, Sensor 1.'},
      {heading:'What to check',body:'Same diagnostic approach as P0031, but on Bank 2 upstream sensor.'},
      {heading:'Common causes',body:'Open heater, blown fuse, broken wire, or corroded connector.'},
    ],
    related:['P0030','P0031','P0032','P0036','P0037','P0038','P0050','P0052'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0052',
    category: CodeCategory.Engine,
    title: 'Heated Oxygen Sensor (HO2S) Heater Control Circuit High (Bank 2, Sensor 1)',
    summary: 'The PCM detects high voltage/current in the Bank 2 upstream HO2S heater circuit.',
    symptom: 'Extended warm-up, poor fuel economy, MIL on',
    symptomEs: 'Mayor calentamiento, mala economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'Same as P0032 but on Bank 2, Sensor 1.'},
      {heading:'What to check',body:'Same diagnostic approach as P0032, but on Bank 2 upstream sensor.'},
      {heading:'Common causes',body:'Short to power, shorted heater element, or PCM driver fault.'},
    ],
    related:['P0030','P0031','P0032','P0036','P0037','P0038','P0050','P0051'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0100',
    category: CodeCategory.Engine,
    title: 'Mass Air Flow (MAF) Sensor Circuit Malfunction',
    summary: 'The PCM detects an implausible or missing MAF sensor signal.',
    symptom: 'Rough idle, stalling, hesitation, black smoke from exhaust, MIL on',
    symptomEs: 'Ralentí irregular, calado, vacilación, humo negro del escape, MIL encendida',
    sections: [
      {heading:'How it works',body:'The MAF sensor measures the mass of air entering the engine. The PCM uses this to calculate fuel delivery. A failed MAF forces the PCM into speed-density mode (MAP-based), causing poor drivability.'},
      {heading:'What to check',body:'Check for intake air leaks downstream of the MAF. Inspect the MAF sensor element for contamination. Compare MAF grams-per-second reading against the expected value for the engine size. Clean the MAF with MAF-safe cleaner if contaminated.'},
      {heading:'Common causes',body:'Contaminated MAF sensor element, intake air leak, damaged wiring, or failed MAF sensor.'},
    ],
    related:['P0101','P0102','P0103','P0110','P0120','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0101',
    category: CodeCategory.Engine,
    title: 'Mass Air Flow (MAF) Sensor Circuit Range/Performance',
    summary: 'The MAF sensor signal is out of the expected range for the current operating conditions.',
    symptom: 'Rough idle, hesitation, surging, reduced power, MIL on',
    symptomEs: 'Ralentí irregular, vacilación, fluctuaciones, potencia reducida, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM compares MAF sensor readings against a calculated expected range based on RPM, throttle position, and engine load. A reading outside this range sets P0101.'},
      {heading:'What to check',body:'Check for intake restrictions (clogged air filter, collapsed duct). Inspect for unmetered air leaks. Verify MAF sensor cleanliness. Compare live MAF data against a known good vehicle of the same model.'},
      {heading:'Common causes',body:'Clogged air filter, intake air leak, contaminated MAF sensor, collapsed intake hose, or aftermarket intake causing turbulent airflow.'},
    ],
    related:['P0100','P0102','P0103','P0110','P0120','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0102',
    category: CodeCategory.Engine,
    title: 'Mass Air Flow (MAF) Sensor Circuit Low Input',
    summary: 'The MAF sensor signal is lower than the expected minimum.',
    symptom: 'Rough idle, stalling, black smoke, MIL on',
    symptomEs: 'Ralentí irregular, calado, humo negro, MIL encendida',
    sections: [
      {heading:'How it works',body:'A low MAF signal indicates the sensor is reading less air than expected. This can be caused by the sensor itself, the circuit, or an actual restriction in intake airflow.'},
      {heading:'What to check',body:'Check for a clogged air filter or blocked intake. Measure MAF sensor signal voltage with the engine running (typically 0.5–1.0V at idle, rising to 4.0V+ at WOT). Test for opens or shorts in the MAF signal circuit.'},
      {heading:'Common causes',body:'Clogged air filter, restricted intake, failed MAF sensor, open signal wire, or faulty PCM.'},
    ],
    related:['P0100','P0101','P0103','P0110','P0120','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0103',
    category: CodeCategory.Engine,
    title: 'Mass Air Flow (MAF) Sensor Circuit High Input',
    summary: 'The MAF sensor signal is higher than the expected maximum.',
    symptom: 'Rough idle, rich running, poor fuel economy, possible black smoke, MIL on',
    symptomEs: 'Ralentí irregular, funcionamiento rico, mala economía de combustible, posible humo negro, MIL encendida',
    sections: [
      {heading:'How it works',body:'A high MAF signal indicates the sensor is reading more air than expected. The PCM adds fuel accordingly, causing a rich condition.'},
      {heading:'What to check',body:'Check for a short to power in the MAF signal wire. Inspect for contaminants on the sensor that might cause a false high reading. Verify the sensor ground is clean.'},
      {heading:'Common causes',body:'Short to power in the signal circuit, contaminated sensor element reading falsely high, or PCM failure.'},
    ],
    related:['P0100','P0101','P0102','P0110','P0120','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0110',
    category: CodeCategory.Engine,
    title: 'Intake Air Temperature (IAT) Sensor Circuit Malfunction',
    summary: 'The PCM detects an implausible or missing IAT sensor signal.',
    symptom: 'Hard cold start, rough idle when cold, reduced fuel economy, MIL on',
    symptomEs: 'Arranque en frío difícil, ralentí irregular en frío, menor economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'The IAT sensor is a thermistor that measures incoming air temperature. The PCM uses this for fuel and spark calculations. Resistance decreases as temperature increases.'},
      {heading:'What to check',body:'Measure IAT sensor resistance and compare to a temperature-resistance chart for that sensor. Check the connector for corrosion. Inspect wiring for damage near the intake.'},
      {heading:'Common causes',body:'Failed IAT sensor, corroded connector, wiring fault, or contamination of the sensor tip.'},
    ],
    related:['P0111','P0112','P0113','P0114','P0120'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0111',
    category: CodeCategory.Engine,
    title: 'Intake Air Temperature (IAT) Sensor Circuit Range/Performance',
    summary: 'The IAT sensor reading is out of the expected range for the current conditions.',
    symptom: 'Hard cold start, poor fuel economy, MIL on',
    symptomEs: 'Arranque en frío difícil, mala economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM compares the IAT reading against engine coolant temperature and intake conditions. A reading that is implausibly high or low for the current conditions sets P0111.'},
      {heading:'What to check',body:'Compare IAT reading to ambient temperature on a cold engine. Check the sensor for damage or contamination. Verify the sensor is properly seated in the intake duct.'},
      {heading:'Common causes',body:'Failed IAT sensor, sensor not fully seated, wiring issue, or contamination.'},
    ],
    related:['P0110','P0112','P0113','P0114','P0120'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0112',
    category: CodeCategory.Engine,
    title: 'Intake Air Temperature (IAT) Sensor Circuit Low Input',
    summary: 'The IAT sensor signal indicates a very high temperature (low resistance).',
    symptom: 'Poor cold-start performance, rich running, MIL on',
    symptomEs: 'Mal rendimiento de arranque en frío, funcionamiento rico, MIL encendida',
    sections: [
      {heading:'How it works',body:'A low-resistance reading from the IAT sensor indicates a very high temperature reading. The PCM may command less fuel, causing a lean condition when the engine is actually cold.'},
      {heading:'What to check',body:'Check for a short to ground in the IAT signal circuit. Measure sensor resistance and compare to the temperature chart. An internally shorted sensor will read high temperature.'},
      {heading:'Common causes',body:'Shorted IAT sensor, short to ground in the signal wire, or PCM failure.'},
    ],
    related:['P0110','P0111','P0113','P0114','P0120'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0113',
    category: CodeCategory.Engine,
    title: 'Intake Air Temperature (IAT) Sensor Circuit High Input',
    summary: 'The IAT sensor signal indicates a very low temperature (high resistance).',
    symptom: 'Hard cold start, rich running when warm, poor fuel economy, MIL on',
    symptomEs: 'Arranque en frío difícil, funcionamiento rico en caliente, mala economía de combustible, MIL encendida',
    sections: [
      {heading:'How it works',body:'A high-resistance reading indicates a very low temperature. The PCM adds extra fuel, causing rich running once the engine is warm.'},
      {heading:'What to check',body:'Check for an open in the IAT signal circuit. Measure sensor resistance — infinite resistance indicates an open sensor. Check the connector for corrosion or bent pins.'},
      {heading:'Common causes',body:'Open IAT sensor, open signal wire, corroded connector, or broken wire in the harness.'},
    ],
    related:['P0110','P0111','P0112','P0114','P0120'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0120',
    category: CodeCategory.Engine,
    title: 'Throttle Position Sensor (TPS) Circuit Malfunction',
    summary: 'The PCM detects an implausible or missing TPS signal.',
    symptom: 'Poor acceleration, hesitation, surging, no throttle response, MIL on',
    symptomEs: 'Mala aceleración, vacilación, fluctuaciones, sin respuesta del acelerador, MIL encendida',
    sections: [
      {heading:'How it works',body:'The TPS tells the PCM the position of the throttle plate. It is typically a potentiometer that outputs a 0.5–4.5V signal. The PCM uses TPS for fuel, spark, and transmission shift scheduling.'},
      {heading:'What to check',body:'Check TPS signal voltage at idle (typically ~0.5V) and WOT (~4.5V). Look for dead spots as the throttle is slowly opened. Check the TPS ground and 5V reference. Inspect the throttle linkage for binding.'},
      {heading:'Common causes',body:'Failed TPS (worn potentiometer track), wiring fault (open or short), poor ground, or 5V reference short.'},
    ],
    related:['P0121','P0122','P0123','P0220','P0221','P0222','P0223','P2135'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0121',
    category: CodeCategory.Engine,
    title: 'Throttle Position Sensor (TPS) Circuit Range/Performance',
    summary: 'The TPS signal does not match the expected range for the current operating conditions.',
    symptom: 'Hesitation, surging, poor acceleration, transmission may shift erratically, MIL on',
    symptomEs: 'Vacilación, fluctuaciones, mala aceleración, la transmisión puede cambiar erráticamente, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM compares TPS voltage against MAP, MAF, and RPM to verify the reading is plausible. For example, if TPS says WOT but MAP shows vacuum, the signal is suspect.'},
      {heading:'What to check',body:'Monitor TPS voltage while slowly opening the throttle. Check for flat spots or dropouts. Verify TPS learns the idle position (check with a scan tool for TPS learned minimum).'},
      {heading:'Common causes',body:'Worn TPS, throttle plate carbon buildup, throttle sticking, or wiring that causes intermittent signals.'},
    ],
    related:['P0120','P0122','P0123','P0220','P0221','P0222','P0223','P2135'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0122',
    category: CodeCategory.Engine,
    title: 'Throttle Position Sensor (TPS) Circuit Low Input',
    summary: 'The TPS signal voltage is below the expected minimum.',
    symptom: 'Poor acceleration, hesitation, no throttle response, MIL on',
    symptomEs: 'Mala aceleración, vacilación, sin respuesta del acelerador, MIL encendida',
    sections: [
      {heading:'How it works',body:'A TPS signal below ~0.2–0.3V indicates a low input fault. The PCM substitutes a default value, causing poor drivability.'},
      {heading:'What to check',body:'Check for a short to ground in the TPS signal wire. Measure TPS voltage at the sensor. Check the 5V reference and ground circuits.'},
      {heading:'Common causes',body:'Short to ground, failed TPS, open 5V reference, or poor sensor ground.'},
    ],
    related:['P0120','P0121','P0123','P0220','P0221','P0222','P0223','P2135'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0123',
    category: CodeCategory.Engine,
    title: 'Throttle Position Sensor (TPS) Circuit High Input',
    summary: 'The TPS signal voltage is above the expected maximum.',
    symptom: 'High idle, poor deceleration, transmission may not downshift, MIL on',
    symptomEs: 'Ralentí alto, mala desaceleración, la transmisión puede no reducir la marcha, MIL encendida',
    sections: [
      {heading:'How it works',body:'A TPS signal above ~4.5–4.9V indicates a high input fault. The PCM may think the throttle is partially open when it is not.'},
      {heading:'What to check',body:'Check for a short to 5V reference or battery voltage in the TPS signal wire. Measure TPS voltage at idle. If it reads above 1.0V at closed throttle, check for binding or misadjustment.'},
      {heading:'Common causes',body:'Short to 5V reference, short to power, misadjusted throttle stop, carbon buildup holding the throttle open, or internal TPS failure.'},
    ],
    related:['P0120','P0121','P0122','P0220','P0221','P0222','P0223','P2135'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0171',
    category: CodeCategory.Fuel,
    title: 'Fuel Trim System Lean (Bank 1)',
    summary: 'The PCM detects the air-fuel mixture is too lean on Bank 1 (too much air or not enough fuel).',
    symptom: 'Rough idle, hesitation on acceleration, surging, possible MIL, possible misfire codes',
    symptomEs: 'Ralentí irregular, vacilación al acelerar, fluctuaciones, posible MIL, posibles códigos de falla de encendido',
    sections: [
      {heading:'How it works',body:'The PCM uses long-term fuel trim (LTFT) and short-term fuel trim (STFT) to adjust the air-fuel ratio. A lean condition is indicated by positive fuel trim values (adding fuel). When trims exceed a threshold, P0171 sets.'},
      {heading:'What to check',body:'Check for vacuum leaks (cracked hoses, gasket leaks, brake booster). Inspect the MAF sensor for contamination. Check fuel pressure. Look for exhaust leaks before the O2 sensor that could cause a false lean reading.'},
      {heading:'Common causes',body:'Vacuum leak, contaminated MAF sensor, low fuel pressure, clogged fuel injector, exhaust leak before the O2 sensor, or PCV system fault.'},
    ],
    related:['P0174','P0100','P0101','P0102','P0300','P0301–P0306','P0440'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0174',
    category: CodeCategory.Fuel,
    title: 'Fuel Trim System Lean (Bank 2)',
    summary: 'The PCM detects the air-fuel mixture is too lean on Bank 2.',
    symptom: 'Rough idle, hesitation, surging, possible MIL, possible misfire codes',
    symptomEs: 'Ralentí irregular, vacilación, fluctuaciones, posible MIL, posibles códigos de falla de encendido',
    sections: [
      {heading:'How it works',body:'Same as P0171 but for Bank 2. If both banks are lean, the cause is likely a common issue (MAF, fuel pressure, vacuum leak). If only one bank is lean, the issue is Bank 2-specific.'},
      {heading:'What to check',body:'If both banks lean, check MAF, fuel pressure, and common vacuum leaks. If only Bank 2, check for Bank 2-specific intake gasket leaks, injector issues, or exhaust leaks before the Bank 2 O2 sensor.'},
      {heading:'Common causes',body:'Intake gasket leak on Bank 2, clogged injector on Bank 2, exhaust leak before Bank 2 O2 sensor, or (if both banks) MAF contamination or low fuel pressure.'},
    ],
    related:['P0171','P0100','P0101','P0102','P0300','P0301–P0306','P0440'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0300',
    category: CodeCategory.Ignition,
    title: 'Random/Multiple Cylinder Misfire Detected',
    summary: 'The PCM detects a misfire that is not isolated to a single cylinder.',
    symptom: 'Rough running, shaking, loss of power, Check Engine Light flashing (severe misfire), poor fuel economy',
    symptomEs: 'Funcionamiento irregular, vibración, pérdida de potencia, luz de Check Engine parpadeante (falla grave), mala economía de combustible',
    sections: [
      {heading:'How it works',body:'The PCM monitors crankshaft acceleration through the CKP sensor. A misfire causes a momentary deceleration. When misfires are detected across multiple cylinders or randomly, P0300 is set.'},
      {heading:'What to check',body:'Check for intake vacuum leaks. Inspect the ignition system (spark plugs, wires, coils). Check fuel pressure and injector function. Verify compression on all cylinders. Check for EGR system faults that could cause a lean misfire.'},
      {heading:'Common causes',body:'Vacuum leak, worn spark plugs, weak ignition coil(s), low fuel pressure, clogged injector(s), low compression, or EGR system fault.'},
    ],
    related:['P0301–P0306','P0171','P0174','P0420'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0301',
    category: CodeCategory.Ignition,
    title: 'Cylinder 1 Misfire Detected',
    summary: 'The PCM detects a misfire specific to Cylinder 1.',
    symptom: 'Rough idle, shaking, loss of power, Check Engine Light (may flash during misfire), poor fuel economy',
    symptomEs: 'Ralentí irregular, vibración, pérdida de potencia, luz de Check Engine (puede parpadear durante la falla), mala economía de combustible',
    sections: [
      {heading:'How it works',body:'The PCM identifies the misfiring cylinder by analyzing crankshaft acceleration patterns. A specific cylinder code isolates the fault to that cylinder.'},
      {heading:'What to check',body:'Swap the spark plug and ignition coil with another cylinder and see if the misfire moves. Check injector pulse and operation. Perform a compression test on Cylinder 1. Check for intake gasket leaks near Cylinder 1.'},
      {heading:'Common causes',body:'Faulty spark plug or ignition coil on Cylinder 1, clogged injector, low compression, intake gasket leak, or valve train issue.'},
    ],
    related:['P0300','P0302–P0306','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0302',
    category: CodeCategory.Ignition,
    title: 'Cylinder 2 Misfire Detected',
    summary: 'The PCM detects a misfire specific to Cylinder 2.',
    symptom: 'Same as P0301 but for Cylinder 2',
    symptomEs: 'Igual que P0301 pero para el Cilindro 2',
    sections: [
      {heading:'How it works',body:'Same as P0301 but for Cylinder 2.'},
      {heading:'What to check',body:'Same as P0301 but for Cylinder 2. Swap components to isolate the fault.'},
      {heading:'Common causes',body:'Faulty spark plug/coil, injector issue, compression loss, or gasket leak on Cylinder 2.'},
    ],
    related:['P0300','P0301','P0303–P0306','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0303',
    category: CodeCategory.Ignition,
    title: 'Cylinder 3 Misfire Detected',
    summary: 'The PCM detects a misfire specific to Cylinder 3.',
    symptom: 'Same as P0301 but for Cylinder 3',
    symptomEs: 'Igual que P0301 pero para el Cilindro 3',
    sections: [
      {heading:'How it works',body:'Same as P0301 but for Cylinder 3.'},
      {heading:'What to check',body:'Same as P0301 but for Cylinder 3.'},
      {heading:'Common causes',body:'Faulty spark plug/coil, injector issue, compression loss, or gasket leak on Cylinder 3.'},
    ],
    related:['P0300','P0301','P0302','P0304–P0306','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0304',
    category: CodeCategory.Ignition,
    title: 'Cylinder 4 Misfire Detected',
    summary: 'The PCM detects a misfire specific to Cylinder 4.',
    symptom: 'Same as P0301 but for Cylinder 4',
    symptomEs: 'Igual que P0301 pero para el Cilindro 4',
    sections: [
      {heading:'How it works',body:'Same as P0301 but for Cylinder 4.'},
      {heading:'What to check',body:'Same as P0301 but for Cylinder 4.'},
      {heading:'Common causes',body:'Faulty spark plug/coil, injector issue, compression loss, or gasket leak on Cylinder 4.'},
    ],
    related:['P0300','P0301–P0303','P0305','P0306','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0305',
    category: CodeCategory.Ignition,
    title: 'Cylinder 5 Misfire Detected',
    summary: 'The PCM detects a misfire specific to Cylinder 5.',
    symptom: 'Same as P0301 but for Cylinder 5',
    symptomEs: 'Igual que P0301 pero para el Cilindro 5',
    sections: [
      {heading:'How it works',body:'Same as P0301 but for Cylinder 5.'},
      {heading:'What to check',body:'Same as P0301 but for Cylinder 5.'},
      {heading:'Common causes',body:'Faulty spark plug/coil, injector issue, compression loss, or gasket leak on Cylinder 5.'},
    ],
    related:['P0300','P0301–P0304','P0306','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0306',
    category: CodeCategory.Ignition,
    title: 'Cylinder 6 Misfire Detected',
    summary: 'The PCM detects a misfire specific to Cylinder 6.',
    symptom: 'Same as P0301 but for Cylinder 6',
    symptomEs: 'Igual que P0301 pero para el Cilindro 6',
    sections: [
      {heading:'How it works',body:'Same as P0301 but for Cylinder 6.'},
      {heading:'What to check',body:'Same as P0301 but for Cylinder 6.'},
      {heading:'Common causes',body:'Faulty spark plug/coil, injector issue, compression loss, or gasket leak on Cylinder 6.'},
    ],
    related:['P0300','P0301–P0305','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0320',
    category: CodeCategory.Ignition,
    title: 'Ignition/Distributor Engine Speed Input Circuit Malfunction',
    summary: 'The PCM detects a missing or implausible signal from the crankshaft position (CKP) or camshaft position (CMP) sensor.',
    symptom: 'No start, intermittent stalling, misfire, MIL on',
    symptomEs: 'No arranca, calado intermitente, falla de encendido, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM relies on the CKP sensor signal for engine speed (RPM) and ignition timing. Without a valid signal, the PCM cannot determine when to fire the spark plugs or injectors.'},
      {heading:'What to check',body:'Check CKP sensor resistance and AC output while cranking. Inspect the reluctor ring for damage. Verify sensor air gap. Check wiring for damage near the harmonic balancer or bellhousing.'},
      {heading:'Common causes',body:'Failed CKP sensor, damaged reluctor ring, wiring fault, incorrect sensor air gap, or PCM failure.'},
    ],
    related:['P0335','P0336','P0340','P0341','P1300','P1390'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0335',
    category: CodeCategory.Ignition,
    title: 'Crankshaft Position (CKP) Sensor Circuit Malfunction',
    summary: 'The PCM detects a missing or implausible CKP sensor signal.',
    symptom: 'No start, intermittent stalling, misfire, tachometer may show 0 RPM while cranking, MIL on',
    symptomEs: 'No arranca, calado intermitente, falla de encendido, el tacómetro puede mostrar 0 RPM al girar, MIL encendida',
    sections: [
      {heading:'How it works',body:'The CKP sensor is typically a magnetic or Hall-effect sensor that reads a reluctor ring on the crankshaft. It provides the PCM with crankshaft position and RPM data essential for ignition and fuel timing.'},
      {heading:'What to check',body:'Check CKP sensor resistance (magnetic type) or power/ground (Hall-effect type). Measure AC voltage output while cranking. Inspect the sensor tip for damage or debris. Check the reluctor ring for broken teeth.'},
      {heading:'Common causes',body:'Failed CKP sensor, damaged reluctor ring, wiring fault, incorrect air gap, or debris on the sensor tip.'},
    ],
    related:['P0320','P0336','P0340','P0341','P1300','P1390'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0336',
    category: CodeCategory.Ignition,
    title: 'Crankshaft Position (CKP) Sensor Circuit Range/Performance',
    summary: 'The CKP sensor signal is erratic or out of the expected range.',
    symptom: 'Intermittent misfire, rough running, hesitation, possible no-start, MIL on',
    symptomEs: 'Falla de encendido intermitente, funcionamiento irregular, vacilación, posible no arranque, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM monitors the CKP signal pattern. If the signal timing is inconsistent, missing pulses, or has unexpected noise, P0336 sets.'},
      {heading:'What to check',body:'Inspect the reluctor ring for damage, wobble, or debris. Check the sensor mounting and air gap. Look for wiring damage that could cause intermittent signal loss. Use an oscilloscope to view the CKP waveform.'},
      {heading:'Common causes',body:'Damaged reluctor ring, loose CKP sensor, wiring intermittency, sensor air gap incorrect, or excessive crankshaft end play.'},
    ],
    related:['P0320','P0335','P0340','P0341','P1300','P1390'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0340',
    category: CodeCategory.Ignition,
    title: 'Camshaft Position (CMP) Sensor Circuit Malfunction (Bank 1)',
    summary: 'The PCM detects a missing or implausible CMP sensor signal on Bank 1.',
    symptom: 'Long crank time, rough running, possible misfire, reduced power, MIL on',
    symptomEs: 'Tiempo de arranque prolongado, funcionamiento irregular, posible falla de encendido, potencia reducida, MIL encendida',
    sections: [
      {heading:'How it works',body:'The CMP sensor identifies which cylinder is on its compression stroke so the PCM can time sequential fuel injection and spark. Without it, the PCM may default to batch-fire mode.'},
      {heading:'What to check',body:'Check CMP sensor resistance (magnetic type) or power/ground (Hall-effect). Measure output signal while cranking. Inspect the camshaft reluctor or trigger wheel. Check wiring for damage.'},
      {heading:'Common causes',body:'Failed CMP sensor, damaged trigger wheel, wiring fault, incorrect sensor air gap, or timing chain/belt slip.'},
    ],
    related:['P0320','P0335','P0336','P0341','P0365','P0390'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0341',
    category: CodeCategory.Ignition,
    title: 'Camshaft Position (CMP) Sensor Circuit Range/Performance (Bank 1)',
    summary: 'The CMP sensor signal timing is out of the expected range.',
    symptom: 'Long crank, rough idle, possible misfire, reduced power, MIL on',
    symptomEs: 'Arranque prolongado, ralentí irregular, posible falla de encendido, potencia reducida, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM compares CKP and CMP signal correlation. If the cam timing signal occurs at the wrong point in the crankshaft rotation, it indicates a timing issue or sensor misalignment.'},
      {heading:'What to check',body:'Check timing chain/belt alignment. Verify the CMP sensor is properly installed and the trigger wheel is not bent. Use an oscilloscope to compare CKP and CMP waveforms.'},
      {heading:'Common causes',body:'Slipped timing chain/belt, bent trigger wheel, loose CMP sensor, or wiring intermittency.'},
    ],
    related:['P0320','P0335','P0336','P0340','P0365','P0390'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0350',
    category: CodeCategory.Ignition,
    title: 'Ignition Coil Primary/Secondary Circuit Malfunction',
    summary: 'The PCM detects a fault in the ignition coil primary or secondary circuit.',
    symptom: 'Misfire, rough running, loss of power, MIL on (may flash during misfire)',
    symptomEs: 'Falla de encendido, funcionamiento irregular, pérdida de potencia, MIL encendida (puede parpadear durante la falla)',
    sections: [
      {heading:'How it works',body:'The PCM monitors the ignition coil primary circuit for proper current flow. A fault in the primary or secondary winding, or the driver circuit, sets P0350.'},
      {heading:'What to check',body:'Measure primary and secondary coil resistance and compare to specifications. Check for power and ground at the coil. Inspect the coil driver circuit for opens or shorts. Swap coils to identify the fault.'},
      {heading:'Common causes',body:'Failed ignition coil, open/short in the coil winding, faulty coil driver in the PCM, or wiring issue in the coil circuit.'},
    ],
    related:['P0351–P0356','P0300','P0301–P0306'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0420',
    category: CodeCategory.Emissions,
    title: 'Catalyst System Efficiency Below Threshold (Bank 1)',
    summary: 'The PCM detects that the catalytic converter is not operating at the required efficiency.',
    symptom: 'Check Engine Light on, possible failed emissions test, no noticeable drivability issues in mild cases',
    symptomEs: 'Luz de Check Engine encendida, posible falla en la prueba de emisiones, sin problemas de manejo notables en casos leves',
    sections: [
      {heading:'How it works',body:'The PCM compares the upstream and downstream O2 sensor signals. A properly functioning catalyst stores oxygen, causing the downstream signal to be less active. If the downstream signal mirrors the upstream, the catalyst is not working efficiently.'},
      {heading:'What to check',body:'Verify there are no exhaust leaks, misfire codes, or fuel trim issues that could damage the catalyst first. Check downstream O2 sensor operation — a lazy sensor can falsely indicate catalyst failure. Inspect the catalytic converter for physical damage.'},
      {heading:'Common causes',body:'Failed catalytic converter (contaminated, melted, or worn out), exhaust leak, faulty downstream O2 sensor, or engine conditions (misfire, rich running) that damaged the catalyst.'},
    ],
    related:['P0421','P0430','P0431','P0130–P0135','P0140–P0141','P0300–P0306','P0171','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0430',
    category: CodeCategory.Emissions,
    title: 'Catalyst System Efficiency Below Threshold (Bank 2)',
    summary: 'The PCM detects that the Bank 2 catalytic converter is not operating at the required efficiency.',
    symptom: 'Check Engine Light on, possible failed emissions test, no noticeable drivability issues in mild cases',
    symptomEs: 'Luz de Check Engine encendida, posible falla en la prueba de emisiones, sin problemas de manejo notables en casos leves',
    sections: [
      {heading:'How it works',body:'Same as P0420 but for Bank 2. The PCM monitors the Bank 2 catalyst efficiency using the Bank 2 upstream and downstream O2 sensors.'},
      {heading:'What to check',body:'Same as P0420 but applied to Bank 2. Check for Bank 2-specific exhaust leaks, O2 sensor issues, or engine conditions affecting Bank 2.'},
      {heading:'Common causes',body:'Failed Bank 2 catalytic converter, Bank 2 exhaust leak, faulty Bank 2 downstream O2 sensor, or Bank 2 engine issues.'},
    ],
    related:['P0420','P0421','P0431','P0150–P0155','P0160–P0161','P0300–P0306','P0174'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0440',
    category: CodeCategory.Emissions,
    title: 'Evaporative Emission (EVAP) Control System Malfunction',
    summary: 'The PCM detects a gross leak or system fault in the EVAP system.',
    symptom: 'Check Engine Light on, possible fuel smell, no drivability issues',
    symptomEs: 'Luz de Check Engine encendida, posible olor a combustible, sin problemas de manejo',
    sections: [
      {heading:'How it works',body:'The EVAP system prevents fuel vapors from escaping to the atmosphere. The PCM performs leak tests by sealing the system and monitoring vacuum decay. P0440 indicates a large leak or system fault.'},
      {heading:'What to check',body:'Check the gas cap first — loose or missing gas cap is the most common cause. Inspect EVAP hoses and connections for cracks or disconnects. Check the purge valve and vent valve operation.'},
      {heading:'Common causes',body:'Loose or missing gas cap, cracked EVAP hose, failed purge valve stuck open, failed vent valve stuck closed, or damaged charcoal canister.'},
    ],
    related:['P0441','P0442','P0446','P0455','P0456','P0457'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0441',
    category: CodeCategory.Emissions,
    title: 'Evaporative Emission (EVAP) Control System Incorrect Purge Flow',
    summary: 'The PCM detects that EVAP purge flow is outside the expected range.',
    symptom: 'Check Engine Light on, possible rough idle (if purge valve stuck open), no drivability issues in most cases',
    symptomEs: 'Luz de Check Engine encendida, posible ralentí irregular (si la válvula de purga está atascada abierta), sin problemas de manejo en la mayoría de los casos',
    sections: [
      {heading:'How it works',body:'The PCM commands the purge valve open and closed while monitoring fuel trim or fuel tank pressure for the expected change. Incorrect flow indicates a stuck or leaking purge valve.'},
      {heading:'What to check',body:'Check the purge valve for sticking. Test purge valve operation with a scan tool bidirectional control. Inspect the vacuum line to the purge valve for cracks or blockages.'},
      {heading:'Common causes',body:'Purge valve stuck open or closed, blocked vacuum line, or electrical fault in the purge valve circuit.'},
    ],
    related:['P0440','P0442','P0446','P0455','P0456'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0442',
    category: CodeCategory.Emissions,
    title: 'Evaporative Emission (EVAP) Control System Small Leak Detected',
    summary: 'The PCM detects a small leak in the EVAP system.',
    symptom: 'Check Engine Light on, no drivability issues',
    symptomEs: 'Luz de Check Engine encendida, sin problemas de manejo',
    sections: [
      {heading:'How it works',body:'The PCM pressurizes or evacuates the EVAP system and monitors for pressure decay. A small leak (0.020–0.040 inch) will cause slow decay that sets P0442.'},
      {heading:'What to check',body:'Check the gas cap seal and torque. Inspect all EVAP hoses for cracks. Smoke test the EVAP system to locate the leak. Check the charcoal canister for cracks.'},
      {heading:'Common causes',body:'Small crack in an EVAP hose, loose gas cap, leaking purge or vent valve, or cracked charcoal canister.'},
    ],
    related:['P0440','P0441','P0446','P0455','P0456','P0457'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0446',
    category: CodeCategory.Emissions,
    title: 'Evaporative Emission (EVAP) Control System Vent Control Circuit Malfunction',
    summary: 'The PCM detects an electrical fault in the EVAP vent valve circuit.',
    symptom: 'Check Engine Light on, possible difficulty filling the fuel tank, no drivability issues',
    symptomEs: 'Luz de Check Engine encendida, posible dificultad para llenar el tanque de combustible, sin problemas de manejo',
    sections: [
      {heading:'How it works',body:'The EVAP vent valve allows fresh air into the system during purge and seals during the leak test. The PCM monitors the vent valve circuit for electrical faults.'},
      {heading:'What to check',body:'Measure vent valve resistance. Check for power and ground at the valve connector. Inspect the wiring for damage near the canister.'},
      {heading:'Common causes',body:'Failed vent valve, wiring fault (open or short), corroded connector, or PCM driver failure.'},
    ],
    related:['P0440','P0441','P0442','P0455','P0456'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0455',
    category: CodeCategory.Emissions,
    title: 'Evaporative Emission (EVAP) Control System Gross Leak Detected',
    summary: 'The PCM detects a large leak in the EVAP system.',
    symptom: 'Check Engine Light on, possible fuel smell, no drivability issues',
    symptomEs: 'Luz de Check Engine encendida, posible olor a combustible, sin problemas de manejo',
    sections: [
      {heading:'How it works',body:'A large leak prevents the EVAP system from holding any vacuum or pressure. The PCM detects this during the system leak test.'},
      {heading:'What to check',body:'Check the gas cap first — it is the most common cause. Inspect all EVAP hoses for disconnects, cracks, or rodent damage. Check the charcoal canister for damage.'},
      {heading:'Common causes',body:'Gas cap off or loose, disconnected EVAP hose, damaged charcoal canister, or purge valve stuck open.'},
    ],
    related:['P0440','P0441','P0442','P0446','P0456','P0457'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0456',
    category: CodeCategory.Emissions,
    title: 'Evaporative Emission (EVAP) Control System Very Small Leak Detected',
    summary: 'The PCM detects a very small leak in the EVAP system.',
    symptom: 'Check Engine Light on, no drivability issues',
    symptomEs: 'Luz de Check Engine encendida, sin problemas de manejo',
    sections: [
      {heading:'How it works',body:'Similar to P0442 but for a very small leak (0.010–0.020 inch). The PCM uses a more sensitive test cycle to detect very small leaks.'},
      {heading:'What to check',body:'Perform a smoke test. Inspect all EVAP hoses and connections carefully. Check the gas cap gasket. A very small leak can be difficult to find without a smoke machine.'},
      {heading:'Common causes',body:'Small crack in an EVAP hose, worn gas cap gasket, leaking purge or vent valve, or pinhole leak in the charcoal canister.'},
    ],
    related:['P0440','P0441','P0442','P0446','P0455','P0457'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0457',
    category: CodeCategory.Emissions,
    title: 'Evaporative Emission (EVAP) Control System Leak Detected (Fuel Cap Loose/Off)',
    summary: 'The PCM detects a leak specifically attributed to the fuel cap.',
    symptom: 'Check Engine Light on, no drivability issues',
    symptomEs: 'Luz de Check Engine encendida, sin problemas de manejo',
    sections: [
      {heading:'How it works',body:'The PCM uses a combination of test results to isolate the leak to the fuel cap area. This code sets when the system detects a leak that could be caused by a loose or missing gas cap.'},
      {heading:'What to check',body:'Check that the gas cap is properly installed and tightened. Inspect the gas cap gasket for damage or wear. Replace the gas cap if the gasket is damaged.'},
      {heading:'Common causes',body:'Gas cap not tightened after refueling, missing gas cap, worn gas cap gasket, or aftermarket gas cap that does not seal properly.'},
    ],
    related:['P0440','P0442','P0455','P0456'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0500',
    category: CodeCategory.Electrical,
    title: 'Vehicle Speed Sensor (VSS) Circuit Malfunction',
    summary: 'The PCM detects a missing or implausible vehicle speed signal.',
    symptom: 'Speedometer may not work, cruise control inoperative, transmission shift issues, MIL on',
    symptomEs: 'El velocímetro puede no funcionar, control de crucero inoperativo, problemas de cambio de transmisión, MIL encendida',
    sections: [
      {heading:'How it works',body:'The VSS measures transmission output speed or wheel speed and sends a signal to the PCM. The PCM uses this for speedometer, cruise control, transmission shifting, and other systems.'},
      {heading:'What to check',body:'Check VSS resistance (magnetic type) or power/ground (Hall-effect). Measure output signal while rotating the driven wheels. Inspect the sensor and reluctor ring for damage.'},
      {heading:'Common causes',body:'Failed VSS, damaged reluctor ring, wiring fault, or transmission output shaft issue.'},
    ],
    related:['P0501','P0502','P0503','P0720','P0721','P0722'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0501',
    category: CodeCategory.Electrical,
    title: 'Vehicle Speed Sensor (VSS) Circuit Range/Performance',
    summary: 'The VSS signal is out of the expected range for the current operating conditions.',
    symptom: 'Speedometer inaccurate, cruise control inoperative, transmission shift issues, MIL on',
    symptomEs: 'Velocímetro inexacto, control de crucero inoperativo, problemas de cambio de transmisión, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM compares the VSS signal against engine RPM and calculated vehicle speed. A signal that is implausibly high or low for the conditions sets P0501.'},
      {heading:'What to check',body:'Compare speedometer reading against a GPS or known accurate source. Check the VSS sensor and wiring. Inspect the tone wheel for damage. Check for tire size changes that could affect calibration.'},
      {heading:'Common causes',body:'Incorrect tire size, different final drive ratio, failed VSS, damaged tone wheel, or wiring issue.'},
    ],
    related:['P0500','P0502','P0503','P0720','P0721','P0722'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0502',
    category: CodeCategory.Electrical,
    title: 'Vehicle Speed Sensor (VSS) Circuit Low Input',
    summary: 'The VSS signal voltage or frequency is below the expected minimum.',
    symptom: 'Speedometer reads lower than actual speed, cruise control inoperative, MIL on',
    symptomEs: 'Velocímetro lee menos que la velocidad real, control de crucero inoperativo, MIL encendida',
    sections: [
      {heading:'How it works',body:'A low input from the VSS indicates the sensor is producing a weaker signal than expected, or the signal is not reaching the PCM properly.'},
      {heading:'What to check',body:'Check VSS resistance and output. Inspect the sensor tip for debris or damage. Check for high resistance in the signal circuit.'},
      {heading:'Common causes',body:'Failing VSS sensor, high resistance in the circuit, corroded connector, or damaged reluctor ring.'},
    ],
    related:['P0500','P0501','P0503','P0720','P0721','P0722'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0503',
    category: CodeCategory.Electrical,
    title: 'Vehicle Speed Sensor (VSS) Circuit Intermittent/Erratic',
    summary: 'The VSS signal is intermittent or erratic.',
    symptom: 'Speedometer fluctuates, cruise control cuts out, intermittent transmission shift issues, MIL on',
    symptomEs: 'Velocímetro fluctúa, control de crucero se desconecta, problemas intermitentes de cambio de transmisión, MIL encendida',
    sections: [
      {heading:'How it works',body:'An intermittent VSS signal causes the speedometer to fluctuate and can confuse the PCM, causing erratic transmission behavior.'},
      {heading:'What to check',body:'Check for loose or corroded connector. Inspect wiring for intermittent contact. Check the VSS sensor mounting for looseness. Use an oscilloscope to monitor the signal while driving over bumps.'},
      {heading:'Common causes',body:'Loose connector, corroded terminals, damaged wire that makes intermittent contact, loose sensor mounting, or damaged reluctor ring with one missing tooth.'},
    ],
    related:['P0500','P0501','P0502','P0720','P0721','P0722'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0505',
    category: CodeCategory.Engine,
    title: 'Idle Air Control (IAC) System Malfunction',
    summary: 'The PCM detects a fault in the idle control system.',
    symptom: 'Erratic idle, stalling, idle too high or too low, MIL on',
    symptomEs: 'Ralentí errático, calado, ralentí demasiado alto o demasiado bajo, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM controls idle speed through the IAC valve (or electronic throttle on newer vehicles). It adjusts air bypass around the throttle plate to maintain target idle RPM.'},
      {heading:'What to check',body:'Check for vacuum leaks first — they are the most common cause of idle problems. Clean the IAC valve and throttle body. Check IAC valve resistance. Test IAC operation with a scan tool.'},
      {heading:'Common causes',body:'Carbon buildup in the IAC valve or throttle body, vacuum leak, failed IAC valve, or PCM idle control issue.'},
    ],
    related:['P0506','P0507','P0120','P0220','P1510','P1515','P1520'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0506',
    category: CodeCategory.Engine,
    title: 'Idle Air Control (IAC) System RPM Lower Than Expected',
    summary: 'The PCM detects idle RPM is below the target value.',
    symptom: 'Idle too low, stalling when coming to a stop, rough idle, MIL on',
    symptomEs: 'Ralentí demasiado bajo, calado al detenerse, ralentí irregular, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM commands the IAC to maintain target idle RPM. If idle drops below target even with maximum IAC opening, P0506 sets.'},
      {heading:'What to check',body:'Check for carbon buildup restricting the IAC passage. Inspect the throttle plate for carbon. Check for dragging brakes or other engine loads.'},
      {heading:'Common causes',body:'Carbon buildup in the IAC passage, sticking IAC valve, throttle plate carbon, or excessive engine load at idle.'},
    ],
    related:['P0505','P0507','P0120','P0220'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0507',
    category: CodeCategory.Engine,
    title: 'Idle Air Control (IAC) System RPM Higher Than Expected',
    summary: 'The PCM detects idle RPM is above the target value.',
    symptom: 'High idle, idle does not drop when coming to a stop, MIL on',
    symptomEs: 'Ralentí alto, el ralentí no baja al detenerse, MIL encendida',
    sections: [
      {heading:'How it works',body:'If idle stays above target even with minimum IAC opening, P0507 sets. This usually indicates an air leak allowing extra air into the intake.'},
      {heading:'What to check',body:'Check for vacuum leaks (gaskets, hoses, brake booster). Inspect the throttle cable for binding. Check for the throttle plate not closing fully due to carbon buildup.'},
      {heading:'Common causes',body:'Vacuum leak, carbon buildup preventing throttle closure, binding throttle cable, or IAC valve stuck open.'},
    ],
    related:['P0505','P0506','P0120','P0220'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0550',
    category: CodeCategory.Electrical,
    title: 'Power Steering Pressure (PSP) Sensor Circuit Malfunction',
    summary: 'The PCM detects an implausible or missing PSP sensor signal.',
    symptom: 'Idle may not increase during steering maneuvers, possible hard steering at idle, MIL on',
    symptomEs: 'El ralentí puede no aumentar durante las maniobras de dirección, posible dirección dura al ralentí, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PSP sensor tells the PCM when power steering load is high so it can increase idle speed to prevent stalling. A failed sensor means the PCM cannot compensate for steering load.'},
      {heading:'What to check',body:'Check PSP sensor signal voltage while turning the steering wheel. Inspect the connector for fluid contamination (common near power steering components). Test the 5V reference and ground.'},
      {heading:'Common causes',body:'Failed PSP sensor, fluid-contaminated connector, wiring damage, or 5V reference fault.'},
    ],
    related:['P0551','P0552','P0553','P0554'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0562',
    category: CodeCategory.Electrical,
    title: 'System Voltage Low',
    summary: 'The PCM detects that the system voltage is below the minimum threshold.',
    symptom: 'Slow cranking, dim lights, possible warning lights, multiple sensor codes, MIL on',
    symptomEs: 'Giro lento, luces tenues, posibles luces de advertencia, múltiples códigos de sensor, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM monitors system voltage at the battery and PCM power input. Low voltage can cause erratic sensor readings and set multiple unrelated codes.'},
      {heading:'What to check',body:'Check battery voltage (should be 12.4V+ resting, 13.5–14.5V running). Test the charging system output. Check battery terminals and grounds for corrosion or looseness.'},
      {heading:'Common causes',body:'Weak or dead battery, failed alternator, loose/corroded battery connections, high resistance in the charging circuit, or excessive parasitic drain.'},
    ],
    related:['P0563','P0620','P0622','P0650','P0685','P0686','P0687'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0563',
    category: CodeCategory.Electrical,
    title: 'System Voltage High',
    summary: 'The PCM detects that the system voltage is above the maximum threshold.',
    symptom: 'Bright lights, possible blown bulbs, battery may boil over, warning lights, MIL on',
    symptomEs: 'Luces brillantes, posibles bombillas fundidas, la batería puede hervir, luces de advertencia, MIL encendida',
    sections: [
      {heading:'How it works',body:'High system voltage is almost always caused by a failed voltage regulator, either internal to the alternator or controlled by the PCM.'},
      {heading:'What to check',body:'Measure charging voltage at the battery (should not exceed ~15V). Check the voltage regulator function. Inspect the alternator for internal failure.'},
      {heading:'Common causes',body:'Failed voltage regulator, alternator internal failure, or wiring fault in the charging circuit.'},
    ],
    related:['P0562','P0620','P0622','P0650','P0685','P0686','P0687'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0600',
    category: CodeCategory.Electrical,
    title: 'Serial Communication Link Malfunction',
    summary: 'The PCM detects a fault in the CAN bus or other serial communication link.',
    symptom: 'Multiple warning lights, gauges may not work, transmission may behave erratically, MIL on',
    symptomEs: 'Múltiples luces de advertencia, los indicadores pueden no funcionar, la transmisión puede comportarse erráticamente, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM communicates with other modules (TCM, ABS, BCM) over the CAN bus. A communication fault can cause multiple systems to malfunction.'},
      {heading:'What to check',body:'Check for wiring damage to the CAN bus wires. Measure CAN bus resistance (typically 60 ohms at the terminating resistors). Check for aftermarket accessories that may interfere with the bus.'},
      {heading:'Common causes',body:'Damaged CAN bus wiring, faulty module taking down the bus, aftermarket accessory interference, or corrosion in connectors.'},
    ],
    related:['P0601','P0602','P0603','P0604','P0605','P0606','P0610','P0620'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0606',
    category: CodeCategory.Electrical,
    title: 'PCM Processor Fault',
    summary: 'The PCM has detected an internal processor fault.',
    symptom: 'Check Engine Light on, possible drivability issues, possible no-start, erratic behavior',
    symptomEs: 'Luz de Check Engine encendida, posibles problemas de manejo, posible no arranque, comportamiento errático',
    sections: [
      {heading:'How it works',body:'P0606 indicates an internal PCM processor failure. The PCM runs self-checks and sets this code when an internal fault is detected.'},
      {heading:'What to check',body:'Check for low or high voltage conditions first (P0562/P0563) — these can cause false P0606 codes. Check for water intrusion in the PCM connector. Inspect PCM grounds.'},
      {heading:'Common causes',body:'Internal PCM failure, voltage irregularity causing PCM malfunction, water intrusion, or PCM ground issue.'},
    ],
    related:['P0562','P0563','P0600–P0605','P0620','P0650'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0620',
    category: CodeCategory.Electrical,
    title: 'Generator Control Circuit Malfunction',
    summary: 'The PCM detects a fault in the alternator control circuit.',
    symptom: 'Charging system warning light, battery not charging, possible electrical system issues, MIL on',
    symptomEs: 'Luz de advertencia del sistema de carga, batería no se carga, posibles problemas del sistema eléctrico, MIL encendida',
    sections: [
      {heading:'How it works',body:'On modern vehicles, the PCM controls alternator output through a control circuit (LIN bus or PWM signal). A fault in this circuit prevents proper charging.'},
      {heading:'What to check',body:'Check the alternator control circuit for opens or shorts. Verify the PCM is sending the correct control signal. Check alternator output directly.'},
      {heading:'Common causes',body:'Failed alternator, open/short in the control circuit, blown fuse, or PCM driver failure.'},
    ],
    related:['P0562','P0563','P0622','P0650','P0685','P0686','P0687'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0650',
    category: CodeCategory.Electrical,
    title: 'Malfunction Indicator Lamp (MIL) Control Circuit Malfunction',
    summary: 'The PCM detects a fault in the MIL control circuit.',
    symptom: 'Check Engine Light does not come on during bulb check or stays on all the time, MIL on',
    symptomEs: 'La luz de Check Engine no se enciende durante la verificación de la bombilla o permanece encendida todo el tiempo, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM controls the MIL by grounding the circuit. It monitors the circuit for opens, shorts, or bulb faults.'},
      {heading:'What to check',body:'Check the MIL bulb or LED. Inspect the instrument cluster connector. Check for a short or open in the MIL control circuit from PCM to cluster.'},
      {heading:'Common causes',body:'Burnt out MIL bulb, failed LED in the cluster, wiring fault, or PCM driver failure.'},
    ],
    related:['P0562','P0563','P0620','P0685','P0686','P0687'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0685',
    category: CodeCategory.Electrical,
    title: 'ECM/PCM Power Relay Control Circuit / Open',
    summary: 'The PCM detects an open circuit in the main power relay control circuit.',
    symptom: 'No-start, intermittent stalling, MIL on',
    symptomEs: 'No arranca, calado intermitente, MIL encendida',
    sections: [
      {heading:'How it works',body:'The PCM controls the main power relay that supplies power to the PCM, injectors, coils, and other components. An open circuit prevents these components from receiving power.'},
      {heading:'What to check',body:'Check the main relay for operation. Test for power at the relay output with the ignition on. Inspect relay contacts for burning or corrosion.'},
      {heading:'Common causes',body:'Failed main relay, open relay coil circuit, blown fuse, or PCM driver failure.'},
    ],
    related:['P0562','P0563','P0620','P0650','P0686','P0687'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0686',
    category: CodeCategory.Electrical,
    title: 'ECM/PCM Power Relay Control Circuit / Short to Ground',
    summary: 'The PCM detects a short to ground in the main power relay control circuit.',
    symptom: 'No-start, battery drain, MIL on',
    symptomEs: 'No arranca, descarga de batería, MIL encendida',
    sections: [
      {heading:'How it works',body:'A short to ground in the relay control circuit may cause the relay to stay on all the time or prevent it from turning on.'},
      {heading:'What to check',body:'Check for a short to ground in the relay control wire. Test the relay driver circuit in the PCM. Measure relay coil resistance.'},
      {heading:'Common causes',body:'Short to ground in the control circuit, failed relay, or failed PCM driver.'},
    ],
    related:['P0562','P0563','P0620','P0650','P0685','P0687'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0687',
    category: CodeCategory.Electrical,
    title: 'ECM/PCM Power Relay Control Circuit / Short to Battery',
    summary: 'The PCM detects a short to battery voltage in the main power relay control circuit.',
    symptom: 'Relay stays on all the time, battery drain, MIL on',
    symptomEs: 'El relé permanece encendido todo el tiempo, descarga de batería, MIL encendida',
    sections: [
      {heading:'How it works',body:'A short to battery in the control circuit may keep the relay energized even with the ignition off, causing battery drain.'},
      {heading:'What to check',body:'Check for a short to battery voltage in the relay control circuit. Test that the relay de-energizes when the ignition is turned off.'},
      {heading:'Common causes',body:'Short to battery in the control wire, failed relay welded closed, or PCM driver failure.'},
    ],
    related:['P0562','P0563','P0620','P0650','P0685','P0686'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
];

// ---------------------------------------------------------------------------
//  FIELD GUIDES
// ---------------------------------------------------------------------------

const FIELD_GUIDES: FieldGuide[] = [
  {
    id: 'engine-no-start',
    category: CodeCategory.Engine,
    icon: '⚡',
    type: 'Diagnostic Flow',
    title: 'Engine No-Start Diagnosis',
    summary: 'Step-by-step approach to diagnose an engine that cranks but does not start.',
    time: '30 min',
  },
  {
    id: 'engine-misfire',
    category: CodeCategory.Ignition,
    icon: '🔥',
    type: 'Diagnostic Flow',
    title: 'Engine Misfire Diagnosis',
    summary: 'How to identify and isolate the cause of a cylinder misfire.',
    time: '30 min',
  },
  {
    id: 'fuel-system-diagnosis',
    category: CodeCategory.Fuel,
    icon: '⛽',
    type: 'Diagnostic Flow',
    title: 'Fuel System Diagnosis',
    summary: 'How to test fuel pressure, volume, and injector function.',
    time: '20 min',
  },
  {
    id: 'charging-system-diagnosis',
    category: CodeCategory.Electrical,
    icon: '🔋',
    type: 'Diagnostic Flow',
    title: 'Charging System Diagnosis',
    summary: 'How to test alternator output, battery condition, and charging circuit integrity.',
    time: '15 min',
  },
  {
    id: 'cooling-system-diagnosis',
    category: CodeCategory.Cooling,
    icon: '🌡️',
    type: 'Diagnostic Flow',
    title: 'Cooling System Diagnosis',
    summary: 'How to diagnose overheating, coolant loss, and thermostat issues.',
    time: '15 min',
  },
  {
    id: 'evap-system-diagnosis',
    category: CodeCategory.Emissions,
    icon: '💨',
    type: 'Diagnostic Flow',
    title: 'EVAP System Diagnosis',
    summary: 'How to smoke-test the EVAP system and identify leaks.',
    time: '20 min',
  },
];

// ---------------------------------------------------------------------------
//  CODE / GUIDE HELPERS
// ---------------------------------------------------------------------------

/** Returns all diagnostic codes (EN) merged with transmission codes. */
export function allCodes(): DiagnosticCode[] {
  // Lazy import to avoid circular dependency
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { transmissionCodes } = require('./transmissionData') as typeof import('./transmissionData');
  return [...DIAGNOSTIC_CODES, ...transmissionCodes()];
}

/** Returns all field guides (EN). */
export function allGuides(): FieldGuide[] {
  return FIELD_GUIDES;
}

// ---------------------------------------------------------------------------
//  SEARCH
// ---------------------------------------------------------------------------

const SEARCH_ES_CONSTANTS = {
  none: 'Sin coincidencia exacta en esta biblioteca. Prueba un síntoma más corto, un código como P0300 o explora todas las guías.',
  close: 'Sin coincidencia exacta: estos son los temas más cercanos en la biblioteca.',
  found: ' resultado encontrado. Abre un resultado para revisar la guía.',
  found_plural: ' resultados encontrados. Abre un resultado para revisar la guía.',
};

/**
 * Searches the trouble-code and field-guide library.
 *
 * Returns up to 9 results sorted by relevance, plus a localised status string
 * that distinguishes exact, close, and no-match outcomes.
 */
export function searchDiagnosticLibrary(
  query: string,
  lang: 'en' | 'es',
): { status: string; results: Array<{ code: string; title: string; type: string; snippet: string; meta: string }> } {
  const q = query.toLowerCase().trim();
  if (!q) return { status: '', results: [] };

  const codes = allCodes();
  const guides = allGuides();

  interface Match {
    code: string;
    title: string;
    type: 'code' | 'guide';
    snippet: string;
    meta: string;
    score: number;
  }

  const matches: Match[] = [];

  // Score diagnostic codes
  for (const c of codes) {
    const haystack = [c.code, c.symptom, c.category, ...(c.related ?? [])]
      .join(' ')
      .toLowerCase();
    let score = 0;
    if (haystack.includes(q)) {
      if (haystack.startsWith(q)) {
        score = haystack === q ? 100 : 80;
      } else {
        score = 50;
      }
    } else if (q.length >= 3 && haystack.includes(q.slice(0, 3))) {
      score = 10;
    }
    if (score > 0) {
      matches.push({
        code: c.code,
        title: c.code,
        type: 'code',
        snippet: lang === 'es' ? c.symptomEs ?? c.symptom : c.symptom,
        meta: lang === 'es' ? 'Código de falla' : 'Trouble code',
        score,
      });
    }
  }

  // Score field guides
  for (const g of guides) {
    const haystack = [g.title, g.subtitle ?? '', g.category].join(' ').toLowerCase();
    let score = 0;
    if (haystack.includes(q)) {
      if (haystack.startsWith(q)) {
        score = haystack === q ? 100 : 80;
      } else {
        score = 50;
      }
    } else if (q.length >= 3 && haystack.includes(q.slice(0, 3))) {
      score = 10;
    }
    if (score > 0) {
      matches.push({
        code: g.id,
        title: g.title,
        type: 'guide',
        snippet: lang === 'es' ? g.subtitleEs ?? g.subtitle ?? '' : g.subtitle ?? '',
        meta: lang === 'es' ? 'Guía de campo' : 'Field guide',
        score,
      });
    }
  }

  matches.sort((a, b) => b.score - a.score);

  if (matches.length > 0) {
    const esCount =
      matches.length === 1
        ? `${matches.length}${SEARCH_ES_CONSTANTS.found}`
        : `${matches.length}${SEARCH_ES_CONSTANTS.found_plural}`;
    return {
      status: lang === 'es' ? esCount : `${matches.length} result${matches.length === 1 ? '' : 's'} found. Open a result to review the guidance.`,
      results: matches.slice(0, 9),
    };
  }

  // No direct matches — try partial trigram fallback
  const fallback = [...codes, ...guides]
    .filter((item) => {
      const text = 'code' in item ? [item.code, item.symptom].join(' ') : [item.title, item.subtitle ?? ''].join(' ');
      return text && q.length >= 3 && text.toLowerCase().includes(q.slice(0, 3));
    })
    .slice(0, 9);

  if (fallback.length > 0) {
    return {
      status: lang === 'es' ? SEARCH_ES_CONSTANTS.close : 'No exact match - these are the closest topics in the library.',
      results: fallback.map((item) => {
        if ('code' in item) {
          return {
            code: item.code,
            title: item.title,
            type: 'code' as const,
            snippet: lang === 'es' ? (item.symptomEs ?? item.symptom) : item.symptom,
            meta: lang === 'es' ? 'Código de falla' : 'Trouble code',
          };
        }
        return {
          code: item.id,
          title: item.title,
          type: 'guide' as const,
          snippet: lang === 'es' ? (item.subtitleEs ?? item.subtitle ?? item.summary) : (item.subtitle ?? item.summary),
          meta: lang === 'es' ? 'Guía de campo' : 'Field guide',
        };
      }),
    };
  }

  return {
    status: lang === 'es' ? SEARCH_ES_CONSTANTS.none : 'No exact match in this library. Try a shorter symptom, a code such as P0300, or browse all guides.',
    results: [],
  };
}
