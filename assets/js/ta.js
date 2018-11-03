$(document).ready(function(){
	console.log('doc is ready');

	$('.ham-container').click(function(){
		// $(this).toggleClass('active');
        $('nav>ul').addClass('active');
        $('nav .close').delay(100).fadeIn('slow');
	})
	$('.close').click(function(){
		// $(this).toggleClass('active');
        $('nav>ul').removeClass('active');
        $('nav .close').hide();
	})

	$('.dropdown a').click(function(){
		$(this).parent().toggleClass('drop-open');
		$(this).next('ul').slideToggle();
	})

})