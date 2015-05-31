$(document).ready(function () {

    'use strict';

    /************** Navigation Scripts **************/

    // Shrink nav on scroll

    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $('.header-inline').addClass('shrink-nav');
        } else {
            $('.header-inline').removeClass('shrink-nav');
        }
    });

    /************** Off Canvas **************/

    var $menuIcon = document.getElementsByClassName('menu-icon')[0],
        $offCanva = document.getElementsByClassName('off-canvas')[0],
        $siteWrap = document.getElementsByClassName('site-wrapper')[0],
        $navInfo = document.getElementsByClassName('h-info')[0],
        $title = document.getElementsByClassName('title')[0],
        $body = document.getElementsByTagName('body')[0];

    $menuIcon.addEventListener('click', function() {
        toggleClass($menuIcon, 'close');
        toggleClass($offCanva, 'toggled');
        toggleClass($siteWrap, 'open');
        toggleClass($navInfo, 'open');
        toggleClass($title, 'hide');
        toggleClass($body, 'noscroll');
    }, false);

    $menuIcon.addEventListener('mouseenter', function() {
        addClass($menuIcon, 'hover');
    });

    $menuIcon.addEventListener('mouseleave', function() {
        removeClass($menuIcon, 'hover');
    });

    function addClass(element, className) {
        element.className += " " + className;
    }

    function removeClass(element, className) {
        // Capture any surrounding space characters to prevent repeated
        // additions and removals from leaving lots of spaces.
        var classNameRegEx = new RegExp("\\s*" + className + "\\s*");
        element.className = element.className.replace(classNameRegEx, " ");
    }

    function toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        if (element.className.indexOf(className) === -1) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }

    /************** Slider Scripts **************/

    $('.hero-slider').flexslider({
        start: function () {
            $('.slides li').each(function () {
                $(this).find('.animated').addClass('animatedd fadeInUp');
            });
        },
        before: function () {
            $('.slides li').each(function () {
                $(this).find('.animated').removeClass('animatedd fadeInUp');
            });
        },
        after: function () {
            $('.slides li').each(function () {
                $(this).find('.animated').addClass('animated fadeInUp');
            });
        }
    });
   

    $('.slides li').each(function () {

        // Append background-image <img>'s as li item CSS background for better responsive performance

        if ($(this).children('.background-image').length) {
            var imgSrc = jQuery(this).children('.background-image').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.background-image').remove();
            $(this).css('background-position', '50% 0%');
        }

        // Center Slide Content vertically        
        $(this).children('.slide-content').css('padding-top', ($(this).height() / 2) - ($(this).children('.slide-content').height() / 2));
        

    });

    /************** Parallax Scripts **************/

    // $('.background-parallax').each(function () {
        
    //     var top = Math.round($(this).offset().top);
    //     var width = Math.round($(this).outerWidth());
    //     var height = Math.round($(this).outerHeight());
    //     var windowHeight = $(window).height();

    //     if (height > windowHeight || height === windowHeight) {
    //         $(this).attr('data-bottom-top', 'background-position: 50% -200px');
    //         $(this).attr('data-center', 'background-position: 50% 0px');
    //         $(this).attr('data-top-bottom', 'background-position: 50% 200px');

    //     } else {

    //         if (height > width) {
    //             $(this).attr('data-bottom-top', 'background-position: 50% -100px');
    //             $(this).attr('data-center', 'background-position: 50% 0px');
    //             if (top !== 0) {
    //                 $(this).attr('data-top-bottom', 'background-position: 50% 100px');
    //             } else {
    //                 $(this).attr('data-top', 'background-position: 50% 0px');
    //                 $(this).attr('data-top-bottom', 'background-position: 50% 100px');
    //             }
    //         } else {
    //             $(this).attr('data-bottom-top', 'background-position: 50% -200px');
    //             $(this).attr('data-center', 'background-position: 50% -100px');
    //             if (top !== 0) {
    //                 $(this).attr('data-top-bottom', 'background-position: 50% 0px');
    //             } else {
    //                 $(this).attr('data-top', 'background-position: 50% 0px');
    //                 $(this).attr('data-top-bottom', 'background-position: 50% 100px');
    //             }
    //         }

    //     }

    // });


    // if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    //     skrollr.init({
    //         forceHeight: false
    //     });
    // }

});