// JavaScript Document
var typed = new Typed('.element', {
strings: ["Graphic Designer.", "Fashion Sylist.","Freelance Model."],
typeSpeed:50,
backSpeed:50,
loop:true,
});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();
AOS.init();