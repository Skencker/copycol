/*menu burger*/ 
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')


menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

const modal_send = document.querySelector('.modal-send');
const btn_send =document.querySelector('.modal-btn-send');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const svg = document.querySelector('svg');
const form = document.querySelector('form')

btn_send.addEventListener('click', (e) => {
  e.preventDefault();
  modal_send.style.display ='flex';
  body.classList.toggle('masque');
  form.style.opacity = '0';
})

close.addEventListener('click', () => {
  document.location.href='index.html'
})