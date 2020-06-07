$(document).ready(function(){
    $('.promo__carousel').slick({
        dots: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/first_slider/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/first_slider/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.solution__carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/solution/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/solution/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});