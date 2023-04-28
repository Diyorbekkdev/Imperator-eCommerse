$('.carousel-1').owlCarousel({
    loop:true,
    // margin:,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000, // set time interval for auto play
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.carousel-2').owlCarousel({
    loop:true,
    margin:40,
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

$('.carousel-4').owlCarousel({
    loop: true,
    margin: 40,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
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
            items:4
        }
    }
})


let stars = document.querySelectorAll('.star');

stars.forEach((star) => {
    star.addEventListener('click', (e) => {
        let clickedStar = e.target;

        if (clickedStar.classList.contains('filled')) {
            // If the clicked star is already filled, remove the filled class
            clickedStar.classList.remove('filled');
            let previousStars = clickedStar.previousElementSibling;

            while (previousStars) {
                previousStars.classList.remove('filled');
                previousStars = previousStars.previousElementSibling;
            }
        } else {
            // If the clicked star is not filled, fill it and all previous stars
            clickedStar.classList.add('filled');
            let previousStars = clickedStar.previousElementSibling;

            while (previousStars) {
                previousStars.classList.add('filled');
                previousStars = previousStars.previousElementSibling;
            }
        }
    });
});





