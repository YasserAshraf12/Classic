$(document).ready(function(){
    $(function(){
        'use strict';
        $(".header").height($(window).height());
        $(window).resize(()=>{
            $(".header").height($(window).height());
        });
    });
    $(".navbar-link").on("mouseover",()=>{
        $(".navbar-link").addClass("active");
    });
    //Smooth Scroll Top
    //1) Services
    $('.about').click(()=>{
        $('html,body').animate({
            scrollTop: $('#services').offset().top,
        },3000);
    });
    //2)
    $('.testmonials').click(()=>{
        $('html,body').animate({
            scrollTop: $('#testmonials').offset().top,
        },3000);
    });
    //3)
    $('.portfolio').click(()=>{
        $('html,body').animate({
            scrollTop: $('#portfolio').offset().top,
        },3000);
    });
    //4)
    $('.contact').click(()=>{
        $('html,body').animate({
            scrollTop: $('#contact').offset().top,
        },3000);
    });
/**--------------------------------------------------------- */
    //Our Auto Slider Plugin.
    (function autoSlider(){
        $('.slider .active').each(function(){
            if(!($(this).is(':last-child'))){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass("active").fadeIn();
                    autoSlider();
                });
            }
            else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.slider div:first-child').addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    //To Filter Data using mixitup
    var mixer = mixitup('#Container');
    $(".shuffle li").click(function(){
        $(this).addClass('activeLi').siblings().removeClass('activeLi');
    });

    //To Trigger Simple Scroll Plugin

});



