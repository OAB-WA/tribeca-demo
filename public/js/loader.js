$(document).ready(function () {

    // loader js 

    $('#loader').show();

    setTimeout(function () {
        $('#loader').fadeOut('slow', function () {
            $('#content').fadeIn('slow');
        });
    }, 500);

    // animation

    new WOW().init();

    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }
    )
    wow.init();

});