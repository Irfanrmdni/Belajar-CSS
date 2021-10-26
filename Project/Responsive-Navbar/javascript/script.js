const toggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});