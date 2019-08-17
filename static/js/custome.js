// var $container = $('.container');
// console.log($container);

$(document).ready(function(){
		// do stuffs here
		//  all about  $(selector).action() 
		// console.log("Function called after doucment")

		var $clickMeNowBtn = $("#clickMeNow");
		console.log($clickMeNowBtn);




		// .click()
		// .dblclick()
		// .hover()
		// .mouseenter()
		// .mouseleave()
		// .hide()
		// .show()
		// .toggle()
		// .on()
		//.css()
		// .addClass()
		// .removeClass()
		// .toggleClass()
// $("#clickMeNow").click(function(){  or tala ko same
// $clickMeNowBtn.click(function(){
// 	console.log("You clicked me:",$(this));
// 	// $(this).hide();
// 	$('#table').toggle();
// 	// $("#about-title-text").css("color","red");


// 	$('#about-title-text').css({
// 		"color": "blue",
// 		"font-weight": "bold",
// 		"text-decoration" : "none"

// 	})
// });

// 	$('#clickMeNow').on({

// 		click : function(){
// 			console.log("Clicked");


// 		},

// 		dblclick: function(){
// 			console.log("Dbl clicked");
// 		},

// 		mouseleave: function(){
// 			$(this).css("color","blue");
// 			console.log("mouse  leave");
// 		},

// 		mouseenter: function(){
// 			$(this).css("color","red");
// 			console.log("mouse  enter");
// 		}
// 	});
// });





// $('#btn').addClass('noraml').on({
// 	mouseenter:function(){
// 		$(this).removeClass('normal').addClass('active');
// 			},
// 	mouseleave:function(){
// 		$(this).removeClass('active').addClass('normal');
// 	}
// });

var name = document.querySelector('#edit');
// $('#hoverbtn').on({
// 	mouseenter:function(){
	 
// 	 name.innerHTML='<div><p> THis is paragrapjh</p></div>';

// 		// $(this).removeClass('normal').addClass('active');
// 			},
// 	mouseleave:function(){
// 		name.innerHTML='';
// 		// $(this).removeClass('active').addClass('normal');
// 	}
// });

$('#hoverbtn').hover(function(){
	$('#edit').html('<div><p> THis is paragrapjh</p></div>');
	});
});
