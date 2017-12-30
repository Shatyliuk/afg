$(document).ready(function () {

   $(".toggle").click(function () {
       $(this).toggleClass("on");
       $(".main-menu").slideToggle();
       return false;
   });

    $(".slider").owlCarousel({
        items: 1,
        nav: true,
        navText: "",
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 750
    });

    $(".arrow-down").click(function () {
       $("html, body").animate({ scrollTop: $(".main-head").height()+140}, "slow")
    });

    $(".arrow-top").click(function () {
        $("html, body").animate({ scrollTop: 0}, "slow")
    });

    $('.section-bottom .btn').magnificPopup({
        type:'inline',
        mainClass: 'mfp-fade'
    });

    $(".section-head, .content-item-wrap, .section-professional .proposal-form, .cards, .deals-item ").css("opacity", "0");

    $(window).scroll(function () {

        var topOfWindow = $(window).scrollTop();
        $(".section-head, .section-professional .proposal-form, .professional-item").each(function () {
            var imagePos = $(this).offset().top;
            if(imagePos < topOfWindow+900){
                $(this).addClass("animated fadeInRight").css("opacity", "1");
            }
        });

    $(".content-item-wrap, .cards").each(function () {

        var imagePos = $(this).offset().top;

        if(imagePos < topOfWindow+900){
            $(this).addClass("animated zoomIn").css("opacity", "1");
        }
    });

    $(".deals-item").each(function () {

        var imagePos = $(this).offset().top;

        if(imagePos < topOfWindow+900){
            $(this).addClass("animated fadeInDown").css("opacity", "1");
        }
    })

    });

});

