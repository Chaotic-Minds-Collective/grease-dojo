import React, { useEffect, useRef } from 'react';
import { ALL_CODES, ALL_GUIDES } from '../data/searchFallback';
import { DetailKind, DetailSelection } from '../types/diagnostics';

interface DetailDialogProps { selection:DetailSelection|null; onClose:()=>void; onOpenDetail:(selection:DetailSelection)=>void }
const DRAFT_DISCLAIMER = 'Educational draft only. Procedures and specifications vary by year, make, model, engine, and market. Verify with authoritative service information and a qualified technician when appropriate.';

export const DetailDialog:React.FC<DetailDialogProps> = ({selection,onClose,onOpenDetail}) => {
  const dialogRef=useRef<HTMLDialogElement|null>(null);
  const selectedCode=selection?.kind===DetailKind.Code ? ALL_CODES.find(c=>c.code===selection.id)??null : null;
  const selectedGuide=selection?.kind===DetailKind.Guide ? ALL_GUIDES.find(g=>g.id===selection.id)??null : null;
  const isOpen=Boolean(selectedCode||selectedGuide);

  useEffect(()=>{
    const dialog=dialogRef.current;
    if(!dialog)return;
    if(isOpen){
      if(!dialog.open){
        if(typeof dialog.showModal==='function')dialog.showModal();
        else dialog.setAttribute('open','');
      }
      // The dialog element is the scroll container and persists across
      // content swaps, so a related-reference navigation would otherwise
      // land mid-scroll. Return the viewport to the top so the new title
      // and warning are visible from the start.
      dialog.scrollTop=0;
    }else if(dialog.open)dialog.close();
  },[isOpen,selection]);

  const openRelated = (label:string) => {
    const code = ALL_CODES.find(item => item.code === label || item.searchTerms?.includes(label));
    if (code) { onOpenDetail({kind:DetailKind.Code,id:code.code}); return true; }
    const normalized = label.toLowerCase();
    const guide = ALL_GUIDES.find(item => normalized.includes(item.title.toLowerCase()) || item.title.toLowerCase().includes(normalized.replace(' field guide','')));
    if (guide) { onOpenDetail({kind:DetailKind.Guide,id:guide.id}); return true; }
    return false;
  };
  const handleBackdropClick=(event:React.MouseEvent<HTMLDialogElement>)=>{
    if(event.target===dialogRef.current)onClose();
  };
  const eyebrowText=selectedCode?`TROUBLE CODE // ${selectedCode.code}`:selectedGuide?`FIELD GUIDE // ${selectedGuide.type}`:'FIELD NOTE';

  return <dialog ref={dialogRef} id="detailDialog" className="detail-dialog" aria-labelledby="dialogTitle" onClose={onClose} onClick={handleBackdropClick}>
    <div className="dialog-head">
      <span id="dialogEyebrow" className="eyebrow">{eyebrowText}</span>
      <button type="button" id="closeDialog" className="dialog-close" aria-label="Close details" onClick={onClose}>×</button>
    </div>
    <div id="dialogContent">
      {selectedCode&&<>
        <h2 id="dialogTitle">{selectedCode.title}</h2>
        <p>{selectedCode.meaning}</p>
        <div className="warning-box">{selectedCode.warning}</div>
        {selectedCode.symptoms?.length ? <><h3>Common symptoms</h3><ul>{selectedCode.symptoms.map(item=><li key={item}>{item}</li>)}</ul></>:null}
        <h3>Possible causes</h3><ul>{selectedCode.causes.map(item=><li key={item}>{item}</li>)}</ul>
        <h3>Sensible next checks</h3><ol>{selectedCode.checks.map(item=><li key={item}>{item}</li>)}</ol>
        {selectedCode.related?.length ? <><h3>Related references</h3><div className="related-links">{selectedCode.related.map(item => {
          const available = ALL_CODES.some(code => code.code === item || code.searchTerms?.includes(item)) || ALL_GUIDES.some(guide => item.toLowerCase().includes(guide.title.toLowerCase()) || guide.title.toLowerCase().includes(item.toLowerCase().replace(' field guide','')));
          return available ? <button type="button" key={item} onClick={() => openRelated(item)}>{item} <span aria-hidden="true">↗</span></button> : <span className="related-unavailable" key={item}>{item} <small>not in this library yet</small></span>;
        })}</div></>:null}
        <p><strong>Review status:</strong> {selectedCode.reviewStatus??'Pending'}.</p>
        <p><strong>Source status:</strong> {selectedCode.sourceStatus??'References pending'}.</p>
        <p>{DRAFT_DISCLAIMER}</p>
      </>}
      {selectedGuide&&<>
        <h2 id="dialogTitle">{selectedGuide.title}</h2><p>{selectedGuide.summary}</p>
        {selectedGuide.sections.map(section=><section key={section.heading}>
          <h3>{section.heading}</h3>
          {section.body?<p>{section.body}</p>:null}
          {section.items?.length?<ol>{section.items.map(item=><li key={item}>{item}</li>)}</ol>:null}
        </section>)}
        <p>{DRAFT_DISCLAIMER}</p>
      </>}
    </div>
    <div className="dialog-footer"><span>Draft content · qualified review pending</span>
      <button type="button" className="button button-ghost" id="closeDialogBottom" onClick={onClose}>Close</button>
    </div>
  </dialog>;
};
