$(".owl-carousel-n1").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 3500,
    },
    600: {
      items: 2,
      nav: false,
      dots: false,
      mouseDrag: true,
      autoplay: true,
      dotsEach: 4,
      autoplayTimeout: 4000,
    },
    880: {
      items: 3,
      nav: false,
      dots: false,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 4000,
    },
    1000: {
      items: 4,
      nav: false,
      dots: false,
      loop: true,
      mouseDrag: false,
      autoplayHoverPause: true,
    },
  },
});


$(".carousel-n2").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  dotsEach: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".carousel-n3").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  dotsEach: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    }
  },
});