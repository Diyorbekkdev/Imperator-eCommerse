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


// $(document).ready(function () {
//   var tabWrapper = $("#tab-block"),
//     tabMnu = tabWrapper.find(".tab-mnu  li"),
//     tabContent = tabWrapper.find(".tab-cont > .tab-pane");

//   tabContent.not(":first-child").hide();

//   tabMnu.each(function (i) {
//     $(this).attr("data-tab", "tab" + i);
//   });
//   tabContent.each(function (i) {
//     $(this).attr("data-tab", "tab" + i);
//   });

//   tabMnu.click(function () {
//     var tabData = $(this).data("tab");
//     tabWrapper.find(tabContent).hide();
//     tabWrapper
//       .find(tabContent)
//       .filter("[data-tab=" + tabData + "]")
//       .show();
//   });

//   $(".tab-mnu > li").click(function () {
//     var before = $(".tab-mnu li.active");
//     before.removeClass("active");
//     $(this).addClass("active");
//   });
// });

// $(document).ready(function () {
//   $(".element-card").on("click", function () {
//     if ($(this).hasClass("open")) {
//       $(this).removeClass("open");
//     } else {
//       $(".element-card").removeClass("open");
//       $(this).addClass("open");
//     }
//   });
// });