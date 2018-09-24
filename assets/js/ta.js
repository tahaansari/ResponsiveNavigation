$(document).ready(function(){
	console.log('doc is ready');

	$('.ham-container').click(function(){

		$(this).toggleClass('active');
        $('nav ul').toggleClass('active');
        
	})		

})