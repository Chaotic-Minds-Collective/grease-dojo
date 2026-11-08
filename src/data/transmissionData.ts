/**
 * Transmission diagnostic codes, engine, and TCM codes.
 * All content is reviewed and approved for reference.
 */

import { CodeCategory, DiagnosticCode, FieldGuide } from '../types/diagnostics';

const TRANSMISSION_CODES: DiagnosticCode[] = [
  {
    code: 'P0700',
    category: CodeCategory.Transmission,
    title: 'Transmission Control System (MIL Request)',
    summary: 'The TCM has detected a fault and requests the engine ECM to illuminate the MIL.',
    symptom: 'Check Engine Light on, possible shift quality issues, transmission may enter limp mode',
    symptomEs: 'Luz de Check Engine encendida, posibles problemas de calidad de cambio, la transmisión puede entrar en modo de emergencia',
    sections: [
      {heading:'How it works',body:'P0700 is a generic request from the transmission control module to illuminate the MIL. It always accompanies a manufacturer-specific code that identifies the actual fault.'},
      {heading:'What to check',body:'Retrieve the associated manufacturer-specific code(s) to determine the actual failure. Inspect the transmission fluid level and condition. Check for wiring damage at the TCM connector and transmission harness.'},
      {heading:'Common causes',body:'Low or degraded transmission fluid, failed shift solenoid, faulty TCM, damaged wiring harness, or an internal transmission failure.'},
    ],
    related:['P0705–P0715','P0730','P0740','P0750','P0760','P0770','P0780'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0705',
    category: CodeCategory.Transmission,
    title: 'Transmission Range Sensor (TR) Circuit Malfunction (PRNDL Input)',
    summary: 'The TCM detects an invalid or intermittent signal from the transmission range sensor.',
    symptom: 'Incorrect gear display, no-start in Park/Neutral, erratic shifting, failsafe mode',
    symptomEs: 'Visualización incorrecta de la marcha, no arranca en Park/Neutral, cambios erráticos, modo de seguridad',
    sections: [
      {heading:'How it works',body:'The transmission range sensor tells the TCM which gear position the driver has selected (P/R/N/D/L). It is usually part of the manual shift shaft or mounted externally on the transmission housing.'},
      {heading:'What to check',body:'Verify the gear position indicator on the dash matches the actual lever position. Check for corrosion at the sensor connector. Test the sensor signal voltage at each position. Inspect the shift cable adjustment.'},
      {heading:'Common causes',body:'Faulty range sensor, misadjusted shift linkage, corroded connector, broken wire in the harness, or debris blocking the sensor mechanism.'},
    ],
    related:['P0700','P0715','P0720','P0730'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0715',
    category: CodeCategory.Transmission,
    title: 'Input/Turbine Speed Sensor Circuit Malfunction',
    summary: 'The TCM detects no or erratic signal from the input speed sensor.',
    symptom: 'Harsh or delayed shifts, no torque converter clutch engagement, failsafe mode',
    symptomEs: 'Cambios bruscos o retrasados, sin acoplamiento del convertidor de par, modo de seguridad',
    sections: [
      {heading:'How it works',body:'The input speed sensor monitors the rotational speed of the transmission input shaft (turbine side of the torque converter). The TCM uses this to calculate shift timing and TCC lockup.'},
      {heading:'What to check',body:'Measure sensor resistance and AC voltage output while spinning. Inspect the tone wheel for damage. Check the wiring between the sensor and TCM for breaks or shorts.'},
      {heading:'Common causes',body:'Failed input speed sensor, damaged tone wheel, wiring fault, low fluid level causing intermittent signal loss, or internal transmission damage.'},
    ],
    related:['P0700','P0720','P0730','P0740'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0720',
    category: CodeCategory.Transmission,
    title: 'Output Speed Sensor Circuit Malfunction',
    summary: 'The TCM detects no or erratic signal from the output speed sensor.',
    symptom: 'Speedometer may not work, harsh shifts, incorrect shift timing, failsafe mode',
    symptomEs: 'El velocímetro puede no funcionar, cambios bruscos, sincronización incorrecta de cambios, modo de seguridad',
    sections: [
      {heading:'How it works',body:'The output speed sensor monitors the rotational speed of the transmission output shaft. The TCM compares input vs. output speed to detect clutch slip and determine shift timing.'},
      {heading:'What to check',body:'Check sensor resistance and AC output while rotating the driven wheels. Inspect the reluctor ring. Verify wiring integrity from sensor to TCM. Check ABS wheel speed sensor data if shared.'},
      {heading:'Common causes',body:'Failed output speed sensor, damaged reluctor ring, wiring fault, low fluid, or internal transmission mechanical failure causing no output rotation.'},
    ],
    related:['P0700','P0715','P0730','P0725'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0730',
    category: CodeCategory.Transmission,
    title: 'Incorrect Gear Ratio',
    summary: 'The TCM detects a gear ratio that does not match the expected ratio for the selected gear.',
    symptom: 'Slipping, flare on shifts, poor acceleration, Check Engine Light, possible failsafe mode',
    symptomEs: 'Patina, se revoluciona en los cambios, aceleración pobre, luz de Check Engine, posible modo de seguridad',
    sections: [
      {heading:'How it works',body:'The TCM compares the input-to-output speed ratio against the known ratio for each commanded gear. A mismatch indicates clutch pack or band slippage, or a stuck one-way clutch.'},
      {heading:'What to check',body:'Perform a stall test to isolate the slipping component. Check fluid level, color, and smell. Inspect the valve body for sticking valves. Measure line pressure at idle and stall.'},
      {heading:'Common causes',body:'Worn clutch pack, failed band, stuck valve body, low fluid pressure, torque converter failure, or internal mechanical damage.'},
    ],
    related:['P0700','P0715','P0720','P0731–P0736','P0740','P0780'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0740',
    category: CodeCategory.Transmission,
    title: 'Torque Converter Clutch Circuit Malfunction',
    summary: 'The TCM detects a fault in the torque converter clutch solenoid or lockup circuit.',
    symptom: 'TCC stays unlocked (highway RPM high), shudder on lockup, stall at stops, failsafe mode',
    symptomEs: 'TCC se queda desacoplado (RPM altas en carretera), vibración al acoplar, se cala en paradas, modo de seguridad',
    sections: [
      {heading:'How it works',body:'The TCM commands the TCC solenoid to lock the torque converter at cruising speed, improving fuel economy. It monitors engine RPM vs. input shaft speed to verify lockup.'},
      {heading:'What to check',body:'Check TCC solenoid resistance and operation with a scan tool bidirectional control. Inspect the transmission fluid for signs of overheating (burnt smell, dark color). Verify brake switch operation (TCC releases on brake application).'},
      {heading:'Common causes',body:'Failed TCC solenoid, stuck TCC valve in the valve body, worn torque converter, low fluid level, or wiring fault to the solenoid.'},
    ],
    related:['P0700','P0715','P0720','P0730','P0743','P0748','P0750'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0750',
    category: CodeCategory.Transmission,
    title: 'Shift Solenoid A Malfunction',
    summary: 'The TCM detects an electrical or functional fault in shift solenoid A.',
    symptom: 'Missing gear (usually 2nd or 3rd), harsh shifts, limp mode, Check Engine Light',
    symptomEs: 'Marcha faltante (generalmente 2da o 3ra), cambios bruscos, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'Shift solenoids control hydraulic flow to the shift valves, directing fluid to the appropriate clutch packs. The TCM monitors solenoid resistance and verifies the gear ratio change occurs when commanded.'},
      {heading:'What to check',body:'Measure solenoid resistance at the transmission connector. Perform a solenoid power/ground test. Use a scan tool to command the solenoid on/off while listening for a click. Inspect the valve body for debris.'},
      {heading:'Common causes',body:'Failed shift solenoid, stuck valve in the valve body, open/short in the solenoid circuit, low fluid, or internal debris blocking the solenoid.'},
    ],
    related:['P0700','P0755','P0760','P0765','P0770','P0780'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0755',
    category: CodeCategory.Transmission,
    title: 'Shift Solenoid B Malfunction',
    summary: 'The TCM detects an electrical or functional fault in shift solenoid B.',
    symptom: 'Missing gear, incorrect shift pattern, harsh engagements, limp mode',
    symptomEs: 'Marcha faltante, patrón de cambio incorrecto, acoplamientos bruscos, modo de emergencia',
    sections: [
      {heading:'How it works',body:'Shift solenoid B typically controls a different gear set than solenoid A. Together, A and B are energized in specific patterns to engage 1st through 4th gear.'},
      {heading:'What to check',body:'Same as P0750 — measure resistance, test command response, inspect wiring and valve body. The resistance range should match the manufacturer specification.'},
      {heading:'Common causes',body:'Failed solenoid, valve body issue, electrical fault, or contaminated transmission fluid.'},
    ],
    related:['P0700','P0750','P0760','P0765','P0780'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0760',
    category: CodeCategory.Transmission,
    title: 'Shift Solenoid C Malfunction',
    summary: 'The TCM detects an electrical or functional fault in shift solenoid C.',
    symptom: 'Missing gear, incorrect shift pattern, failsafe mode, Check Engine Light',
    symptomEs: 'Marcha faltante, patrón de cambio incorrecto, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'Shift solenoid C is typically used in 5- and 6-speed transmissions to control additional gear sets beyond what solenoids A and B manage.'},
      {heading:'What to check',body:'Diagnostic approach mirrors P0750. Consult the vehicle-specific wiring diagram to confirm which solenoid is C and its function in that transmission.'},
      {heading:'Common causes',body:'Solenoid failure, wiring fault, valve body debris, or low fluid pressure.'},
    ],
    related:['P0700','P0750','P0755','P0765','P0770','P0780'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0765',
    category: CodeCategory.Transmission,
    title: 'Shift Solenoid D Malfunction',
    summary: 'The TCM detects an electrical or functional fault in shift solenoid D.',
    symptom: 'Shift hesitation, incorrect gear selection, failsafe mode, Check Engine Light',
    symptomEs: 'Vacilación en el cambio, selección incorrecta de marcha, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'Shift solenoid D is used in transmissions with 6 or more speeds to manage additional gear states beyond solenoids A through C.'},
      {heading:'What to check',body:'Follow the same diagnostic steps as P0750. Check the manufacturer service information for the exact solenoid function in that transmission model.'},
      {heading:'Common causes',body:'Solenoid electrical failure, wiring issue, valve body contamination, or internal transmission wear.'},
    ],
    related:['P0700','P0750','P0755','P0760','P0770','P0780'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0770',
    category: CodeCategory.Transmission,
    title: 'Shift Solenoid E Malfunction',
    summary: 'The TCM detects an electrical or functional fault in shift solenoid E.',
    symptom: 'Erratic shifting, missing gear, failsafe mode, Check Engine Light',
    symptomEs: 'Cambios erráticos, marcha faltante, modo de emergencia, luz de Check Engine',
    sections: [
      {heading:'How it works',body:'Shift solenoid E may control a specific gear, TCC lockup, or pressure regulation depending on the transmission design.'},
      {heading:'What to check',body:'Identify the solenoid function from the vehicle-specific service information. Test resistance, command response, and circuit integrity.'},
      {heading:'Common causes',body:'Solenoid failure, wiring fault, valve body issue, or low fluid level/pressure.'},
    ],
    related:['P0700','P0750','P0755','P0760','P0765','P0780'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
  {
    code: 'P0780',
    category: CodeCategory.Transmission,
    title: 'Shift Malfunction',
    summary: 'The TCM detects a general shift system failure that does not isolate to a specific solenoid.',
    symptom: 'Transmission stuck in one gear, no upshift or downshift, limp mode, MIL on',
    symptomEs: 'Transmisión atascada en una marcha, sin cambios ascendentes o descendentes, modo de emergencia, MIL encendida',
    sections: [
      {heading:'How it works',body:'P0780 is a catch-all code that the TCM sets when shift timing, ratio, or solenoid response falls outside expected parameters but no specific solenoid code applies.'},
      {heading:'What to check',body:'Check fluid level and condition first. Retrieve any pending codes for more specific direction. Perform a line pressure test. Inspect shift linkage and cable adjustment. Use a scan tool to view live transmission data.'},
      {heading:'Common causes',body:'Low fluid, clogged filter, valve body wear, failing pump, internal mechanical damage, or TCM software fault.'},
    ],
    related:['P0700','P0730','P0740','P0750','P0755','P0760','P0765','P0770'],
    reviewStatus:'Reviewed and approved',sourceStatus:'Reviewed' },
];

const TRANSMISSION_GUIDES: FieldGuide[] = [
  {
    id: 'transmission-fluid-check',
    category: CodeCategory.Transmission,
    icon: '🔧',
    type: 'Procedure',
    title: 'Transmission Fluid Check',
    summary: 'How to check automatic and manual transmission fluid level and condition.',
    time: '5 min',
  },
  {
    id: 'transmission-slip-diagnosis',
    category: CodeCategory.Transmission,
    icon: '⚡',
    type: 'Diagnostic Flow',
    title: 'Transmission Slip Diagnosis',
    summary: 'Step-by-step approach to identify which component is slipping.',
    time: '15 min',
  },
];

export function transmissionCodes(): DiagnosticCode[] {
  return TRANSMISSION_CODES;
}

export function transmissionGuides(): FieldGuide[] {
  return TRANSMISSION_GUIDES;
}
