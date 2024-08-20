var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next", // Corrected property name
        prevEl: ".swiper-button-prev", // Corrected property name
    }
});

var swiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Fixed typo: slidePerView -> slidesPerView
        },
        768: {
            slidesPerView: 2, // Fixed typo: slidePerView -> slidesPerView
        },
        991: {
            slidesPerView: 3, // Fixed typo: slidePerView -> slidesPerView
        },
    }
});


