$(document).ready(function(){
	$('.header-navbar__hamburger').click(function(){
		$(this).toggleClass('active');
		$('.header-navbar__list').slideToggle(500)
	});
});
