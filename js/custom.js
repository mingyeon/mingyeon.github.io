$(function () {
    $('#header .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });

    $('#bgVideo').YTPlayer({
        videoURL: "https://www.youtube.com/embed/krwiZ7q9xC8",
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    })

    const mainVisualSlide = new Swiper('.mainVisualSlide', {
        loop: true,
        speed: 1000,
        autoplay: {},

        navigation: {
            nextEl: '.mainVisual .arrows .next',
            prevEl: '.mainVisual .arrows .prev',
        }
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });
});