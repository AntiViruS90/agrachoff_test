
const element = document.querySelector('.element');
const parent = document.querySelector('.parent');

parent.addEventListener('wheel', function(event) {
if (event.deltaY < 0) {
    element.classList.remove('active');
} else if (event.deltaY > 0) {
    element.classList.add('active');
}
});
$('.menu_btn').click(function () {
    $('.dropdownBlock').fadeIn(500)
})
$('.close_btn').click(function (){
    $('.dropdownBlock').fadeOut(500)
})
$('.footer_btn_email').click(function () {
    $('.popup').fadeIn(500);
});

$('.footer_input_submit').click(function () { 
    if ($('#email').val() !== '') {         
        $('.popup').fadeOut();
        alert('Сообщение успешно отправлено!');
    } else { 
        alert('Данные для обратной связи отсутствуют!') }
        $('.popup').fadeOut(2000);
});

$('.close_btn_sidebar').fadeOut()
$('.dropdownBlock').fadeOut()




