$(function () {
	$(window).scroll(function() {
	    $('.section1Content1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.section1Content2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInUp");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.section1Content3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInRight");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInRight");
	        }
	    });
    })
    $(window).scroll(function() {
	    $('.footer').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInBottomLeft");
	        }
	    });
    })
});