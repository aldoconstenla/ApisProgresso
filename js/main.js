(function($, Apis){

	Apis.loadSwiper = function(){

		var swiper;

		this.settings = {
			elem : $('.swiper-container'),
			duplicatedElem : '.swiper-slide-duplicate',
			mobileWidth : 815,

			optionsDesktop : {
				slidesPerView: 3,
				slidesPerGroup : 1,
	    	    simulateTouch : true,
	    	    resizeReInit : true,
	    	    calculateHeight:true,
	    	    loop: false
			},

			optionsMobile : {
				slidesPerView: 1,
	    	    simulateTouch : true,
	    	    resizeReInit : true,
	    	    calculateHeight:true,
	    	    loop: true
			}
		};

		/**
		* Inicializa mÃ³dulos
		* @return {Function}
		*/
		this.init = function(){

			var s = this.settings,
				_this = this,
				isMobile;

			document.onreadystatechange = function(){
				if(document.readyState === 'complete'){
					
					$(window).on('resize load', function(){

						isMobile = window.matchMedia('(max-width:' + s.mobileWidth + 'px)').matches;

						_this.destroy(s.elem, s.duplicatedElem);

						if(isMobile){
							return _this.construct(s.elem, s.optionsMobile);
						} else{
							return _this.construct(s.elem, s.optionsDesktop);
						}
					});
				}
			}			
		};

		/**
		* @constructor
		* @param {HTMLElement} elem
		* @param {Object} options
		*/
		this.construct = function(elem, options){

			if(elem.length && typeof swiper === 'undefined'){
				swiper = elem.swiper(options);	

				this.navigation(elem);			
			}								
		};

		/**
		* Remove CSS inline gerado pelo plugin e todas as suas funcionalidades.
		* `duplicatedElem` remove os slides duplicados quando loop == true
		* @param {HTMLElement} elem
		* @param {String} duplicatedElem
		*/
		this.destroy = function(elem, duplicatedElem){

			var child = elem.children();

			if(typeof swiper !== 'undefined' && typeof swiper.destroy === 'function'){

				if($(duplicatedElem).length){
					$(duplicatedElem).remove();
				}

				swiper.destroy();
				swiper = undefined;

				child.attr('style', '');
				child.children().attr('style', '');
			}
		};

		/**
		* NavegaÃ§Ã£o pelas setas
		* @param {HTMLElement} elem
		*/
		this.navigation = function(elem){

			var leftNav = document.createElement('button'),
				rightNav = document.createElement('button');

			if(typeof swiper !== 'undefined'){
			
				leftNav.className = 'swiper-left swiper-nav';
				rightNav.className = 'swiper-right swiper-nav';

				if(!$('.swiper-nav').length){
					elem.parent().append(leftNav);
					elem.parent().append(rightNav);	
				}				

				$(document).on('click', '.swiper-nav', function(){
					if($(this).hasClass('swiper-left')){
						swiper.swipePrev();
					}

					if($(this).hasClass('swiper-right')){
						swiper.swipeNext();
					}
				});
			}
		};

		return this;
	};

	$(function() {
		new Apis.loadSwiper().init();
	});

})(jQuery, {});