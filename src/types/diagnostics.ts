export enum CodeCategory { All='all', Engine='engine', Fuel='fuel', Ignition='ignition', Emissions='emissions', AirFuel='air-fuel', Electrical='electrical', Temperature='temperature', Cooling='cooling', Brake='brake', Transmission='transmission' }
export enum DetailKind { Code='code', Guide='guide' }
export interface TroubleCode {
  code:string; searchTerms?:string[]; title:string;
  category:Exclude<CodeCategory,CodeCategory.All>;
  summary:string; meaning:string; symptoms?:string[];
  causes:string[]; checks:string[]; warning:string; related?:string[];
  reviewStatus?:string; sourceStatus?:string;
}
export interface DiagnosticSection { heading:string; body?:string; details?:string[]; items?:string[] }
export interface DiagnosticCode {
  code:string; category:Exclude<CodeCategory,CodeCategory.All>; title:string;
  summary:string; symptom:string; symptomEs?:string;
  sections?:DiagnosticSection[]; related?:string[];
  reviewStatus?:string; sourceStatus?:string;
}
export interface GuideSection extends DiagnosticSection {}
export interface FieldGuide {
  id:string; category:Exclude<CodeCategory,CodeCategory.All>; icon:string;
  title:string; type:string; summary:string; time:string;
  subtitle?:string; subtitleEs?:string; search?:string; sections?:GuideSection[];
}
export interface SymptomItem { index:string; icon:string; title:string; subtitle:string; query:string }
export interface SearchResultItem { kind:DetailKind; id:string; badge:string; title:string; summary:string; meta:string }
export interface DetailSelection { kind:DetailKind; id:string }
