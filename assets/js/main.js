$(document).ready(function(){
	$('.header-navbar-hamburger').click(function(){
		$(this).toggleClass('active');
		$('.navbar__list').slideToggle(500)
	});
});