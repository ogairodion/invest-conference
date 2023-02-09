import $ from 'jquery';
import { Swiper, Navigation } from 'swiper';

Swiper.use(Navigation);

const pricesSlider = new Swiper('.prices__items', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        991: {
            slidesPerView: 2,
        }
    },
    observer: true,
    observeParents: true,
    navigation: {
        prevEl: '.prices .slider-arrow-prev',
        nextEl: '.prices .slider-arrow-next',
    }
});

$('.prices__wrapper .slider-arrows-prev').on('click', function() {
    pricesSlider.slidePrev();
});


$('.prices__wrapper .slider-arrows-next').on('click', function() {
    pricesSlider.slideNext();
});