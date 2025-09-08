const body = document.querySelector('body');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

box1.addEventListener('click', ()=>{
  chnage();
})
box2.addEventListener('click', ()=>{
  chnage();
})
box3.addEventListener('click', ()=>{
  chnage();
})
box4.addEventListener('click', ()=>{
  body.style.backgroundColor = 'yellow';
});
function chnage(){
  let randomColor1 = Math.round(Math.random()*255 +1);
  let randomColor2 = Math.round(Math.random()*255 +1);
  let randomColor3 = Math.round(Math.random()*255 +1);
    body.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}