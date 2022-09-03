const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.section-header-menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
