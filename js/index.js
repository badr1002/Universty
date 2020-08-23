$(document).ready(function() {
    /*  var winh = $(window).innerHeight(),
        header = $('.header-bar').innerHeight(),
        nav = $('.navbar').innerHeight();
    $('.startadble ').innerHeight(winh - (header + nav));
*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 700) {
            $('.up').fadeIn(500);
        } else {
            $('.up').fadeOut(500);
        }
    });
    $('.up').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    $('.navbar .nav-btn').click(function() { $(this).blur() });
    $('body').css('overflow', 'auto');
    $('.screen-loding').fadeOut(1000, function() { $(this).remove() });
});