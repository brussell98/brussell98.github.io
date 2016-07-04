document.addEventListener('DOMContentLoaded', function() {
	var navMenu = document.getElementsByClassName('nav-menu')[0];
	var navToggle = document.getElementsByClassName('nav-toggle')[0];

	navToggle.addEventListener('click', function() {
		navMenu.classList.toggle('is-active');
		navToggle.classList.toggle('is-active');
	});
});
