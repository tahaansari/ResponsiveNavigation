$(document).ready(function(){
	console.log('doc is ready');

	$('.ham-container').click(function(){

		$(this).toggleClass('active');
        $('nav ul').toggleClass('active');
        
	})

	$('.dropdown a').click(function(){
		$(this).parent().toggleClass('drop-open');
		$(this).next('ul').slideToggle();
	})

})