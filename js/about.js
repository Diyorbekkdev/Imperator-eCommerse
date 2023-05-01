$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
      mouseDrag: true,
      autoplay: true,
      center: true,
      autoplayTimeout: 3500,
    },
    600: {
      items: 2,
      nav: false,
      dots: false,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 4000,
    },
    1000: {
      items: 3,
      nav: false,
      dots: false,
      loop: true,
      mouseDrag: false,
      autoplayHoverPause: true,
    },
  },
});

