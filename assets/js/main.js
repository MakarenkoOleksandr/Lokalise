$(document).ready(function(){
	$('.navbar-hamburger').click(function(){
		$(this).toggleClass('active');
		$('.navbar__list').slideToggle(500)
	});
});