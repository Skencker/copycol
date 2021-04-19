/*menu burger*/ 
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')


menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

/**modal */

const btn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const svg = document.querySelector('svg')

btn.addEventListener('click', () => {
  modal.style.display ='flex';
  body.classList.toggle('masque');
  svg.style.display = 'none';
})

close.addEventListener('click', () => {
  modal.style.display = "none";
  body.classList.toggle('masque');
  svg.style.display = 'flex';
})