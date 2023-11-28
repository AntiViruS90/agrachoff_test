$(document).ready(function() {
    $('.menu_btn').click(function () {
        $('.dropdownBlock').fadeIn(1500)
    })
    $('.close_btn').click(function (){
        $('.dropdownBlock').fadeOut(1500)
    })
    $(window).scroll(function() {
        var scrollX = $(window).scrollX();
        $('.corner_img').css('transform', 'translateX(' + scrollX + 'px)');
    });
    
    $('.footer_btn_email').click(function () {
        $('.popup').fadeIn(500);
    })
    $('.footer_input_submit').click(function () {
        $('.popup').fadeOut(100);
    })



















});


