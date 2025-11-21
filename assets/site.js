// Simple helpers: theme toggle + analytics event helpers
function sendEvent(name, params){ try{ if(window.gtag) gtag('event', name, params); }catch(e){} }
document.addEventListener('DOMContentLoaded', ()=>{
  // attach click trackers
  document.querySelectorAll('.track-call').forEach(el=>el.addEventListener('click', ()=>sendEvent('call_click')));
  document.querySelectorAll('.track-whatsapp').forEach(el=>el.addEventListener('click', ()=>sendEvent('whatsapp_click')));
  document.querySelectorAll('.track-download').forEach(el=>el.addEventListener('click', ()=>sendEvent('pdf_download')));
  document.querySelectorAll('.track-cta').forEach(el=>el.addEventListener('click', ()=>sendEvent('cta_click')));
});
