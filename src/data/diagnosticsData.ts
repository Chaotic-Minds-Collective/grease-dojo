import { CodeCategory, DetailKind, FieldGuide, SearchResultItem, SymptomItem, TroubleCode } from '../types/diagnostics';

/**
 * Organized from the supplied Rounds 1–3 mechanic-review drafts.
 * These entries are not approved repair instructions. Vehicle-specific
 * specifications and authoritative references were not supplied.
 */
export const TROUBLE_CODES: TroubleCode[] = [
  { code:'P0300', title:'Random or Multiple Cylinder Misfire Detected', category:CodeCategory.Engine,
    summary:'The computer detects misfires in more than one cylinder, or a pattern that moves between cylinders.',
    meaning:'The engine computer sees the engine failing to fire properly. This code does not identify a failed component.',
    symptoms:['Check-engine light, which may flash during a strong misfire','Rough idle or shaking','Hesitation or loss of power','Poor fuel economy','Sometimes a fuel smell'],
    causes:['Worn spark plugs','Weak ignition coils or wires','Vacuum leaks','Fuel-delivery problems such as low pressure or clogged injectors','Airflow or sensor problems','Exhaust-gas-recirculation problems','Low compression or other mechanical wear'],
    checks:['Read all codes first. Address other codes that point to the same cause.','Review freeze-frame data, including engine speed, load, and temperature when the code set.','Inspect spark plugs and ignition coils for wear or damage.','Check for vacuum leaks using an appropriate method.','Compare fuel trims at idle and at steady higher RPM.','Check fuel pressure against the exact vehicle specification.','If earlier checks do not identify the cause, follow the vehicle-specific compression-test procedure.'],
    warning:'A flashing check-engine light can indicate a severe misfire that may damage the catalytic converter. Avoid driving until the condition is assessed. Let hot parts cool before touching them, and keep sparks and flames away from fuel.',
    related:['P0301–P0306','P0171','P0174','P0420'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0301–P0306', searchTerms:['P0301','P0302','P0303','P0304','P0305','P0306'], title:'Cylinder 1–6 Misfire Detected', category:CodeCategory.Engine,
    summary:'The computer detects a misfire associated with one specific cylinder. The final digit identifies the cylinder number.',
    meaning:'The code identifies the cylinder associated with the misfire, not the component that failed. Cylinder numbering and layout depend on the engine; consult the service manual.',
    symptoms:['Rough idle or shaking','Hesitation or loss of power','Poor fuel economy','A flashing check-engine light during a strong misfire'],
    causes:['Spark plug or ignition coil on the affected cylinder','Fuel injector issue on that cylinder','Vacuum leak near that cylinder','Low compression from a valve, ring, head-gasket, or other mechanical problem'],
    checks:['Read related codes and freeze-frame data first.','Inspect the spark plug and ignition coil for the identified cylinder.','On engines with one coil per cylinder, swap the coil with a neighboring cylinder and check whether the misfire follows it. Use the correct service procedure.','If appropriate for the engine, repeat the comparison with the spark plug.','Check injector operation and signal using the vehicle-specific procedure and specifications.','If ignition and fuel checks pass, perform a compression test on the affected cylinder using the service manual.'],
    warning:'A severe or flashing misfire can damage the catalytic converter. Turn the engine off and allow it to cool before moving coils or spark plugs. Keep hands clear of moving parts.',
    related:['P0300','P0171','P0174'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0171', title:'System Too Lean · Bank 1', category:CodeCategory.AirFuel,
    summary:'The computer reports a lean mixture condition on Bank 1.',
    meaning:'The computer is adding more fuel than normal and still detects too much air in the mixture. Bank 1 is the side of the engine containing cylinder 1. This code does not identify a failed part.',
    symptoms:['Check-engine light','Rough idle','Hesitation','Poor fuel economy','Sometimes stalling'],
    causes:['Vacuum or intake-air leak','Dirty or failing airflow sensor','Low fuel pressure from a restricted filter or weak pump','Clogged injectors','Exhaust leak before the oxygen sensor','Crankcase-ventilation problems'],
    checks:['Read other codes. Address misfire or sensor codes first.','Compare fuel trims at idle and at steady higher RPM. A condition worse at idle may point toward an air leak; one worse under load may point toward airflow or fuel delivery.','Inspect intake hoses and connections for cracks or loose clamps.','Perform an appropriate smoke test for vacuum leaks if equipment and training are available.','Compare the airflow-sensor reading with the exact vehicle specification.','Check fuel pressure against the exact vehicle specification.','Check for exhaust leaks near the sensor.'],
    warning:'Fuel is flammable. Relieve fuel pressure as the service manual directs before opening fuel lines. Keep sparks and flames away, and allow the exhaust to cool.',
    related:['P0174','P0172','P0300'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0172', title:'System Too Rich · Bank 1', category:CodeCategory.AirFuel,
    summary:'The computer reports a richer-than-expected mixture on Bank 1.',
    meaning:'The computer is removing fuel and still detects too much fuel in the mixture. This code does not identify the failed component.',
    symptoms:['Check-engine light','Black smoke or fuel smell','Rough idle','Poor fuel economy'],
    causes:['Leaking injector','Fuel pressure too high','Dirty air filter','Incorrect airflow-sensor reading','Incorrect coolant-temperature-sensor reading','Stuck-open purge valve','Exhaust-gas-recirculation problems'],
    checks:['Read other codes first.','Check the air filter and intake for restrictions.','Review fuel trims, airflow readings, and coolant-temperature readings in live data.','Check fuel pressure against the exact vehicle specification.','Check for a leaking injector using the vehicle-specific pressure-retention and inspection procedure.','Check purge-valve operation using the service manual.'],
    warning:'Fuel is flammable. If raw-fuel odor or a visible leak is present, shut the vehicle off in a safe location and keep ignition sources away. Follow the service manual before opening fuel lines.',
    related:['P0171','P0175','P0300'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0174', title:'System Too Lean · Bank 2', category:CodeCategory.AirFuel,
    summary:'The computer reports a lean mixture condition on Bank 2.',
    meaning:'This has the same general meaning and diagnostic approach as P0171, but applies to the other bank of a V or flat engine. If P0171 and P0174 appear together, consider a cause that can affect both banks.',
    symptoms:['Check-engine light','Rough idle','Hesitation','Poor fuel economy','Sometimes stalling'],
    causes:['Vacuum or intake-air leak','Airflow-sensor measurement issue','Low fuel pressure','Clogged injectors','Exhaust leak before an oxygen sensor','Crankcase-ventilation problems'],
    checks:['Read related codes and review freeze-frame data.','Compare fuel trims at idle and at steady higher RPM.','Inspect intake hoses and connections for damage or loose clamps.','Use an appropriate smoke test if available.','Compare airflow readings and fuel pressure with exact vehicle specifications.','If P0171 is also present, investigate shared causes such as an airflow-sensor issue, a large vacuum leak, or low fuel pressure.'],
    warning:'Fuel is flammable. Relieve fuel pressure as the service manual directs before opening fuel lines. Keep sparks and flames away, and allow the exhaust to cool.',
    related:['P0171','P0172','P0300'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0562', title:'System Voltage Low', category:CodeCategory.Electrical,
    summary:'The computer detects electrical-system voltage below its expected range.',
    meaning:'The computer sees system voltage lower than expected. The cause may be the battery, charging system, connections, grounds, or wiring.',
    symptoms:['Dim lights','Slow cranking','Warning lights','Unusual electronic behavior','Battery warning light'],
    causes:['Weak battery','Charging system not keeping up','Loose or corroded battery terminals','Poor ground','Slipping drive belt'],
    checks:['Check battery condition and resting voltage against the exact vehicle and battery specification.','Measure charging voltage with the engine running and compare it with the vehicle specification.','Inspect the drive belt and tensioner.','Inspect battery terminals, cable ends, and grounds for looseness or corrosion.','Test alternator output under load as the service manual describes.'],
    warning:'Keep hands clear of belts and fans. Remove rings and metal jewelry. Never disconnect the battery while the engine is running. Batteries can release explosive gas and deliver high short-circuit current.',
    related:['P0563','P0620'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0563', title:'System Voltage High', category:CodeCategory.Electrical,
    summary:'The computer detects electrical-system voltage above its expected range.',
    meaning:'The computer sees system voltage higher than expected. This can damage the battery and vehicle electronics.',
    symptoms:['Very bright or flickering lights','Warning lights','Swollen or hot battery','Rotten-egg smell near the battery'],
    causes:['Voltage-regulator or alternator fault','Poor connection on the charging-control wire','Wiring faults'],
    checks:['Measure charging voltage with the engine running and compare it with the exact vehicle specification.','Inspect connections and wiring at the alternator and battery.','Check the battery for visible damage or unusual heat without touching a hot or damaged battery.','Test the alternator and regulator as the service manual describes.'],
    warning:'Overcharging can damage the battery and electronics and may release hazardous gas. If you smell rotten eggs, see a swollen or hot battery, or notice smoke, stop and get qualified help.',
    related:['P0562','P0620'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0101', title:'Mass Airflow Circuit Range / Performance', category:CodeCategory.AirFuel,
    summary:'The airflow reading does not match what the computer expects for engine speed and load.',
    meaning:'This code does not prove the mass-airflow sensor has failed. Intake leaks, restrictions, wiring, exhaust leaks, and engine conditions may affect the reading.',
    symptoms:['Check-engine light','Rough idle','Hesitation','Poor fuel economy','Sometimes hard starting'],
    causes:['Dirty or contaminated sensor','Air leak after the sensor','Dirty or incorrect air filter','Exhaust leak','Wiring or connector problem','Failing sensor'],
    checks:['Read related codes and address them first.','Inspect the air filter and intake ducts for damage or loose clamps.','Check the sensor connector and wiring.','Compare airflow readings at idle and steady higher RPM with the exact vehicle specification.','Review fuel trims in live data.','If the service manual allows it, clean the sensor only with a cleaner made for that sensor.','Check for exhaust leaks if readings still appear incorrect.'],
    warning:'Turn the engine off and allow it to cool before touching components. Keep hands clear of belts and fans. Sensor elements and wires are delicate; use only the specified cleaner and procedure.',
    related:['P0102','P0103','P0171','P0172'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0102', title:'Mass Airflow Circuit Low Input', category:CodeCategory.AirFuel,
    summary:'The airflow-sensor signal is lower than the computer expects.',
    meaning:'A low signal can result from wiring, connector, power, ground, or sensor problems. The sensor should not be replaced until the circuit is checked.',
    symptoms:['Check-engine light','Rough running','Stalling','Hard starting','Hesitation'],
    causes:['Open or shorted wiring','Poor connector','Power or ground problem at the sensor','Failed sensor'],
    checks:['Read related codes first.','Inspect the connector and wiring. Any harness movement test must follow the vehicle-specific procedure and be kept clear of moving parts.','Using the wiring diagram and a multimeter, check sensor power, ground, and signal against the exact vehicle specification.','Compare live-data readings with the exact vehicle specification.','Replace the sensor only after wiring, power, and ground checks pass.'],
    warning:'Follow the service manual when probing connectors. Do not short connector pins. Keep test leads and hands clear of belts, fans, and other moving parts.',
    related:['P0101','P0103'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0103', title:'Mass Airflow Circuit High Input', category:CodeCategory.AirFuel,
    summary:'The airflow-sensor signal is higher than the computer expects.',
    meaning:'A high signal may involve wiring shorted to power, a poor sensor ground, contamination, or a failed sensor. The code alone does not confirm a failed sensor.',
    symptoms:['Check-engine light','Rough idle','Hesitation','Black smoke or rich running'],
    causes:['Wiring shorted to power','Poor sensor ground','Contaminated sensor','Failed sensor'],
    checks:['Read related codes first.','Inspect the connector and wiring.','Using the wiring diagram and a multimeter, check sensor power, ground, and signal against the exact vehicle specification.','Compare live-data readings with the exact vehicle specification.','Confirm wiring and circuit integrity before replacing the sensor.'],
    warning:'Follow the service manual when probing connectors. Do not short connector pins. Sensor elements and wires are delicate.',
    related:['P0101','P0102'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0128', title:'Coolant Temperature Below Thermostat Regulating Temperature', category:CodeCategory.Temperature,
    summary:'The engine does not warm up to the expected temperature in the expected time.',
    meaning:'A thermostat stuck open is one possible cause, but sensor accuracy, coolant level, fan operation, weather, and driving conditions also matter.',
    symptoms:['Check-engine light','Weak cabin heater','Temperature gauge stays low','Slightly poor fuel economy'],
    causes:['Thermostat stuck open','Coolant-temperature sensor reading incorrectly','Low coolant','Cooling fan running too much','Very cold weather or short trips'],
    checks:['Check coolant level only when the engine is cold.','Compare scan-tool coolant temperature with a second temperature reading using an appropriate method.','Observe warm-up in live data and compare it with the exact vehicle specification.','Check whether the heater blows warm and whether the fan runs continuously.','Test the thermostat as the service manual describes.'],
    warning:'Do not open the cooling system when hot. Keep hands and hair away from fans, which may start unexpectedly.',
    related:['Engine overheating field guide'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
  { code:'P0133', title:'Oxygen Sensor Circuit Slow Response · Bank 1 Sensor 1', category:CodeCategory.AirFuel,
    summary:'The upstream oxygen sensor on Bank 1 is responding more slowly than expected.',
    meaning:'This code does not automatically prove the oxygen sensor has failed. Exhaust leaks, wiring, contamination, and mixture problems can affect sensor response.',
    symptoms:['Check-engine light','Slightly poor fuel economy','Sometimes rough idle'],
    causes:['Aged or contaminated sensor','Exhaust leak','Wiring or connector problem','Mixture problem that affects sensor response'],
    checks:['Read other codes. Address mixture or misfire codes first.','Review the sensor signal in live data and compare it with the exact vehicle specification.','Inspect for exhaust leaks near the sensor.','Inspect the wiring and connector.','Look for possible contamination from oil, coolant, or silicone.','Replace the sensor only after these checks support that conclusion.'],
    warning:'Exhaust parts become very hot; allow them to cool. Carbon monoxide is poisonous. Never run an engine in a closed space.',
    related:['P0135','P0171','P0420'], reviewStatus:'Mechanic review pending', sourceStatus:'Authoritative references not yet supplied' },
];

export const FIELD_GUIDES: FieldGuide[] = [
  { id:'battery', icon:'ϟ', title:'Battery keeps dying overnight', type:'Electrical', summary:'Separate a weak battery, a charging problem, and a parasitic draw before replacing parts.', time:'8 min', search:'battery dies overnight dead battery parasitic draw alternator charging voltage',
    sections:[
      {heading:'The logic',body:'A battery can go flat because it is weak, because it is not being charged, or because something draws power while the vehicle is off. Test in that order. A new battery will not fix a charging fault or a parasitic draw.'},
      {heading:'Tools in the draft',body:'Multimeter, battery charger, basic hand tools, gloves, and eye protection.'},
      {heading:'Diagnostic sequence',items:['Fully charge the battery with a proper charger. After it has rested, record resting voltage and compare it with the battery specification.','Leave the vehicle off for several hours, then measure resting voltage again. A large drop may point to a weak battery or a draw.','Have the battery load-tested.','Measure charging voltage with the engine off and running, then compare with the exact vehicle specification.','Inspect terminals, cable ends, and grounds for looseness and corrosion.','If the battery and charging system pass, perform a parasitic-draw test using the service manual. Allow vehicle modules to enter sleep mode before taking the reading.','If the draw is above specification, isolate the affected circuit using the vehicle-specific procedure.']},
      {heading:'Safety',body:'Remove rings and metal jewelry. Batteries can spark and release gas, so keep flames away. Never disconnect a battery while the engine is running. Do not open doors or turn the key during a parasitic-draw test if doing so would wake the modules.'},
      {heading:'Common mistakes',body:'Replacing the alternator without testing it, measuring draw before modules sleep, and overlooking aftermarket accessories such as alarms or dash cameras.'}
    ]},
  { id:'clicking', icon:'⌁', title:'Won’t crank, only clicks', type:'Starting', summary:'Distinguish rapid clicking from one click, then check the battery and connections before suspecting the starter.', time:'7 min', search:'wont crank no crank only clicks rapid clicking single click starter battery',
    sections:[
      {heading:'The logic',body:'Rapid clicking often means there is not enough voltage, commonly from a weak battery or poor connection. A single click can involve the starter, solenoid, or a poor connection. Rule out the battery and connections first.'},
      {heading:'Tools in the draft',body:'Multimeter, jumper cables or a jump pack, basic hand tools, gloves, and eye protection.'},
      {heading:'Diagnostic sequence',items:['Set the parking brake and make sure the vehicle is in Park or Neutral.','Turn on the headlights and attempt to start. Note whether they dim significantly or go out.','Check that battery terminals are clean and tight.','Measure battery voltage at rest and while someone attempts to start. Compare the result with the exact vehicle specification.','If appropriate, attempt a jump start while following the owner’s manual. If it then cranks normally, investigate the battery and its connections.','If it still only clicks, check battery cables and grounds for voltage drop, then check voltage reaching the starter during a start attempt using the service procedure.','If power reaches the starter but it does not turn, continue with the specified starter tests before replacing it.']},
      {heading:'Safety',body:'Keep hands, hair, and clothing away from belts and fans. Follow the owner’s manual for jump-starting; do not jump a frozen or damaged battery. Make sure the vehicle cannot roll.'},
      {heading:'Common mistakes',body:'Replacing the starter before testing the battery, ignoring dirty grounds, and tapping components instead of testing the circuit.'}
    ]},
  { id:'overheating', icon:'♨', title:'Engine overheating', type:'Cooling', summary:'Protect people and the engine first; investigate coolant, airflow, circulation, and internal causes only when safe.', time:'8 min', search:'engine overheating coolant temperature steam radiator fan thermostat water pump',
    sections:[
      {heading:'The logic',body:'The cooling system needs enough coolant, a way to move it, a way to shed heat, and the correct operating temperature. The supplied draft proposes checking coolant level and leaks first, then airflow, circulation, and possible internal causes.'},
      {heading:'Possible causes',body:'Low coolant from a leak, failed thermostat, cooling fan not working, failing water pump, clogged radiator, faulty radiator cap, or head-gasket failure.'},
      {heading:'Tools in the draft',body:'Flashlight, gloves, eye protection, and a cooling-system pressure tester if available.'},
      {heading:'Diagnostic sequence',items:['If the vehicle is overheating now, pull over safely and turn the engine off. Do not keep driving and do not open the radiator or coolant cap while hot.','After the engine has fully cooled, check the coolant level in the reservoir.','Look for leaks, wet spots, and crusty residue on hoses, the radiator, and the water pump.','Check that the cooling fan operates when it should, using the exact vehicle specification.','Check hoses and the belt for damage.','Pressure-test the system and test the cap using the specified procedure.','If coolant is not visibly leaking, check for signs such as coolant in the oil, oil in the coolant, or bubbles in the coolant. These may point to an internal problem and require qualified diagnosis.']},
      {heading:'Safety',body:'Hot coolant is pressurized and can cause severe burns. Keep hands and hair away from fans, which may start on their own. Stop promptly if the engine overheats.'},
      {heading:'Common mistakes',body:'Opening the cap while hot, adding water without finding the leak, and continuing to drive to see whether the condition improves.'}
    ]},
  { id:'rough-idle', icon:'≈', title:'Rough idle', type:'Engine', summary:'Use codes and operating conditions to work through air, ignition, fuel, and mechanical possibilities.', time:'8 min', search:'rough idle shaking surging misfire vacuum leak spark plugs coils',
    sections:[
      {heading:'The logic',body:'A smooth idle needs the right air-fuel mixture, good spark, and sealed engine parts. The supplied draft proposes checking codes first, then air, spark, fuel, and mechanical causes.'},
      {heading:'Possible causes',body:'Vacuum leak, worn spark plugs or weak coils, dirty throttle body or airflow sensor, stuck exhaust-gas-recirculation valve, injector problems, crankcase-ventilation problems, or low compression.'},
      {heading:'Tools in the draft',body:'Scan tool, flashlight, basic hand tools, and throttle-body cleaner only if the service manual allows it.'},
      {heading:'Diagnostic sequence',items:['Read codes and note misfire or fuel-trim codes.','Review fuel trims at idle and higher RPM.','Inspect hoses and connections for leaks. Use a smoke test if available.','Inspect spark plugs and coils.','Inspect and, only if the manual allows, clean the throttle body and airflow sensor with the correct products.','Check crankcase-ventilation and exhaust-gas-recirculation operation.','If earlier checks pass, test fuel delivery and perform a compression test using the vehicle-specific procedure.']},
      {heading:'Safety',body:'Keep hands away from belts and fans. Fuel is flammable. Clean components only as the service manual directs; the wrong cleaner can damage some sensors.'},
      {heading:'Common mistakes',body:'Replacing plugs and coils without a code or test, and ignoring small vacuum leaks.'}
    ]},
  { id:'check-engine', icon:'⚠', title:'Check-engine light: first steps', type:'Basics', summary:'Decide whether it is safe to continue, then record codes and freeze-frame data before clearing anything.', time:'6 min', search:'check engine light flashing steady warning code freeze frame gas cap',
    sections:[
      {heading:'The logic',body:'The light means the computer detected something outside its expected range. It does not, by itself, tell you how serious the condition is or which part failed. First assess whether it is safe to continue; then record evidence before clearing codes.'},
      {heading:'First steps',items:['If the light is flashing, or the vehicle has severe shaking, major power loss, smoke, fuel smell, or a high-temperature warning, avoid driving and get help.','If the light is steady, check the fuel cap if the vehicle uses one. A loose or missing cap can set a leak-related code.','Note how the vehicle feels and sounds, and when the problem started.','Read the codes with a compatible scan tool or have them read.','Write down every code and the freeze-frame data before clearing anything.','Use each code page and begin with appropriate simple checks. Do not replace the part named by a code without testing.','After a repair, complete the vehicle-specific verification procedure to confirm the result.']},
      {heading:'Safety',body:'Do not use a scan tool while driving. Avoid driving with a flashing check-engine light. If the vehicle may be unsafe, stop in a safe location and arrange qualified help.'},
      {heading:'Common mistakes',body:'Clearing codes before recording them, replacing a part named in a code without testing, and ignoring a flashing light.'}
    ]},
  { id:'scan-tool', icon:'⌕', title:'Using an OBD-II scanner', type:'Tools', summary:'Read codes, capture freeze-frame data, and review live data without treating a scan result as a parts list.', time:'7 min', search:'OBD2 scanner scan tool diagnostic port stored pending confirmed codes freeze frame live data',
    sections:[
      {heading:'The logic',body:'A scan tool is a window into what the vehicle computer sees. It helps identify where to investigate; it does not tell you what to replace.'},
      {heading:'Tools in the draft',body:'An OBD-II scan tool or Bluetooth adapter and compatible app.'},
      {heading:'Safe use sequence',items:['Locate the diagnostic port, usually under the dashboard on the driver’s side. Check the owner’s manual if needed.','With the key off, connect the scanner.','Turn the key to the on position with the engine off, unless the vehicle manual specifies otherwise.','Read stored codes. Note which are pending and which are confirmed, where supported.','Read freeze-frame data showing the conditions when the code set.','Open live data to observe values such as fuel trims and coolant temperature.','Record the information before clearing any code.','Unplug the adapter when finished. Some adapters can slowly drain the battery.']},
      {heading:'Safety',body:'Do not use a scanner while driving. Keep cables clear of pedals and moving parts.'},
      {heading:'Common mistakes',body:'Clearing codes too soon, treating a code as proof of a failed part, and confusing generic with manufacturer-specific codes.'}
    ]}
];

export const QUICK_SEARCHES: { label: string; query: string }[] = [
  { label:'Check-engine light', query:'check engine light' },
  { label:'Battery keeps dying', query:'battery dies overnight' },
  { label:'Clicking start', query:'clicking' },
  { label:'Overheating', query:'overheating' },
];

export const FILTER_TABS: { label: string; value: CodeCategory }[] = [
  { label:'All codes', value:CodeCategory.All },
  { label:'Engine', value:CodeCategory.Engine },
  { label:'Air & fuel', value:CodeCategory.AirFuel },
  { label:'Electrical', value:CodeCategory.Electrical },
  { label:'Temperature', value:CodeCategory.Temperature },
];

export const SYMPTOM_ITEMS: SymptomItem[] = [
  {index:'SYMPTOM / 01',icon:'⌁',title:'Won’t start',subtitle:'Clicking, silence, or slow cranking',query:'clicking'},
  {index:'SYMPTOM / 02',icon:'♨',title:'Running hot',subtitle:'Temperature warning or steam',query:'overheating'},
  {index:'SYMPTOM / 03',icon:'≈',title:'Shaking or rough idle',subtitle:'Misfire-like symptoms and vibration',query:'rough idle'},
  {index:'SYMPTOM / 04',icon:'ϟ',title:'Electrical trouble',subtitle:'Battery drain or low-voltage clues',query:'battery'},
];

export const SAFETY_RULES: { icon:string; title:string; body:string }[] = [
  {icon:'⚠',title:'Never trust a jack alone',body:'Work on level, stable ground with correctly rated jack stands at approved lift points. If you cannot support the vehicle safely, stop.'},
  {icon:'ϟ',title:'Respect electricity and fuel',body:'Short circuits can cause burns, fire, or module damage. Keep sparks and flames away from fuel and follow vehicle-specific procedures.'},
  {icon:'◉',title:'Hot parts stay hot',body:'Let the engine and exhaust cool. Never open a hot pressurized cooling system. Never run an engine in an enclosed space.'},
  {icon:'↗',title:'Use the right service data',body:'Pinouts, torque values, thresholds, and procedures vary by vehicle. This site will not invent specifications to fill a gap.'},
];

export function normalizeQuery(value:string):string {
  // Fold Spanish diacritics (and any other accents) to their base
  // letters so "arranque" and "arranqué" style variants match. English
  // text is unchanged by this.
  const folded = String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  return folded.replace(/[^a-z0-9]+/g,' ').trim();
}

export function searchDiagnosticLibrary(rawQuery:string):{status:string;results:SearchResultItem[]} {
  const q=normalizeQuery(rawQuery);
  if(!q) return {status:'Enter a trouble code, symptom, or guide topic to start investigating.',results:[]};
  const words=q.split(' ');
  const matches:SearchResultItem[]=[];
  for(const codeItem of TROUBLE_CODES){
    const hay=normalizeQuery([codeItem.code,...(codeItem.searchTerms??[]),codeItem.title,codeItem.summary,codeItem.meaning,codeItem.category,...(codeItem.symptoms??[]),...codeItem.causes].join(' '));
    if(hay.includes(q)||words.every(word=>hay.includes(word))){
      matches.push({kind:DetailKind.Code,id:codeItem.code,badge:codeItem.code,title:codeItem.title,summary:codeItem.summary,meta:'Trouble code · Draft'});
    }
  }
  for(const guideItem of FIELD_GUIDES){
    const hay=normalizeQuery([guideItem.title,guideItem.summary,guideItem.search,guideItem.type,...guideItem.sections.map(s=>s.body??''),...guideItem.sections.flatMap(s=>s.items??[])].join(' '));
    if(hay.includes(q)||words.every(word=>hay.includes(word))){
      matches.push({kind:DetailKind.Guide,id:guideItem.id,badge:guideItem.type,title:guideItem.title,summary:guideItem.summary,meta:`Field guide · ${guideItem.time} · Draft`});
    }
  }
  if(!matches.length) return {status:'No exact match in this draft library. Try a shorter symptom, a code such as P0300, or browse all guides.',results:[]};
  return {status:`${matches.length} result${matches.length===1?'':'s'} found. Open a result to review draft guidance.`,results:matches.slice(0,9)};
}
