// mobile menu + theme toggle
function toggleTheme(){
  const body = document.body;
  body.classList.toggle('light');
  localStorage.theme = body.classList.contains('light') ? 'light' : 'dark';
}
document.addEventListener('DOMContentLoaded', ()=>{
  if(localStorage.theme === 'light') document.body.classList.add('light');
  // mobile menu toggle
  const btn = document.getElementById('menu-btn');
  if(btn) btn.addEventListener('click', ()=> {
    const nav = document.getElementById('nav');
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  })
});
