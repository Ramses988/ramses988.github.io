$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.menu').addClass('fixed');
        }
        else if ($(this).scrollTop() < 90) {
            $('.menu').removeClass('fixed');
        }
    });

    $(".hidden").click(function () {
        if ($(window).width() < 768) {
            var element = $(this).parent().find('.item-hidden');
            var currentElement = $(this).find('.mdi');
            element.slideToggle(500);
            if (currentElement.hasClass('mdi-chevron-right')) {
                currentElement.toggleClass('mdi-chevron-down');
                currentElement.removeClass('mdi-chevron-right');
            } else {
                currentElement.removeClass('mdi-chevron-down');
                currentElement.toggleClass('mdi-chevron-right');
            }
            $('.item-hidden').not($(element)).slideUp();
            $('.hidden').not($(this)).find('.mdi').removeClass('mdi-chevron-right');
            $('.hidden').not($(this)).find('.mdi').removeClass('mdi-chevron-down');
            $('.hidden').not($(this)).find('.mdi').toggleClass('mdi-chevron-right');
        }
    });

    $('.menu_burger').click(function () {
        $('nav').toggleClass('menu_active');
        $('body').toggleClass('lock');
    });

    $('.cl').click(function (e) {
        e.preventDefault();
        $(this).addClass('focus');
        $(this).find('.container_dropdown').stop().show('slow');
    })

    $('.menu_list li').hover(function () {
        $(this).addClass('focus');
        $(this).find('.container_dropdown').stop().show('fast');
    }, function () {
        $(this).find('.container_dropdown').stop().hide('fast');
        $(this).removeClass('focus');
    });

});