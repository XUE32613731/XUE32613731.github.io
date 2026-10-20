// 从按内容分组的文案生成语言视图，文案请编辑 content.js。
const translations = Object.fromEntries(['zh','en','fr'].map(lang => [lang,
  Object.fromEntries(Object.entries(pageCopy).map(([key,value]) => [key,value[lang]]))
]));
const storage = {get(key,fallback){try{return localStorage.getItem(key)||fallback;}catch{return fallback;}},set(key,value){try{localStorage.setItem(key,value);}catch{}}};
let language = storage.get('xue-language','en');
if(!translations[language]) language='en';
let theme = storage.get('xue-theme','dark');
if(!['dark','light'].includes(theme)) theme='dark';
const pages = ['about','experience','knowledge','cv','contact'];
let previousPage = null, currentPage = '', routeInitialized = false;
function renderLanguage(){
  document.documentElement.lang=language;
  const emailLink=document.querySelector('#contact-email');
  emailLink.textContent=contactDetails.email;emailLink.href='mailto:'+contactDetails.email;
  document.querySelector('#contact-wechat').textContent=contactDetails.wechat;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent=translations[language][key];});
  document.querySelector('.scroll-link').setAttribute('aria-label',translations[language].scroll);
  document.querySelector('#language-label').textContent=language.toUpperCase();
  document.querySelector('#updated').textContent=translations[language].updated;
  document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===language)));
  document.querySelector('#settings summary').setAttribute('aria-label',translations[language].settings);
  document.querySelector('#page-title').textContent=translations[language][currentPage]||'';
  document.title=currentPage?`${translations[language][currentPage]} — XUE's Space`:"XUE's Space";
}
function setTheme(value){theme=value;document.documentElement.dataset.theme=value;storage.set('xue-theme',value);document.querySelectorAll('[data-theme-choice]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.themeChoice===theme)));}
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>{language=el.dataset.lang;storage.set('xue-language',language);renderLanguage();el.closest('details').open=false;}));
document.querySelectorAll('[data-theme-choice]').forEach(el=>el.addEventListener('click',()=>{setTheme(el.dataset.themeChoice);el.closest('details').open=false;}));
document.querySelectorAll('details').forEach(el=>el.addEventListener('toggle',()=>{if(el.open)document.querySelectorAll('details').forEach(other=>{if(other!==el)other.open=false;});}));
document.addEventListener('click',event=>{document.querySelectorAll('details').forEach(el=>{if(!el.contains(event.target))el.open=false;});});
document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('details').forEach(el=>{if(el.open){el.open=false;el.querySelector('summary').focus();}});});
function route(){
  if(location.hash==='#main')return;
  if(location.hash==='#introduction'){if(currentPage){location.hash='#/';}return;}
  const requested=location.hash.replace(/^#\/?/,'');
  const next=pages.includes(requested)?requested:'';
  if(next!==currentPage){previousPage=routeInitialized?currentPage:null;currentPage=next;}
  routeInitialized=true;
  document.querySelector('#home').hidden=Boolean(currentPage);
  document.querySelector('#inner-page').hidden=!currentPage;
  document.querySelector('.pending-update').hidden=currentPage==='contact';
  document.querySelector('#contact-details').hidden=currentPage!=='contact';
  document.querySelectorAll('.navigation a').forEach(el=>{const active=el.hash===`#/${currentPage}`;el.classList.toggle('active',active);if(active)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
  renderLanguage();window.scrollTo(0,0);
}
document.querySelector('#back').addEventListener('click',()=>{if(previousPage!==null)history.back();else location.hash='#/';});
window.addEventListener('hashchange',route);setTheme(theme);route();

