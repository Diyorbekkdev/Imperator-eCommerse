$('.carousel-3').owlCarousel({
    loop: true,
    margin: 20,
    nav:false,
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})