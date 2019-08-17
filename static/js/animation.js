$(document).ready(function(){
$('#header').click(function(){
	// console.log($(this));
	// $('#body').hide('slow');
	// $('#body').toggle(5000);
	// $('#body').show(5000);
	   // $('#body').fadeOut('slow');
	   // $('#body').fadeIn('slow');
	   // += =increses height with edition
	   // $('#body').animate({height:'+=300px', opacity:'0.5'})
	   // $('#body').slideUp('slow');
	   // $('#body').slideDown('slow');
	   $('#body').animate({ left:'+=300px'})
	    

});

$('#left').click(function(){
$('#body').animate({ right:'+=300px'})
	    });
});