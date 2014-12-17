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

	var i = 1,
		resize = true,
		categoria = $('.product');


	function reposition(element, left, top) { //Função com todos ícones juntos
		$(element).addClass('resized');
		i++;
		$(element).animate({
			left: left,
			top: top
		}, 200, function() {
			if (i > $('.product').length) {
				$('.prod-display').addClass('active');
			}
		});
	}

	// function reposition2() { //Função com um ícone por vez
	// 	$('.mel').addClass('resized');
	// 	$('.mel').animate({
	// 		left: '45px',
	// 		top: '150px'
	// 	}, 200, function() {
	// 		$('.propolis').addClass('resized');
	// 		$('.propolis').animate({	
	// 			left: '180px',
	// 			top: '150px'
	// 		}, 200, function() {
	// 			$('.granola').addClass('resized');
	// 			$('.granola').animate({
	// 				left: '45px',
	// 				top: '285px'
	// 			}, 200, function() {
	// 				$('.xarope').addClass('resized');
	// 				$('.xarope').animate({
	// 					left: '180px',
	// 					top: '285px'
	// 				}, 200, function() {
	// 					$('.geleia').addClass('resized');
	// 					$('.geleia').animate({
	// 						left: '45px',
	// 						top: '420px'
	// 					}, 200, function() {
	// 						$('.outros').addClass('resized');
	// 						$('.outros').animate({
	// 							left: '180px',
	// 							top: '420px'
	// 						}, 200);
	// 					});
	// 				});
	// 			});
	// 		});
	// 	});
	// } 


	$('.product').on('click', function(e) {
		e.preventDefault();
		if (resize) {
			
			//Todos ícones juntos (função única):
			for (var j = 1; j > categoria.length; j++) {
				reposition(categoria.eq(j), categoria.eq(j).data('left'), categoria.eq(j).data('top'));
			}
			
			// reposition('.mel', '45px', '150px');
			// reposition('.propolis', '180px', '150px');
			// reposition('.granola', '45px', '285px');
			// reposition('.xarope', '180px', '285px');
			// reposition('.geleia', '45px', '420px');
			// reposition('.outros', '180px', '420px');

			//Função com um ícone por vez (função recursiva):
			//reposition2();

			// $('.prod-display').addClass('active');

			resize = false;
		}
		$('.product').removeClass('active');
		$(this).addClass('active');
	});

});


//Produtos

//left: 45px/180px
//top: 150px/285px/420px
