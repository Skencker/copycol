/*menu burger*/ 
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')


menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

/**modal- */

const btn_del = document.querySelector('.modal-btn-del');
const modal_del = document.querySelector('.modal-del');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const svg = document.querySelector('svg');
const form = document.querySelector('form');
const img = document.querySelector('.img-tel')

btn_del.addEventListener('click', () => {
  modal_del.style.display ='flex';
  body.classList.toggle('masque');
  svg.style.display = 'none';
  img.style.opacity = '0'
})

close.addEventListener('click', () => {
  modal_del.style.display = "none";
  body.classList.toggle('masque');
  svg.style.display = 'flex';
  img.style.opacity = '1'
})

