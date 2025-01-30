$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,               // Enables dot navigation
        arrows: true,             // Enables the arrow navigation
        prevArrow: '.slider-prev',  // Custom previous arrow class
        nextArrow: '.slider-next',  // Custom next arrow class
        autoplay: true,           // Autoplay the slider
        autoplaySpeed: 3000,      // Autoplay speed (3 seconds)
        fade: true,               // Enables fade effect
        cssEase: 'linear',        // Smooth fade effect
        slidesToShow: 1,          // Shows one slide at a time
        slidesToScroll: 1         // Scroll one slide at a time
    });
});
