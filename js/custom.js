$(function () {
    $('#header .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    const mainVisualSlide = new Swiper('.mainVisualSlide', {
        loop: true,
        autoplay: true,
        speed: 1000,

        navigation: {
            nextEl: '.mainVisual .arrows .next',
            prevEl: '.mainVisual .arrows .prev'
        }
    })

    $('.mainNews .tab_line button').on('click', function () {
        let idx = $(this).index();
        $('.mainNews .slide').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    })

    const slide01 = new Swiper('.slide', {
        loop: true,
        slidesPerView: 4,

        navigation: {
            nextEl: '.mainNews .arrows01 .next',
            prevEl: '.mainNews .arrows01 .prev'
        }
    });



    const right_con = new Swiper('.right_con', {});

    $('.mainNetwork .inner .right .right_tab button').on('click', function () {
        let idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        right_con.slideToLoop(idx)
    })

    $('.f_lnk').on('change', function () {
        let lnk = $(this).val();
        console.log(lnk);

        if (lnk) {
            window.open(lnk)
        }
    })

});