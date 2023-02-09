import { Swiper, Lazy, Navigation } from 'swiper';

Swiper.use([Lazy, Navigation,]);

const specialSlider = new Swiper('.special__items', {
    slidesPerView: 1,
    spaceBetween: 20,
    resistance: true,
    resistanceRatio: 0,
    centeredSlides: true,
    watchOverflow: true,
    loop: true,
    breakpoints: {
        991: {
            speed: 800,
            spaceBetween: 50,
        }
    },
    autoHeight: true,
    grabCursor: true,
    navigation: {
        nextEl: ".special__wrapper .slider-arrow-next",
        prevEl: ".special__wrapper .slider-arrow-prev",
    },
});