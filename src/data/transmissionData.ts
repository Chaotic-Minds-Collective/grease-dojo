import { CodeCategory, FieldGuide, TroubleCode } from '../types/diagnostics';

// Drafted to close the biggest gap reported in first use: a search for
// a shifting or transmission concern returned nothing, because the
// library had no transmission entries. These follow the same draft
// discipline as the rest of the library: no invented specifications,
// conservative checks, and explicit escalation to professional service.
export const TRANSMISSION_CODES: TroubleCode[] = [
  {
    code: 'P0700', title: 'Transmission Control System Malfunction', category: CodeCategory.Transmission,
    summary: 'The transmission computer has reported a fault. This code is a signal to read deeper, not a diagnosis.',
    meaning: 'The engine computer sets P0700 to report that the transmission control module has flagged a fault of its own. The specific problem is described by the transmission module codes, which many basic scan tools cannot read.',
    symptoms: ['Check-engine light', 'Harsh, late, or erratic shifting', 'Limp or fail-safe mode with limited gears', 'Sometimes no noticeable change at all'],
    causes: ['Whatever the transmission module detected: shift solenoids, speed sensors, pressure control, wiring, or the module itself'],
    checks: ['Read all codes with a scan tool that can communicate with the transmission module. P0700 alone does not identify the fault.', 'Record freeze-frame data and any transmission-module codes the tool can reach.', 'Check the fluid level and condition using the exact vehicle procedure. Some vehicles require a warmed engine; others have no dipstick and use a level plug.', 'Inspect wiring and connectors at the transmission for damage, corrosion, or chewed insulation.', 'Do not replace parts based on P0700 alone; the transmission module codes identify the circuit to investigate.'],
    warning: 'Limp mode restricts shifting on purpose to protect the transmission. Fluid at operating temperature can burn skin. Automatic transmissions are damaged quickly by the wrong fluid type.',
    related: ['P0715', 'P0730', "Won't shift right or slips"],
    reviewStatus: 'Mechanic review pending', sourceStatus: 'Authoritative references not yet supplied',
  },
  {
    code: 'P0715', title: 'Input / Turbine Speed Sensor Circuit', category: CodeCategory.Transmission,
    summary: 'The computer cannot get a clean speed signal from the transmission input shaft.',
    meaning: 'The transmission computer watches how fast the input shaft turns to time shifts. A missing or noisy signal upsets shift quality and can bring on limp mode.',
    symptoms: ['Harsh or late shifts', 'Shifts feel wrong at certain speeds', 'Speedometer or cruise behavior changes on some vehicles', 'Limp mode'],
    causes: ['Failed input-speed sensor', 'Wiring or connector damage', 'Debris or wear affecting the sensor tone ring', 'Internal transmission fault disturbing the signal'],
    checks: ['Read all codes; related speed-sensor codes point to a shared circuit or harness path.', 'Inspect the sensor connector and wiring for heat damage, chafing, and corrosion.', 'Compare input and output speed-sensor readings in live data where the scan tool supports it.', 'Follow the service manual for sensor resistance or output testing before replacing it.'],
    warning: 'Under-vehicle checks need the vehicle safely supported on level ground with rated jack stands. Let hot exhaust and fluid cool first.',
    related: ['P0700', 'P0730'],
    reviewStatus: 'Mechanic review pending', sourceStatus: 'Authoritative references not yet supplied',
  },
  {
    code: 'P0730', title: 'Incorrect Gear Ratio', category: CodeCategory.Transmission,
    summary: 'The computer commanded one gear and the speed sensors say the transmission is not delivering it.',
    meaning: 'The transmission computer compares engine speed with wheel and shaft speeds to confirm each shift. When the measured ratio does not match the commanded gear, the computer reports P0730. This can mean slipping, or controls that cannot apply the gear.',
    symptoms: ['Slipping or flaring between gears', 'Harsh engagement', 'Engine revving without acceleration', 'Limp mode'],
    causes: ['Low or deteriorated fluid', 'Worn internal clutches or bands', 'Weak pump or pressure problem', 'Shift solenoid or control faults', 'Speed-sensor data errors'],
    checks: ['Check fluid level and condition first, using the exact vehicle procedure and specified fluid.', 'Inspect the fluid: dark color or burnt smell points to internal wear; a milky look means coolant intrusion.', 'Look for leaks at cooler lines and the pan.', 'Read all codes; the P0715-P0755 family narrows the circuit involved.', 'Review live data (speeds, solenoid commands) if the scan tool supports it.'],
    warning: 'Continued driving on a slipping transmission can destroy it. Internal transmission repair is specialist work; this library does not cover teardown procedures.',
    related: ['P0700', 'P0715'],
    reviewStatus: 'Mechanic review pending', sourceStatus: 'Authoritative references not yet supplied',
  },
];

export const SHIFT_GUIDES: FieldGuide[] = [
  {
    id: 'shifting', icon: '\u2699', title: "Won't shift right or slips", type: 'Transmission',
    summary: 'Fluid first, then codes, then honest limits: some shift faults are serviceable, and some are specialist work.',
    time: '9 min',
    search: 'wont shift transmission slipping gears harsh shifting delayed engagement wont go into gear car wont shift p0700 transmission fluid',
    sections: [
      { heading: 'The logic', body: 'An automatic transmission needs correct fluid level and condition, hydraulic pressure, working controls (sensors, solenoids, module), and sound internals. A shift problem lives in one of those layers. Test from the outside in - fluid, then codes and wiring - before assuming the worst, and know where DIY ends.' },
      { heading: 'Tools in the draft', body: 'A scan tool that can read transmission codes, the fluid level check the vehicle specifies (dipstick or level plug), basic hand tools, gloves, and eye protection.' },
      { heading: 'Diagnostic sequence', items: ['Describe the fault precisely: slipping, harsh shifts, delayed engagement, no reverse, or limp mode. Each points differently.', 'Read all codes, including manufacturer-specific transmission codes, and note freeze-frame data.', 'Check fluid level and condition with the exact vehicle procedure - fluid type, temperature, and engine state all matter.', 'Judge the fluid: dark and burnt smelling suggests internal wear; milky suggests coolant intrusion; gritty texture suggests clutch material.', 'Look for leaks at cooler lines, the pan gasket, and axle seals.', 'Inspect wiring and connectors to the transmission sensors and solenoids.', 'Review live data - input and output speeds, solenoid commands - if the tool supports it.', 'If fluid, wiring, and basic codes check out but the fault remains, the remaining causes are usually internal or module-level. That is specialist territory.'] },
      { heading: 'Safety', body: 'Fluid at operating temperature can burn. Support the vehicle on level ground with rated jack stands and chock the wheels. Use exactly the fluid specification the vehicle requires - the wrong fluid can ruin an automatic transmission. Keep the engine off for under-vehicle work.' },
      { heading: 'Common mistakes', body: 'Topping up with the wrong fluid, reading the level with the engine off on vehicles that require it running, replacing parts on a P0700 without reading the transmission module codes, and driving on a slipping unit until it fails completely.' },
    ],
  },
];
