import $ from 'jquery';
import { Swiper } from 'swiper';

let windowWidth;

windowWidth = $(window).width();

adaptive(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();

    adaptive(windowWidth);
});

function adaptive(windowWidth) {
    if (windowWidth < 699) {
        $('.speakers__items').addClass('swiper-container');
        $('.speakers__items-wrapper').addClass('swiper-wrapper');
        $('.speakers__item').addClass('swiper-slide');

        const speakersSlider = new Swiper('.speakers__items', {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                991: {
                    spaceBetween: 20,
                    speed: 800,
                }
            },
            autoHeight: true,
        });
        
    } else {
        $('.speakers__items').removeClass('swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-autoheight');
        $('.speakers__items-wrapper').removeClass('swiper-wrapper').removeAttr('style');
        $('.speakers__item').removeClass('swiper-slide swiper-slide-active swiper-slide-next swiper-slide-prev swiper-slide-active').removeAttr('style');
    }
}