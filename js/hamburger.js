let menuBtn = document.querySelector('.hamburger__btn');
let header = document.querySelector('.header');
menuBtn.addEventListener('click', function()
{
	header.classList.toggle('active');
})