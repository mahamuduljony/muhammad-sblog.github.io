(function ($) {
$(document).ready(function(){

	///scrolltop
	jQuery(".top").click(function(){
		jQuery("html").animate({'scrollTop' : 0 }, 1000);
			return false;
		});
	jQuery(window).scroll(function(){
		var durotto = jQuery(window).scrollTop();
			if(durotto > 200){
				jQuery(".top").fadeIn();
			}
			else {
				jQuery(".top").fadeOut();		
			}
	});

	
	

	// Animation in animate.css
		new WOW().init();

		$('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });
 });
})(jQuery);	