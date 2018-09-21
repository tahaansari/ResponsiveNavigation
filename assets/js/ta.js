$(document).ready(function(){
	console.log('doc is ready');

	$('.hamburger').click(function(){
		$(this).toggleClass('active');
        $('nav ul').toggleClass('active');
	})		

})