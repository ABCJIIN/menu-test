$('.list-01').click(function(){
    $('.list-02').slideUp();
    if ($(this).children('.menu2').is(':hidden')){
       $(this).children('.menu2').slideDown();
    } else{
       $(this).children('.menu2').slideUp();
    }
 });