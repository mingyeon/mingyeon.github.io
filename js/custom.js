$(function () {
    $(window).on('scroll', function (e) {
        e.preventDefault();
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


    $('#header .lang>a').on('click', function (e) {
        e.preventDefault();

        $('#header .lnk').toggle();
    })

    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
    });

    $('#main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('#main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });
})