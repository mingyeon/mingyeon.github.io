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
});