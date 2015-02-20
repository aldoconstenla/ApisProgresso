$( document ).ready(function() {

	//Rolagem animada
	$(function() {
	    $('a').bind('click',function(event){
	    	event.preventDefault();
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



	//Plugin de Scrollbar
	function scrollbar() {
		"use strict";
    	$('#Scrollbar').perfectScrollbar();
	}



    //Posicionamento de ícones de Produtos
	var i = 1,
		resize = true,
		categoria = $('.product');


	function reposition(element, left, top) { //Função com todos ícones juntos
		$(element).addClass('resized');
		i++;
		$(element).animate({
			marginLeft: left,
			top: top
		}, 300, function() {
			if (i > $('.product').length) {
				$('.prod-display').addClass('active');
			}
		});
	}

	var checkCategory;

	function alternaCategoria(categoria) {
		$('.category').removeClass('active');
		$('.category.'+categoria).addClass('active');
	}

	$('.product').on('click', function(e) {
		e.preventDefault();
		checkCategory = $(this).data('name');
		if (resize) {

			//Todos ícones juntos (função única):
			for (var j = 0; j < categoria.length; j++) {
				reposition(categoria.eq(j), categoria.eq(j).data('left'), categoria.eq(j).data('top'));
			}

			resize = false;
			recebeProdutos(checkCategory);
		}
		$('.product').removeClass('active');
		$(this).addClass('active');
		alternaCategoria(checkCategory);
	});




	//Lightbox
	var category, numItem, qtd, side;

	function ativaLightbox(categoria,numitem) {
		$('.prodLightbox').addClass('active');
		$('.overlay').addClass('active');
		$('.prodLightbox').find('.'+categoria+'.item'+numitem).addClass('active');
		$('.arrows').addClass('active');
	}

	$(document).on('click', '.category a', function(event) {
		event.preventDefault();
		category = $(this).parent().parent().parent().data('categoria');
		numItem = $(this).data('item');
		recebeProdLightbox(category, numItem);
		ativaLightbox(category, numItem);
	});

	$('.overlay').on('click', function() {
		$('.prodLightbox').removeClass('active');
		$('.overlay').removeClass('active');
		$('.prodLightbox').find('.container').removeClass('active');
		$('.arrows').removeClass('active');
	});

	$('.arrow').on('click', function() {
		qtd = $('.category.'+category).find('a').length;
		side = $(this).data('side');
		$('.prodLightbox').find('.container').removeClass('active');
		if((numItem < qtd && side == 'right') || (numItem > 1 && side == 'left')) {
			if (side == 'right'){
				numItem += 1;
			} else {
				numItem -= 1;
			}
		} else {
			if (side == 'right'){
				numItem = 1;
			} else {
				numItem = qtd;
			}
		}
		$('.prodLightbox').find('.'+category+'.item'+numItem).addClass('active');
	});




	//AJAX que recebe itens dos produtos nas categorias
	function recebeProdutos(categoria) {
		$.ajax('lista-produtos.html', {
			success: function(response){ $('.prod-display').html(response); },
			complete: function() { alternaCategoria(categoria); scrollbar(); }
		});
	}

	function recebeProdLightbox(category, numitem) {
		$.ajax('prodcategoria-'+category+'.html', {
			success: function(response){ $('.prodLightbox').html(response); },
			complete: function() {
				console.log('recebeProdLightbox ok');
				ativaLightbox(category, numitem);
			}
		});
	}

});






// $('.arrow.left').on('click', function() {
// 	qtd = $('.category.'+category).find('a').length;
// 	if(numItem > 1) {
// 		// console.log(qtd);
// 		$('.prodLightbox').find('.container').removeClass('active');
// 		numItem -= 1;
// 		$('.prodLightbox').find('.'+category+'.item'+numItem).addClass('active');
// 	} else {
// 		$('.prodLightbox').find('.container').removeClass('active');
// 		numItem =  = qtd;;
// 		$('.prodLightbox').find('.'+category+'.item'+numItem).addClass('active');
// 	}
// });


// for (var j = 0; j < item.length; j++) {

// }



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


	// reposition('.mel', '45px', '150px');
	// reposition('.propolis', '180px', '150px');
	// reposition('.granola', '45px', '285px');
	// reposition('.xarope', '180px', '285px');
	// reposition('.geleia', '45px', '420px');
	// reposition('.outros', '180px', '420px');

	//Função com um ícone por vez (função recursiva):
	//reposition2();

	// $('.prod-display').addClass('active');