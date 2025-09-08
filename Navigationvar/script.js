const bars = document.querySelector('.bars');
const menu = document.querySelector('.menu');

bars.addEventListener('click', ()=>{
  menu.classList.toggle("show-menu");
})
