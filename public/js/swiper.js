//owl-carousel

$('.owl-carousel-1').owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
});

$('.owl-carousel-2').owlCarousel({
    loop: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

$('.owl-carousel-3').owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        992: {
            items: 3
        },
        1025: {
            items: 3
        }
    }
});
