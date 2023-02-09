import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
global.$ = global.jQuery = $;
import LazyLoad from "vanilla-lazyload";
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox";
window.fancybox = $.fancybox;

// eslint-disable-next-line no-unused-vars
const lazyLoadInstance = new LazyLoad({});

let scrollTop,
    windowWidth, 
    sections = $('section'),
    sectionScroll;

    sections.each(function(i){
        if (i == 1) {
            sectionScroll = $(this);
        }
    });

windowWidth = $(window).width();

$(window).on('resize', function() {
    windowWidth = $(window).width();
});

$("a.scroll").on("click", function () {
    let link = $(this);
    if ($('.header').hasClass('open')) {
        $('.header__burger').toggleClass('open');
        $('.header').toggleClass('open');
    }
    $("html, body").animate({
        scrollTop: scrollTo = $(link.attr("href")).offset().top + "px"
    }, {
        duration: 800
    });
    return false;
});

$('.header__burger').on('click', function() {
    if (windowWidth < 600) {
        $(this).toggleClass('open');
        $('.header').toggleClass('open');

        if ($('.header').hasClass('open')) {
            $('body, html').addClass('overflow-y-hidden');
        } else {
            $('body, html').removeClass('overflow-y-hidden');
        }
    }
});

$(document).mouseup( function(e){ 
    if (windowWidth > 600) {
        let div = $(".header__mobile"),
        burger = $('.header__burger');

        if (!div.is(e.target) 
            && div.has(e.target).length === 0 ) { 
            $('.header').removeClass('open');
            $('.header__burger').removeClass('open');

            if ($('.header').hasClass('open')) {
                $('body, html').addClass('overflow-y-hidden');
            } else {
                $('body, html').removeClass('overflow-y-hidden');
            }
        }

        if (burger.is(e.target)) { 
            $('.header').toggleClass('open');
            $('.header__burger').toggleClass('open');

            if ($('.header').hasClass('open')) {
                $('body, html').addClass('overflow-y-hidden');
            } else {
                $('body, html').removeClass('overflow-y-hidden');
            }
        }
    }
});

scrollTop = $(window).scrollTop();

if (scrollTop < sectionScroll.offset().top) {
    $('.arrow-up').addClass('hidden');
} else {
    $('.arrow-up').removeClass('hidden');
}

$('.arrow-up').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(window).on('scroll', function() {
    scrollTop = $(window).scrollTop();
    
    if (scrollTop < sectionScroll.offset().top) {
        $('.arrow-up').addClass('hidden');
    } else {
        $('.arrow-up').removeClass('hidden');
    }
});