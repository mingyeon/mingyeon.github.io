$(function () {
    $('.main_visual_slide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });

    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });
})