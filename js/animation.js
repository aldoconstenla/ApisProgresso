$( document ).ready(function() {

	$(function() {
	    $('a').bind('click',function(event){
	        var $anchor = $(this);
	        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
			
			// Outras Animações
			// linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce
	                  
	    });
	});

	var offset = $('#home').offset().top;
	$(document).on('scroll', function () {
	    if (offset <= $(window).scrollTop()) {
	        $('.minimenu').addClass('active');
	    } else {
	        $('.minimenu').removeClass('active');
	    }
	});

});