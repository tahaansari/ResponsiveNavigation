$(document).ready(function(){
	console.log('doc is ready');

	$('.ham-container').click(function(){
		// $(this).toggleClass('active');
        $('.ul-container').toggleClass('active');
	})
	$('.close').click(function(){
		// $(this).toggleClass('active');
        $('.ul-container').toggleClass('active');
	})

	$('.dropdown a').click(function(){
		$(this).parent().toggleClass('drop-open');
		$(this).next('ul').slideToggle();
	})

})