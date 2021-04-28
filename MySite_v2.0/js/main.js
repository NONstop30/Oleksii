$(function () {
	$(window).scroll(function() {
	    $('.effect-main').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+20) {
	            $(this).addClass("past-main");
	        }
	    });
	})
	
	$(window).scroll(function() {
	    $('.nav-link__main').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+20) {
	            $(this).addClass("nav-link__past");
	        }
	    });
    })
	$(window).scroll(function() {
	    $('.latest-work').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.technology__data').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.process').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeIn");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.price').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.feedbacks').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.lets-talk').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeIn");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.footer__wrap').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeIn");
	        }
	    });
    })
    
});
